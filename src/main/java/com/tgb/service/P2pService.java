package com.tgb.service;

import com.tgb.model.P2pInfo;

import java.util.List;

public interface P2pService {

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

    List<P2pInfo> findAllByStr(String byStr);

    P2pInfo findById(int id);

    void updateReta3(P2pInfo mP2pInfo);
    void updateReta6(P2pInfo mP2pInfo);

    void updateLove(int id, String score);

    void updateRemark(int id, String remark);

    void updateRankNull(String s);

    void save_data(String sqlStr);
}
