package com.afm.vhc.android;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.ArrayList;
import java.util.HashMap;
import com.afm.vhc.LocalOrderStore;
import com.afm.vhc.PEX_VALUES;
import com.afm.vhc.SearchOrder;
import com.afm.vhc.VHCQuestionnaire;

public class DummyDataProvider implements DataProvider,VHCApplicationConstants {

	@Override
	public  boolean isUserValid(String username, String password)
	{
		if((username.equals("saud")) && (password.equals("saud")))
		{
			return true;
		}
		else
		{
			return false;
		}	
	}
	
	
	public ArrayList<SearchOrder> getAllOrdersTest(String searchKey)
	{
		 ArrayList<SearchOrder> jobOrders = new ArrayList<SearchOrder>();
		 
		 SearchOrder so = new SearchOrder();
		 	 
		 so.setVBELN("AK1540548");
		 so.setVMODEL_TXT("Corolla");
		 so.setCSTRYEAR("2006");
		 jobOrders.add(so);
		 
		 so = new SearchOrder();
		 
		 so.setVBELN("AK2540548");
		 so.setVMODEL_TXT("Camry Solara");
		 so.setCSTRYEAR("2007");
		 jobOrders.add(so);
		
		 so = new SearchOrder();
		 
		 so.setVBELN("AK3540548");
		 so.setVMODEL_TXT("Condor");
		 so.setCSTRYEAR("2008");
		 jobOrders.add(so);
		 
		 so = new SearchOrder();
		 
		 so.setVBELN("AK4540548");
		 so.setVMODEL_TXT("Cressida");
		 so.setCSTRYEAR("2007");
		 jobOrders.add(so);
		 
		 so = new SearchOrder();
		 
		 so.setVBELN("AB5540548");
		 so.setVMODEL_TXT("Fortuner");
		 so.setCSTRYEAR("2008");
		 jobOrders.add(so);
		 
		 so = new SearchOrder();
		 
		 so.setVBELN("AK6540548");
		 so.setVMODEL_TXT("Probox");
		 so.setCSTRYEAR("2002");
		 jobOrders.add(so);
		
		 so = new SearchOrder();
		 
		 so.setVBELN("AK7540548");
		 so.setVMODEL_TXT("Condor");
		 so.setCSTRYEAR("2008");
		 jobOrders.add(so);
		 
		 so = new SearchOrder();
		 
		 so.setVBELN("AK8540548");
		 so.setVMODEL_TXT("Cressida");
		 so.setCSTRYEAR("2007");
		 jobOrders.add(so);
		 
		 so = new SearchOrder();
		 
		 so.setVBELN("AK9540548");
		 so.setVMODEL_TXT("Fortuner");
		 so.setCSTRYEAR("2008");
		 jobOrders.add(so);
		 
		 so = new SearchOrder();
		 
		 so.setVBELN("AK10540548");
		 so.setVMODEL_TXT("Probox");
		 so.setCSTRYEAR("2002");
		 jobOrders.add(so);
		 
		 return jobOrders;
	}
 
	@Override
	public  ArrayList<LocalOrderStore> getPendingOrders()
	{
		ArrayList<LocalOrderStore> pendingOrders = new ArrayList<LocalOrderStore>();
		 
		LocalOrderStore po = new LocalOrderStore();
		 
		po.setVBELN("AK8540549");
		po.setVMODEL_TXT("Cressida");
		po.setCSTRYEAR("2005");
		pendingOrders.add(po);
		 
		po = new LocalOrderStore();
		
		po.setVBELN("AK9540549");
		po.setVMODEL_TXT("Fortuner");
		po.setCSTRYEAR("2003");
		pendingOrders.add(po);
		 
		return pendingOrders;
	}

	@Override
	public ArrayList<SearchOrder> getAllOrders(String searchKey)
	{
		Date date = new Date(System.currentTimeMillis());
		 
		 ArrayList<SearchOrder> Summary = new ArrayList<SearchOrder>();
		 
		 SearchOrder so = new SearchOrder();
		 
		 so.setVBELN("AK1540548");
		 so.setVMODEL_TXT("Corolla");
		 so.setCSTRYEAR("2006");
		 so.setDEBITOR_NAME("Mr. A K");
		 so.setVHVIN("34343434");
		 so.setLICPL("Dubai | 59341'");
		 so.setSPART_TXT("Toyota");
		 so.setVISIT_START_DATE(date);
		 so.setVISIT_START_TIME(null);
		 so.setPNAME("Mark");
		 Summary.add(so);
		 
		 so = new SearchOrder();
		 
		 so.setVBELN("AK2540548");
		 so.setVMODEL_TXT("Camry Solara");
		 so.setCSTRYEAR("2007");
		 so.setDEBITOR_NAME("Mr. B K");
		 so.setVHVIN("44444444");
		 so.setLICPL("Dubai | 59341");
		 so.setSPART_TXT("Toyota");
		 so.setVISIT_START_DATE(date);
		 so.setVISIT_START_TIME(null);
		 so.setPNAME("John");
		 Summary.add(so);
		
		 so = new SearchOrder();
		 
		 so.setVBELN("AK3540548");
		 so.setVMODEL_TXT("Condor");
		 so.setCSTRYEAR("2008");
		 so.setDEBITOR_NAME("Mr. C K");
		 so.setVHVIN("5655656");
		 so.setLICPL("Dubai | 59341");
		 so.setSPART_TXT("Toyota");
		 so.setVISIT_START_DATE(date);
		 so.setVISIT_START_TIME(null);
		 so.setPNAME("Steve");
		 Summary.add(so);
		 
		 so = new SearchOrder();
		 
		 so.setVBELN("AK4540548");
		 so.setVMODEL_TXT("Cressida");
		 so.setCSTRYEAR("2007");
		 so.setDEBITOR_NAME("Mr. D K");
		 so.setVHVIN("78787878");
		 so.setLICPL("Mr. D K");
		 so.setSPART_TXT("Toyota");
		 so.setVISIT_START_DATE(date);
		 so.setVISIT_START_TIME(null);
		 so.setPNAME("Marvel");
		 Summary.add(so);
		 
		 so = new SearchOrder();
		 
		 so.setVBELN("AB5540548");
		 so.setVMODEL_TXT("Fortuner");
		 so.setCSTRYEAR("2008");
		 so.setDEBITOR_NAME("Mr. E K");
		 so.setVHVIN("56565435");
		 so.setLICPL("Dubai | 59341");
		 so.setSPART_TXT("Toyota");
		 so.setVISIT_START_DATE(date);
		 so.setVISIT_START_TIME(null);
		 so.setPNAME("Rony");
		 Summary.add(so);
		 
		 so = new SearchOrder();
		 
		 so.setVBELN("AK6540548");
		 so.setVMODEL_TXT("Probox");
		 so.setCSTRYEAR("2002");
		 so.setDEBITOR_NAME("Mr. G K");
		 so.setVHVIN("7676767");
		 so.setLICPL("Dubai | 59341");
		 so.setSPART_TXT("Toyota");
		 so.setVISIT_START_DATE(date);
		 so.setVISIT_START_TIME(null);
		 so.setPNAME("Steve");
		 Summary.add(so);
		
		 so = new SearchOrder();
		 
		 so.setVBELN("AK7540548");
		 so.setVMODEL_TXT("Condor");
		 so.setCSTRYEAR("2008");
		 so.setDEBITOR_NAME("Mr. C K");
		 so.setVHVIN("9898989");
		 so.setLICPL("Dubai | 59341");
		 so.setSPART_TXT("Toyota");
		 so.setVISIT_START_DATE(date);
		 so.setVISIT_START_TIME(null);
		 so.setPNAME("john");
		 Summary.add(so);
		 
		 so = new SearchOrder();
		 
		 so.setVBELN("AK8540548");
		 so.setVMODEL_TXT("Cressida");
		 so.setCSTRYEAR("2007");
		 so.setDEBITOR_NAME("Mr. D K");
		 so.setVHVIN("7676767");
		 so.setLICPL("Dubai | 59341");
		 so.setSPART_TXT("Toyota");
		 so.setVISIT_START_DATE(date);
		 so.setVISIT_START_TIME(null);
		 so.setPNAME("John");
		 Summary.add(so);
		 
		 so = new SearchOrder();
		 
		 so.setVBELN("AK9540548");
		 so.setVMODEL_TXT("Fortuner");
		 so.setCSTRYEAR("2008");
		 so.setDEBITOR_NAME("Mr. E K");
		 so.setVHVIN("7675656");
		 so.setLICPL("Dubai | 59341");
		 so.setSPART_TXT("Toyota");
		 so.setVISIT_START_DATE(date);
		 so.setVISIT_START_TIME(null);
		 so.setPNAME("Ali");
		 Summary.add(so);
		 
		 so = new SearchOrder();
		 
		 so.setVBELN("AK10540548");
		 so.setVMODEL_TXT("Probox");
		 so.setCSTRYEAR("2002");
		 so.setDEBITOR_NAME("Mr. G K");
		 so.setVHVIN("56454365");
		 so.setLICPL("Dubai | 59341");
		 so.setSPART_TXT("Toyota");
		 so.setVISIT_START_DATE(date);
		 so.setVISIT_START_TIME(null);
		 so.setPNAME("Mark");
		 Summary.add(so);
		 
		 return Summary;
	}
	
 	
	@Override
	public ArrayList<VHCQuestionnaire> getQuestions()
 	{
 		ArrayList<VHCQuestionnaire> sectionList = new ArrayList<VHCQuestionnaire>();
 		
 		VHCQuestionnaire section = new VHCQuestionnaire();
 		
 		//section - 001
 		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("1");
 		section.setQUES_DESC("Door Lock Operation by Key/Remote");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("X");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("2");
 		section.setQUES_DESC("Door Window and Sunroof Operation");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("3");
 		section.setQUES_DESC("Engine Start Condition");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("4");
 		section.setQUES_DESC("Horn Sound");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 	
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("5");
 		section.setQUES_DESC("Washer Jets and All Wiper Blade Operation");
 		section.setQUES_TYPE("checkbox");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("6");
 		section.setQUES_DESC("Clutch Operation");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("7");
 		section.setQUES_DESC("Parking Brake Operation");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("8");
 		section.setQUES_DESC("Brake Pedal Operation");
 		section.setQUES_TYPE("OPTIONLIST");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("9");
 		section.setQUES_DESC("All Mirrors Operation");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("10");
 		section.setQUES_DESC("Air Condition Operation");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("11");
 		section.setQUES_DESC("Radio, Satellite Navigation,Antenna Operation");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("12");
 		section.setQUES_DESC("All Cameras and Parking Sensor Operation");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("13");
 		section.setQUES_DESC("Dash Gauge / Warning Lamps Display");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("14");
 		section.setQUES_DESC("All Interior Lights Operation");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("15");
 		section.setQUES_DESC("Headlight and Fog Lamps Operation");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("16");
 		section.setQUES_DESC("Indicator and Hazard Light Operation");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("17");
 		section.setQUES_DESC("Brake, Tail and Back-up lamp Operation");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("18");
 		section.setQUES_DESC("Seat Belt Operation");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("001");
 		section.setSECTION_DESC("Condition Inspection");
 		section.setQUES_ID("19");
 		section.setQUES_DESC("Idle Speed Operation");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		//section - 002
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("002");
 		section.setSECTION_DESC("Under Hood Inspection");
 		section.setQUES_ID("1");
 		section.setQUES_DESC("Visible drive belts");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("X");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("002");
 		section.setSECTION_DESC("Under Hood Inspection");
 		section.setQUES_ID("2");
 		section.setQUES_DESC("Visible hoses");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 	
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("002");
 		section.setSECTION_DESC("Under Hood Inspection");
 		section.setQUES_ID("3");
 		section.setQUES_DESC("Battery check");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("002");
 		section.setSECTION_DESC("Under Hood Inspection");
 		section.setQUES_ID("4");
 		section.setQUES_DESC("Brake fluid condition");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("002");
 		section.setSECTION_DESC("Under Hood Inspection");
 		section.setQUES_ID("5");
 		section.setQUES_DESC("Engine Oil condition");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("002");
 		section.setSECTION_DESC("Under Hood Inspection");
 		section.setQUES_ID("6");
 		section.setQUES_DESC("Coolant condition");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("002");
 		section.setSECTION_DESC("Under Hood Inspection");
 		section.setQUES_ID("7");
 		section.setQUES_DESC("Windscreen washer fluid");
 		section.setQUES_TYPE("checkbox");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("002");
 		section.setSECTION_DESC("Under Hood Inspection");
 		section.setQUES_ID("8");
 		section.setQUES_DESC("Power steering fluid");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("002");
 		section.setSECTION_DESC("Under Hood Inspection");
 		section.setQUES_ID("9");
 		section.setQUES_DESC("Automatic/Manual Transmission Fluid");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		
 		//section - 003
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("003");
 		section.setSECTION_DESC("Under Carriage Inspection");
 		section.setQUES_ID("1");
 		section.setQUES_DESC("Wheel Cylinders - Wheels OFF");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("X");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("003");
 		section.setSECTION_DESC("Under Carriage Inspection");
 		section.setQUES_ID("2");
 		section.setQUES_DESC("Brake hoses");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("003");
 		section.setSECTION_DESC("Under Carriage Inspection");
 		section.setQUES_ID("3");
 		section.setQUES_DESC("Drive shaft boots");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("003");
 		section.setSECTION_DESC("Under Carriage Inspection");
 		section.setQUES_ID("4");
 		section.setQUES_DESC("Ball joints");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("003");
 		section.setSECTION_DESC("Under Carriage Inspection");
 		section.setQUES_ID("5");
 		section.setQUES_DESC("Suspension system");
 		section.setQUES_TYPE("checkbox");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("003");
 		section.setSECTION_DESC("Under Carriage Inspection");
 		section.setQUES_ID("6");
 		section.setQUES_DESC("Propeller shaft");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("003");
 		section.setSECTION_DESC("Under Carriage Inspection");
 		section.setQUES_ID("7");
 		section.setQUES_DESC("Fuel lines and tank");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("003");
 		section.setSECTION_DESC("Under Carriage Inspection");
 		section.setQUES_ID("8");
 		section.setQUES_DESC("Exhaust system");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("003");
 		section.setSECTION_DESC("Under Carriage Inspection");
 		section.setQUES_ID("9");
 		section.setQUES_DESC("Engine mounting");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("003");
 		section.setSECTION_DESC("Under Carriage Inspection");
 		section.setQUES_ID("10");
 		section.setQUES_DESC("PCV Valve and hoses");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("003");
 		section.setSECTION_DESC("Under Carriage Inspection");
 		section.setQUES_ID("11");
 		section.setQUES_DESC("Evaporative system for leaks");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		
 		//section - 004
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("004");
 		section.setSECTION_DESC("Tyre Report");
 		section.setQUES_ID("1");
 		section.setQUES_DESC("Wheel Condition");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("X");
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("004");
 		section.setSECTION_DESC("Tyre Report");
 		section.setQUES_ID("2");
 		section.setQUES_DESC("Front Right");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("004");
 		section.setSECTION_DESC("Tyre Report");
 		section.setQUES_ID("3");
 		section.setQUES_DESC("Front Left");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("004");
 		section.setSECTION_DESC("Tyre Report");
 		section.setQUES_ID("4");
 		section.setQUES_DESC("Rear Right");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("004");
 		section.setSECTION_DESC("Tyre Report");
 		section.setQUES_ID("5");
 		section.setQUES_DESC("Rear Left");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("004");
 		section.setSECTION_DESC("Tyre Report");
 		section.setQUES_ID("6");
 		section.setQUES_DESC("Spare");
 		section.setQUES_TYPE("optionlist");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		//section - 005
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("005");
 		section.setSECTION_DESC("Brake/Disc Report");
 		section.setQUES_ID("1");
 		section.setQUES_DESC("Brake Condition");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		sectionList.add(section);
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("005");
 		section.setSECTION_DESC("Brake/Disc Report");
 		section.setQUES_ID("2");
 		section.setQUES_DESC("Front Right");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("X");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 	
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("005");
 		section.setSECTION_DESC("Brake/Disc Report");
 		section.setQUES_ID("3");
 		section.setQUES_DESC("Front Left");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("005");
 		section.setSECTION_DESC("Brake/Disc Report");
 		section.setQUES_ID("4");
 		section.setQUES_DESC("Rear Right");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 	
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("005");
 		section.setSECTION_DESC("Brake/Disc Report");
 		section.setQUES_ID("5");
 		section.setQUES_DESC("Rear Left");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 	
 	
 		section = new VHCQuestionnaire();
 		
		section.setSECTION_ID("005");
 		section.setSECTION_DESC("Brake/Disc Report");
 		section.setQUES_ID("6");
 		section.setQUES_DESC("Linings");
 		section.setQUES_TYPE("optionlist");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		section = new VHCQuestionnaire();
 		
 		section.setSECTION_ID("005");
 		section.setSECTION_DESC("Brake/Disc Report");
 		section.setQUES_ID("7");
 		section.setQUES_DESC("Discs");
 		section.setQUES_TYPE("radio");
 		//section.setSEQUENCE(null);
 		section.setMANDATORY("");
 		section.setDEFAUL(null);
 		sectionList.add(section);
 		
 		return sectionList;
 	}

	@Override
	public ArrayList<PEX_VALUES> getQuestionValue(String section_id, String ques_id)
	{
		ArrayList<PEX_VALUES> value = new ArrayList<PEX_VALUES>();
		PEX_VALUES pv;
		if((section_id.equals("004") && ques_id.equals("6")))
				{
				pv= new PEX_VALUES();
				pv.setSECTION_ID("004");
				pv.setQUES_ID("6");
				pv.setVALUE("<2mm");
				pv.setSEQUENCE(BigDecimal.valueOf(100));
				value.add(pv);
			
				pv = new PEX_VALUES();
				pv.setSECTION_ID("004");
				pv.setQUES_ID("6");
				pv.setVALUE("2-4mm");
				pv.setSEQUENCE(BigDecimal.valueOf(200));
				value.add(pv);
			
				pv = new PEX_VALUES();			
				pv.setSECTION_ID("004");
				pv.setQUES_ID("6");
				pv.setVALUE(">4mm");
				pv.setSEQUENCE(BigDecimal.valueOf(400));
				value.add(pv);
				}
		
		else if((section_id.equals("005") && ques_id.equals("6")))
		{
			pv = new PEX_VALUES();
			
			pv.setSECTION_ID("005");
			pv.setQUES_ID("6");
			pv.setVALUE("<2mm");
			pv.setSEQUENCE(BigDecimal.valueOf(300));
			value.add(pv);
			
			pv = new PEX_VALUES();
			
			pv.setSECTION_ID("005");
			pv.setQUES_ID("6");
			pv.setVALUE("2-4mm");
			pv.setSEQUENCE(BigDecimal.valueOf(500));
			value.add(pv);
			
			pv = new PEX_VALUES();
			
			pv.setSECTION_ID("005");
			pv.setQUES_ID("6");
			pv.setVALUE(">4mm");
			pv.setSEQUENCE(BigDecimal.valueOf(600));
			value.add(pv);
		}
		
		else if((section_id.equals("001") && ques_id.equals("8")))
		{
			pv = new PEX_VALUES();
			
			pv.setSECTION_ID("001");
			pv.setQUES_ID("8");
			pv.setVALUE("<2mm");
			pv.setSEQUENCE(BigDecimal.valueOf(300));
			value.add(pv);
			
			pv = new PEX_VALUES();
			
			pv.setSECTION_ID("001");
			pv.setQUES_ID("8");
			pv.setVALUE("2-4mm");
			pv.setSEQUENCE(BigDecimal.valueOf(500));
			value.add(pv);
			
			pv = new PEX_VALUES();
			
			pv.setSECTION_ID("001");
			pv.setQUES_ID("8");
			pv.setVALUE(">4mm");
			pv.setSEQUENCE(BigDecimal.valueOf(600));
			value.add(pv);
		}		
		
		if((section_id.equals("004") && ques_id.equals("6")) || (section_id.equals("005") && ques_id.equals("6"))||(section_id.equals("001") && ques_id.equals("8")))
		{
			return value;
		}
		else
		{
			return null;
		}
		
	}


	@Override
	public SearchOrder getOrderDetails(String orderNumber) {
		
		Date date = new Date(System.currentTimeMillis());
		SearchOrder so = new SearchOrder();		 
		 so.setVBELN(orderNumber);
		 so.setVMODEL_TXT("Corolla");
		 so.setCSTRYEAR("2006");
		 so.setDEBITOR_NAME("Mr. A K");
		 so.setVHVIN("34343434");
		 so.setLICPL("Dubai | 59341'");
		 so.setSPART_TXT("Toyota");
		 so.setVISIT_START_DATE(date);
		 so.setVISIT_START_TIME(null);
		 so.setPNAME("Mark");
		 return so;
	}


	@Override
	public boolean saveIndividualQuestion(String orderNumber, String sectionID,
			String questionID, String result,String comment) {
	
		return true;
	}


	@Override
	public String submitQuestionnaire(String orderNumber) {
		
		return "Questionnaire Submitted";
	}
	
	@Override
	public String getStoredValuesForQuestion(String orderNumber, String sectionId, String questionId){
		
		return "Completed";
	}
	
	@Override
	public boolean isUploadQueueEmpty()
	{
		return true;
	}


	@Override
	public HashMap<String, String> getStoredValuesAndCommentsForQuestion(
			String orderNumber, String sectionId, String questionId) {
		HashMap<String,String> result = new HashMap<String, String>();
		result.put(LOCAL_RESULTS_VALUE, "");
		result.put(LOCAL_RESULTS_COMMENTS, "");
		return result;
	}


	@Override
	public ArrayList<String> getImagesForQuestion(
			ArrayList<String> filesForOrder, String orderNumber,
			String sectionId, String questionId) {
		ArrayList<String> listOfFiles = new ArrayList<String>();
//		listOfFiles.add("1.jpg");
//		listOfFiles.add("2.jpg");
		return listOfFiles;
	}


	@Override
	public ArrayList<String> getFilesForOrder(String orderNumber) {
		ArrayList<String> listOfFiles = new ArrayList<String>();
//		listOfFiles.add("1.jpg");
//		listOfFiles.add("2.jpg");
//		listOfFiles.add("3.jpg");
		return listOfFiles;
	}


	@Override
	public boolean updateLocalOrderRecords(String orderNumber) {
		// TODO Auto-generated method stub
		return false;
	}
		
}
