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
use think\Controller;
use app\web\model\Barrage;
use app\web\model\Music;
use app\web\model\User;

class Manage extends Controller
{
    public function index()
    {
        return "管理界面接口";
    }

    # 验证用户
    public function verify_user($user_name, $pass_word)
    {
        $result = User::getByUser_name($user_name);
        if ($result -> pass_word == $pass_word)
        {
            return json(array('status_code' => 200));
        } else
        {
            return json(array('status_code' => 250));
        }
    }

    # Music 音乐部分
    public function get_music_list($music_type = 0)
    {
        if ($music_type == 0) {
            $data = Music::all();
        } else {
            $data = Music::where('music_type', $music_type)->select();
        }
        return $data;
    }

    public function upload_music()
    {
        return "暂未写完";
    }

    public function del_music($music_id)
    {
        $data = Music::getByMusic_id($music_id);
        $result = $data->delete();
        if ($result == true) {
            return json(array('status_code' => 200));
        }
        return json(array('status_code' => 250));
    }

    # 赴宴信息管理部分
    public function get_attend_info_marry_man()
    {
        $data = MarryMan::all();
        return $data;
    }

    public function get_attend_info_attend_man($marry_id)
    {
        $data = MarryMan::getByMarry_id($marry_id);
        return $data;
    }

    # 模板管理部分

    public function get_model_list($model_type = 0)
    {
        if ($model_type == 0) {
            $data = MarryModel::all();
        } else {
            $data = MarryModel::where('model_type', $model_type)->select();
        }
        return $data;
    }

    public function del_model($model_id)
    {
        $data = MarryModel::getByModel_id($model_id);
        $result = $data->delete();
        if ($result == true) {
            return json(array('status_code' => 200));
        }
        return json(array('status_code' => 250));
    }
}