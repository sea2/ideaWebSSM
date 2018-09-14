package com.tgb.test;

public class ThreadTest {

    //同步关键字特殊域
    static volatile int num = 0;


    public static void main(String[] args) {
     /*    for (int i = 0; i < 10; i++) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    for (int n = 0; n < 10; n++) {
                        num++;
                        System.out.println(Thread.currentThread().getName() + "=" + num);
                    }
                }
            }).start();
        }*/

        for (int i = 0; i < 10; i++) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    synchronized (this) {
                        for (int n = 0; n < 10; n++) {
                            num++;
                            System.out.println(Thread.currentThread().getName() + "=" + num);
                        }
                    }
                }
            }).start();
        }

    }


}
