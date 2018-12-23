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
use app\wx\model\UserCard;
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
    public function get_music_list($music_type = 0, $music_name = 0)
    {
        # 啥条件都没有的时候
        if ($music_type == '0' and $music_name == '0')
        {
            # 输出所有
            $data = Music::all();
        } else if ($music_type == '0' && $music_name != '0') # 类别不限，按名称搜
        {
            $data = Music::where('music_name', 'like', '%'.$music_name.'%')->select();
        } else if ($music_type != '0' && $music_name == '0') # 名称不限，按类别搜
        {
            $data = Music::where('music_type', $music_type)->select();
        } else
        {
            $data = Music::where('music_type', $music_type)->where('music_name', $music_name)->select();
        }
        if (empty($data))
        {
            return $this::return_json(200, "获取成功", $data);
        } else
        {
            return $this::return_json(250, "获取失败", null);
        }
    }

    # 音乐上传
    public function upload_music($music_name = 0, $music_type = 0)
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
        $user = UserCard::getByCardId($card_id);
        if ($user == null)
        {
            return $this->return_json(250, "获取失败", null);
        }
        try
        {
            $open_id = $user->open_id;
            $data = AttendInfo::where('open_id', $open_id)->select();
        } catch (Exception $exception)
        {
            return $this->return_json(250, "找不到该卡片", null);
        }
        return $this::return_json(200, "获取成功", $data);
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
        if ($result == true) {
            return $this::return_json(200, "获取成功", $data);
        }
        return $this::return_json(250, "获取成功", $data);
    }
}