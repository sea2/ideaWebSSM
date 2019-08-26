package com.tgb.test;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import com.tgb.util.HttpUtil;
import com.tgb.util.StringUtils;
import jxl.Cell;
import jxl.CellType;
import jxl.Sheet;
import jxl.Workbook;
import jxl.write.Label;

/**
 * @author Administrator 统计一列中名字出现的次数数量并排序
 */
public class ExcelMain1 {

	public static void main(String[] args) {

		jxl.Workbook readwb = null;

		try

		{

			// 构建Workbook对象, 只读Workbook对象

			// 直接从本地文件创建Workbook

			InputStream instream = new FileInputStream("C:\\Users\\GM88\\Desktop\\games.xls");

			readwb = Workbook.getWorkbook(instream);

			// Sheet的下标是从0开始

		/*	------------------获取第 几张Sheet表  0是第一张，以此类推------------------------------------------------*/
			Sheet readsheet = readwb.getSheet(0);

			// 获取Sheet表中所包含的总列数

			int rsColumns = readsheet.getColumns();

			// 获取Sheet表中所包含的总行数

			int rsRows = readsheet.getRows();

			//遍历总行数
			for (int i = 0; i < rsRows; i++)
			{   //第一列
				Cell cell = readsheet.getCell(0, i);
				//第二列
				Cell cell2 = readsheet.getCell(1, i);
				System.out.println( cell.getContents().trim()+"-"+ cell2.getContents().trim());
			}
		/*	------------------获取第2张Sheet表------------------------------------------------*/
			Sheet readsheet2 = readwb.getSheet(0);

			// 获取Sheet表中所包含的总列数

			int rsColumnsNew = readsheet2.getColumns();

			// 获取Sheet表中所包含的总行数

			int rsRowsNew = readsheet2.getRows();

			//遍历总行数
			for (int i = 0; i < rsRowsNew; i++)
			{   //第一列
				Cell cellNew = readsheet2.getCell(0, i);
				//第二列
				Cell cell2New = readsheet2.getCell(1, i);
				//第二列
				Cell cell3New = readsheet2.getCell(2, i);

				 System.out.println( cellNew.getContents().trim()+"-"+ cell2New.getContents().trim()+"-"+cell3New.getContents().trim());
				if(!StringUtils.isEmpty( cell3New.getContents().trim())&&!cell3New.getContents().trim().contains("地址"))
				HttpUtil.downloadFile(cell3New.getContents().trim(),"C:\\Users\\GM88\\Desktop\\game_apk\\input-"+cell2New.getContents().trim()+"_"+cellNew.getContents().trim(),cell2New.getContents().trim()+"_"+cellNew.getContents().trim()+".apk");
			}



		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			readwb.close();

		}

	}

}
