package com.tgb.test;

public abstract class SuperTestAbstract {


    protected void show(int i) {
        diss(i);
    }


    protected void diss(int i) {
        i++;
        System.out.println("SuperTestAbstract---diss"+i);
    }


}
