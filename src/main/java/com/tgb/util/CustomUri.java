package com.tgb.util;

import java.util.ArrayList;
import java.util.List;

public class CustomUri {

	List<String> listStr;

	CustomUri() {
			listStr = new ArrayList<String>();
		//	listStr.add("/v1.0/app/account/reCastProductList");
	}

	public List<String> getListStr() {
		return listStr;
	}

	public void setListStr(List<String> listStr) {
		this.listStr = listStr;
	}

}
