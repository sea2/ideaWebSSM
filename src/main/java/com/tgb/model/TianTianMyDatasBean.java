package com.tgb.model;

public class TianTianMyDatasBean {

        /**
         * FCODE : 163402
         * SHORTNAME : 兴全趋势投资混合(LOF)
         * PDATE : 2018-04-24
         * NAV : 0.9140
         * ACCNAV : 9.4158
         * NAVCHGRT : 2.23
         * GSZ : 0.9099
         * GSZZL : -0.45
         * GZTIME : 2018-04-25 13:55
         * NEWPRICE : 0.904
         * CHANGERATIO : -0.44
         * ZJL : 1.0941
         * HQDATE : 2018-04-25 13:54:13
         * ISHAVEREDPACKET : true
         */

        private String FCODE;
        private String SHORTNAME;
        private String PDATE;
    // 昨日净值
        private String NAV;
        private String ACCNAV;
        private String NAVCHGRT;
        //最新净值
        private String GSZ;
        private String GSZZL;
        private String GZTIME;
        private String NEWPRICE;
        private String CHANGERATIO;
        private String ZJL;
        private String HQDATE;
        private boolean ISHAVEREDPACKET;

        public String getFCODE() {
            return FCODE;
        }

        public void setFCODE(String FCODE) {
            this.FCODE = FCODE;
        }

        public String getSHORTNAME() {
            return SHORTNAME;
        }

        public void setSHORTNAME(String SHORTNAME) {
            this.SHORTNAME = SHORTNAME;
        }

        public String getPDATE() {
            return PDATE;
        }

        public void setPDATE(String PDATE) {
            this.PDATE = PDATE;
        }

        public String getNAV() {
            return NAV;
        }

        public void setNAV(String NAV) {
            this.NAV = NAV;
        }

        public String getACCNAV() {
            return ACCNAV;
        }

        public void setACCNAV(String ACCNAV) {
            this.ACCNAV = ACCNAV;
        }

        public String getNAVCHGRT() {
            return NAVCHGRT;
        }

        public void setNAVCHGRT(String NAVCHGRT) {
            this.NAVCHGRT = NAVCHGRT;
        }

        public String getGSZ() {
            return GSZ;
        }

        public void setGSZ(String GSZ) {
            this.GSZ = GSZ;
        }

        public String getGSZZL() {
            return GSZZL;
        }

        public void setGSZZL(String GSZZL) {
            this.GSZZL = GSZZL;
        }

        public String getGZTIME() {
            return GZTIME;
        }

        public void setGZTIME(String GZTIME) {
            this.GZTIME = GZTIME;
        }

        public String getNEWPRICE() {
            return NEWPRICE;
        }

        public void setNEWPRICE(String NEWPRICE) {
            this.NEWPRICE = NEWPRICE;
        }

        public String getCHANGERATIO() {
            return CHANGERATIO;
        }

        public void setCHANGERATIO(String CHANGERATIO) {
            this.CHANGERATIO = CHANGERATIO;
        }

        public String getZJL() {
            return ZJL;
        }

        public void setZJL(String ZJL) {
            this.ZJL = ZJL;
        }

        public String getHQDATE() {
            return HQDATE;
        }

        public void setHQDATE(String HQDATE) {
            this.HQDATE = HQDATE;
        }

        public boolean isISHAVEREDPACKET() {
            return ISHAVEREDPACKET;
        }

        public void setISHAVEREDPACKET(boolean ISHAVEREDPACKET) {
            this.ISHAVEREDPACKET = ISHAVEREDPACKET;
        }
}
