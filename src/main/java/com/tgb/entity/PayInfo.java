package com.tgb.entity;

import java.math.BigDecimal;

public class PayInfo {


    /**
     * type : google
     * product_id : 1001
     * cp_order_no : 1587197472029
     * amount : 30
     * server_id : 1
     * role_id : 78713
     * notify_url : 123456
     * extra : 1
     * channel : android
     * sub_channel : LinkingSDK
     * device_id : b27b750d-0dd9-43c5-a6a2-393ffe9f5dee
     * device_info : BOARD=taimen;BOOTLOADER=unknown;BRAND=google;CPU_ABI=x86;CPU_ABI2=armeabi-v7a;DEVICE=taimen;DISPLAY=NOF26V;HARDWARE=taimen;IS_EMULATOR=false;MODEL=PIXEL 2 XL;PERMISSIONS_REVIEW_REQUIRED=false;PRODUCT=taimen;SERIAL=9f83f6080301d0df;TAG=Build;
     * os : android
     * version : 1.0.0
     * nonce_str : tnxL
     * sign_type : MD5
     * param_str : {"language":"zh-CN","channel":"1000"}
     * sign : 20DF56F20D5C8AD929D83CAC6DF59DAB
     */

    private String type;
    private String product_id;
    private String cp_order_no;
    private BigDecimal amount;
    private String server_id;
    private String role_id;
    private String notify_url;
    private String extra;
    private String channel;
    private String sub_channel;
    private String device_id;
    private String device_info;
    private String os;
    private String version;
    private String nonce_str;
    private String sign_type;
    private String param_str;
    private String sign;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getProduct_id() {
        return product_id;
    }

    public void setProduct_id(String product_id) {
        this.product_id = product_id;
    }

    public String getCp_order_no() {
        return cp_order_no;
    }

    public void setCp_order_no(String cp_order_no) {
        this.cp_order_no = cp_order_no;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getServer_id() {
        return server_id;
    }

    public void setServer_id(String server_id) {
        this.server_id = server_id;
    }

    public String getRole_id() {
        return role_id;
    }

    public void setRole_id(String role_id) {
        this.role_id = role_id;
    }

    public String getNotify_url() {
        return notify_url;
    }

    public void setNotify_url(String notify_url) {
        this.notify_url = notify_url;
    }

    public String getExtra() {
        return extra;
    }

    public void setExtra(String extra) {
        this.extra = extra;
    }

    public String getChannel() {
        return channel;
    }

    public void setChannel(String channel) {
        this.channel = channel;
    }

    public String getSub_channel() {
        return sub_channel;
    }

    public void setSub_channel(String sub_channel) {
        this.sub_channel = sub_channel;
    }

    public String getDevice_id() {
        return device_id;
    }

    public void setDevice_id(String device_id) {
        this.device_id = device_id;
    }

    public String getDevice_info() {
        return device_info;
    }

    public void setDevice_info(String device_info) {
        this.device_info = device_info;
    }

    public String getOs() {
        return os;
    }

    public void setOs(String os) {
        this.os = os;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getNonce_str() {
        return nonce_str;
    }

    public void setNonce_str(String nonce_str) {
        this.nonce_str = nonce_str;
    }

    public String getSign_type() {
        return sign_type;
    }

    public void setSign_type(String sign_type) {
        this.sign_type = sign_type;
    }

    public String getParam_str() {
        return param_str;
    }

    public void setParam_str(String param_str) {
        this.param_str = param_str;
    }

    public String getSign() {
        return sign;
    }

    public void setSign(String sign) {
        this.sign = sign;
    }


}
