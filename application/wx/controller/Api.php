<?php
/**
 * Created by PhpStorm.
 * User: sunbelife
 * Date: 2018/12/8
 * Time: 1:24 PM
 */

namespace app\wx\controller;

use think\Image;
use think\Controller;
use app\wx\model\UserCard;
use app\wx\model\Barrage;
use app\wx\model\User;
use app\wx\model\Photo;
use app\web\model\MarryMan;
use app\wx\model\AttendInfo;
use app\wx\controller\CryptWxData\WxBizDataCrypt;

Class Api extends Controller
{
    static $app_id = "wxca7cf8f75db95d01";
    static $secret = "8a6f49abe8b74560f87b9ecf8002c983";

    public function index()
    {
        return $this->fetch();
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
        return substr(md5(Date("Y-m-d").$id), 8, 16);
    }

    public function get_shared_user_card($open_id) {
        $user_card = UserCard::where('open_id', $open_id)->select();
        if ($user_card)
        {
            return $this->return_json(200, "获取成功", $user_card);
        } else
        {
            return $this->return_json(200, "获取失败", null);
        }
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
            $old_user = User::getByOpenId($open_id);

            if ($old_user)
            {
                $old_user -> session_key = $session_key;
                $old_user->save();
            } else
            {
                # 存数据库
                $User = new User;
                $User->open_id = $open_id;
                $User->session_key = $session_key;
                $User->time = $login_time;
                $User->save();
            }

            return $this->return_json(200, "获取成功", $data);
        }
        return $this->return_json($errcode, $errmsg, null);
    }

    public function get_union_id($open_id, $iv, $encryptedData)
    {
        $app_id = $this::$app_id;
        $iv = urldecode($iv);
        $sessionKey = User::getByOpenId($open_id)->session_key;
        $pc = new WxBizDataCrypt($app_id, $sessionKey);
        $errCode = $pc->decryptData($encryptedData, $iv, $data);
        $data = json_decode($data);
        $union_id = $this::return_value($data, "unionId");
        $open_id = $this::return_value($data, "openId");
        if ($errCode == 0) {
            $data = User::getByOpenId($open_id);
            $data->union_id = $union_id;
            $data->save();
            return $this->return_json(200, "获取成功", null);
        }
        return $this->return_json($errCode, "错误码请参考文档", null);
    }


    # 请帖部分
    # 保存请帖 - 此处生成 card_id
    public function save_user_card($card_id = 0, $marry_info, $open_id, $changed_log, $cover_pic_url)
    {
        $save_time = Date("Y-m-d H:i:s",time());
        if ($card_id == '0')
        {
            $UserCard = new UserCard;
            $UserCard->cover_pic_url = $cover_pic_url;
            $UserCard->changed_log = $changed_log;
            $UserCard->open_id = $open_id;
            $UserCard->time = $save_time;
            $UserCard->save();
            # 生成 card_id
            $UserCard->card_id = $this::return_card_id($UserCard->id);
            $result = $UserCard->save();
            if ($result == True)
            {
                $this->send_user_card_info($UserCard->card_id, $marry_info['nameGentleman'], $marry_info['nameLady'], $marry_info['date']." ".$marry_info['time'],$marry_info['address']);
                return $this->return_json(200, "创建成功", array('card_id'=> $UserCard->card_id));
            } else
            {
                return $this->return_json(250, "创建失败", null);
            }
        } else
        {
            $curr_card = UserCard::getByCardId($card_id);
            $curr_card->changed_log = $changed_log;
            $curr_card->time = $save_time;
            $result = $curr_card->save();
            if ($result == True)
            {
                $this->send_user_card_info($card_id, $marry_info['nameGentleman'], $marry_info['nameLady'], $marry_info['date']." ".$marry_info['time'],$marry_info['address']);
                return $this->return_json(200, "修改成功", null);
            } else
            {
                return $this->return_json(250, "修改失败", null);
            }
        }
    }

    public function get_user_card($card_id) {
        $data = UserCard::getByCardId($card_id);
        if ($data)
        {
            return $this->return_json(200, "获取成功", $data);
        } else
        {
            return $this->return_json(250, "获取失败", null);
        }
    }

    public function del_user_card($card_id)
    {
        $data = UserCard::where('card_id', $card_id)->select();
        foreach ($data as $key) {
            $key->delete();
        }
        return $this->return_json(200, "删除成功", null);
    }

    # 照片裁切上传
    public function upload_pic($p_x = 0, $p_y = 0, $p_width, $p_height, $p_scale, $p_show_img_scale, $p_init_scale)
    {
        $upload_dir = '../public/uploads/photo/';

        $p_x = -$p_x  * (1 / $p_scale) * (1 / $p_init_scale);
        $p_y = -$p_y  * (1 / $p_scale) * (1 / $p_init_scale);
        $p_width = $p_width * (1 / $p_scale) * (1 / $p_init_scale);
        $p_height = $p_height * (1 / $p_scale) * (1 / $p_init_scale);

        // 获取表单上传文件
        $file = request()->file('image');
        $file_info = $file->getInfo();

        $my_image = Image::open($file);
        $result = $my_image->crop($p_width, $p_height, $p_x, $p_y)->save($upload_dir.$file_info['name']);

        if ($result)
        {
            $upload_time = Date("Y-m-d H:i:s",time());
            $file_url = "https://".$_SERVER['HTTP_HOST'].str_replace("../public", '', $upload_dir).$file_info['name'];
            // 成功上传后保存到数据库
            $new_photo = new Photo;
            $new_photo->save([
                'photo_url' => $file_url,
                'upload_time' => $upload_time
            ]);
            return $this->return_json(200, "上传成功", $file_url);
        } else
        {
            // 上传失败获取错误信息
            return $this->return_json(250, "上传失败", null);
        }
    }

    # Barrage 弹幕部分
    # 发送弹幕
    public function send_barrage_msg($user_name, $card_id, $msg_id = null, $message)
    {
        $user_card = UserCard::getByCardId($card_id);

        $Barriage = new Barrage;
        $send_time = Date("Y-m-d H:i:s",time());
        $msg_id = md5(Date("Y-m-d H:i:s"));
        $Barriage->open_id = $user_card->open_id; // open_id 与发送者相同
        $Barriage->card_id = $card_id;
        $Barriage->msg_id = $msg_id;
        $Barriage->user_name = $user_name;
        $Barriage->message = $message;
        $Barriage->time = $send_time;
        $Barriage->is_read = $msg_id != null ? 1 : 0; // msg 不空为回复消息，回复消息默认已读
        $Barriage->is_reply = 0;
        $result = $Barriage->save();
        if ($result == 1)
        {
            return $this->return_json(200, "发送成功", null);
        }
        return $this->return_json(250, "发送失败", null);
    }

    # 获取用户所有全部弹幕
    public function get_barrage_msg($open_id)
    {
        $data = Barrage::where('open_id', $open_id)->order('msg_id', 'desc')->select();
        return $this->return_json(200, "获取成功", $data);
    }

    # 获取 card 弹幕
    public function get_card_barrage_msg($card_id)
    {
        $data = Barrage::where('card_id', $card_id)->order('msg_id', 'desc')->select();
        return $this->return_json(200, "获取成功", $data);
    }

    public function del_barrage_msg($msg_id, $is_reply)
    {
        $data = Barrage::where('msg_id', $msg_id)->select();
        if ($data != true)
        {
            return $this->return_json(250, "删除失败，无此条消息", null);
        }
        if ($is_reply == 1)
        {
            $data[1]->delete();
        }
        else {
            foreach ($data as $key)
            {
                # 否则全删除
                $key->delete();
            }
        }
        return $this->return_json(200, "删除成功", null);
    }

    # 获取未读弹幕数量
    public function get_barrage_msg_is_read($open_id)
    {
        $data = Barrage::where('is_read', 0)->where('open_id', $open_id)->count();
        return $this->return_json(200, "获取成功", array('is_read_sum'=>$data));
    }

    # 弹幕设置已读
    public function set_barrage_msg_is_read($open_id)
    {
        $data = Barrage::where('open_id', $open_id)->select();
        foreach ($data as $item)
        {
            $item->is_read = 1;
            $item->save();
        }
        if (empty($data) != true)
        {
            return $this->return_json(200, "设置成功", null);
        } else
        {
            return $this->return_json(250, "设置失败", null);
        }
    }

    # 弹幕回复
    public function reply_barrage_msg($msg_id, $message)
    {
        $reply_time = Date("Y-m-d H:i:s",time());
        $old_msg = Barrage::getByMsgId($msg_id);
        $barrage = new Barrage;
        $result = $barrage -> save([
            'open_id'=>$old_msg->open_id,
            'card_id'=>$old_msg->card_id,
            'user_name'=>"回复 @".$old_msg->user_name.":",
            'message'=>$message,
            'msg_id'=>$msg_id,
            'is_read'=>1,
            'is_reply'=>1,
            'time'=>$reply_time
        ]);
        if ($result == null)
        {
            return $this->return_json(250, "回复失败", null);
        } else
        {
            return $this->return_json(200, "回复成功", null);
        }
    }

    # 保存设置 - 暂时弃用
//    public function save_settings($card_id, $is_barrage_on, $music_id)
//    {
//        $settings = new Settings;
//        $settings->card_id = $card_id;
//        $settings->is_barrage_on = $is_barrage_on;
//        $settings->music_id = $music_id;
//        $result = $settings->save();
//        if ($result)
//        {
//            return $this->return_json(200, "保存成功", null);
//        }
//        return $this->return_json(250, "保存失败", null);
//    }

    # 赴宴信息部分
    # 赴宴填写
    public function send_attend_info($card_id, $open_id, $user_name, $transit_type, $phone_num, $attend_num)
    {
        $attend_info = new AttendInfo;
        $attend_time = Date("Y-m-d H:i:s",time());
        $result = $attend_info -> save([
            'card_id' => $card_id,
            'open_id' => $open_id,
            'user_name' => $user_name,
            'transit_type' => $transit_type,
            'phone_num' => $phone_num,
            'attend_num' => $attend_num,
            'attend_time' => $attend_time
        ]);
        if ($result)
        {
            return $this->return_json(200, "发送成功", null);
        }
        else
        {
            return $this->return_json(250, "发送失败", null);
        }
    }

    # 赴宴消息获取
    public function get_attend_info($open_id)
    {
        $data = AttendInfo::getByOpenId($open_id);
        if ($data == null)
        {
            return $this->return_json(250, "获取失败", null);
        } else
        {
            return $this->return_json(200, "获取成功", array($data));
        }
    }

    # 保存用户结婚信息
    public function send_user_card_info($card_id, $boy_name, $girl_name, $marr_time, $marr_addr)
    {
        $create_time = Date("Y-m-d H:i:s",time());
        $marry_man = new MarryMan([
            'card_id'=>$card_id,
            'boy_name'=>$boy_name,
            'girl_name'=>$girl_name,
            'marr_time'=>$marr_time,
            'marr_addr'=>$marr_addr,
            'create_time'=>$create_time
        ]);
        $result = $marry_man->save();
        if ($result == null)
        {
            return $this->return_json(250, "保存失败", null);
        } else
        {
            return $this->return_json(200, "保存成功", null);
        }
    }

    # 生成二维码
    public function gen_user_card_qr($card_id = 0, $scene = 0, $page = 0)
    {
        $marry_info = MarryMan::getByCardId($card_id);
        $boy_name = $marry_info -> boy_name;
        $girl_name = $marry_info -> girl_name;
        $marr_time = strtotime($marry_info -> marr_time);
        $marr_addr = $marry_info -> marr_addr;

        $access_token_url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$this::$app_id."&secret=".$this::$secret;
        $qr_model_pic = "static/pic/gen_qr_model.jpg";
        $data =  json_decode(file_get_contents($access_token_url));
        $errcode = $this::return_value($data, "errcode");
        $errmsg = $this::return_value($data, "errmsg");
        if ($errcode == 0)
        {
            $access_token = $data->access_token;
            $qr_api_url = "https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=".$access_token;
            $parms = [
                'scene' => $scene,
                'page' => $page,
                'width' => 350
            ];
            $context = stream_context_create(array('http' => array(
                'method' => 'POST',
                'header' => 'Content-type:application/json',
                'content' => json_encode($parms),
                'timeout' => 20
            )));
            $png = file_get_contents($qr_api_url, false, $context);
            $file_name = "uploads/qr_codes/".md5(Date("Y-m-d H:i:s",time())).".jpg";
            $file = fopen($file_name, "w");
            fwrite($file, $png);
            fclose($file);
            $image = Image::open($qr_model_pic);
            $image -> water($file_name, array(370, 1350)) -> save($file_name);
            $image = Image::open($file_name);
            $image -> text($boy_name." & ".$girl_name, 'uploads/fonts/PingFang.ttc', 60, '#000000', \think\Image::WATER_CENTER, array(0, -100));
            $image -> text("婚礼请帖", 'uploads/fonts/PingFang.ttc', 40, '#000000', \think\Image::WATER_CENTER, array(0, 0));
            $image -> text("日期: ". date("Y 年 m 月 d 日", $marr_time) . "\n" . "时间: ". date("h:i", $marr_time) . "\n" . "地点: ".$marr_addr, 'uploads/fonts/PingFang.ttc', 20, '#000000', \think\Image::WATER_CENTER, array(0, 120));
            $image -> save($file_name);
            $file_url = "https://xcx.lyy99.com/".$file_name;
            return $this->return_json(200, "生成成功", $file_url);
        } else {
            return $this->return_json($errcode, $errmsg, null);
        }
    }
}