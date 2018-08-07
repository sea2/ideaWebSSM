package com.tgb.model;

import java.util.List;

public class HoldStocks {


    /**
     * Datas : [{"ShareCode":"000568","ShareCodeNew":"2","ShareName":"泸州老窖","ShareProportion":"6.86","ShareGain":"-0.56","SharePrice":"54.84","ShareDate":"2018-06-30"},{"ShareCode":"601336","ShareCodeNew":"1","ShareName":"新华保险","ShareProportion":"4.68","ShareGain":"-0.79","SharePrice":"48.76","ShareDate":"2018-06-30"},{"ShareCode":"002127","ShareCodeNew":"2","ShareName":"南极电商","ShareProportion":"4.57","ShareGain":"-1.09","SharePrice":"8.16","ShareDate":"2018-06-30"},{"ShareCode":"300309","ShareCodeNew":"2","ShareName":"吉艾科技","ShareProportion":"4.40","ShareGain":"0.84","SharePrice":"20.35","ShareDate":"2018-06-30"},{"ShareCode":"002195","ShareCodeNew":"2","ShareName":"二三四五","ShareProportion":"4.17","ShareGain":"0.45","SharePrice":"4.50","ShareDate":"2018-06-30"},{"ShareCode":"000858","ShareCodeNew":"2","ShareName":"五粮液","ShareProportion":"3.88","ShareGain":"-0.47","SharePrice":"72.26","ShareDate":"2018-06-30"},{"ShareCode":"002202","ShareCodeNew":"2","ShareName":"金风科技","ShareProportion":"3.69","ShareGain":"-1.85","SharePrice":"13.76","ShareDate":"2018-06-30"},{"ShareCode":"601318","ShareCodeNew":"1","ShareName":"中国平安","ShareProportion":"2.89","ShareGain":"-0.54","SharePrice":"61.23","ShareDate":"2018-06-30"},{"ShareCode":"600115","ShareCodeNew":"1","ShareName":"东方航空","ShareProportion":"2.41","ShareGain":"0.34","SharePrice":"5.84","ShareDate":"2018-06-30"},{"ShareCode":"600029","ShareCodeNew":"1","ShareName":"南方航空","ShareProportion":"2.30","ShareGain":"0.43","SharePrice":"7.06","ShareDate":"2018-06-30"}]
     * ErrCode : 0
     * ErrMsg : null
     * TotalCount : 10
     * Expansion : 2018-06-30
     */

    private int ErrCode;
    private Object ErrMsg;
    private int TotalCount;
    private String Expansion;
    private List<DatasBean> Datas;

    public int getErrCode() {
        return ErrCode;
    }

    public void setErrCode(int ErrCode) {
        this.ErrCode = ErrCode;
    }

    public Object getErrMsg() {
        return ErrMsg;
    }

    public void setErrMsg(Object ErrMsg) {
        this.ErrMsg = ErrMsg;
    }

    public int getTotalCount() {
        return TotalCount;
    }

    public void setTotalCount(int TotalCount) {
        this.TotalCount = TotalCount;
    }

    public String getExpansion() {
        return Expansion;
    }

    public void setExpansion(String Expansion) {
        this.Expansion = Expansion;
    }

    public List<DatasBean> getDatas() {
        return Datas;
    }

    public void setDatas(List<DatasBean> Datas) {
        this.Datas = Datas;
    }

    public static class DatasBean {
        /**
         * ShareCode : 000568
         * ShareCodeNew : 2
         * ShareName : 泸州老窖
         * ShareProportion : 6.86
         * ShareGain : -0.56
         * SharePrice : 54.84
         * ShareDate : 2018-06-30
         */

        private String ShareCode;
        private String ShareCodeNew;
        private String ShareName;
        private String ShareProportion;
        private String ShareGain;
        private String SharePrice;
        private String ShareDate;

        public String getShareCode() {
            return ShareCode;
        }

        public void setShareCode(String ShareCode) {
            this.ShareCode = ShareCode;
        }

        public String getShareCodeNew() {
            return ShareCodeNew;
        }

        public void setShareCodeNew(String ShareCodeNew) {
            this.ShareCodeNew = ShareCodeNew;
        }

        public String getShareName() {
            return ShareName;
        }

        public void setShareName(String ShareName) {
            this.ShareName = ShareName;
        }

        public String getShareProportion() {
            return ShareProportion;
        }

        public void setShareProportion(String ShareProportion) {
            this.ShareProportion = ShareProportion;
        }

        public String getShareGain() {
            return ShareGain;
        }

        public void setShareGain(String ShareGain) {
            this.ShareGain = ShareGain;
        }

        public String getSharePrice() {
            return SharePrice;
        }

        public void setSharePrice(String SharePrice) {
            this.SharePrice = SharePrice;
        }

        public String getShareDate() {
            return ShareDate;
        }

        public void setShareDate(String ShareDate) {
            this.ShareDate = ShareDate;
        }
    }
}
