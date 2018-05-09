package com.tgb.socket;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

public class SocketClient {


    public static void main(String[] args) throws IOException {
        final Socket socket = new Socket("192.168.3.107", 8888);
        //回复服务端
        new Thread() {
            public void run() {
                try {
                    PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
                    BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
                    String readline = in.readLine();
                    System.out.println(readline);
                    while (true) {
                        out.println(readline);
                        System.out.println(" client send: " + readline);
                        readline = in.readLine();
                        if (readline.equals("over"))
                            break;
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();


        new Thread() {
            public void run() {
                //获得客户端发来的数据
                try {
                    BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                    while (true) {
                        System.out.println("Receive from server : " + reader.readLine());
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();


    }

}
