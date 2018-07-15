package com.tgb.mapper;

import com.tgb.model.P2pInfo;
import com.tgb.model.TPlatRankThirdparty;
import com.tgb.model.TPlatRankThirdpartyExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface P2pmapper {


    void save_init(P2pInfo mP2pInfo);

    List<P2pInfo> findAll();

    void delById(int id);

    void updateScore(P2pInfo mP2pInfo);


    void updateRankGenTou(P2pInfo mP2pInfo);

    void updateRank360(P2pInfo mP2pInfo);

    void updateZhiJi(P2pInfo mP2pInfo);

    void updateZhiJiCode(P2pInfo mP2pInfo);

    void updateTianYanCode(P2pInfo mP2pInfo);

    void updateTianYanRank(P2pInfo mP2pInfo);

    List<P2pInfo> findAllByStr(@Param("str") String str);

    void updateRankNull(@Param("str") String str);

    P2pInfo findById(int id);

    void updateReta3(P2pInfo mP2pInfo);

    void updateReta6(P2pInfo mP2pInfo);

    void updateLove(@Param("id") int id, @Param("score") String score);

    void updateRemark(@Param("id") int id, @Param("remark") String remark);

    void save_data(@Param("str") String sqlStr);




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
