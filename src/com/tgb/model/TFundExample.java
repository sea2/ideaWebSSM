package com.tgb.model;

import java.util.ArrayList;
import java.util.List;

public class TFundExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TFundExample() {
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

        public Criteria andFundIdIsNull() {
            addCriterion("fund_id is null");
            return (Criteria) this;
        }

        public Criteria andFundIdIsNotNull() {
            addCriterion("fund_id is not null");
            return (Criteria) this;
        }

        public Criteria andFundIdEqualTo(Integer value) {
            addCriterion("fund_id =", value, "fundId");
            return (Criteria) this;
        }

        public Criteria andFundIdNotEqualTo(Integer value) {
            addCriterion("fund_id <>", value, "fundId");
            return (Criteria) this;
        }

        public Criteria andFundIdGreaterThan(Integer value) {
            addCriterion("fund_id >", value, "fundId");
            return (Criteria) this;
        }

        public Criteria andFundIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("fund_id >=", value, "fundId");
            return (Criteria) this;
        }

        public Criteria andFundIdLessThan(Integer value) {
            addCriterion("fund_id <", value, "fundId");
            return (Criteria) this;
        }

        public Criteria andFundIdLessThanOrEqualTo(Integer value) {
            addCriterion("fund_id <=", value, "fundId");
            return (Criteria) this;
        }

        public Criteria andFundIdIn(List<Integer> values) {
            addCriterion("fund_id in", values, "fundId");
            return (Criteria) this;
        }

        public Criteria andFundIdNotIn(List<Integer> values) {
            addCriterion("fund_id not in", values, "fundId");
            return (Criteria) this;
        }

        public Criteria andFundIdBetween(Integer value1, Integer value2) {
            addCriterion("fund_id between", value1, value2, "fundId");
            return (Criteria) this;
        }

        public Criteria andFundIdNotBetween(Integer value1, Integer value2) {
            addCriterion("fund_id not between", value1, value2, "fundId");
            return (Criteria) this;
        }

        public Criteria andFundCodeIsNull() {
            addCriterion("fund_code is null");
            return (Criteria) this;
        }

        public Criteria andFundCodeIsNotNull() {
            addCriterion("fund_code is not null");
            return (Criteria) this;
        }

        public Criteria andFundCodeEqualTo(String value) {
            addCriterion("fund_code =", value, "fundCode");
            return (Criteria) this;
        }

        public Criteria andFundCodeNotEqualTo(String value) {
            addCriterion("fund_code <>", value, "fundCode");
            return (Criteria) this;
        }

        public Criteria andFundCodeGreaterThan(String value) {
            addCriterion("fund_code >", value, "fundCode");
            return (Criteria) this;
        }

        public Criteria andFundCodeGreaterThanOrEqualTo(String value) {
            addCriterion("fund_code >=", value, "fundCode");
            return (Criteria) this;
        }

        public Criteria andFundCodeLessThan(String value) {
            addCriterion("fund_code <", value, "fundCode");
            return (Criteria) this;
        }

        public Criteria andFundCodeLessThanOrEqualTo(String value) {
            addCriterion("fund_code <=", value, "fundCode");
            return (Criteria) this;
        }

        public Criteria andFundCodeLike(String value) {
            addCriterion("fund_code like", value, "fundCode");
            return (Criteria) this;
        }

        public Criteria andFundCodeNotLike(String value) {
            addCriterion("fund_code not like", value, "fundCode");
            return (Criteria) this;
        }

        public Criteria andFundCodeIn(List<String> values) {
            addCriterion("fund_code in", values, "fundCode");
            return (Criteria) this;
        }

        public Criteria andFundCodeNotIn(List<String> values) {
            addCriterion("fund_code not in", values, "fundCode");
            return (Criteria) this;
        }

        public Criteria andFundCodeBetween(String value1, String value2) {
            addCriterion("fund_code between", value1, value2, "fundCode");
            return (Criteria) this;
        }

        public Criteria andFundCodeNotBetween(String value1, String value2) {
            addCriterion("fund_code not between", value1, value2, "fundCode");
            return (Criteria) this;
        }

        public Criteria andFundNameIsNull() {
            addCriterion("fund_name is null");
            return (Criteria) this;
        }

        public Criteria andFundNameIsNotNull() {
            addCriterion("fund_name is not null");
            return (Criteria) this;
        }

        public Criteria andFundNameEqualTo(String value) {
            addCriterion("fund_name =", value, "fundName");
            return (Criteria) this;
        }

        public Criteria andFundNameNotEqualTo(String value) {
            addCriterion("fund_name <>", value, "fundName");
            return (Criteria) this;
        }

        public Criteria andFundNameGreaterThan(String value) {
            addCriterion("fund_name >", value, "fundName");
            return (Criteria) this;
        }

        public Criteria andFundNameGreaterThanOrEqualTo(String value) {
            addCriterion("fund_name >=", value, "fundName");
            return (Criteria) this;
        }

        public Criteria andFundNameLessThan(String value) {
            addCriterion("fund_name <", value, "fundName");
            return (Criteria) this;
        }

        public Criteria andFundNameLessThanOrEqualTo(String value) {
            addCriterion("fund_name <=", value, "fundName");
            return (Criteria) this;
        }

        public Criteria andFundNameLike(String value) {
            addCriterion("fund_name like", value, "fundName");
            return (Criteria) this;
        }

        public Criteria andFundNameNotLike(String value) {
            addCriterion("fund_name not like", value, "fundName");
            return (Criteria) this;
        }

        public Criteria andFundNameIn(List<String> values) {
            addCriterion("fund_name in", values, "fundName");
            return (Criteria) this;
        }

        public Criteria andFundNameNotIn(List<String> values) {
            addCriterion("fund_name not in", values, "fundName");
            return (Criteria) this;
        }

        public Criteria andFundNameBetween(String value1, String value2) {
            addCriterion("fund_name between", value1, value2, "fundName");
            return (Criteria) this;
        }

        public Criteria andFundNameNotBetween(String value1, String value2) {
            addCriterion("fund_name not between", value1, value2, "fundName");
            return (Criteria) this;
        }

        public Criteria andFundManagerIsNull() {
            addCriterion("fund_manager is null");
            return (Criteria) this;
        }

        public Criteria andFundManagerIsNotNull() {
            addCriterion("fund_manager is not null");
            return (Criteria) this;
        }

        public Criteria andFundManagerEqualTo(String value) {
            addCriterion("fund_manager =", value, "fundManager");
            return (Criteria) this;
        }

        public Criteria andFundManagerNotEqualTo(String value) {
            addCriterion("fund_manager <>", value, "fundManager");
            return (Criteria) this;
        }

        public Criteria andFundManagerGreaterThan(String value) {
            addCriterion("fund_manager >", value, "fundManager");
            return (Criteria) this;
        }

        public Criteria andFundManagerGreaterThanOrEqualTo(String value) {
            addCriterion("fund_manager >=", value, "fundManager");
            return (Criteria) this;
        }

        public Criteria andFundManagerLessThan(String value) {
            addCriterion("fund_manager <", value, "fundManager");
            return (Criteria) this;
        }

        public Criteria andFundManagerLessThanOrEqualTo(String value) {
            addCriterion("fund_manager <=", value, "fundManager");
            return (Criteria) this;
        }

        public Criteria andFundManagerLike(String value) {
            addCriterion("fund_manager like", value, "fundManager");
            return (Criteria) this;
        }

        public Criteria andFundManagerNotLike(String value) {
            addCriterion("fund_manager not like", value, "fundManager");
            return (Criteria) this;
        }

        public Criteria andFundManagerIn(List<String> values) {
            addCriterion("fund_manager in", values, "fundManager");
            return (Criteria) this;
        }

        public Criteria andFundManagerNotIn(List<String> values) {
            addCriterion("fund_manager not in", values, "fundManager");
            return (Criteria) this;
        }

        public Criteria andFundManagerBetween(String value1, String value2) {
            addCriterion("fund_manager between", value1, value2, "fundManager");
            return (Criteria) this;
        }

        public Criteria andFundManagerNotBetween(String value1, String value2) {
            addCriterion("fund_manager not between", value1, value2, "fundManager");
            return (Criteria) this;
        }

        public Criteria andFundNewPriceIsNull() {
            addCriterion("fund_new_price is null");
            return (Criteria) this;
        }

        public Criteria andFundNewPriceIsNotNull() {
            addCriterion("fund_new_price is not null");
            return (Criteria) this;
        }

        public Criteria andFundNewPriceEqualTo(String value) {
            addCriterion("fund_new_price =", value, "fundNewPrice");
            return (Criteria) this;
        }

        public Criteria andFundNewPriceNotEqualTo(String value) {
            addCriterion("fund_new_price <>", value, "fundNewPrice");
            return (Criteria) this;
        }

        public Criteria andFundNewPriceGreaterThan(String value) {
            addCriterion("fund_new_price >", value, "fundNewPrice");
            return (Criteria) this;
        }

        public Criteria andFundNewPriceGreaterThanOrEqualTo(String value) {
            addCriterion("fund_new_price >=", value, "fundNewPrice");
            return (Criteria) this;
        }

        public Criteria andFundNewPriceLessThan(String value) {
            addCriterion("fund_new_price <", value, "fundNewPrice");
            return (Criteria) this;
        }

        public Criteria andFundNewPriceLessThanOrEqualTo(String value) {
            addCriterion("fund_new_price <=", value, "fundNewPrice");
            return (Criteria) this;
        }

        public Criteria andFundNewPriceLike(String value) {
            addCriterion("fund_new_price like", value, "fundNewPrice");
            return (Criteria) this;
        }

        public Criteria andFundNewPriceNotLike(String value) {
            addCriterion("fund_new_price not like", value, "fundNewPrice");
            return (Criteria) this;
        }

        public Criteria andFundNewPriceIn(List<String> values) {
            addCriterion("fund_new_price in", values, "fundNewPrice");
            return (Criteria) this;
        }

        public Criteria andFundNewPriceNotIn(List<String> values) {
            addCriterion("fund_new_price not in", values, "fundNewPrice");
            return (Criteria) this;
        }

        public Criteria andFundNewPriceBetween(String value1, String value2) {
            addCriterion("fund_new_price between", value1, value2, "fundNewPrice");
            return (Criteria) this;
        }

        public Criteria andFundNewPriceNotBetween(String value1, String value2) {
            addCriterion("fund_new_price not between", value1, value2, "fundNewPrice");
            return (Criteria) this;
        }

        public Criteria andFundNewRateIsNull() {
            addCriterion("fund_new_rate is null");
            return (Criteria) this;
        }

        public Criteria andFundNewRateIsNotNull() {
            addCriterion("fund_new_rate is not null");
            return (Criteria) this;
        }

        public Criteria andFundNewRateEqualTo(String value) {
            addCriterion("fund_new_rate =", value, "fundNewRate");
            return (Criteria) this;
        }

        public Criteria andFundNewRateNotEqualTo(String value) {
            addCriterion("fund_new_rate <>", value, "fundNewRate");
            return (Criteria) this;
        }

        public Criteria andFundNewRateGreaterThan(String value) {
            addCriterion("fund_new_rate >", value, "fundNewRate");
            return (Criteria) this;
        }

        public Criteria andFundNewRateGreaterThanOrEqualTo(String value) {
            addCriterion("fund_new_rate >=", value, "fundNewRate");
            return (Criteria) this;
        }

        public Criteria andFundNewRateLessThan(String value) {
            addCriterion("fund_new_rate <", value, "fundNewRate");
            return (Criteria) this;
        }

        public Criteria andFundNewRateLessThanOrEqualTo(String value) {
            addCriterion("fund_new_rate <=", value, "fundNewRate");
            return (Criteria) this;
        }

        public Criteria andFundNewRateLike(String value) {
            addCriterion("fund_new_rate like", value, "fundNewRate");
            return (Criteria) this;
        }

        public Criteria andFundNewRateNotLike(String value) {
            addCriterion("fund_new_rate not like", value, "fundNewRate");
            return (Criteria) this;
        }

        public Criteria andFundNewRateIn(List<String> values) {
            addCriterion("fund_new_rate in", values, "fundNewRate");
            return (Criteria) this;
        }

        public Criteria andFundNewRateNotIn(List<String> values) {
            addCriterion("fund_new_rate not in", values, "fundNewRate");
            return (Criteria) this;
        }

        public Criteria andFundNewRateBetween(String value1, String value2) {
            addCriterion("fund_new_rate between", value1, value2, "fundNewRate");
            return (Criteria) this;
        }

        public Criteria andFundNewRateNotBetween(String value1, String value2) {
            addCriterion("fund_new_rate not between", value1, value2, "fundNewRate");
            return (Criteria) this;
        }

        public Criteria andFundHasMoneyIsNull() {
            addCriterion("fund_has_money is null");
            return (Criteria) this;
        }

        public Criteria andFundHasMoneyIsNotNull() {
            addCriterion("fund_has_money is not null");
            return (Criteria) this;
        }

        public Criteria andFundHasMoneyEqualTo(Double value) {
            addCriterion("fund_has_money =", value, "fundHasMoney");
            return (Criteria) this;
        }

        public Criteria andFundHasMoneyNotEqualTo(Double value) {
            addCriterion("fund_has_money <>", value, "fundHasMoney");
            return (Criteria) this;
        }

        public Criteria andFundHasMoneyGreaterThan(Double value) {
            addCriterion("fund_has_money >", value, "fundHasMoney");
            return (Criteria) this;
        }

        public Criteria andFundHasMoneyGreaterThanOrEqualTo(Double value) {
            addCriterion("fund_has_money >=", value, "fundHasMoney");
            return (Criteria) this;
        }

        public Criteria andFundHasMoneyLessThan(Double value) {
            addCriterion("fund_has_money <", value, "fundHasMoney");
            return (Criteria) this;
        }

        public Criteria andFundHasMoneyLessThanOrEqualTo(Double value) {
            addCriterion("fund_has_money <=", value, "fundHasMoney");
            return (Criteria) this;
        }

        public Criteria andFundHasMoneyIn(List<Double> values) {
            addCriterion("fund_has_money in", values, "fundHasMoney");
            return (Criteria) this;
        }

        public Criteria andFundHasMoneyNotIn(List<Double> values) {
            addCriterion("fund_has_money not in", values, "fundHasMoney");
            return (Criteria) this;
        }

        public Criteria andFundHasMoneyBetween(Double value1, Double value2) {
            addCriterion("fund_has_money between", value1, value2, "fundHasMoney");
            return (Criteria) this;
        }

        public Criteria andFundHasMoneyNotBetween(Double value1, Double value2) {
            addCriterion("fund_has_money not between", value1, value2, "fundHasMoney");
            return (Criteria) this;
        }

        public Criteria andFundBuyPriceIsNull() {
            addCriterion("fund_buy_price is null");
            return (Criteria) this;
        }

        public Criteria andFundBuyPriceIsNotNull() {
            addCriterion("fund_buy_price is not null");
            return (Criteria) this;
        }

        public Criteria andFundBuyPriceEqualTo(Double value) {
            addCriterion("fund_buy_price =", value, "fundBuyPrice");
            return (Criteria) this;
        }

        public Criteria andFundBuyPriceNotEqualTo(Double value) {
            addCriterion("fund_buy_price <>", value, "fundBuyPrice");
            return (Criteria) this;
        }

        public Criteria andFundBuyPriceGreaterThan(Double value) {
            addCriterion("fund_buy_price >", value, "fundBuyPrice");
            return (Criteria) this;
        }

        public Criteria andFundBuyPriceGreaterThanOrEqualTo(Double value) {
            addCriterion("fund_buy_price >=", value, "fundBuyPrice");
            return (Criteria) this;
        }

        public Criteria andFundBuyPriceLessThan(Double value) {
            addCriterion("fund_buy_price <", value, "fundBuyPrice");
            return (Criteria) this;
        }

        public Criteria andFundBuyPriceLessThanOrEqualTo(Double value) {
            addCriterion("fund_buy_price <=", value, "fundBuyPrice");
            return (Criteria) this;
        }

        public Criteria andFundBuyPriceIn(List<Double> values) {
            addCriterion("fund_buy_price in", values, "fundBuyPrice");
            return (Criteria) this;
        }

        public Criteria andFundBuyPriceNotIn(List<Double> values) {
            addCriterion("fund_buy_price not in", values, "fundBuyPrice");
            return (Criteria) this;
        }

        public Criteria andFundBuyPriceBetween(Double value1, Double value2) {
            addCriterion("fund_buy_price between", value1, value2, "fundBuyPrice");
            return (Criteria) this;
        }

        public Criteria andFundBuyPriceNotBetween(Double value1, Double value2) {
            addCriterion("fund_buy_price not between", value1, value2, "fundBuyPrice");
            return (Criteria) this;
        }

        public Criteria andFundHasAmountIsNull() {
            addCriterion("fund_has_amount is null");
            return (Criteria) this;
        }

        public Criteria andFundHasAmountIsNotNull() {
            addCriterion("fund_has_amount is not null");
            return (Criteria) this;
        }

        public Criteria andFundHasAmountEqualTo(Double value) {
            addCriterion("fund_has_amount =", value, "fundHasAmount");
            return (Criteria) this;
        }

        public Criteria andFundHasAmountNotEqualTo(Double value) {
            addCriterion("fund_has_amount <>", value, "fundHasAmount");
            return (Criteria) this;
        }

        public Criteria andFundHasAmountGreaterThan(Double value) {
            addCriterion("fund_has_amount >", value, "fundHasAmount");
            return (Criteria) this;
        }

        public Criteria andFundHasAmountGreaterThanOrEqualTo(Double value) {
            addCriterion("fund_has_amount >=", value, "fundHasAmount");
            return (Criteria) this;
        }

        public Criteria andFundHasAmountLessThan(Double value) {
            addCriterion("fund_has_amount <", value, "fundHasAmount");
            return (Criteria) this;
        }

        public Criteria andFundHasAmountLessThanOrEqualTo(Double value) {
            addCriterion("fund_has_amount <=", value, "fundHasAmount");
            return (Criteria) this;
        }

        public Criteria andFundHasAmountIn(List<Double> values) {
            addCriterion("fund_has_amount in", values, "fundHasAmount");
            return (Criteria) this;
        }

        public Criteria andFundHasAmountNotIn(List<Double> values) {
            addCriterion("fund_has_amount not in", values, "fundHasAmount");
            return (Criteria) this;
        }

        public Criteria andFundHasAmountBetween(Double value1, Double value2) {
            addCriterion("fund_has_amount between", value1, value2, "fundHasAmount");
            return (Criteria) this;
        }

        public Criteria andFundHasAmountNotBetween(Double value1, Double value2) {
            addCriterion("fund_has_amount not between", value1, value2, "fundHasAmount");
            return (Criteria) this;
        }

        public Criteria andIsHoldIsNull() {
            addCriterion("is_hold is null");
            return (Criteria) this;
        }

        public Criteria andIsHoldIsNotNull() {
            addCriterion("is_hold is not null");
            return (Criteria) this;
        }

        public Criteria andIsHoldEqualTo(Integer value) {
            addCriterion("is_hold =", value, "isHold");
            return (Criteria) this;
        }

        public Criteria andIsHoldNotEqualTo(Integer value) {
            addCriterion("is_hold <>", value, "isHold");
            return (Criteria) this;
        }

        public Criteria andIsHoldGreaterThan(Integer value) {
            addCriterion("is_hold >", value, "isHold");
            return (Criteria) this;
        }

        public Criteria andIsHoldGreaterThanOrEqualTo(Integer value) {
            addCriterion("is_hold >=", value, "isHold");
            return (Criteria) this;
        }

        public Criteria andIsHoldLessThan(Integer value) {
            addCriterion("is_hold <", value, "isHold");
            return (Criteria) this;
        }

        public Criteria andIsHoldLessThanOrEqualTo(Integer value) {
            addCriterion("is_hold <=", value, "isHold");
            return (Criteria) this;
        }

        public Criteria andIsHoldIn(List<Integer> values) {
            addCriterion("is_hold in", values, "isHold");
            return (Criteria) this;
        }

        public Criteria andIsHoldNotIn(List<Integer> values) {
            addCriterion("is_hold not in", values, "isHold");
            return (Criteria) this;
        }

        public Criteria andIsHoldBetween(Integer value1, Integer value2) {
            addCriterion("is_hold between", value1, value2, "isHold");
            return (Criteria) this;
        }

        public Criteria andIsHoldNotBetween(Integer value1, Integer value2) {
            addCriterion("is_hold not between", value1, value2, "isHold");
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