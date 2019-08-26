package com.tgb.util;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * 拦截器
 */
public class AllInterceptor extends HandlerInterceptorAdapter {
    /**
     * 在业务处理器处理请求之前被调用 如果返回false 从当前的拦截器往回执行所有拦截器的afterCompletion(),再退出拦截器链
     * 如果返回true 执行下一个拦截器,直到所有的拦截器都执行完毕 再执行被拦截的Controller 然后进入拦截器链,
     * 从最后一个拦截器往回执行所有的postHandle() 接着再从最后一个拦截器往回执行所有的afterCompletion()
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        String requestUri = request.getRequestURI(); // 请求完整路径，可用于登陆后跳转
        String contextPath = request.getContextPath(); // 项目下完整路径
        String url = requestUri.substring(contextPath.length()); // 请求页面
        String requestURL = request.getRequestURL().toString();
        //默认具有.的请求是资源文件请求，没有改变的资源不会请求，使用缓存,查看网页调用资源可以使用浏览器f12查看
        if (requestURL.endsWith(".js") || requestURL.endsWith(".css") || requestURL.endsWith(".jsp") || requestURL.endsWith(".html") || requestURL.endsWith(".png") || requestURL.endsWith(".jpg") || requestURL.endsWith(".ico")) {
          //  System.out.print("\n" + TimeUtil.getNowTime() + "发生拦截...[资源]..." + requestURL);
        } else {
            System.out.print("\n" + TimeUtil.getNowTime() + "发生拦截...[" + request.getMethod() + "]...");
            System.out.println("请求：" + request.getRequestURL());
            String requestParams = HttpUtil.getRequestParameter(request, response);
            if (!StringUtils.isEmpty(requestParams))
                System.out.println("请求参数：" + requestParams);
        }

        return true;

//		if (new CustomUri().getListStr().contains(requestUri)) {
//			return true;
//		} else {// 小财迷测试服务
//			BufferedReader in = new BufferedReader(new InputStreamReader(request.getInputStream()));
//			StringBuilder sb = new StringBuilder();
//			String line = null;
//			while ((line = in.readLine()) != null) {
//				sb.append(line);
//			}
//			String urlStr = "http://123.206.114.224" + requestUri;
////			String urlStr = "http://192.168.69.250" + requestUri;
//			System.out.println("请求参数：" + sb.toString());
//			String jsonStr = HttpUtil.interceptorHttp(requestUri, urlStr, sb.toString(), request.getMethod(),
//					request.getQueryString());
//			try {
//				// 正常接口返回
//				response.setContentType("application/json;charset=UTF-8");
//				response.setCharacterEncoding("UTF-8");
//				response.getWriter().write(jsonStr);
//				response.getWriter().flush();
//				response.getWriter().close();
//
//				// jsonp格式返回
//				String renderStr = "jsonpCallback" + "(" + jsonStr + ")";
//				response.setContentType("text/plain;charset=UTF-8");
//				response.getWriter().write(renderStr);
//				response.getWriter().flush();
//				response.getWriter().close();
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//			return false;
//		}



    }

    /**
     * 在业务处理器处理请求执行完成后,生成视图之前执行的动作 可在modelAndView中加入数据，比如当前时间
     */
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        if (modelAndView != null) { // 加入当前时间
            modelAndView.addObject("var", "测试postHandle");
        }
    }

    /**
     * 在DispatcherServlet完全处理完请求后被调用,可用于清理资源等
     * <p>
     * 当有拦截器抛出异常时,会从当前拦截器往回执行所有的拦截器的afterCompletion()
     */
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
    }

}