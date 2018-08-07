package com.tgb.model;

import java.util.ArrayList;
import java.util.List;

public class TFundStockExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TFundStockExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andStockIdIsNull() {
            addCriterion("stock_id is null");
            return (Criteria) this;
        }

        public Criteria andStockIdIsNotNull() {
            addCriterion("stock_id is not null");
            return (Criteria) this;
        }

        public Criteria andStockIdEqualTo(Integer value) {
            addCriterion("stock_id =", value, "stockId");
            return (Criteria) this;
        }

        public Criteria andStockIdNotEqualTo(Integer value) {
            addCriterion("stock_id <>", value, "stockId");
            return (Criteria) this;
        }

        public Criteria andStockIdGreaterThan(Integer value) {
            addCriterion("stock_id >", value, "stockId");
            return (Criteria) this;
        }

        public Criteria andStockIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("stock_id >=", value, "stockId");
            return (Criteria) this;
        }

        public Criteria andStockIdLessThan(Integer value) {
            addCriterion("stock_id <", value, "stockId");
            return (Criteria) this;
        }

        public Criteria andStockIdLessThanOrEqualTo(Integer value) {
            addCriterion("stock_id <=", value, "stockId");
            return (Criteria) this;
        }

        public Criteria andStockIdIn(List<Integer> values) {
            addCriterion("stock_id in", values, "stockId");
            return (Criteria) this;
        }

        public Criteria andStockIdNotIn(List<Integer> values) {
            addCriterion("stock_id not in", values, "stockId");
            return (Criteria) this;
        }

        public Criteria andStockIdBetween(Integer value1, Integer value2) {
            addCriterion("stock_id between", value1, value2, "stockId");
            return (Criteria) this;
        }

        public Criteria andStockIdNotBetween(Integer value1, Integer value2) {
            addCriterion("stock_id not between", value1, value2, "stockId");
            return (Criteria) this;
        }

        public Criteria andStockCodeIsNull() {
            addCriterion("stock_code is null");
            return (Criteria) this;
        }

        public Criteria andStockCodeIsNotNull() {
            addCriterion("stock_code is not null");
            return (Criteria) this;
        }

        public Criteria andStockCodeEqualTo(String value) {
            addCriterion("stock_code =", value, "stockCode");
            return (Criteria) this;
        }

        public Criteria andStockCodeNotEqualTo(String value) {
            addCriterion("stock_code <>", value, "stockCode");
            return (Criteria) this;
        }

        public Criteria andStockCodeGreaterThan(String value) {
            addCriterion("stock_code >", value, "stockCode");
            return (Criteria) this;
        }

        public Criteria andStockCodeGreaterThanOrEqualTo(String value) {
            addCriterion("stock_code >=", value, "stockCode");
            return (Criteria) this;
        }

        public Criteria andStockCodeLessThan(String value) {
            addCriterion("stock_code <", value, "stockCode");
            return (Criteria) this;
        }

        public Criteria andStockCodeLessThanOrEqualTo(String value) {
            addCriterion("stock_code <=", value, "stockCode");
            return (Criteria) this;
        }

        public Criteria andStockCodeLike(String value) {
            addCriterion("stock_code like", value, "stockCode");
            return (Criteria) this;
        }

        public Criteria andStockCodeNotLike(String value) {
            addCriterion("stock_code not like", value, "stockCode");
            return (Criteria) this;
        }

        public Criteria andStockCodeIn(List<String> values) {
            addCriterion("stock_code in", values, "stockCode");
            return (Criteria) this;
        }

        public Criteria andStockCodeNotIn(List<String> values) {
            addCriterion("stock_code not in", values, "stockCode");
            return (Criteria) this;
        }

        public Criteria andStockCodeBetween(String value1, String value2) {
            addCriterion("stock_code between", value1, value2, "stockCode");
            return (Criteria) this;
        }

        public Criteria andStockCodeNotBetween(String value1, String value2) {
            addCriterion("stock_code not between", value1, value2, "stockCode");
            return (Criteria) this;
        }

        public Criteria andStockNameIsNull() {
            addCriterion("stock_name is null");
            return (Criteria) this;
        }

        public Criteria andStockNameIsNotNull() {
            addCriterion("stock_name is not null");
            return (Criteria) this;
        }

        public Criteria andStockNameEqualTo(String value) {
            addCriterion("stock_name =", value, "stockName");
            return (Criteria) this;
        }

        public Criteria andStockNameNotEqualTo(String value) {
            addCriterion("stock_name <>", value, "stockName");
            return (Criteria) this;
        }

        public Criteria andStockNameGreaterThan(String value) {
            addCriterion("stock_name >", value, "stockName");
            return (Criteria) this;
        }

        public Criteria andStockNameGreaterThanOrEqualTo(String value) {
            addCriterion("stock_name >=", value, "stockName");
            return (Criteria) this;
        }

        public Criteria andStockNameLessThan(String value) {
            addCriterion("stock_name <", value, "stockName");
            return (Criteria) this;
        }

        public Criteria andStockNameLessThanOrEqualTo(String value) {
            addCriterion("stock_name <=", value, "stockName");
            return (Criteria) this;
        }

        public Criteria andStockNameLike(String value) {
            addCriterion("stock_name like", value, "stockName");
            return (Criteria) this;
        }

        public Criteria andStockNameNotLike(String value) {
            addCriterion("stock_name not like", value, "stockName");
            return (Criteria) this;
        }

        public Criteria andStockNameIn(List<String> values) {
            addCriterion("stock_name in", values, "stockName");
            return (Criteria) this;
        }

        public Criteria andStockNameNotIn(List<String> values) {
            addCriterion("stock_name not in", values, "stockName");
            return (Criteria) this;
        }

        public Criteria andStockNameBetween(String value1, String value2) {
            addCriterion("stock_name between", value1, value2, "stockName");
            return (Criteria) this;
        }

        public Criteria andStockNameNotBetween(String value1, String value2) {
            addCriterion("stock_name not between", value1, value2, "stockName");
            return (Criteria) this;
        }

        public Criteria andStockNewPriceIsNull() {
            addCriterion("stock_new_price is null");
            return (Criteria) this;
        }

        public Criteria andStockNewPriceIsNotNull() {
            addCriterion("stock_new_price is not null");
            return (Criteria) this;
        }

        public Criteria andStockNewPriceEqualTo(String value) {
            addCriterion("stock_new_price =", value, "stockNewPrice");
            return (Criteria) this;
        }

        public Criteria andStockNewPriceNotEqualTo(String value) {
            addCriterion("stock_new_price <>", value, "stockNewPrice");
            return (Criteria) this;
        }

        public Criteria andStockNewPriceGreaterThan(String value) {
            addCriterion("stock_new_price >", value, "stockNewPrice");
            return (Criteria) this;
        }

        public Criteria andStockNewPriceGreaterThanOrEqualTo(String value) {
            addCriterion("stock_new_price >=", value, "stockNewPrice");
            return (Criteria) this;
        }

        public Criteria andStockNewPriceLessThan(String value) {
            addCriterion("stock_new_price <", value, "stockNewPrice");
            return (Criteria) this;
        }

        public Criteria andStockNewPriceLessThanOrEqualTo(String value) {
            addCriterion("stock_new_price <=", value, "stockNewPrice");
            return (Criteria) this;
        }

        public Criteria andStockNewPriceLike(String value) {
            addCriterion("stock_new_price like", value, "stockNewPrice");
            return (Criteria) this;
        }

        public Criteria andStockNewPriceNotLike(String value) {
            addCriterion("stock_new_price not like", value, "stockNewPrice");
            return (Criteria) this;
        }

        public Criteria andStockNewPriceIn(List<String> values) {
            addCriterion("stock_new_price in", values, "stockNewPrice");
            return (Criteria) this;
        }

        public Criteria andStockNewPriceNotIn(List<String> values) {
            addCriterion("stock_new_price not in", values, "stockNewPrice");
            return (Criteria) this;
        }

        public Criteria andStockNewPriceBetween(String value1, String value2) {
            addCriterion("stock_new_price between", value1, value2, "stockNewPrice");
            return (Criteria) this;
        }

        public Criteria andStockNewPriceNotBetween(String value1, String value2) {
            addCriterion("stock_new_price not between", value1, value2, "stockNewPrice");
            return (Criteria) this;
        }

        public Criteria andStockNewRateIsNull() {
            addCriterion("stock_new_rate is null");
            return (Criteria) this;
        }

        public Criteria andStockNewRateIsNotNull() {
            addCriterion("stock_new_rate is not null");
            return (Criteria) this;
        }

        public Criteria andStockNewRateEqualTo(String value) {
            addCriterion("stock_new_rate =", value, "stockNewRate");
            return (Criteria) this;
        }

        public Criteria andStockNewRateNotEqualTo(String value) {
            addCriterion("stock_new_rate <>", value, "stockNewRate");
            return (Criteria) this;
        }

        public Criteria andStockNewRateGreaterThan(String value) {
            addCriterion("stock_new_rate >", value, "stockNewRate");
            return (Criteria) this;
        }

        public Criteria andStockNewRateGreaterThanOrEqualTo(String value) {
            addCriterion("stock_new_rate >=", value, "stockNewRate");
            return (Criteria) this;
        }

        public Criteria andStockNewRateLessThan(String value) {
            addCriterion("stock_new_rate <", value, "stockNewRate");
            return (Criteria) this;
        }

        public Criteria andStockNewRateLessThanOrEqualTo(String value) {
            addCriterion("stock_new_rate <=", value, "stockNewRate");
            return (Criteria) this;
        }

        public Criteria andStockNewRateLike(String value) {
            addCriterion("stock_new_rate like", value, "stockNewRate");
            return (Criteria) this;
        }

        public Criteria andStockNewRateNotLike(String value) {
            addCriterion("stock_new_rate not like", value, "stockNewRate");
            return (Criteria) this;
        }

        public Criteria andStockNewRateIn(List<String> values) {
            addCriterion("stock_new_rate in", values, "stockNewRate");
            return (Criteria) this;
        }

        public Criteria andStockNewRateNotIn(List<String> values) {
            addCriterion("stock_new_rate not in", values, "stockNewRate");
            return (Criteria) this;
        }

        public Criteria andStockNewRateBetween(String value1, String value2) {
            addCriterion("stock_new_rate between", value1, value2, "stockNewRate");
            return (Criteria) this;
        }

        public Criteria andStockNewRateNotBetween(String value1, String value2) {
            addCriterion("stock_new_rate not between", value1, value2, "stockNewRate");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}