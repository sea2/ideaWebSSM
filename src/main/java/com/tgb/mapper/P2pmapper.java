package com.tgb.mapper;

import java.util.List;

import com.tgb.model.P2pInfo;
import org.apache.ibatis.annotations.Param;

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

    P2pInfo findById(int id);

    void updateReta3(P2pInfo mP2pInfo);
    void updateReta6(P2pInfo mP2pInfo);

    void updateLove(@Param("id")int id,@Param("score") String score);

    void updateRemark(@Param("id")int id, @Param("remark")String remark);
}
