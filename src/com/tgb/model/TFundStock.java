package com.tgb.model;

public class TFundStock {
    private Integer stockId;

    private String stockCode;

    private String stockName;

    private String stockNewPrice;

    private String stockNewRate;

    public Integer getStockId() {
        return stockId;
    }

    public void setStockId(Integer stockId) {
        this.stockId = stockId;
    }

    public String getStockCode() {
        return stockCode;
    }

    public void setStockCode(String stockCode) {
        this.stockCode = stockCode == null ? null : stockCode.trim();
    }

    public String getStockName() {
        return stockName;
    }

    public void setStockName(String stockName) {
        this.stockName = stockName == null ? null : stockName.trim();
    }

    public String getStockNewPrice() {
        return stockNewPrice;
    }

    public void setStockNewPrice(String stockNewPrice) {
        this.stockNewPrice = stockNewPrice == null ? null : stockNewPrice.trim();
    }

    public String getStockNewRate() {
        return stockNewRate;
    }

    public void setStockNewRate(String stockNewRate) {
        this.stockNewRate = stockNewRate == null ? null : stockNewRate.trim();
    }
}