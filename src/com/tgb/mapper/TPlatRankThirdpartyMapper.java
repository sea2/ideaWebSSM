package com.tgb.mapper;

import com.tgb.model.TPlatRankThirdparty;
import com.tgb.model.TPlatRankThirdpartyExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TPlatRankThirdpartyMapper {
    int countByExample(TPlatRankThirdpartyExample example);

    int deleteByExample(TPlatRankThirdpartyExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TPlatRankThirdparty record);

    int insertSelective(TPlatRankThirdparty record);

    List<TPlatRankThirdparty> selectByExample(TPlatRankThirdpartyExample example);

    TPlatRankThirdparty selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TPlatRankThirdparty record, @Param("example") TPlatRankThirdpartyExample example);

    int updateByExample(@Param("record") TPlatRankThirdparty record, @Param("example") TPlatRankThirdpartyExample example);

    int updateByPrimaryKeySelective(TPlatRankThirdparty record);

    int updateByPrimaryKey(TPlatRankThirdparty record);
}