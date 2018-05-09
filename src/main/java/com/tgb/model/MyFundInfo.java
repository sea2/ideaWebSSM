package com.tgb.model;

import java.util.List;

public class MyFundInfo {


    /**
     * Datas : [{"FCODE":"163402","SHORTNAME":"兴全趋势投资混合(LOF)","PDATE":"2018-04-24","NAV":"0.9140","ACCNAV":"9.4158","NAVCHGRT":"2.23","GSZ":"0.9099","GSZZL":"-0.45","GZTIME":"2018-04-25 13:55","NEWPRICE":"0.904","CHANGERATIO":"-0.44","ZJL":"1.0941","HQDATE":"2018-04-25 13:54:13","ISHAVEREDPACKET":true},{"FCODE":"470028","SHORTNAME":"汇添富社会责任混合","PDATE":"2018-04-24","NAV":"1.8560","ACCNAV":"1.856","NAVCHGRT":"3.34","GSZ":"1.8513","GSZZL":"-0.25","GZTIME":"2018-04-25 13:55","NEWPRICE":"--","CHANGERATIO":"--","ZJL":"--","HQDATE":"--","ISHAVEREDPACKET":true},{"FCODE":"000988","SHORTNAME":"嘉实全球互联网股票人民币","PDATE":"2018-04-23","NAV":"1.4240","ACCNAV":"1.424","NAVCHGRT":"-1.04","GSZ":"1.4074","GSZZL":"-1.16","GZTIME":"2018-04-25 04:00","NEWPRICE":"--","CHANGERATIO":"--","ZJL":"--","HQDATE":"--","ISHAVEREDPACKET":false},{"FCODE":"100032","SHORTNAME":"富国中证红利指数增强","PDATE":"2018-04-24","NAV":"1.1090","ACCNAV":"2.706","NAVCHGRT":"1.84","GSZ":"1.1045","GSZZL":"-0.4","GZTIME":"2018-04-25 13:55","NEWPRICE":"--","CHANGERATIO":"--","ZJL":"--","HQDATE":"--","ISHAVEREDPACKET":true},{"FCODE":"110023","SHORTNAME":"易方达医疗保健行业混合","PDATE":"2018-04-24","NAV":"1.7340","ACCNAV":"1.734","NAVCHGRT":"2.42","GSZ":"1.7556","GSZZL":"1.25","GZTIME":"2018-04-25 13:53","NEWPRICE":"--","CHANGERATIO":"--","ZJL":"--","HQDATE":"--","ISHAVEREDPACKET":false},{"FCODE":"161725","SHORTNAME":"招商中证白酒指数分级","PDATE":"2018-04-24","NAV":"1.0870","ACCNAV":"1.623","NAVCHGRT":"3.13","GSZ":"1.0843","GSZZL":"-0.25","GZTIME":"2018-04-25 13:53","NEWPRICE":"--","CHANGERATIO":"--","ZJL":"--","HQDATE":"--","ISHAVEREDPACKET":false},{"FCODE":"070032","SHORTNAME":"嘉实优化红利混合","PDATE":"2018-04-24","NAV":"1.4450","ACCNAV":"2.298","NAVCHGRT":"2.92","GSZ":"1.4476","GSZZL":"0.18","GZTIME":"2018-04-25 13:53","NEWPRICE":"--","CHANGERATIO":"--","ZJL":"--","HQDATE":"--","ISHAVEREDPACKET":false},{"FCODE":"340007","SHORTNAME":"兴全社会责任混合","PDATE":"2018-04-24","NAV":"3.5300","ACCNAV":"3.72","NAVCHGRT":"3.01","GSZ":"3.5437","GSZZL":"0.39","GZTIME":"2018-04-25 13:55","NEWPRICE":"--","CHANGERATIO":"--","ZJL":"--","HQDATE":"--","ISHAVEREDPACKET":true},{"FCODE":"519700","SHORTNAME":"交银主题优选混合","PDATE":"2018-04-24","NAV":"1.1740","ACCNAV":"2.101","NAVCHGRT":"1.56","GSZ":"1.1771","GSZZL":"0.27","GZTIME":"2018-04-25 13:53","NEWPRICE":"--","CHANGERATIO":"--","ZJL":"--","HQDATE":"--","ISHAVEREDPACKET":true},{"FCODE":"166009","SHORTNAME":"中欧新动力混合(LOF)A","PDATE":"2018-04-24","NAV":"1.6926","ACCNAV":"2.6086","NAVCHGRT":"2.33","GSZ":"1.6986","GSZZL":"0.35","GZTIME":"2018-04-25 13:53","NEWPRICE":"1.664","CHANGERATIO":"0.79","ZJL":"1.6897","HQDATE":"2018-04-25 13:54:13","ISHAVEREDPACKET":false}]
     * ErrCode : 0
     * ErrMsg : null
     * TotalCount : 10
     * Expansion : {"GZTIME":"2018-04-25","FSRQ":"2018-04-24"}
     */

    private int ErrCode;
    private Object ErrMsg;
    private int TotalCount;
    private ExpansionBean Expansion;
    private List<TianTianMyDatasBean> Datas;

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

    public ExpansionBean getExpansion() {
        return Expansion;
    }

    public void setExpansion(ExpansionBean Expansion) {
        this.Expansion = Expansion;
    }

    public List<TianTianMyDatasBean> getDatas() {
        return Datas;
    }

    public void setDatas(List<TianTianMyDatasBean> Datas) {
        this.Datas = Datas;
    }

    public static class ExpansionBean {
        /**
         * GZTIME : 2018-04-25
         * FSRQ : 2018-04-24
         */

        private String GZTIME;
        private String FSRQ;

        public String getGZTIME() {
            return GZTIME;
        }

        public void setGZTIME(String GZTIME) {
            this.GZTIME = GZTIME;
        }

        public String getFSRQ() {
            return FSRQ;
        }

        public void setFSRQ(String FSRQ) {
            this.FSRQ = FSRQ;
        }
    }


}
