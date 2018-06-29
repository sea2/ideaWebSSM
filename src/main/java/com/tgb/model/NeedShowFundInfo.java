package com.tgb.model;

public class NeedShowFundInfo {

    private String fcode;
    private String shortname;
    private String nav;
    private String navChgrt;
    private String gsz;
    private String gszzl;
    private double money;
    private String income;

    public String getIncome() {
        return income;
    }

    public void setIncome(String income) {
        this.income = income;
    }

    public double getMoney() {
        return money;
    }

    public void setMoney(double money) {
        this.money = money;
    }

    public String getFcode() {
        return fcode;
    }

    public void setFcode(String fcode) {
        this.fcode = fcode;
    }

    public String getShortname() {
        return shortname;
    }

    public void setShortname(String shortname) {
        this.shortname = shortname;
    }

    public String getNav() {
        return nav;
    }

    public void setNav(String nav) {
        this.nav = nav;
    }

    public String getNavChgrt() {
        return navChgrt;
    }

    public void setNavChgrt(String navChgrt) {
        this.navChgrt = navChgrt;
    }

    public String getGsz() {
        return gsz;
    }

    public void setGsz(String gsz) {
        this.gsz = gsz;
    }

    public String getGszzl() {
        return gszzl;
    }

    public void setGszzl(String gszzl) {
        this.gszzl = gszzl;
    }
}
