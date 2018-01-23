package com.tgb.model;

/**
 * 用户
 * 
 * @author liang
 *
 */
public class User {

	private int id;
	private String age;
	private String userName;
	private String phone;
	private String password = "";

	User() {
	}

	
	
	
	
	public String getPassword() {
		return password;
	}





	public void setPassword(String password) {
		this.password = password;
	}





	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public User(int id, String age, String userName, String phone) {
		super();
		this.id = id;
		this.age = age;
		this.userName = userName;
		this.phone = phone;
	}
}
