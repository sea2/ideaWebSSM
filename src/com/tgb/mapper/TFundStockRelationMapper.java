package com.tgb.mapper;

import com.tgb.model.TFundStockRelation;
import com.tgb.model.TFundStockRelationExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TFundStockRelationMapper {
    int countByExample(TFundStockRelationExample example);

    int deleteByExample(TFundStockRelationExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TFundStockRelation record);

    int insertSelective(TFundStockRelation record);

    List<TFundStockRelation> selectByExample(TFundStockRelationExample example);

    TFundStockRelation selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TFundStockRelation record, @Param("example") TFundStockRelationExample example);

    int updateByExample(@Param("record") TFundStockRelation record, @Param("example") TFundStockRelationExample example);

    int updateByPrimaryKeySelective(TFundStockRelation record);

    int updateByPrimaryKey(TFundStockRelation record);
}