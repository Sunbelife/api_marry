<?php
/**
 * Created by PhpStorm.
 * User: sunbelife
 * Date: 2018/12/8
 * Time: 1:24 PM
 */

namespace app\wx\controller;
use think\Controller;
use app\wx\model\Barrage;

Class Api extends Controller
{
    public function index()
    {
        return "Hello World!";
    }
    # Barrage 弹幕部分
    public function send_barrage_msg($user_name, $message, $card_id, $time)
    {
        $data = Barrage::getBybarr_id($card_id);
        return $data;
    }

    # http://localhost/web/manage/get_barrage_msg/card_id/1/2
    public function get_barrage_msg($card_id = 0)
    {
        if ($card_id == 0) {
            return json(array('status_code' => 250));
        }
        $data = Barrage::getBybarr_id($card_id);
        return $data;
    }
}