package com.tgb.test;

import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.concurrent.*;

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


        /**
         * ExecutorService
         */

        ExecutorService mExecutor = Executors.newSingleThreadExecutor();
        Future<Integer> result2 = mExecutor.submit(new Callable<Integer>() {
            @Override
            public Integer call() throws Exception {
                return fibc(20);
            }
        });
        try {
            Integer it1 = result2.get();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }

        /**

         * FutureTask则是一个RunnableFuture<v>，即实现了Runnbale又实现了Futrue<v>这两个接口，

         * 另外它还可以包装Runnable(实际上会转换为Callable)和Callable

         * <v>，所以一般来讲是一个符合体了，它可以通过Thread包装来直接执行，也可以提交给ExecuteService来执行

         * ，并且还可以通过v get()返回执行结果，在线程体没有执行完成的时候，主线程一直阻塞等待，执行完则直接返回结果。

         */
        FutureTask<Integer> futureTask = new FutureTask<Integer>(new Callable<Integer>() {
            @Override
            public Integer call() throws Exception {
                return fibc(20);
            }
        });
        // 提交futureTask
        mExecutor.submit(futureTask);




    }


    /**
     * 效率底下的斐波那契数列, 耗时的操作
     *
     * @param num
     * @return
     */

    static int fibc(int num) {
        if (num == 0) {
            return 0;
        }
        if (num == 1) {
            return 1;
        }
        return fibc(num - 1) + fibc(num - 2);
    }

}
