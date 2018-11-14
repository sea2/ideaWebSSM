package com.tgb.model;

public class MyHasFundInfo {


    private double fund_has_money;
    private double fund_buy_price;
    private double fund_has_amount;
    private String fund_has_code;
    private String fund_type;
    private String fund_remark;
    private int fund_level;
    private String fund_name;
    private int is_hold;

    public String getFund_remark() {
        return fund_remark;
    }

    public void setFund_remark(String fund_remark) {
        this.fund_remark = fund_remark;
    }

    public int getFund_level() {
        return fund_level;
    }

    public void setFund_level(int fund_level) {
        this.fund_level = fund_level;
    }

    public String getFund_type() {
        return fund_type;
    }

    public void setFund_type(String fund_type) {
        this.fund_type = fund_type;
    }

    public int getIs_hold() {
        return is_hold;
    }

    public void setIs_hold(int is_hold) {
        this.is_hold = is_hold;
    }

    public double getFund_has_amount() {
        return fund_has_amount;
    }

    public void setFund_has_amount(double fund_has_amount) {
        this.fund_has_amount = fund_has_amount;
    }

    public String getFund_name() {
        return fund_name;
    }

    public void setFund_name(String fund_name) {
        this.fund_name = fund_name;
    }

    public String getFund_has_code() {
        return fund_has_code;
    }

    public void setFund_has_code(String fund_has_code) {
        this.fund_has_code = fund_has_code;
    }

    public double getFund_has_money() {
        return fund_has_money;
    }

    public void setFund_has_money(double fund_has_money) {
        this.fund_has_money = fund_has_money;
    }

    public double getFund_buy_price() {
        return fund_buy_price;
    }

    public void setFund_buy_price(double fund_buy_price) {
        this.fund_buy_price = fund_buy_price;
    }
}
