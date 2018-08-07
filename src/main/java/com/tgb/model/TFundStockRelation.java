package com.tgb.model;

public class TFundStockRelation {
    private Integer id;

    private String stockCode;
    private String stockName;
    private String fundName;

    private String fundCode;

    private Double holdScale;

    public String getFundName() {
        return fundName;
    }

    public void setFundName(String fundName) {
        this.fundName = fundName;
    }

    public String getStockName() {
        return stockName;
    }

    public void setStockName(String stockName) {
        this.stockName = stockName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStockCode() {
        return stockCode;
    }

    public void setStockCode(String stockCode) {
        this.stockCode = stockCode == null ? null : stockCode.trim();
    }

    public String getFundCode() {
        return fundCode;
    }

    public void setFundCode(String fundCode) {
        this.fundCode = fundCode == null ? null : fundCode.trim();
    }

    public Double getHoldScale() {
        return holdScale;
    }

    public void setHoldScale(Double holdScale) {
        this.holdScale = holdScale;
    }
}