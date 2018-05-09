package com.tgb.service.impl;

import com.tgb.mapper.P2pmapper;
import com.tgb.model.P2pInfo;
import com.tgb.service.P2pService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
@Transactional // 此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class P2pServiceImpl implements P2pService {
    @Resource
    private P2pmapper mapper;

    @Override
    public void save_init(P2pInfo mP2pInfo) {
        mapper.save_init(mP2pInfo);
    }

    @Override
    public List<P2pInfo> findAll() {
        return mapper.findAll();
    }

    @Override
    public List<P2pInfo> findAllByStr(String str) {
        return mapper.findAllByStr(str);
    }

    @Override
    public P2pInfo findById(int id) {
        return mapper.findById(id);
    }

    @Override
    public void updateReta3(P2pInfo mP2pInfo) {
        mapper.updateReta3(mP2pInfo);
    }

    @Override
    public void updateReta6(P2pInfo mP2pInfo) {
        mapper.updateReta6(mP2pInfo);
    }

    @Override
    public void updateLove(int id, String score) {
        mapper.updateLove(id,score);
    }

    @Override
    public void updateRemark(int id, String remark) {
        mapper.updateRemark(id,remark);
    }

    @Override
    public void updateRankNull(String str) {
        mapper.updateRankNull(str);
    }

    @Override
    public void save_data(String sqlStr) {
        mapper.save_data(sqlStr);
    }

    @Override
    public void delById(int id) {
        mapper.delById(id);

    }

    @Override
    public void updateScore(P2pInfo mP2pInfo) {
        mapper.updateScore(mP2pInfo);

    }

    @Override
    public void updateRankGenTou(P2pInfo mP2pInfo) {
        mapper.updateRankGenTou(mP2pInfo);
    }

    @Override
    public void updateRank360(P2pInfo mP2pInfo) {
        mapper.updateRank360(mP2pInfo);

    }

    @Override
    public void updateZhiJi(P2pInfo mP2pInfo) {
        mapper.updateZhiJi(mP2pInfo);
    }

    @Override
    public void updateZhiJiCode(P2pInfo mP2pInfo) {
        mapper.updateZhiJiCode(mP2pInfo);
    }

    @Override
    public void updateTianYanCode(P2pInfo mP2pInfo) {
        mapper.updateTianYanCode(mP2pInfo);
    }

    @Override
    public void updateTianYanRank(P2pInfo mP2pInfo) {
        mapper.updateTianYanRank(mP2pInfo);
    }


}
