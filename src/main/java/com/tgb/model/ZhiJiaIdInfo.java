package com.tgb.model;

/**
 * Created by lhy on 2017/12/18.
 */

public class ZhiJiaIdInfo {


    /**
     * allPlatPin : rongjinbao
     * platName : 融金宝
     * search : rjb,rjb,rongjinbao,融金宝
     * platId : 743
     * platPin : rjb
     * platIconUrl : https://www.wdzj.com/wdzj/images/plat/icon/743.jpg
     */

    private String allPlatPin;
    private String platName;
    private String search;
    private int platId;
    private String platPin;
    private String platIconUrl;

    public String getAllPlatPin() {
        return allPlatPin;
    }

    public void setAllPlatPin(String allPlatPin) {
        this.allPlatPin = allPlatPin;
    }

    public String getPlatName() {
        return platName;
    }

    public void setPlatName(String platName) {
        this.platName = platName;
    }

    public String getSearch() {
        return search;
    }

    public void setSearch(String search) {
        this.search = search;
    }

    public int getPlatId() {
        return platId;
    }

    public void setPlatId(int platId) {
        this.platId = platId;
    }

    public String getPlatPin() {
        return platPin;
    }

    public void setPlatPin(String platPin) {
        this.platPin = platPin;
    }

    public String getPlatIconUrl() {
        return platIconUrl;
    }

    public void setPlatIconUrl(String platIconUrl) {
        this.platIconUrl = platIconUrl;
    }
}
