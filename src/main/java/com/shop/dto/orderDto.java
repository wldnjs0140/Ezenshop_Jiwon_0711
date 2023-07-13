package com.shop.dto;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class orderDto {

	private int num;
	private String uid;
	private String  uname;
	private String 	phoneNum;
	
	
	private String  goodsCode;
	private String  goodsName;
	private String  goodsCategory;
	private String  goodsSize;
	private String  goodsColor;
	private int 	goodsCnt;
	private int		goodsPrice; 
	private int 	goodsDiscount;
	private String  paymentType;
	private String  deliStatus;
	private String  filename;
	private Timestamp orderTM;
}
