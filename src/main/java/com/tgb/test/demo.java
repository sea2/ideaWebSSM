package com.tgb.test;


import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

public class demo
{
	/**
	 *类名：demo
	 *功能  服务器端签名与验签Demo
	 *版本：1.0
	 *日期：2014-06-26
	 '说明：
	 '以下代码只是为了方便商户测试而提供的样例代码，商户可以根据自己的需要，按照技术文档编写,并非一定要使用该代码。
	 '该代码仅供学习和研究爱贝云计费接口使用，只是提供一个参考。
	*/
	//
	
	public static void main(String [] argv)
	{
		
		String content = "{\"appid\":\"500000185\",\"count\":1,\"cporderid\":\"1404124310243\",\"cpprivate\":\"cpprivateinfo123456\",\"feetype\":0,\"money\":100,\"paytype\":5,\"result\":\"0\",\"transid\":\"32011406301831300001\",\"transtime\":\"2014-06-30 18:31:32\",\"transtype\":0,\"waresid\":1}";
		
		// 私钥
		String priKey = "MIICXgIBAAKBgQCO9+vZNT7xr2ZDJNOJguxcEqxSJzIeM1ZidVYAxEOzKLwCz5vFc4iay+SBo1fOFtnPgpgP9h7RM6O5eFKIkxmBDD3Pj3xT0mDWHfUijeBBW+Phjhzr+dYdIJRj8qVosy/FYTbza20RjzSt1mBTmc0mCD8Yzb23kCuhV6VQeVyjeQIDAQABAoGBAIpoLWWMjLFBkwixoDDiFJxWX4jw9S4TmS+cVHRNjRTm/IzkG/Odk8P4W/G9BoY3zQl9bmUVamQxT/GAMLaTYf36Sq9GbXElzY5cg9eYBOYrwt76Le3w1dqi0Yx/HZvZsBJu+ckHTESsY2ZD+51koy1v2B4MGc6EAocr+erbW1zhAkEA5OzZsJUHvIaoVobdetCLfFB3MJQxFZYLqKrkJCN5SOc0VMPGK5WV9qyFKIC/JBMM3hjQUUz0eonib3oRXbIw/QJBAJ/gkLPZEl9wPLMssZkyTh3WsN4RLLa8s4Ik2QQn0LRCmCuKzBV+dM5yPyHMHCEWh7WfZV4CeAcLnhGSKoRIUy0CQF+GYdQoa+EEQ6xPfI3qBbprDUFNJSo/wT+xh5942fxM1e5k/wVi1v/mv23GQ3w3ItBuhEbYmM+lR8KCqkpxt7UCQQCdAERZuSPHwUp6kbteO/5mYvyRNsB4O1r0xQawhAD55CPXLpg3y1UdnyfMIsrE24EtpHhBF5+TG5+Alc9W1EeJAkEArbyLU+NmO8j8ZUnvC+Bz+pv98lV7WJudy2LmRMVFyjBpdPIcqXAvwv4waVM2UrKaY6rMFj57DcncWlXXqX0cMQ==";
		// 公钥
		String pubKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCs9FrLDMw/acHx5RD8vPjRUp7F/gnmaKIEcq8wHQZCC01QrpDnyXmqktOxkqVYLUpPT3BZNy6mOfc53XYGuin+hwOk6a9fU9zrNVN8zXlO/V/50+oWsPU+J8EQ6bVkHUgWZlg5GPcLwNvKAd7WElC8ZTf0tQhFzI5raajcOGrBwQIDAQAB";


		String token= null;
		try {
			token = URLEncoder.encode("YAEhenlKn_tOh38ci_qhbKRBBHgdSXfIGISYVjuP0gxqLOYBEfrozdBtz_RCZLcmd5Oqt4Q","UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		// 签名
		String sign = SignHelper.sign(token, priKey);
		try {
			System.out.println("https://siapcn1.ipengtai.com/api/oauth/get_token_info?appid=5003166782&token="+token+"&sign="+sign1);;

		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}



	}
	
}
