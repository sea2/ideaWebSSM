package com.tgb.test;

public class SuperTest extends SuperTestAbstract {


    public static void main(String[] args) {
        SuperTestAbstract mSuperTestAbstract=new SuperTest();
        mSuperTestAbstract.show(2);
    }


    @Override
    protected void diss(int i) {
        super.diss(i);
        System.out.println("SuperTest---diss"+i);
    }
}
