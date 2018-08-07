package com.tgb.model;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class FundLineInfo {


    /**
     * Datas : [{"PDATE":"2018-01-30","YIELD":0,"INDEXYIED":0},{"PDATE":"2018-01-31","YIELD":0.13,"INDEXYIED":0.47},{"PDATE":"2018-02-01","YIELD":-1.89,"INDEXYIED":-0.24},{"PDATE":"2018-02-02","YIELD":-2.36,"INDEXYIED":0.36},{"PDATE":"2018-02-05","YIELD":-3.91,"INDEXYIED":0.42},{"PDATE":"2018-02-06","YIELD":-7.09,"INDEXYIED":-2.52},{"PDATE":"2018-02-07","YIELD":-8.38,"INDEXYIED":-4.83},{"PDATE":"2018-02-08","YIELD":-7.28,"INDEXYIED":-5.73},{"PDATE":"2018-02-09","YIELD":-9.92,"INDEXYIED":-9.76},{"PDATE":"2018-02-12","YIELD":-5.86,"INDEXYIED":-8.6},{"PDATE":"2018-02-13","YIELD":-4.95,"INDEXYIED":-7.53},{"PDATE":"2018-02-14","YIELD":-4.13,"INDEXYIED":-6.79},{"PDATE":"2018-02-22","YIELD":-2.39,"INDEXYIED":-4.78},{"PDATE":"2018-02-23","YIELD":-2.58,"INDEXYIED":-4.35},{"PDATE":"2018-02-26","YIELD":0.22,"INDEXYIED":-3.23},{"PDATE":"2018-02-27","YIELD":-0.57,"INDEXYIED":-4.63},{"PDATE":"2018-02-28","YIELD":-0.32,"INDEXYIED":-5.46},{"PDATE":"2018-03-01","YIELD":0.98,"INDEXYIED":-4.86},{"PDATE":"2018-03-02","YIELD":-0.16,"INDEXYIED":-5.63},{"PDATE":"2018-03-05","YIELD":0.19,"INDEXYIED":-5.59},{"PDATE":"2018-03-06","YIELD":1.26,"INDEXYIED":-4.45},{"PDATE":"2018-03-07","YIELD":0.85,"INDEXYIED":-5.16},{"PDATE":"2018-03-08","YIELD":0.98,"INDEXYIED":-4.19},{"PDATE":"2018-03-09","YIELD":2.9,"INDEXYIED":-3.46},{"PDATE":"2018-03-12","YIELD":4.54,"INDEXYIED":-3.02},{"PDATE":"2018-03-13","YIELD":3.69,"INDEXYIED":-3.87},{"PDATE":"2018-03-14","YIELD":2.58,"INDEXYIED":-4.29},{"PDATE":"2018-03-15","YIELD":2.96,"INDEXYIED":-3.76},{"PDATE":"2018-03-16","YIELD":1.45,"INDEXYIED":-4.69},{"PDATE":"2018-03-19","YIELD":1.67,"INDEXYIED":-4.27},{"PDATE":"2018-03-20","YIELD":1.92,"INDEXYIED":-4.19},{"PDATE":"2018-03-21","YIELD":1.01,"INDEXYIED":-4.58},{"PDATE":"2018-03-22","YIELD":0.32,"INDEXYIED":-5.54},{"PDATE":"2018-03-23","YIELD":-4.76,"INDEXYIED":-8.25},{"PDATE":"2018-03-26","YIELD":-2.27,"INDEXYIED":-8.84},{"PDATE":"2018-03-27","YIELD":-0.22,"INDEXYIED":-8.06},{"PDATE":"2018-03-28","YIELD":-1.39,"INDEXYIED":-9.71},{"PDATE":"2018-03-29","YIELD":-1.29,"INDEXYIED":-8.51},{"PDATE":"2018-03-30","YIELD":-0.09,"INDEXYIED":-8.4},{"PDATE":"2018-04-02","YIELD":-1.1,"INDEXYIED":-8.67},{"PDATE":"2018-04-03","YIELD":-1.92,"INDEXYIED":-9.25},{"PDATE":"2018-04-04","YIELD":-2.27,"INDEXYIED":-9.43},{"PDATE":"2018-04-09","YIELD":-2.58,"INDEXYIED":-9.47},{"PDATE":"2018-04-10","YIELD":-1.51,"INDEXYIED":-7.73},{"PDATE":"2018-04-11","YIELD":-1.29,"INDEXYIED":-7.47},{"PDATE":"2018-04-12","YIELD":-1.86,"INDEXYIED":-8.4},{"PDATE":"2018-04-13","YIELD":-2.43,"INDEXYIED":-9.04},{"PDATE":"2018-04-16","YIELD":-3.37,"INDEXYIED":-10.51},{"PDATE":"2018-04-17","YIELD":-5.64,"INDEXYIED":-11.92},{"PDATE":"2018-04-18","YIELD":-5.67,"INDEXYIED":-11.51},{"PDATE":"2018-04-19","YIELD":-4.1,"INDEXYIED":-10.44},{"PDATE":"2018-04-20","YIELD":-6.14,"INDEXYIED":-11.64},{"PDATE":"2018-04-23","YIELD":-7.25,"INDEXYIED":-11.51},{"PDATE":"2018-04-24","YIELD":-4.66,"INDEXYIED":-9.69},{"PDATE":"2018-04-25","YIELD":-4.6,"INDEXYIED":-10.04},{"PDATE":"2018-04-26","YIELD":-7.59,"INDEXYIED":-11.76},{"PDATE":"2018-04-27","YIELD":-7.5,"INDEXYIED":-11.73},{"PDATE":"2018-05-02","YIELD":-6.55,"INDEXYIED":-11.57},{"PDATE":"2018-05-03","YIELD":-5.36,"INDEXYIED":-10.88},{"PDATE":"2018-05-04","YIELD":-5.2,"INDEXYIED":-11.31},{"PDATE":"2018-05-07","YIELD":-2.27,"INDEXYIED":-9.91},{"PDATE":"2018-05-08","YIELD":-1.51,"INDEXYIED":-8.87},{"PDATE":"2018-05-09","YIELD":-1.32,"INDEXYIED":-9.03},{"PDATE":"2018-05-10","YIELD":-0.57,"INDEXYIED":-8.53},{"PDATE":"2018-05-11","YIELD":-1.54,"INDEXYIED":-9.01},{"PDATE":"2018-05-14","YIELD":-0.98,"INDEXYIED":-8.15},{"PDATE":"2018-05-15","YIELD":-0.41,"INDEXYIED":-7.8},{"PDATE":"2018-05-16","YIELD":-0.03,"INDEXYIED":-8.53},{"PDATE":"2018-05-17","YIELD":-1.8,"INDEXYIED":-9.21},{"PDATE":"2018-05-18","YIELD":-2.17,"INDEXYIED":-8.29},{"PDATE":"2018-05-21","YIELD":-1.23,"INDEXYIED":-7.87},{"PDATE":"2018-05-22","YIELD":-1.32,"INDEXYIED":-8.22},{"PDATE":"2018-05-23","YIELD":-2.62,"INDEXYIED":-9.43},{"PDATE":"2018-05-24","YIELD":-3.5,"INDEXYIED":-10.08},{"PDATE":"2018-05-25","YIELD":-4.32,"INDEXYIED":-10.33},{"PDATE":"2018-05-28","YIELD":-3.43,"INDEXYIED":-9.93},{"PDATE":"2018-05-29","YIELD":-4.32,"INDEXYIED":-10.62},{"PDATE":"2018-05-30","YIELD":-5.83,"INDEXYIED":-12.52},{"PDATE":"2018-05-31","YIELD":-4.22,"INDEXYIED":-10.66},{"PDATE":"2018-06-01","YIELD":-6.33,"INDEXYIED":-11.41},{"PDATE":"2018-06-04","YIELD":-6.68,"INDEXYIED":-10.54},{"PDATE":"2018-06-05","YIELD":-5.73,"INDEXYIED":-9.65},{"PDATE":"2018-06-06","YIELD":-6.14,"INDEXYIED":-9.84},{"PDATE":"2018-06-07","YIELD":-6.87,"INDEXYIED":-9.99},{"PDATE":"2018-06-08","YIELD":-7.21,"INDEXYIED":-11.2},{"PDATE":"2018-06-11","YIELD":-7.53,"INDEXYIED":-11.19},{"PDATE":"2018-06-12","YIELD":-5.73,"INDEXYIED":-10.11},{"PDATE":"2018-06-13","YIELD":-7.09,"INDEXYIED":-10.99},{"PDATE":"2018-06-14","YIELD":-8.44,"INDEXYIED":-11.34},{"PDATE":"2018-06-15","YIELD":-9.42,"INDEXYIED":-11.81},{"PDATE":"2018-06-19","YIELD":-14.08,"INDEXYIED":-14.92},{"PDATE":"2018-06-20","YIELD":-12.48,"INDEXYIED":-14.58},{"PDATE":"2018-06-21","YIELD":-14.74,"INDEXYIED":-15.58},{"PDATE":"2018-06-22","YIELD":-13.83,"INDEXYIED":-15.21},{"PDATE":"2018-06-25","YIELD":-14.18,"INDEXYIED":-16.34},{"PDATE":"2018-06-26","YIELD":-14.59,"INDEXYIED":-17.03},{"PDATE":"2018-06-27","YIELD":-16.89,"INDEXYIED":-18.72},{"PDATE":"2018-06-28","YIELD":-18.02,"INDEXYIED":-19.56},{"PDATE":"2018-06-29","YIELD":-15.56,"INDEXYIED":-17.51},{"PDATE":"2018-06-30","YIELD":-15.56,"INDEXYIED":-17.51},{"PDATE":"2018-07-02","YIELD":-17.58,"INDEXYIED":-19.93},{"PDATE":"2018-07-03","YIELD":-18.59,"INDEXYIED":-19.9},{"PDATE":"2018-07-04","YIELD":-20.04,"INDEXYIED":-20.97},{"PDATE":"2018-07-05","YIELD":-21.46,"INDEXYIED":-21.47},{"PDATE":"2018-07-06","YIELD":-21.01,"INDEXYIED":-20.93},{"PDATE":"2018-07-09","YIELD":-18.68,"INDEXYIED":-18.72},{"PDATE":"2018-07-10","YIELD":-18.43,"INDEXYIED":-18.53},{"PDATE":"2018-07-11","YIELD":-19.6,"INDEXYIED":-19.94},{"PDATE":"2018-07-12","YIELD":-17.39,"INDEXYIED":-18.21},{"PDATE":"2018-07-13","YIELD":-16.57,"INDEXYIED":-17.94},{"PDATE":"2018-07-16","YIELD":-16.73,"INDEXYIED":-18.42},{"PDATE":"2018-07-17","YIELD":-16.51,"INDEXYIED":-18.95},{"PDATE":"2018-07-18","YIELD":-17.83,"INDEXYIED":-19.38},{"PDATE":"2018-07-19","YIELD":-18.46,"INDEXYIED":-19.45},{"PDATE":"2018-07-20","YIELD":-17.8,"INDEXYIED":-17.93},{"PDATE":"2018-07-23","YIELD":-17.8,"INDEXYIED":-17.16},{"PDATE":"2018-07-24","YIELD":-16.45,"INDEXYIED":-15.85},{"PDATE":"2018-07-25","YIELD":-16.64,"INDEXYIED":-15.94},{"PDATE":"2018-07-26","YIELD":-18.18,"INDEXYIED":-16.91},{"PDATE":"2018-07-27","YIELD":-18.53,"INDEXYIED":-17.27},{"PDATE":"2018-07-30","YIELD":-19.91,"INDEXYIED":-17.41}]
     * ErrCode : 0
     * ErrMsg :
     * TotalCount : 0
     * Expansion : {"INDEXNAME":"沪深300指数"}
     */

    private int ErrCode;
    private String ErrMsg;
    private int TotalCount;
    private ExpansionBean Expansion;
    private List<DatasBean> Datas;

    public int getErrCode() {
        return ErrCode;
    }

    public void setErrCode(int ErrCode) {
        this.ErrCode = ErrCode;
    }

    public String getErrMsg() {
        return ErrMsg;
    }

    public void setErrMsg(String ErrMsg) {
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

    public List<DatasBean> getDatas() {
        return Datas;
    }

    public void setDatas(List<DatasBean> Datas) {
        this.Datas = Datas;
    }

    public static class ExpansionBean {
        /**
         * INDEXNAME : 沪深300指数
         */

        private String INDEXNAME;

        public String getINDEXNAME() {
            return INDEXNAME;
        }

        public void setINDEXNAME(String INDEXNAME) {
            this.INDEXNAME = INDEXNAME;
        }
    }

    public static class DatasBean {
        /**
         * PDATE : 2018-01-30
         * YIELD : 0
         * INDEXYIED : 0
         */

        private String PDATE;
        private int YIELD;
        private int INDEXYIED;

        public Date getPDATE2() {
            Date date = null;
            String str = null;
            DateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
            // String转Date
            try {
                date = format1.parse(PDATE);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            return date;
        }
        public String getPDATE() {
            return PDATE;
        }

        public void setPDATE(String PDATE) {
            this.PDATE = PDATE;
        }

        public int getYIELD() {
            return YIELD;
        }

        public void setYIELD(int YIELD) {
            this.YIELD = YIELD;
        }

        public int getINDEXYIED() {
            return INDEXYIED;
        }

        public void setINDEXYIED(int INDEXYIED) {
            this.INDEXYIED = INDEXYIED;
        }
    }
}
