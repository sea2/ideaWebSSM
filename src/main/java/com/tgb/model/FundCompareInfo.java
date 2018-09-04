package com.tgb.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class FundCompareInfo implements Serializable{


    private String code;
    private String name;
    private String hold_stocks;
    private List<List<Object>> list = new ArrayList<>();
    private List<List<Object>> list2 = new ArrayList<>();

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHold_stocks() {
        return hold_stocks;
    }

    public void setHold_stocks(String hold_stocks) {
        this.hold_stocks = hold_stocks;
    }

    public List<List<Object>> getList() {
        return list;
    }

    public void setList(List<List<Object>> list) {
        this.list = list;
    }


    public List<List<Object>> getList2() {
        return list2;
    }

    public void setList2(List<List<Object>> list2) {
        this.list2 = list2;
    }
}
