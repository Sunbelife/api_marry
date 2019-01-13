<?php
/**
 * Created by PhpStorm.
 * User: sunbelife
 * Date: 2018/12/5
 * Time: 10:52 PM
 */

namespace app\web\controller;
use app\web\model\MarryMan;
use app\web\model\MarryModel;
use app\wx\model\AttendInfo;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use app\wx\model\UserCard;
use function Sodium\add;
use think\Controller;
use app\web\model\Barrage;
use app\web\model\Music;
use app\web\model\Admin;
use think\Exception;

class Manage extends Controller
{
    public function index()
    {
        return "管理界面接口";
    }

    public function return_json($code, $msg, $data)
    {
        return json(array('code' => $code, 'msg' => $msg, 'data' => $data));
    }

    # 验证用户
    public function verify_user($user_name, $pass_word)
    {
        $result = Admin::getByUser_name($user_name);
        if ($result -> pass_word == $pass_word)
        {
            return $this::return_json(200, "验证成功", "null");
        } else
        {
            return $this::return_json(250, "验证失败", "null");
        }
    }

    # Music 音乐部分
    public function get_music_list($music_type = 0, $music_name = 0, $music_singer = 0)
    {
        # 啥条件都没有的时候
        if ($music_type == '0' and $music_name == '0' and $music_singer = 0)
        {
            # 输出所有
            $data = Music::all();
        } else
        {
            $search_condition = array(); // 初始化搜索条件

            # 有啥信息就填啥信息
            if ($music_name != '0')
            {
                array_push($search_condition,['music_name', 'like', '%'.$music_name.'%']);
            }
            if ($music_type != '0')
            {
                array_push($search_condition,['music_type', '=', $music_type]);
            }
            if ($music_singer != '0')
            {
                array_push($search_condition,['$music_singer', '=' ,$music_singer]);
            }
        }

        # 执行查询
        $data = Music::where($search_condition)->select();

        if (empty($data) != true)
        {
            return $this::return_json(200, "获取成功", $data);
        } else
        {
            return $this::return_json(250, "获取失败，空值", null);
        }
    }

    # 音乐上传
    public function upload_music($music_name = 0, $music_type = 0, $music_singer = 0)
    {
        $upload_dir = '../public/uploads/music';
        // 获取表单上传文件
        $file = request()->file('music');
        // 移动到目录下
        $info = $file->move($upload_dir);
        if (!empty($info)) # 有东西，不空
        {
            $upload_time = Date("Y-m-d H:i:s",time());
            $file_url = "https://".$_SERVER['HTTP_HOST'].str_replace("../public", '', $upload_dir).'/'.$info->getSaveName();
            // 成功上传后保存到数据库
            $new_music = new Music;
            $new_music->save([
                'music_name' => $music_name,
                'music_singer' => $music_singer,
                'music_type' => $music_type,
                'music_upload_time' => $upload_time,
                'music_url' => $file_url
            ]);
            return $this::return_json(200, "上传成功", $info->getSaveName());
        } else
        {
            // 上传失败获取错误信息
            return $this::return_json(250, "上传失败".$file->getError(), null);
        }
    }

    public function del_music($music_id)
    {
        $data = Music::getByMusic_id($music_id);
        $result = $data->delete();
        if ($result == true) {
            return $this::return_json(200, "删除成功", "null");
        }
        return $this::return_json(250, "删除失败", "null");
    }

    # 赴宴信息管理部分
    public function get_attend_info_marry_man()
    {
        $data = MarryMan::all();
        return $this::return_json(200, "获取成功", $data);
    }

    public function get_attend_info_attend_man($card_id)
    {
        $data = AttendInfo::getByCardId($card_id);
        if (empty($data) == true)
        {
            return $this->return_json(250, "无数据", null);
        } else
        {
            return $this::return_json(200, "获取成功", $data);
        }
    }

    # 模板管理部分
    public function get_model_list($model_type = 0)
    {
        if ($model_type == 0) {
            $data = MarryModel::all();
        } else {
            $data = MarryModel::where('model_type', $model_type)->select();
        }
        return $this::return_json(200, "获取成功", $data);
    }

    public function del_model($model_id)
    {
        $data = MarryModel::getByModel_id($model_id);
        $result = $data->delete();
        if (empty($result) == true) {
            return $this::return_json(200, "删除成功", $data);
        }
        return $this::return_json(250, "删除失败", $data);
    }

    public function export_excel()
    {
        $marry_man_data = MarryMan::all();

        foreach ($marry_man_data as $curr_man)
        {
            $curr_card_id = $curr_man -> card_id;
            if (empty($curr_card_id) == false)
            {
                print $curr_man->boy_name."<br>";
                print $curr_man->girl_name."<br>";
                $curr_attend_info = AttendInfo::getByCardId($curr_card_id);
                print $curr_attend_info->user_name."<br>";
                print $curr_attend_info->phone_num."<br>";
                print $curr_attend_info->attend_num."<br>";
                print $curr_attend_info->transit_type."<br>";
            }
        }

//        $upload_dir = '../public/uploads/excels/';
//        $spreadsheet = new Spreadsheet();
//        $sheet = $spreadsheet->getActiveSheet();
//        $sheet->setCellValue('A1', 'Hello World !');
//
//        $writer = new Xlsx($spreadsheet);
//        $writer->save($upload_dir.md5(Date("Y-m-d H:i:s",time())).'.xlsx');
    }
}