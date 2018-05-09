package com.tgb.socket;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class SocketServer {


    private static final int PORT = 8888;
    private List<Socket> mClientList = new ArrayList<Socket>();
    private ServerSocket server = null;
    private ExecutorService mExecutors = null; // 线程池对象

    public static void main(String[] args) {
        new SocketServer();
    }

    /**
     * 构造方法：任务是启动服务器，等待客户端连接
     */
    public SocketServer() {
        try {
            server = new ServerSocket(PORT);
            mExecutors = Executors.newCachedThreadPool(); // 创建线程池
            System.out.println("服务器已启动，等待客户端连接...");
            Socket client = null;
            /*
             * 用死循环等待多个客户端的连接，连接一个就启动一个线程进行管理
             */
            while (true) {
                client = server.accept();
                // 把客户端放入集合中
                mClientList.add(client);
                mExecutors.execute(new Service(client)); // 启动一个线程，用以守候从客户端发来的消息
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    class Service implements Runnable {
        private Socket socket;
        private BufferedReader in = null;
        private String sendMessage = "";
        private String clientMessage = "";

        public Service(Socket socket) {
            this.socket = socket;
            try {
                in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                // 获得输入流对象
                // 客户端只要一连到服务器，便发送连接成功的信息
                sendMessage = "客户端地址：" + this.socket.getInetAddress()
                        + "\n客户端端口：" + socket.getPort()
                        + "\n服务器全称：" + socket.getLocalSocketAddress();
                this.sendMessage(sendMessage);
                sendMessage = "当前连接总数:" + mClientList.size();
                this.sendMessage(sendMessage);
            } catch (IOException e) {
                e.printStackTrace();
            }

        }

        @Override
        public void run() {
            try {
                while (true) {
                    if ((clientMessage = in.readLine()) != null) {
                        // 当客户端发送的信息为：exit时，关闭连接
                        if (clientMessage.equals("exit")) {
                            closeSocket();
                            break;
                        } else {
                            // 接收客户端发过来的信息message，然后转发给客户端。
                            clientMessage = socket.getInetAddress() + ":" + socket.getPort() + "=" + clientMessage;
                            this.sendMessage(clientMessage);
                        }
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        /**
         * 关闭客户端
         *
         * @throws IOException
         */
        public void closeSocket() throws IOException {
            if (mClientList != null) mClientList.remove(socket);
            if (in != null) in.close();
            sendMessage = "主机:" + socket.getInetAddress() + "关闭连接\n目前在线:" + mClientList.size();
            if (socket != null) socket.close();
            this.sendMessage(sendMessage);
        }

        /**
         * 将接收的消息转发给每一个客户端
         *
         * @param msg
         */

        public void sendMessage(String msg) {
            // 先在控制台输出
            System.out.println(msg);
            int count = mClientList.size();
            // 遍历客户端集合
            for (int i = 0; i < count; i++) {
                Socket mSocket = mClientList.get(i);
                PrintWriter out = null;
                try {
                    out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(mSocket.getOutputStream())), true);// 创建输出流对象
                    out.println(msg);// 转发
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

}
