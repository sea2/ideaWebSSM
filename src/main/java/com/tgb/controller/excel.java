package com.tgb.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;

import com.tgb.model.User;
import com.tgb.service.UserService;
import com.tgb.util.StringUtils;

import jxl.Cell;
import jxl.CellType;
import jxl.Sheet;
import jxl.Workbook;
import jxl.write.Label;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;
import jxl.write.biff.RowsExceededException;

public class excel {
	@Autowired
	private static UserService userService;

	public static void main(String[] args)

	{

		jxl.Workbook readwb = null;

		try

		{

			// 构建Workbook对象, 只读Workbook对象

			// 直接从本地文件创建Workbook

			InputStream instream = new FileInputStream("F:/记账.xls");

			readwb = Workbook.getWorkbook(instream);

			// Sheet的下标是从0开始

			// 获取第一张Sheet表

			Sheet readsheet = readwb.getSheet(0);

			// 获取Sheet表中所包含的总列数

			int rsColumns = readsheet.getColumns();

			// 获取Sheet表中所包含的总行数

			int rsRows = readsheet.getRows();

			// 获取指定单元格的对象引用
			Map<String, Long> map = new HashMap<>();
			for (int i = 0; i < rsRows; i++)

			{

				/*
				 * for (int j = 0; j < rsColumns; j++)
				 * 
				 * { Cell cell = readsheet.getCell(j, i);
				 * System.out.print(cell.getContents() + " "); }
				 */

				Cell cell2 = readsheet.getCell(2, i);
				// System.out.println(cell2.getContents());

				if (map.get(cell2.getContents().trim()) == null) {
					map.put(cell2.getContents().trim(), 1L);
				} else {
					Long value = map.get(cell2.getContents().trim());
					map.put(cell2.getContents().trim(), value + 1);
				}

			}

			System.out.print(map.toString() + " ");

			Iterator it = map.entrySet().iterator();
			while (it.hasNext()) {
				Entry entry = (Entry) it.next();
				System.out.println("key= " + entry.getKey() + " and value= " + entry.getValue());
			}

			   
	        //这里将map.entrySet()转换成list
	        List<Entry<String,Long>> list = new ArrayList<Entry<String,Long>>(map.entrySet());
	        //然后通过比较器来实现排序
	        Collections.sort(list,new Comparator<Entry<String,Long>>() {
	            //升序排序
	            public int compare(Entry<String, Long> o1,
	                    Entry<String, Long> o2) {
	                return o2.getValue().compareTo(o1.getValue());
	            }
	            
	        });
	        
	        for(Entry<String,Long> mapping:list){
	               System.out.println(mapping.getKey()+":"+mapping.getValue()); 
	          } 
			
			
			
			
			
			
			
			
			// writeExcel("F:/理财排行2.xls", listStrNew);

			// 利用已经创建的Excel工作薄,创建新的可写入的Excel工作薄

			jxl.write.WritableWorkbook wwb = Workbook.createWorkbook(new File(

					"F:/红楼人物1.xls"), readwb);

			// 读取第一张工作表

			jxl.write.WritableSheet ws = wwb.getSheet(0);

			// 获得第一个单元格对象

			jxl.write.WritableCell wc = ws.getWritableCell(0, 0);

			// 判断单元格的类型, 做出相应的转化

			if (wc.getType() == CellType.LABEL)

			{

				Label l = (Label) wc;

				l.setString("新姓名");

			}

			// 写入Excel对象

			wwb.write();

			wwb.close();

		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			readwb.close();

		}

	}

	/**
	 * 生成一个Excel文件
	 * 
	 * @param fileName
	 *            要生成的Excel文件名
	 */
	public static void writeExcel(String fileName, List<String> list) {
		WritableWorkbook wwb = null;
		try {
			// 首先要使用Workbook类的工厂方法创建一个可写入的工作薄(Workbook)对象
			wwb = Workbook.createWorkbook(new File(fileName));
		} catch (IOException e) {
			e.printStackTrace();
		}
		if (wwb != null) {
			// 创建一个可写入的工作表
			// Workbook的createSheet方法有两个参数，第一个是工作表的名称，第二个是工作表在工作薄中的位置
			WritableSheet ws = wwb.createSheet("sheet1", 0);

			// 下面开始添加单元格
			for (int i = 0; i < list.size(); i++) {
				for (int j = 0; j < 1; j++) {
					// 这里需要注意的是，在Excel中，第一个参数表示列，第二个表示行
					Label labelC = new Label(j, i, list.get(i));
					try {
						// 将生成的单元格添加到工作表中
						ws.addCell(labelC);
					} catch (RowsExceededException e) {
						e.printStackTrace();
					} catch (WriteException e) {
						e.printStackTrace();
					}
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
	}

	class ContentInfo {
		String name;
		int amount;

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public int getAmount() {
			return amount;
		}

		public void setAmount(int amount) {
			this.amount = amount;
		}

	}

}
