package com.afm.vhc.android;

import com.afm.vhc.PersonalizationParameters;
import com.afm.vhc.VHCDB;

public class PersonalizationKeyStore {
	
	private String plant;
	private String salesOrg;
	private String companyCode;
	private String division;
	private String orderNumber;
	private String username;
	private String password;
	
	
	
	
	public PersonalizationKeyStore()
	{
		PersonalizationParameters pp=VHCDB.getPersonalizationParameters();
		plant =pp.getPlant();
		salesOrg=pp.getSalesorg();
		companyCode=pp.getCompanyCode();
		division=pp.getDivision();
	}
	
	
	public String updatePersonalizationKeys(String plant, String salesOrg, String companyCode, String division, String orderNumber, String username, String password)
	{
		setCompanyCode(companyCode);
		setPlant(plant);
		setSalesOrg(salesOrg);
		setDivision(division);
		setOrderNumber(orderNumber);
		setUsername(username);
		setPassword(password);
		return "success";
	}
		
	

	public String getOrderNumber() {
		return orderNumber;
	}


	public void setOrderNumber(String orderNumber) {
			PersonalizationParameters pp=VHCDB.getPersonalizationParameters();
			pp.setOrderNo(orderNumber);
			pp.save();
		this.orderNumber = orderNumber;
	}


	public String getUsername() 
	{
		return username;
	}


	public void setUsername(String username) {
		PersonalizationParameters pp=VHCDB.getPersonalizationParameters();
		pp.setUsername(username);
		pp.save();
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getPlant() {
		return plant;
	}



	public void setPlant(String plant) {
		PersonalizationParameters pp=VHCDB.getPersonalizationParameters();
		pp.setPlant(plant);
		pp.save();
		this.plant = plant;
	}



	public String getSalesOrg() {
		return salesOrg;
	}



	public void setSalesOrg(String salesOrg) {
		PersonalizationParameters pp=VHCDB.getPersonalizationParameters();
		pp.setSalesorg(salesOrg);
		pp.save();
		this.salesOrg = salesOrg;
	}



	public String getCompanyCode() {
		return companyCode;
	}



	public void setCompanyCode(String companyCode) {
		PersonalizationParameters pp=VHCDB.getPersonalizationParameters();
		pp.setCompanyCode(companyCode);
		pp.save();
		this.companyCode = companyCode;
	}



	public String getDivision() {
		return division;
	}



	public void setDivision(String division) {
		PersonalizationParameters pp=VHCDB.getPersonalizationParameters();
		pp.setDivision(division);
		pp.save();
		this.division = division;
	}




}
