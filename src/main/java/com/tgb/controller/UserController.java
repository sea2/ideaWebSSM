package com.tgb.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tgb.model.User;
import com.tgb.model.UserClass;
import com.tgb.service.UserService;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import jxl.write.Label;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;
import jxl.write.biff.RowsExceededException;
import net.sf.json.JSONObject;

@Controller
public class UserController {

	@Autowired
	private UserService userService;

	/**
	 * 获取所有用户列表
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping("user/getAllUser")
	public String getAllUser(HttpServletRequest request) {

		List<User> findAll = userService.findAll();

		request.setAttribute("userList", findAll);
		return "/allUser";
	}

	@RequestMapping(value = "app/account/property", method = RequestMethod.POST)
	@ResponseBody
	public void getDataString(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		// String uid = request.getParameter("version");
		System.out.println("----" + request.getParameter("test"));
		// System.out.println("----" + readJSONString(request));
		System.out.println("++-----" + jsonObj.toString());
		String result = "{\"code\":\"200\",\"result\":{\"total_money\":\"18080\",\"yesterday_income\":\"80\",\"unread_messages\":\"2\",\"head_portrait\":\"\",\"menu_list\":[{\"name\":\"\",\"menu\":[{\"param_name\":\"账户余额(元)\",\"param_value\":\"2392.00\",\"icon_url\":\"\",\"linked_url\":\"xiaocaimi://accountBalance?money=2392.00\"},{\"param_name\":\"优惠券(3)\",\"param_value\":\"\",\"icon_url\":\"\",\"linked_url\":\"xiaocaimi://coupon\"},{\"param_name\":\"交易记录\",\"param_value\":\"\",\"icon_url\":\"\",\"linked_url\":\"xiaocaimi://transactionFlowList\"},{\"param_name\":\"回款日历\",\"param_value\":\"\",\"icon_url\":\"\",\"linked_url\":\"xiaocaimi://plan\"}]}]}}";
		try {
			response.setContentType("application/json;charset=UTF-8");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(result);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "user/classList", method = RequestMethod.GET)
	@ResponseBody
	public List<UserClass> getAllUserClassList(HttpServletRequest request, HttpServletResponse response) {
		List<UserClass> findAll = userService.findClassAll();
		return findAll;
	}

	@RequestMapping("user/login.html")
	public String getlogin(HttpServletRequest request, HttpServletResponse response) {
		return "/p2p/login.jsp";
	}

	@RequestMapping("html/activity")
	public void gethtml1(HttpServletRequest request, HttpServletResponse response) {
		// 不受渲染器配置影响
		try {
			request.getRequestDispatcher("html/index.htmll").forward(request, response);
		} catch (ServletException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping("user/index.html")
	public String gethome(HttpServletRequest request, HttpServletResponse response) {
		request.setAttribute("title", "精选");
		return "/home";
	}

	@RequestMapping("user/list.html")
	public String getlist(HttpServletRequest request, HttpServletResponse response) {
		request.setAttribute("title", "理财列表");
		return "/home";
	}

	@RequestMapping("user/member.html")
	public String getmember(HttpServletRequest request, HttpServletResponse response) {
		request.setAttribute("title", "账户中心");
		return "/home";
	}

	@RequestMapping("user/detail.html")
	public String getdetail(HttpServletRequest request, HttpServletResponse response) {
		request.setAttribute("title", "产品详情");
		return "/home";
	}

	@RequestMapping("user/member/capitalflow.html")
	public String getcapitalflow(HttpServletRequest request, HttpServletResponse response) {
		request.setAttribute("title", "资金记录");
		return "/home";
	}

	@RequestMapping("user/confirm_order.html")
	public String getconfirm_order(HttpServletRequest request, HttpServletResponse response) {
		request.setAttribute("title", "确认购买");
		return "/home";
	}

	@RequestMapping("user/join.html")
	public String getjoin(HttpServletRequest request, HttpServletResponse response) {
		request.setAttribute("title", "投标结果");
		return "/home";
	}

	@RequestMapping("user/member/trade.html")
	public String getmtrade(HttpServletRequest request, HttpServletResponse response) {
		request.setAttribute("title", "持有资产列表");
		return "/home";
	}

	@RequestMapping("user/member/trade/item.html")
	public String getmtradeitem(HttpServletRequest request, HttpServletResponse response) {
		request.setAttribute("title", "持有资产详情");
		return "/home";
	}

	@RequestMapping("user/member/income.html")
	public String getincome(HttpServletRequest request, HttpServletResponse response) {
		request.setAttribute("title", "累计收益");
		return "/home";
	}

	@RequestMapping("user/member/income/yesterday.html")
	public String getyincome(HttpServletRequest request, HttpServletResponse response) {
		request.setAttribute("title", "昨日收益");
		return "/home";
	}

	@RequestMapping("user/member/income/total.html")
	public String gettotal(HttpServletRequest request, HttpServletResponse response) {
		request.setAttribute("title", "总资产");
		return "/home";
	}

	@RequestMapping("user/member/calendar.html")
	public String getcalendar(HttpServletRequest request, HttpServletResponse response) {
		request.setAttribute("title", "回款日历");
		return "/home";
	}

	@RequestMapping("user/member/calendar/day.html")
	public String getcalendarday(HttpServletRequest request, HttpServletResponse response) {
		request.setAttribute("title", "回款计划");
		return "/home";
	}

	@RequestMapping("user/member/coupons.html")
	public String getcoupons(HttpServletRequest request, HttpServletResponse response) {
		request.setAttribute("title", "优惠券");
		return "/home";
	}

	/**
	 * 跳转到添加用户界面
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping("user/toAddUser")
	public String toAddUser(HttpServletRequest request) {

		return "/addUser";
	}

	@RequestMapping("user/toTestJsp")
	public String toTestJsp(HttpServletRequest request) {

		return "/testjsp";
	}

	/**
	 * 添加用户并重定向
	 * 
	 * @param user
	 * @param request
	 * @return
	 */
	@RequestMapping("user/addUser")
	public String addUser(User user, HttpServletRequest request) {
		long ct = System.currentTimeMillis();
		user.setPhone(String.valueOf(ct));
		userService.save(user);
		return "redirect:/user/getAllUser";
	}

	/**
	 * 编辑用户
	 * 
	 * @param user
	 * @param request
	 * @return
	 */
	@RequestMapping("user/updateUser")
	public String updateUser(User user, HttpServletRequest request) {

		if (userService.update(user)) {
			user = userService.findById(user.getId());
			request.setAttribute("user", user);
			return "redirect:/user/getAllUser";
		} else {
			return "/error";
		}
	}

	/**
	 * 根据id查询单个用户
	 * 
	 * @param id
	 * @param request
	 * @return
	 */
	@RequestMapping("user/getUser")
	public String getUser(int id, HttpServletRequest request) {

		request.setAttribute("user", userService.findById(id));
		return "/editUser";
	}

	@RequestMapping("user/tohtml")
	public String tohtml(HttpServletRequest request) {
		return "/html5";
	}

	/**
	 * 删除用户
	 * 
	 * @param id
	 * @param request
	 * @param response
	 */
	@RequestMapping("user/delUser")
	public void delUser(int id, HttpServletRequest request, HttpServletResponse response) {
		String result = "{\"result\":\"error\"}";

		if (userService.delete(id)) {
			result = "{\"result\":\"success\"}";
		}

		response.setContentType("application/json");

		try {
			PrintWriter out = response.getWriter();
			out.write(result);
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	/*----------------------------------Excel读写----begin-----------------------------------------------------------*/

	/**
	 * excel写入数据库
	 */
	@RequestMapping(value = "user/addInfo", method = RequestMethod.GET)
	@ResponseBody
	public boolean addinfo(HttpServletRequest request, HttpServletResponse response) {

		jxl.Workbook readwb = null;
		try {
			// 构建Workbook对象, 只读Workbook对象
			// 直接从本地文件创建Workbook
			InputStream instream = new FileInputStream("F:/test.xls");
			readwb = Workbook.getWorkbook(instream);
			// Sheet的下标是从0开始
			// 获取第一张Sheet表
			Sheet readsheet = readwb.getSheet(0);
			// 获取Sheet表中所包含的总列数
			// int rsColumns = readsheet.getColumns();
			// 获取Sheet表中所包含的总行数
			int rsRows = readsheet.getRows();
			// 获取指定单元格的对象引用
			for (int i = 0; i < rsRows; i++) {
				/*
				 * for (int j = 0; j < rsColumns; j++)
				 * 
				 * { Cell cell = readsheet.getCell(j, i);
				 * System.out.print(cell.getContents() + " "); }
				 */

				Cell cell = readsheet.getCell(1, i);
				Cell cell2 = readsheet.getCell(2, i);
				User user = new User(i + 5, cell.getContents(), cell2.getContents(), cell2.getContents());
				userService.save(user);
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			readwb.close();
		}
		return true;
	}

	/**
	 * 读数据库生成一个Excel文件
	 */
	@RequestMapping(value = "user/writeExcelInfo", method = RequestMethod.GET)
	@ResponseBody
	public boolean writeExcel(String fileName) {
		System.out.println(fileName);
		WritableWorkbook wwb = null;
		try {
			// 首先要使用Workbook类的工厂方法创建一个可写入的工作薄(Workbook)对象
			wwb = Workbook.createWorkbook(new File("F:/testWrite.xls"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		if (wwb != null) {
			// 创建一个可写入的工作表
			// Workbook的createSheet方法有两个参数，第一个是工作表的名称，第二个是工作表在工作薄中的位置
			WritableSheet ws = wwb.createSheet("sheet1", 0);

			List<User> findAll = userService.findAll();
			int sizeInt = findAll.size();
			// 下面开始添加单元格
			for (int i = 0; i < sizeInt; i++) {
				User mUser = findAll.get(i);
				// 这里需要注意的是，在Excel中，第一个参数表示列，第二个表示行
				Label labelC = new Label(0, i, mUser.getId() + "");
				Label labelC2 = new Label(1, i, mUser.getUserName());
				Label labelC3 = new Label(2, i, mUser.getAge() + "");
				try {
					// 将生成的单元格添加到工作表中
					ws.addCell(labelC);
					ws.addCell(labelC2);
					ws.addCell(labelC3);
				} catch (RowsExceededException e) {
					e.printStackTrace();
				} catch (WriteException e) {
					e.printStackTrace();
				}
			}
			try {
				// 从内存中写入文件中
				wwb.write();
				// 关闭资源，释放内存
				wwb.close();
			} catch (IOException e) {
				e.printStackTrace();
			} catch (WriteException e) {
				e.printStackTrace();
			}
		}
		return true;
	}

	/*----------------------------------Excel读写---end------------------------------------------------------------*/

}
