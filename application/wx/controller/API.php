<?php
/**
 * Created by PhpStorm.
 * User: sunbelife
 * Date: 2018/12/8
 * Time: 1:24 PM
 */

namespace app\wx\controller;
use app\wx\model\Settings;
use app\wx\model\UserCard;
use think\Controller;
use app\wx\model\Barrage;
use app\wx\model\User;
use app\wx\model\Photo;
use app\wx\model\AttendInfo;
use app\wx\controller\CryptWxData\WXBizDataCrypt;

Class Api extends Controller
{
    static $app_id = "wxca7cf8f75db95d01";
    static $secret = "8a6f49abe8b74560f87b9ecf8002c983";

    public function index()
    {
        return "Hello World!";
    }

    public function return_json($code, $msg, $data)
    {
        return json(array('code' => $code, 'msg' => $msg, 'data' => $data));
    }

    public function return_value($data, $key)
    {
        return isset($data->$key)? $data->$key : null;
    }

    public function return_card_id($id)
    {
        return md5(Date("Y-m-d").$id);
    }

    # 验证用户部分
    public function verify_user($code)
    {
        $login_time = Date("Y-m-d H:i:s",time());
        $api_url = "https://api.weixin.qq.com/sns/jscode2session?appid=".$this::$app_id."&secret=".$this::$secret."&js_code=".$code."&grant_type=authorization_code";
        $data =  json_decode(file_get_contents($api_url));
        $errcode = $this::return_value($data, "errcode");
        $errmsg = $this::return_value($data, "errmsg");

        if ($errcode == 0) {
            # 准备数据
            $session_key = $this::return_value($data, "session_key");
            $open_id = $this::return_value($data, "openid");
            $data = array('open_id' => $open_id);

            # 存数据库
            $User = new User;
            $User->open_id = $open_id;
            $User->session_key = $session_key;
            $User->time = $login_time;
            $User->save();

            return $this::return_json(200, "获取成功", $data);
        }
        return $this::return_json($errcode, $errmsg, null);
    }

    public function get_union_id($open_id, $iv, $encryptedData)
    {
        $app_id = $this::$app_id;
        $sessionKey = User::getByOpenId($open_id)->session_key;
        $pc = new WXBizDataCrypt($app_id, $sessionKey);
        $errCode = $pc->decryptData($encryptedData, $iv, $data);
        $data = json_decode($data);
        $union_id = $this::return_value($data, "unionId");
        $open_id = $this::return_value($data, "openId");
        if ($errCode == 0) {
            $data = User::getByOpenId($open_id);
            $data->union_id = $union_id;
            $data->save();
            return $this::return_json(200, "获取成功", null);
        }
        return $this::return_json($errCode, "错误码请参考文档", null);
    }

    # 请帖部分
    # 保存请帖
    public function save_user_card($card_id = 0, $changed_log, $cover_pic_url, $is_new)
    {
        $save_time = Date("Y-m-d H:i:s",time());
        if ($card_id == 0)
        {
            $UserCard = new UserCard;
            $UserCard->cover_pic_url = $cover_pic_url;
            $UserCard->changed_log = $changed_log;
            $UserCard->time = $save_time;
            $UserCard->save();
            # 生成 card_id
            $UserCard->card_id = $this::return_card_id($UserCard->id);
            $result = $UserCard->save();
            if ($result == True)
            {
                return $this::return_json(200, "创建成功", null);
            } else
            {
                return $this::return_json(250, "创建失败", null);
            }
        } else if ($card_id != 0)
        {
            $curr_card = UserCard::getByCardId($card_id);
            $curr_card->changed_log = $changed_log;
            $curr_card->time = $save_time;
            $result = $curr_card->save();
            if ($result == True)
            {
                return $this::return_json(200, "修改成功", null);
            } else
            {
                return $this::return_json(250, "修改失败", null);
            }
        }
    }

    # 照片裁切上传
    public function change_pic($pic_url, $position)
    {
        # 未完成
        $pic_url = "xxx";
        return $this::return_json(200, "上传成功, $pic_url");
    }

    # Barrage 弹幕部分
    # 发送弹幕
    public function send_barrage_msg($user_name, $message, $card_id)
    {
        $Barriage = new Barrage;
        $send_time = Date("Y-m-d H:i:s",time());
        $Barriage->card_id = $card_id;
        $Barriage->username = $user_name;
        $Barriage->message = $message;
        $Barriage->time = $send_time;
        $result = $Barriage->save();
        if ($result == 1)
        {
            return $this::return_json(200, "发送成功", null);
        }
        return $this::return_json(250, "发送失败", null);
    }

    # 获取弹幕
    public function get_barrage_msg($card_id)
    {
        $data = Barrage::getBybarr_id($card_id);
        return $this::return_json(200, "获取成功", $data);
    }

    # 保存设置
    public function save_settings($card_id, $is_barrage_on, $music_id)
    {
        $settings = new Settings;
        $settings->card_id = $card_id;
        $settings->is_barrage_on = $is_barrage_on;
        $settings->music_id = $music_id;
        $result = $settings->save();
        if ($result)
        {
            return $this::return_json(200, "保存成功", null);
        }
        return $this::return_json(250, "保存失败", null);
    }
}