package com.tgb.model;

import java.util.List;

public class ProjectResult {

	
	List<ProjectInfo> listproject;
	
	
	
	public List<ProjectInfo> getListproject() {
		return listproject;
	}



	public void setListproject(List<ProjectInfo> listproject) {
		this.listproject = listproject;
	}



	public static class ProjectInfo {
		String projectname;
		String projectmoney;
		String projectid;
		String projecttype;

		public String getProjectname() {
			return projectname;
		}

		public void setProjectname(String projectname) {
			this.projectname = projectname;
		}

		public String getProjectmoney() {
			return projectmoney;
		}

		public void setProjectmoney(String projectmoney) {
			this.projectmoney = projectmoney;
		}

		public String getProjectid() {
			return projectid;
		}

		public void setProjectid(String projectid) {
			this.projectid = projectid;
		}

		public String getProjecttype() {
			return projecttype;
		}

		public void setProjecttype(String projecttype) {
			this.projecttype = projecttype;
		}
	}
}
