package com.tgb.model;

import java.util.List;

public class DaiLuoPanHttpInfo {

    private String result;
    private String resultmsg;
    private String totalNum;
    private String updatetime;

    List<DlpInfo> gradeList;

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getResultmsg() {
        return resultmsg;
    }

    public void setResultmsg(String resultmsg) {
        this.resultmsg = resultmsg;
    }

    public String getTotalNum() {
        return totalNum;
    }

    public void setTotalNum(String totalNum) {
        this.totalNum = totalNum;
    }

    public String getUpdatetime() {
        return updatetime;
    }

    public void setUpdatetime(String updatetime) {
        this.updatetime = updatetime;
    }

    public List<DlpInfo> getGradeList() {
        return gradeList;
    }

    public void setGradeList(List<DlpInfo> gradeList) {
        this.gradeList = gradeList;
    }

    public static class DlpInfo {
        private String platback;
        private String plat_name;
        private String siteurl;
        private String dlpurl;

        public String getPlatback() {
            return platback;
        }

        public void setPlatback(String platback) {
            this.platback = platback;
        }

        public String getPlat_name() {
            return plat_name;
        }

        public void setPlat_name(String plat_name) {
            this.plat_name = plat_name;
        }

        public String getSiteurl() {
            return siteurl;
        }

        public void setSiteurl(String siteurl) {
            this.siteurl = siteurl;
        }

        public String getDlpurl() {
            return dlpurl;
        }

        public void setDlpurl(String dlpurl) {
            this.dlpurl = dlpurl;
        }
    }

}
