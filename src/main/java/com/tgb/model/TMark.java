package com.tgb.model;

import com.tgb.util.DateUtils;

import java.util.Date;

public class TMark {
    private Integer id;

    private Date time;

    private String remark;
    private String timeStr;

    private Integer type;

    private Integer level;

    public Integer getId() {
        return id;
    }

    public String getTimeStr() {
        return DateUtils.formatDateByDateFormate(time, DateUtils.DEFUALT_TIMESTAMPE_FORMAT);
    }

    public void setTimeStr(String timeStr) {
        this.timeStr = timeStr;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }
}