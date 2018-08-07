package com.tgb.model;

public class TFund {
    private Integer fundId;

    private String fundCode;

    private String fundName;

    private String fundManager;

    private String fundNewPrice;

    private String fundNewRate;

    private Double fundHasMoney;

    private Double fundBuyPrice;

    private Double fundHasAmount;

    private Integer isHold;

    public Integer getFundId() {
        return fundId;
    }

    public void setFundId(Integer fundId) {
        this.fundId = fundId;
    }

    public String getFundCode() {
        return fundCode;
    }

    public void setFundCode(String fundCode) {
        this.fundCode = fundCode == null ? null : fundCode.trim();
    }

    public String getFundName() {
        return fundName;
    }

    public void setFundName(String fundName) {
        this.fundName = fundName == null ? null : fundName.trim();
    }

    public String getFundManager() {
        return fundManager;
    }

    public void setFundManager(String fundManager) {
        this.fundManager = fundManager == null ? null : fundManager.trim();
    }

    public String getFundNewPrice() {
        return fundNewPrice;
    }

    public void setFundNewPrice(String fundNewPrice) {
        this.fundNewPrice = fundNewPrice == null ? null : fundNewPrice.trim();
    }

    public String getFundNewRate() {
        return fundNewRate;
    }

    public void setFundNewRate(String fundNewRate) {
        this.fundNewRate = fundNewRate == null ? null : fundNewRate.trim();
    }

    public Double getFundHasMoney() {
        return fundHasMoney;
    }

    public void setFundHasMoney(Double fundHasMoney) {
        this.fundHasMoney = fundHasMoney;
    }

    public Double getFundBuyPrice() {
        return fundBuyPrice;
    }

    public void setFundBuyPrice(Double fundBuyPrice) {
        this.fundBuyPrice = fundBuyPrice;
    }

    public Double getFundHasAmount() {
        return fundHasAmount;
    }

    public void setFundHasAmount(Double fundHasAmount) {
        this.fundHasAmount = fundHasAmount;
    }

    public Integer getIsHold() {
        return isHold;
    }

    public void setIsHold(Integer isHold) {
        this.isHold = isHold;
    }
}