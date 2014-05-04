package com.afm.vhc.android;

import java.util.ArrayList;
import java.util.HashMap;

import android.content.Context;

import com.afm.vhc.ET_BAPIRETURN;
import com.afm.vhc.LocalOrderStore;
import com.afm.vhc.LocalVHCResultStore;
import com.afm.vhc.PEX_BAPIRETURN;
import com.afm.vhc.PEX_VALUES;
import com.afm.vhc.PersonalizationParameters;
import com.afm.vhc.SearchOrder;
import com.afm.vhc.UserInfo;
import com.afm.vhc.VHCDB;
import com.afm.vhc.VHCLocalUploadQueue;
import com.afm.vhc.VHCQuestionnaire;
import com.afm.vhc.VHCQuestionnaireSubmitVHCResultOperation;
import com.afm.vhc.Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS;
import com.sybase.collections.GenericList;
import com.sybase.mobile.Application;
import com.sybase.mobile.ConnectionProperties;
import com.sybase.mobile.RegistrationStatus;
import com.sybase.persistence.ConnectionProfile;
import com.sybase.persistence.LoginCredentials;

/**
 * This class is used as DataProvider for all SUP related operations
 * @author Harshit Madania
 *
 */
public class MBODataProvider implements DataProvider, VHCApplicationConstants {
	
	
	
	private static MBODataProvider dataFetcher=null;
	//private static LogWriter logger=null;
	private Context context=null;
	private final static String[] hexSymbols = { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" };

    public final static int BITS_PER_HEX_DIGIT = 4;
	
	/**
	 * This method returns the Application Context
	 * @return Context
	 */
	public Context getContext() {
		return context;
	}

	public void setContext(Context context) {
		this.context = context;
	}


		
	private MBODataProvider()
	{
		
	}
	
	public static MBODataProvider getInstance()
	{
		if(dataFetcher==null)
				dataFetcher=new MBODataProvider();
		return dataFetcher;
	}
	

//	public ArrayList<VHCQuestionnaire> getQuestionsForOrder(String orderNumber)
//	{
//		ArrayList<VHCQuestionnaire> questionnaire = new ArrayList<VHCQuestionnaire>();
//		//TODO
//		return questionnaire;
//	}
	

	@Override
	public boolean saveIndividualQuestion(String orderNumber, String sectionID, String questionID, String result, String comment)
	{
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvider|saveIndividualQuestion|"+"Entering method saveIndividualQuestion");
		//updateLocalOrderRecords(orderNumber);
		if(sectionID!=null && questionID!=null && (!sectionID.equals(""))&& (!questionID.equals("")))
			{
			try
				{
				LocalVHCResultStore localObject =LocalVHCResultStore.findByPrimaryKey(orderNumber, sectionID, questionID);
				if(localObject==null)	
						{
						localObject = new LocalVHCResultStore();
						localObject.setVBELN(orderNumber);
						localObject.setZZVHC_SECTIOID(sectionID);
						localObject.setZZVHC_QID(questionID);
						localObject.setZZVHC_VALUE(result);
						localObject.setZZVHC_COMMENT(comment);
						localObject.create();
						localObject.save();
						}
				else
						{
						localObject.setVBELN(orderNumber);
						localObject.setZZVHC_SECTIOID(sectionID);
						localObject.setZZVHC_QID(questionID);
						localObject.setZZVHC_VALUE(result);
						localObject.setZZVHC_COMMENT(comment);
						localObject.update();
						localObject.save();
						}
				}catch(Exception e)
				{
					LogWriter.getLogWriter("UNCAUGHT EXCEPTION", "UNCAUGHT EXCEPTION").logError(e);
					LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvider|saveIndividualQuestion|Exiting method saveIndividualQuestion");
					return false;
				}
			}		
		
//		LocalOrderStore localOrder = LocalOrderStore.findByPrimaryKey(orderNumber);
//		SearchOrder searchOrder= getOrderDetails(orderNumber);
//		if(localOrder==null)
//			{
//				localOrder = new LocalOrderStore();
//				localOrder.setVBELN(orderNumber);
//				localOrder.setDEBITOR_NAME(searchOrder.getDEBITOR_NAME());
//				localOrder.setVHVIN(searchOrder.getVHVIN());
//				localOrder.setLICPL(searchOrder.getLICPL());
//				localOrder.setCSTRYEAR(searchOrder.getCSTRYEAR());
//				localOrder.setSPART_TXT(searchOrder.getSPART_TXT());
//				localOrder.setVMODEL_TXT(searchOrder.getVMODEL_TXT());
//				localOrder.setVISIT_START_DATE(searchOrder.getVISIT_START_DATE());
//				localOrder.setVISIT_START_TIME(searchOrder.getVISIT_START_TIME());
//				localOrder.setPNAME(searchOrder.getPNAME());
//				localOrder.create();
//				localOrder.save();
//			}
//		
	LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvider|saveIndividualQuestion|Exiting method saveIndividualQuestion");
	return true;
	}
	
	
	/**
	 * This method updates LocalOrder MBO  for the provided Order Number
	 * @param orderNumber
	 * @return Result of Update (Success/Failure)
	 */
	@Override
	public boolean updateLocalOrderRecords(String orderNumber)
	{
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvider|updateLocalOrderRecords|Entering method updateLocalOrderRecords");
		LocalOrderStore localOrder = LocalOrderStore.findByPrimaryKey(orderNumber);
		SearchOrder searchOrder= getOrderDetails(orderNumber);
		if(localOrder==null)
			{
				localOrder = new LocalOrderStore();
				localOrder.setVBELN(orderNumber);
				localOrder.setDEBITOR_NAME(searchOrder.getDEBITOR_NAME());
				localOrder.setVHVIN(searchOrder.getVHVIN());
				localOrder.setLICPL(searchOrder.getLICPL());
				localOrder.setCSTRYEAR(searchOrder.getCSTRYEAR());
				localOrder.setSPART_TXT(searchOrder.getSPART_TXT());
				localOrder.setVMODEL_TXT(searchOrder.getVMODEL_TXT());
				localOrder.setVISIT_START_DATE(searchOrder.getVISIT_START_DATE());
				localOrder.setVISIT_START_TIME(searchOrder.getVISIT_START_TIME());
				localOrder.setPNAME(searchOrder.getPNAME());
				localOrder.create();
				localOrder.save();
			}
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|updateLocalOrderRecords|Exiting method updateLocalOrderRecords");
		return true;
	}
	
	@Override
	public String submitQuestionnaire(String orderNumber)
	{
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|submitQuestionnaire|Entering method submitQuestionnaire");
		orderNumber=adjustOrderNumberForBackend(orderNumber);
		ArrayList<LocalVHCResultStore> updatedQuestions = LocalVHCResultStore.findByVBELN(orderNumber);
		LocalOrderStore localOrder =LocalOrderStore.findByPrimaryKey(orderNumber);

		GenericList<Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS>  listOfResults= new GenericList<Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS>();	
      
		VHCQuestionnaireSubmitVHCResultOperation op = new  VHCQuestionnaireSubmitVHCResultOperation();
		
		Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS singleResult= new Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS();
		for(LocalVHCResultStore singleQuestionResult:updatedQuestions)
			{
			singleResult= new Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS();
			singleResult.setVBELN(singleQuestionResult.getVBELN());
			singleResult.setZZVHC_SECTIOID(singleQuestionResult.getZZVHC_SECTIOID());
			singleResult.setZZVHC_QID(singleQuestionResult.getZZVHC_QID());
			singleResult.setZZVHC_VALUE(singleQuestionResult.getZZVHC_VALUE());
			singleResult.setZZVHC_COMMENT(singleQuestionResult.getZZVHC_COMMENT());
			listOfResults.add(singleResult);
			}

		op.setPIM_VHC_RESULTS(listOfResults);
	    op.save();
	    op.submitPending();
	    VHCDB.synchronize();
	    
	    GenericList<VHCLocalUploadQueue>filesToBeUploaded=VHCLocalUploadQueue.findByVBELN(orderNumber);
	    for(VHCLocalUploadQueue singleQueueRecord:filesToBeUploaded)
	    {
	    	//singleQueueRecord.setSTATUS(BigInteger.valueOf(ORDER_SUBMITTED_FILE_READY_FOR_UPLOAD));
	    	singleQueueRecord.setSTATUS(ORDER_SUBMITTED_FILE_READY_FOR_UPLOAD);
	    	singleQueueRecord.update();
	    	singleQueueRecord.save();
	    	
	    }
	    
	    for(LocalVHCResultStore singleQuestionResult:updatedQuestions)
	    	{
	    	singleQuestionResult.delete();
	    	singleQuestionResult.save();  	
	    	}		
	    
    	localOrder.delete();
    	localOrder.save();	
    	
		GenericList<PEX_BAPIRETURN> finalResult= PEX_BAPIRETURN.findAll();
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvider|submitQuestionnaire|Exiting method submitQuestionnaire");
		if(finalResult!=null && finalResult.size()>0)
				return finalResult.get(0).getMESSAGE();
		else
			return "";
	
	}

/*
 * (non-Javadoc)
 * @see com.afm.vhc.android.DataProvider#getAllOrders(java.lang.String)
 */
	@Override
	public ArrayList<SearchOrder> getAllOrders(String searchKey) {
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvider|getAllOrders|"+"Entering method getAllOrders");
		try{
		PersonalizationParameters pp = VHCDB.getPersonalizationParameters();

		if(!searchKey.endsWith("*"))
			searchKey+="*";

		pp.setOrderNo(searchKey);
		pp.save();
		VHCDB.synchronize(SYNC_GROUP_REQUEST_RESPONSE);
		ArrayList<SearchOrder> jobOrders=SearchOrder.findAll();
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvider|getAllOrders|"+"Exiting method getAllOrders");
		return jobOrders;
		}catch(Exception e)
		{
			LogWriter.getLogWriter("UNCAUGHT EXCEPTION", "UNCAUGHT EXCEPTION").logError(e);
			LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvider|getAllOrders|"+"Exiting method getAllOrders");
			return null;
		}
		
	}
	
	public String getSearchError()
	{
		GenericList<ET_BAPIRETURN> finalResult= ET_BAPIRETURN.findAll();
		if(finalResult!=null)
				return finalResult.get(0).getMESSAGE();
		else
			return null;
	}

	@Override
	public  SearchOrder getOrderDetails(String orderNumber) {
		try
			{
			LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|getOrderDetails|"+"Entering method getOrderDetails");
			PersonalizationParameters pp = VHCDB.getPersonalizationParameters();
			pp.setOrderNo(orderNumber);
			pp.save();
			VHCDB.synchronize(SYNC_GROUP_REQUEST_RESPONSE); //TODO unnecessary sync , but cant avoid , else we need a findByPrimary Key , which is currently not available
			ArrayList<SearchOrder> listOfOrders=SearchOrder.findAll(); 
			if(listOfOrders!=null && listOfOrders.size()==1)
				return listOfOrders.get(0);
			else
				return null;
			}catch(Exception e)
			{
				LogWriter.getLogWriter("UNCAUGHT EXCEPTION", "UNCAUGHT EXCEPTION").logError(e);
				return null;
			}
		finally{
			LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|getOrderDetails|"+"Exiting method getOrderDetails");
		}

	}

	@Override
	public boolean isUserValid(String username, String password) {
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|isUserValid|"+"Entering method isUserValid");
		boolean  isAuthorized =true;		
		//SharedPreferences sharedPref = PreferenceManager.getDefaultSharedPreferences(context);
		ApplicationSettingsManager settingsManager= ApplicationSettingsManager.getInstance(context);
		boolean relayServerPref = settingsManager.isRelayServerEnabled();
		if(!relayServerPref)
		{
			isAuthorized=authenticateWithoutRelayServer(username, password);
		}
		else{
			
	
			try{
			// Initialize Application settings
			String relayServerHostName = settingsManager.getRelayServerHostName() ;
			int realyServerRegistrationPort = settingsManager.getRelayServerRegistrationPort();
			int relayServerSynchPort=settingsManager.getRelayServerSynchPort();	
			String relayServerMBSFarmID= settingsManager.getRelayServerMBSFarmID();
			String relayServerRBSFarmID= settingsManager.getRelayServerRBSFarmID();
			String connectionNetworkStreamParams="url_suffix=/ias_relay_server/client/rs_client.dll/"+relayServerRBSFarmID;
			
//			String relayServerHostName = sharedPref.getString(PREFERENCE_RELAY_SERVER_HOSTNAME,"relayserver.sybase.com");
//			int realyServerRegistrationPort = Integer.parseInt(sharedPref.getString(PREFERNCE_RELAY_SERVER_MBS_PORT, "80"));
//			int relayServerSynchPort=Integer.parseInt(sharedPref.getString(PREFERNCE_RELAY_SERVER_RBS_PORT,"80"));	
//			String relayServerMBSFarmID= sharedPref.getString(PREFERNCE_RELAY_SERVER_MBS_FARM, "AFM.MOBMBS");
//			String relayServerRBSFarmID= sharedPref.getString(PREFERNCE_RELAY_SERVER_RBS_FARM, "AFM.MOBRBS");
//			String connectionNetworkStreamParams="url_suffix=/ias_relay_server/client/rs_client.dll/"+relayServerRBSFarmID;
				
//			String relayServerHostName = "relayserver.sybase.com";
//			int realyServerRegistrationPort =80;
//			int relayServerSynchPort=80;	
//			String relayServerMBSFarmID= "AFM.MOBMBS";
//			String relayServerRBSFarmID= "AFM.MOBRBS";
//			String connectionNetworkStreamParams="url_suffix=/ias_relay_server/client/rs_client.dll/"+relayServerRBSFarmID;
//			relayServerMBSFarmID="AFM.MOBMBS";
//			relayServerRBSFarmID="AFM.MOBRBS";
//			connectionNetworkStreamParams="url_suffix=/ias_relay_server/client/rs_client.dll/"+relayServerRBSFarmID;
			Application app = Application.getInstance();

			if(app.getApplicationIdentifier()==null)  // The identifier has to match the application ID deployed to the SUP server
				app.setApplicationIdentifier(VHC_APPLICATION_IDENTIFIER);
			
			if(app.getApplicationContext()==null)// Set the android.content.Context for the application
				app.setApplicationContext(context); 
			
			// ConnectionProperties has the information needed to register
			// and connect to SUP server
			ConnectionProperties connProps = app.getConnectionProperties();
			
			connProps.setServerName(relayServerHostName);
			connProps.setPortNumber(realyServerRegistrationPort);
			connProps.setFarmId(relayServerMBSFarmID);
			connProps.setNetworkProtocol(settingsManager.getRegistrationProtocol());
		
			
			//TODO Change it asper the requirements
			// provide user credentials 
					LoginCredentials loginCred = new LoginCredentials(username, password);
					connProps.setLoginCredentials(loginCred);

					// Initialize generated package database class with this Application instance
					VHCDB.setApplication(app); 
					
					if (app.getRegistrationStatus() != RegistrationStatus.REGISTERED)
					{
					   // If the application has not been registered to the server,
					   // register now
						 app.registerApplication(REGISTRATION_TIMEOUT_TIME);
					}
					else
					{        
					   // start the connection to server
					   app.startConnection(REGISTRATION_TIMEOUT_TIME);
					}
			
		
			// Initialize the device database connection profile (if needed)
					
				ConnectionProfile connProfile = VHCDB.getConnectionProfile();

					// Store the database in an SD card
					connProfile.setProperty(PROPERTY_DATABASE_FILE, android.os.Environment.getExternalStorageDirectory().getPath() + DATABASE_FILE);

					// encrypt the database
					connProfile.setEncryptionKey(ENCRYPTION_KEY); //Encryption key can be of arbitary length, but generally the longer, the better.

					// use 100K for cache size
					connProfile.setCacheSize(CACHE_SIZE);
					
					
					ConnectionProfile cp = VHCDB.getSynchronizationProfile();
					
					cp.setServerName(relayServerHostName);
					cp.setPortNumber(relayServerSynchPort);        	
					cp.setNetworkStreamParams(connectionNetworkStreamParams);
					//cp.getStreamParams().setTrusted_Certificates("BookMyDevice"+"_trustedCertificates.crt");
					// cp.setNetworkProtocol(CONNECTION_NETWORK_PROTOCOL);
					cp.setNetworkProtocol(settingsManager.getConnectionProtocol());
				
					if (!VHCDB.databaseExists())
				    {
						VHCDB.createDatabase();
				    } 
					else 
					{
						VHCDB.openConnection();
				    }
					
					//TODO Change  the username and password if required
					ConnectionProfile syncProfile = VHCDB.getSynchronizationProfile();
					syncProfile.setUserName(username);
					syncProfile.setPassword(password);
					VHCDB.onlineLogin();					
					//Setting Personalization Keys	
						VHCDB.cleanAllData();
						PersonalizationParameters pp = VHCDB.getPersonalizationParameters();
						//pp.setUsername("TEX_EVAG");
						//pp.setUserId("EX_EVAG");
						//pp.setUserId("EX_AGNELLOC");
						pp.setUserId(username);
						pp.setUsername(username);
						pp.setPassword(password);
						pp.save();
						//VHCDB.getLogger().setLogLevel(LogLevel.INFO);
						VHCDB.synchronize(SYNC_GROUP_RARELY_CHANGING_DATA);
						
						UserInfo userInfo = null;
						GenericList<UserInfo> listOfUsers= UserInfo.findAll();
						if(listOfUsers!=null && listOfUsers.size()>0)
							userInfo=listOfUsers.get(0);
						
						//Once user is retreived , use its info to set other personalization keys
						if(userInfo!=null)
						{
//							pp.setPlant(userInfo.getPEX_WERKS());
//							pp.setCompanyCode(userInfo.getPEX_BUKRS());
//							pp.setDivision(userInfo.getPEX_SPART());
							pp.setPlant("M413");
							pp.setCompanyCode("2001");
							//pp.setSalesorg(userInfo.getPEX_VKORG());
							//pp.setDivision(userInfo.getPEX_SPART());
							pp.setDivision("40");
							pp.save();
							VHCDB.synchronize(SYNC_GROUP_RARELY_CHANGING_DATA);
						}
						
						
						
//*******************************TEST DATA STARTS***************************************************************************************************
//						Submit Order test code					
//						GenericList<Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS1>  listOfResults= new GenericList<Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS1>();	
//					      
//						VHCQuestionnaireSubmitVHCResultOperation op = new  VHCQuestionnaireSubmitVHCResultOperation();
//						
//						Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS1 singleResult= new Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS1();
//						singleResult= new Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS1();
//						singleResult.setVBELN("0300029658");
//						singleResult.setZZVHC_SECTIOID("10");
//						singleResult.setZZVHC_QID("1001");
//						singleResult.setZZVHC_VALUE("yes");
//						singleResult.setZZVHC_COMMENT("Harshit: My Comments");
//						listOfResults.add(singleResult);
//
//						op.setPIM_VHC_RESULTS(listOfResults);
//					    op.save();
//					    op.submitPending();
//					    VHCDB.synchronize();
						
						
//						uploadImage(null, null, null);
//						//saveIndividualQuestion("0300029605", null, null, null);
//						
//						GenericList<Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_CONTENT> imageContent = new GenericList<Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_CONTENT>();
//						Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_CONTENT lineContent = new Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_CONTENT();
//						//lineContent.setLINE(fileToByteArrayConverter("file.txt"));
//						byte[] byteArray=fileToByteArrayConverter("file.txt");
//						String hexEncoded= toHexFromBytes(byteArray);
//						byte[] contentBytes=hexStringToByteArray(hexEncoded);
//						
//						
//						
//						
////						while(contentBytes.length<255)
////						{
////							
////						}
//						//String encodedString= new String(encodedFile);
//						lineContent.setLINE(contentBytes);
//						//lineContent.setLINE(Base64.encodeBase64(loadFile("/vhc/Greetings.txt")));
////						
//				imageContent.add(lineContent);
////						//uploadImages(), "0300029605");
//					uploadImage( "filefromJava.txt",imageContent, "0300029605");

						

//						String fileContent=byteArrayToHexString(fileByteArray);
//						imageFile.setFILECONTENT(fileContent);
//						listOfImages.add(imageFile);
						

					
//						ArrayList<SearchOrder> searchOrderList=getAllOrders("3000296*");
//						for(SearchOrder so : searchOrderList)
//						{
//							so.getVBELN();
//							so.getDEBITOR_NAME();
//							so.getVHVIN();
//						}
//										
//						
//						ArrayList<LocalOrderStore> localOrderList = getPendingOrders();		
//						
//						for(LocalOrderStore localOrder:localOrderList)
//						{
//							localOrder.getVBELN();
//							localOrder.getVHVIN();
//							localOrder.getDEBITOR_NAME();
//						}
//						
//						ArrayList<VHCQuestionnaire> listOfQuestions = getQuestions();
//						for(VHCQuestionnaire question:listOfQuestions)
//						{
//							question.getSECTION_DESC();
//							question.getQUES_DESC();
//							question.getSEQUENCE();
//						}
//						
//						
//						saveIndividualQuestion("0300029605", "10", "1001", "Completed");
//						saveIndividualQuestion("0300029605", "10", "1002", "In Process");
//						
//						localOrderList = getPendingOrders();		
//						
//						for(LocalOrderStore localOrder:localOrderList)
//						{
//							localOrder.getVBELN();
//							localOrder.getVHVIN();
//							localOrder.getDEBITOR_NAME();
//						}
//						
//						String storedValue = getStoredValuesForQuestion("300029605","10","1001");	
//						storedValue = getStoredValuesForQuestion("300029605","10","1002");	
						
						
					
						
//						pp.setPlant("");		//WERKS
//						pp.setCompanyCode(""); //BUKRS
//						pp.setDivision("");   //SPART
//						pp.setOrderNo("3000296*");
//						pp.setSalesorg("");
//						pp.save();
//						VHCDB.synchronize("RequestResponse");
//						GenericList<SearchOrder> order = SearchOrder.findAll();
//						for(SearchOrder question:order)
//						{
//							question.getVHVIN();
//						}
						
					
//						pp.setPlant("M413");		//WERKS
//						pp.setCompanyCode("2001"); //BUKRS
//						pp.setDivision("40");   //SPART
//						pp.save();
//						VHCDB.synchronize("RarelyChangingData");
//						GenericList<VHCQuestionnaire> questionnaire=VHCQuestionnaire.findAll();
//						for(VHCQuestionnaire question:questionnaire)
//						{
//							question.getQUES_DESC();
//						}
//						
//						PEX_VALUES.findAll();
//						PEX_BAPIRETURN2.findAll();
						
						

//						String fileContent="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";
//												
//						GenericList<Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_FILES> listOfImages= new GenericList<Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_FILES>();
//						Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_FILES imageFile = new Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_FILES();
//						imageFile.setFILENAME("logo.jpg");
//						imageFile.setFILECONTENT(fileContent);
//						listOfImages.add(imageFile);
//						uploadImages(listOfImages, "0300029605");
						
//*******************************TEST DATA ENDS******************************************************************************************8
						
						
			}catch(Exception e)
				{
					//LogWriter.getLogWriter("UNCAUGHT EXCEPTION", "UNCAUGHT EXCEPTION").logError(e.getLocalizedMessage());
					isAuthorized =false;
				}
		}
						
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|isUserValid|"+"Exiting method isUserValid");			
		return isAuthorized;

	}

	@Override
	public ArrayList<LocalOrderStore> getPendingOrders() {	
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|getPendingOrders|"+"Entering method getPendingOrders");
		ArrayList<LocalOrderStore> localOrders = LocalOrderStore.findAll();		
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|getPendingOrders|"+"Exiting method getPendingOrders");
		return localOrders;
	}
	

	@Override
	public ArrayList<VHCQuestionnaire> getQuestions() {
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|getQuestions|"+"Entering method getQuestions");
		ArrayList<VHCQuestionnaire> questionnaire = VHCQuestionnaire.findAll();	
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|getQuestions|"+"Exiting method getQuestions");		
		return questionnaire;
	}

	@Override
	public ArrayList<PEX_VALUES> getQuestionValue(String section_id,
			String ques_id) {	
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|getQuestionValue|"+"Entering method getQuestionValue");
		ArrayList<PEX_VALUES>questionValuesList= PEX_VALUES.findBySecIdQID(section_id, ques_id);
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|getQuestionValue|Exiting method getQuestionValue");
		return questionValuesList;

	}

	@Override
	public String getStoredValuesForQuestion(String orderNumber, String sectionId, String questionId) {
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|getStoredValuesForQuestion|Entering method getStoredValuesForQuestion");
		//TODO: The algorithm can further be optimized as there is no need to do multiple lookups
		LocalVHCResultStore updatedQuestion;
		try {
			updatedQuestion = LocalVHCResultStore.findByPrimaryKey(orderNumber, sectionId, questionId);
			
		if(updatedQuestion!=null)
			return updatedQuestion.getZZVHC_VALUE();
		else
			return null;
		} catch (Exception e) 
		{
			LogWriter.getLogWriter("UNCAUGHT EXCEPTION", "UNCAUGHT EXCEPTION").logError(e);
			return null;
		} 
		finally
		{
			LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|getStoredValuesForQuestion|Exiting method getStoredValuesForQuestion");
		}
	}
	
	@Override
	public ArrayList<String> getFilesForOrder(String orderNumber)
	{
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvider|getFilesForOrder|"+"Entering method getFilesForOrder");
		ArrayList<String> filesForOrder=null;
		ArrayList<VHCLocalUploadQueue> filesToBeUploaded=VHCLocalUploadQueue.findByVBELN(orderNumber);
		if(filesToBeUploaded!=null && filesToBeUploaded.size()>0)
		{
			filesForOrder = new GenericList<String>();
			for(VHCLocalUploadQueue fileToBeUploaded:filesToBeUploaded)
			{
				filesForOrder.add(fileToBeUploaded.getFILEPATH());
			}
					
			
		}
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvider|getFilesForOrder|"+"Exiting method getFilesForOrder");
		return filesForOrder;
	}
	
	@Override
	public ArrayList<String> getImagesForQuestion(ArrayList<String> filesForOrder,String orderNumber, String sectionId, String questionId)
	{
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvider|getImagesForQuestion|"+"Entering method getImagesForQuestion");		
		ArrayList<String> filesToBeUploaded = new ArrayList<String>();
		String fileNamePrefix=orderNumber+"_"+sectionId+"_"+questionId+"_";
		for(String fileToBeUploaded:filesForOrder)
		{
			if(fileToBeUploaded.contains(fileNamePrefix))
			{
				filesToBeUploaded.add(fileToBeUploaded);
			}
		}
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvider|getImagesForQuestion|"+"Exiting method getImagesForQuestion");	
		return filesToBeUploaded;
	}
	
	@Override
	public HashMap<String,String> getStoredValuesAndCommentsForQuestion(String orderNumber, String sectionId, String questionId) {
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|getStoredValuesAndCommentsForQuestion|"+"Entering method getStoredValuesAndCommentsForQuestion");	
		HashMap<String,String> result = new HashMap<String, String>();
		try{
		//TODO: The algorithm can further be optimized as there is no need to do multiple lookups
		LocalVHCResultStore updatedQuestion = LocalVHCResultStore.findByPrimaryKey(orderNumber, sectionId, questionId);	
		if(updatedQuestion!=null)
			{
			result.put(LOCAL_RESULTS_VALUE,updatedQuestion.getZZVHC_VALUE());
			result.put(LOCAL_RESULTS_COMMENTS,updatedQuestion.getZZVHC_COMMENT());
			}
		
		return result;
		}catch (Exception e)
		{
			LogWriter.getLogWriter("UNCAUGHT EXCEPTION", "UNCAUGHT EXCEPTION").logError(e);
			return result;
		}
		finally{
			LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|getStoredValuesAndCommentsForQuestion|"+"Exiting method getStoredValuesAndCommentsForQuestion");	
		}
	}

//	public boolean uploadImage(String fileName,GenericList<Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_CONTENT> fileContent, String orderNumber)
//	{
//		
////		VHCQuestionnaireUploadFilesOperation filesUploadOperation = new VHCQuestionnaireUploadFilesOperation();
////		
////		filesUploadOperation.setPIM_VBELN(orderNumber);
////		filesUploadOperation.setPIM_FILENAME(fileName);
////		filesUploadOperation.setPIM_CONTENT(fileContent);
////		filesUploadOperation.save();
////		filesUploadOperation.submitPending();
////		VHCDB.synchronize();		
//		
//		VHCQuestionnaireUploadFilesAsXStringOperation fileOperation = new VHCQuestionnaireUploadFilesAsXStringOperation();
//		fileOperation.setPIM_FILENAME("NewApproach.txt");
//		fileOperation.setPIM_VBELN("0300029605");	
//		fileOperation.setPIM_XCONTENT(fileToByteArrayConverter("file.txt"));
//		fileOperation.save();
//		fileOperation.submitPending();
//		VHCDB.synchronize();
//		
//		fileOperation = new VHCQuestionnaireUploadFilesAsXStringOperation();
//		fileOperation.setPIM_FILENAME("mobile.png");
//		fileOperation.setPIM_VBELN("0300029605");	
//		fileOperation.setPIM_XCONTENT(fileToByteArrayConverter("sup.png"));
//		fileOperation.save();
//		fileOperation.submitPending();
//		VHCDB.synchronize();
//		
//	
//		return true;
//		
//	}
	
	
//	private byte[] fileToByteArrayConverter(String fileName)
//		{
//		AssetManager assetManager = context.getAssets();
////		File dir= Environment.getExternalStorageDirectory();
////		File fileToBeUploaded= new File(dir,fileName);
//		FileInputStream fis =null ;
//		
//		byte[] b = null;
//		try 
//			{
//			//fis= new FileInputStream(fileToBeUploaded);
//			InputStream inputStream = assetManager.open(fileName);
//			
//			b=new byte[(int) inputStream.available()];
//			inputStream.read(b);
//			inputStream.close();			
////			String test="Hello";
////			b=Base64.encodeBase64(test.getBytes());
//			} 
//		catch (FileNotFoundException e) 
//			{
//                Log.e("FILE NOT FOUND ERROR", e.getLocalizedMessage());
//			}
//		catch (IOException e1) 
//			{
//				Log.e("IO ERROR", e1.getLocalizedMessage());
//			}
//		return b;
//		}
	
//	public static byte[] hexStringToByteArray(String hexStr) { 
//
//        byte[] bts = new byte[hexStr.length() / 2];
//
//        for (int i = 0; i < bts.length; i++) {
//
//                bts[i] = (byte) Integer.parseInt(hexStr.substring(2*i, 2*i+2), 16);
//
//        }
//
//        return bts;
//
//    }


	
//	private static String[] byteArrayToHexString(byte[] b) throws Exception {
//
//		ArrayList<String> listOfResults= new ArrayList<String>(); 
//        String result = "";
//
//        for (int i=0; i < b.length; i++) {
//
//                result +=
//
//                        Integer.toString( ( b[i] & 0xff ) + 0x100, 16).substring( 1 );
//
//        }
//        
//		
//		String tempHolder="";
//		
//		 while(result.length()>300)
//	        {
//	        	
//	        	tempHolder=result.substring(0,300);
//	        	listOfResults.add(tempHolder);
//	        	result=result.substring(300);
//	        }
//		 if(result.length()>0)
//			 listOfResults.add(result);
//
//	        String[] finalResult = new String[listOfResults.size()];
//	        finalResult = listOfResults.toArray(finalResult);
//        return finalResult;
//    }

	private static String adjustOrderNumberForBackend(String orderNumber)
	{
		StringBuffer sbuffer= new StringBuffer(orderNumber); 
		while(sbuffer.length()<BACKEND_LENGTH_OF_ORDER_NUMBER)
		{
			sbuffer.insert(0, ORDER_NUMBER_PADDING_CHARACTER);
		}
		return sbuffer.toString();
	}
	
	public boolean updateFileQueue(ArrayList<QueueRecord> listOfFiles)
	{
		try{
		LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|updateFileQueue|"+"Entering method updateFileQueue");	
		for(QueueRecord singleFile:listOfFiles)
			{
			VHCLocalUploadQueue localObject =VHCLocalUploadQueue.findByPrimaryKey(singleFile.getOrderNumber(), singleFile.getFilePath());
			if(localObject==null)
				{
				localObject = new VHCLocalUploadQueue();
				localObject.setVBELN(singleFile.getOrderNumber());
				localObject.setFILEPATH(singleFile.getFilePath());
				//localObject.setSTATUS(BigInteger.valueOf(ORDER_SAVED_FILE_PUSHED_QUEUE));
				localObject.setSTATUS(ORDER_SAVED_FILE_PUSHED_QUEUE);
				localObject.create();
				localObject.save();
				}
			
			}
		return true;
		}catch(Exception e)
		{
			LogWriter.getLogWriter("UNCAUGHT EXCEPTION", "UNCAUGHT EXCEPTION").logError(e);
			return false;
		}
		finally
		{
			LogWriter.getLogWriter("INFO", "MBODataProvider").logInfo("MBODataProvi+der|updateFileQueue|"+"Exiting method updateFileQueue");	
		}
		
	}
		
	@Override
	public boolean isUploadQueueEmpty()
	{
		try{
			GenericList<VHCLocalUploadQueue> listOfFilesToUpload = VHCLocalUploadQueue.findAll();
			if(listOfFilesToUpload==null||listOfFilesToUpload.size()==0)
				return true;
			else	
				{
					for(VHCLocalUploadQueue fileToBeUploaded:listOfFilesToUpload)
					{
						if(fileToBeUploaded.getSTATUS()==ORDER_SUBMITTED_FILE_READY_FOR_UPLOAD)
						{
							return false;
						}
					}
					return true;
				}
		}catch(Exception e)
		{
			LogWriter.getLogWriter("UNCAUGHT EXCEPTION", "UNCAUGHT EXCEPTION").logError(e);
			return true;
		}
	}
	
//	private static byte[] loadFile(String fileName) throws IOException {
//	   
//	    File dir= Environment.getExternalStorageDirectory();
//		File fileToBeUploaded= new File(dir,fileName);
//		 InputStream is = new FileInputStream(fileToBeUploaded);
//	    long length = fileToBeUploaded.length();
//	    if (length > Integer.MAX_VALUE) {
//	        // File is too large
//	    }
//	    byte[] bytes = new byte[(int)length];
//	    
//	    int offset = 0;
//	    int numRead = 0;
//	    while (offset < bytes.length
//	           && (numRead=is.read(bytes, offset, bytes.length-offset)) >= 0) {
//	        offset += numRead;
//	    }
// 
//	    if (offset < bytes.length) {
//	        throw new IOException("Could not completely read file "+fileToBeUploaded.getName());
//	    }
// 
//	    is.close();
//	    return bytes;
//	}
	
//    public static String toHexFromByte(final byte b)
//    {
//      byte leftSymbol = (byte)((b >>> BITS_PER_HEX_DIGIT) & 0x0f);
//      byte rightSymbol = (byte)(b & 0x0f);
//
//      return (hexSymbols[leftSymbol] + hexSymbols[rightSymbol]);
//    }

//    public static String toHexFromBytes(final byte[] bytes)
//    {
//      if(bytes == null || bytes.length == 0)
//      {
//        return ("");
//      }
//
//      // there are 2 hex digits per byte
//      StringBuilder hexBuffer = new StringBuilder(bytes.length * 2);
//
//      // for each byte, convert it to hex and append it to the buffer
//      for(int i = 0; i < bytes.length; i++)
//      {
//        hexBuffer.append(toHexFromByte(bytes[i]));
//      }
//
//      return (hexBuffer.toString());
//    }

	
	/*private boolean authenticateWithoutRelayServer(String username, String password)
	{
		boolean  isAuthorized =true;		
		// Initialize Application settings
		try{
			// Initialize Application settings
			Application app = Application.getInstance();

			if(app.getApplicationIdentifier()==null)  // The identifier has to match the application ID deployed to the SUP server
				app.setApplicationIdentifier(VHC_APPLICATION_IDENTIFIER);
			
			if(app.getApplicationContext()==null)// Set the android.content.Context for the application
				app.setApplicationContext(context); 
			
			// ConnectionProperties has the information needed to register
			// and connect to SUP server
			ConnectionProperties connProps = app.getConnectionProperties();
			connProps.setServerName(SUP_SERVER_NAME);
			// if you are using Relay Server, then use the correct port number for the Relay Server
			// otherwise use the messaging administration port, by default 5001.
			connProps.setPortNumber(SUP_REGISTRATION_PORT);
//			connProps.setFarmId(FARM_ID);
//			connProps.setNetworkProtocol(REGISTRATION_NETWORK_PROTOCOL);

			
			
			//TODO Change it asper the requirements
			// provide user credentials 
					LoginCredentials loginCred = new LoginCredentials(username, password);
					connProps.setLoginCredentials(loginCred);

					// Initialize generated package database class with this Application instance
					VHCDB.setApplication(app); 
					
					if (app.getRegistrationStatus() != RegistrationStatus.REGISTERED)
					{
					   // If the application has not been registered to the server,
					   // register now
						 app.registerApplication(REGISTRATION_TIMEOUT_TIME);
					}
					else
					{        
					   // start the connection to server
					   app.startConnection(REGISTRATION_TIMEOUT_TIME);
					}
			
		
			// Initialize the device database connection profile (if needed)
					
				ConnectionProfile connProfile = VHCDB.getConnectionProfile();

					// Store the database in an SD card
					connProfile.setProperty(PROPERTY_DATABASE_FILE, android.os.Environment.getExternalStorageDirectory().getPath() + DATABASE_FILE);

					// encrypt the database
					connProfile.setEncryptionKey(ENCRYPTION_KEY); //Encryption key can be of arbitary length, but generally the longer, the better.

					// use 100K for cache size
					connProfile.setCacheSize(CACHE_SIZE);
					
					
					ConnectionProfile cp = VHCDB.getSynchronizationProfile();
					
					cp.setServerName(CONNECTION_SERVER_NAME);
					cp.setPortNumber(CONNECTION_PORT);        	
					cp.setNetworkStreamParams(CONNECTION_NETWORK_STREAM_PARAMS);
					//cp.getStreamParams().setTrusted_Certificates("BookMyDevice"+"_trustedCertificates.crt");
					 cp.setNetworkProtocol(CONNECTION_NETWORK_PROTOCOL);
				
					if (!VHCDB.databaseExists())
				    {
						VHCDB.createDatabase();
				    } 
					else 
					{
						VHCDB.openConnection();
				    }
					
					//TODO Change  the username and password if required
					ConnectionProfile syncProfile = VHCDB.getSynchronizationProfile();
					syncProfile.setUserName(username);
					syncProfile.setPassword(password);
					VHCDB.onlineLogin();					
					//Setting Personalization Keys	
						VHCDB.cleanAllData();
						PersonalizationParameters pp = VHCDB.getPersonalizationParameters();
						//pp.setUsername("TEX_EVAG");
						//pp.setUserId("EX_EVAG");
						pp.setUserId("EX_AGNELLOC");
						pp.save();
						//VHCDB.getLogger().setLogLevel(LogLevel.INFO);
						VHCDB.synchronize(SYNC_GROUP_RARELY_CHANGING_DATA);
						
						UserInfo userInfo = null;
						GenericList<UserInfo> listOfUsers= UserInfo.findAll();
						if(listOfUsers!=null && listOfUsers.size()>0)
							userInfo=listOfUsers.get(0);
						
						//Once user is retreived , use its info to set other personalization keys
						if(userInfo!=null)
						{
							//pp.setPlant(userInfo.getPEX_WERKS());
							pp.setPlant("M413");
							pp.setCompanyCode("2001");
							//pp.setSalesorg(userInfo.getPEX_VKORG());
							//pp.setDivision(userInfo.getPEX_SPART());
							pp.setDivision("40");
							pp.save();
						}
						
						
		}catch(Exception e)
		{
			LogWriter.getLogWriter("UNCAUGHT EXCEPTION", "UNCAUGHT EXCEPTION").logError(e);
			isAuthorized =false;
		}
						
					
		return isAuthorized;
	}*/
	
	private boolean authenticateWithoutRelayServer(String username, String password)
	{
		
		//		username="supAdmin";
		//		password="Passw0rd13";
		boolean  isAuthorized =true;		
		
		ApplicationSettingsManager settingsManager = ApplicationSettingsManager.getInstance(context);
		String supServerHostName = settingsManager.getSupServerHostName();
		int supServerRegistrationPort = settingsManager.getSupServerRegistrationPort();
		int supServerSynchPort=settingsManager.getSupServerSynchPort();
		String supServerMBSFarmID=settingsManager.getSupServerMBSFarmID();
		String supServerRBSFarmID= settingsManager.getSupServerRBSFarmID();
		String supConnectionNetworkStreamParams="url_suffix=/ias_relay_server/client/rs_client.dll/"+supServerRBSFarmID;
		
//		SharedPreferences sharedPref = PreferenceManager.getDefaultSharedPreferences(context);
//		String supServerHostName = sharedPref.getString(PREFERNCE_SUP_SERVER_HOSTNAME,"10.224.22.67");
//		int supServerRegistrationPort = Integer.parseInt(sharedPref.getString(PREFERNCE_SUP_SERVER_MBS_PORT, "5001"));
//		int supServerSynchPort=Integer.parseInt(sharedPref.getString(PREFERNCE_SUP_SERVER_RBS_PORT,"2480"));
//		String supServerMBSFarmID= sharedPref.getString(PREFERNCE_SUP_SERVER_MBS_FARM, "");
//		String supServerRBSFarmID= sharedPref.getString(PREFERNCE_SUP_SERVER_RBS_FARM, "");
//		String supConnectionNetworkStreamParams="url_suffix=/ias_relay_server/client/rs_client.dll/"+supServerRBSFarmID;
		
		
		
		
		// Initialize Application settings
		try{
			// Initialize Application settings
			Application app = Application.getInstance();

			if(app.getApplicationIdentifier()==null)  // The identifier has to match the application ID deployed to the SUP server
				app.setApplicationIdentifier(VHC_APPLICATION_IDENTIFIER);
			
			if(app.getApplicationContext()==null)// Set the android.content.Context for the application
				app.setApplicationContext(context); 
			
			// ConnectionProperties has the information needed to register
			// and connect to SUP server
			ConnectionProperties connProps = app.getConnectionProperties();
			
			connProps.setServerName(supServerHostName);
			if((supServerMBSFarmID!=null)&&(!supServerMBSFarmID.equals("")))
					connProps.setFarmId(supServerMBSFarmID);
			connProps.setPortNumber(supServerRegistrationPort);
			LoginCredentials loginCred = new LoginCredentials(username, password);
			connProps.setLoginCredentials(loginCred);
			// Initialize generated package database class with this Application instance
			VHCDB.setApplication(app); 
			
			if (app.getRegistrationStatus() != RegistrationStatus.REGISTERED)
					{
					   // If the application has not been registered to the server,
					   // register now
						 app.registerApplication(REGISTRATION_TIMEOUT_TIME);
					}
					else
					{        
					   // start the connection to server
					   app.startConnection(REGISTRATION_TIMEOUT_TIME);
					}
			
		
			// Initialize the device database connection profile (if needed)
					
			ConnectionProfile connProfile = VHCDB.getConnectionProfile();

			// Store the database in an SD card
			connProfile.setProperty(PROPERTY_DATABASE_FILE, android.os.Environment.getExternalStorageDirectory().getPath() + DATABASE_FILE);

			// encrypt the database
			connProfile.setEncryptionKey(ENCRYPTION_KEY); //Encryption key can be of arbitary length, but generally the longer, the better.

			// use 100K for cache size
			connProfile.setCacheSize(CACHE_SIZE);
					
					
				ConnectionProfile cp = VHCDB.getSynchronizationProfile();
				cp.setServerName(supServerHostName);
				cp.setPortNumber(supServerSynchPort);
				if((supServerRBSFarmID!=null)&&(!supServerRBSFarmID.equals("")))
					cp.setNetworkStreamParams(supConnectionNetworkStreamParams);
				if (!VHCDB.databaseExists())
				    {
						VHCDB.createDatabase();
				    } 
					else 
					{
						VHCDB.openConnection();
				    }
					
				ConnectionProfile syncProfile = VHCDB.getSynchronizationProfile();
				syncProfile.setUserName(username);
				syncProfile.setPassword(password);
				VHCDB.onlineLogin();					
				//Setting Personalization Keys	
				VHCDB.cleanAllData();
				PersonalizationParameters pp = VHCDB.getPersonalizationParameters();
				//pp.setUsername("TEX_EVAG");
				//pp.setUserId("EX_EVAG");
				//pp.setUserId("EX_RADOSLAWM");
				pp.setUserId(username);
				pp.setUsername(username);
				pp.setPassword(password);
				pp.save();
				//VHCDB.getLogger().setLogLevel(LogLevel.INFO);
				VHCDB.synchronize(SYNC_GROUP_RARELY_CHANGING_DATA);
						
				UserInfo userInfo = null;
				GenericList<UserInfo> listOfUsers= UserInfo.findAll();
				if(listOfUsers!=null && listOfUsers.size()>0)
					userInfo=listOfUsers.get(0);
						
				//Once user is retreived , use its info to set other personalization keys
				if(userInfo!=null)
						{
					
					pp.setPlant(userInfo.getPEX_WERKS());
					pp.setCompanyCode(userInfo.getPEX_BUKRS());
					pp.setDivision(userInfo.getPEX_SPART());
//							//pp.setPlant(userInfo.getPEX_WERKS());
							pp.setPlant("M413");
							pp.setCompanyCode("2001");
//							//pp.setSalesorg(userInfo.getPEX_VKORG());
//							//pp.setDivision(userInfo.getPEX_SPART());
							pp.setDivision("40");
							pp.save();
							VHCDB.synchronize(SYNC_GROUP_RARELY_CHANGING_DATA);
						}
						
						
		}catch(Exception e)
		{
			//LogWriter.getLogWriter("UNCAUGHT EXCEPTION", "UNCAUGHT EXCEPTION").logError(e);
			isAuthorized =false;
		}
						
					
		return isAuthorized;
	}
}
	
