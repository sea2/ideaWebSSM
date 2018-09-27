select *FROM t_class LEFT JOIN t_user on t_class.class_id=t_user.user_class_id
SELECT *from t_fund_stock
delete from t_fund_stock where t_fund_stock.stock_code=''
INSERT into t_fund_stock(t_fund_stock.stock_code,t_fund_stock.stock_name,t_fund_stock.stock_new_price,t_fund_stock.stock_new_rate) VALUES('1','2','3','4')
       

SELECT *FROM t_fund_stock_relation
delete from t_fund_stock_relation where t_fund_stock_relation.fund_code='' and t_fund_stock_relation.stock_code=''
INSERT into t_fund_stock_relation(t_fund_stock_relation.fund_code,t_fund_stock_relation.stock_code,t_fund_stock_relation.hold_scale) VALUES('1','1',2)



SELECT *FROM t_fund_stock LEFT JOIN t_fund_stock_relation on t_fund_stock.stock_code=t_fund_stock_relation.stock_code where t_fund_stock_relation.fund_code='000988'



SELECT *from t_plat ORDER BY score desc, is_love desc

