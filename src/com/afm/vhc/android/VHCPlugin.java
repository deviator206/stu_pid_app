package com.afm.vhc.android;

import java.util.ArrayList;
import java.util.HashMap;
import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;
import android.widget.Toast;

import com.afm.vhc.LocalOrderStore;
import com.afm.vhc.PEX_VALUES;
import com.afm.vhc.SearchOrder;
import com.afm.vhc.VHCDB;
import com.afm.vhc.VHCLaunchActivity;
import com.afm.vhc.VHCQuestionnaire;

public class VHCPlugin extends CordovaPlugin implements VHCApplicationConstants{

	//Supported Plugin Actions	
	private static final String ACTION_LOGIN="login";
	private static final String ACTION_SEARCH="search";
	private static final String ACTION_GET_PENDING_JOBS="pendingJobs";
	private static final String ACTION_GET_JOBCARD_SUMMARY="jobCardSummary";
	private static final String ACTION_GET_QUESTION_LIST="questionList";
	private static final String ACTION_SAVE_AND_EXIT="saveAndExit";
	private static final String ACTION_SUBMIT="submit";
	private static final String ACTION_EXIT_CHECK="appExit";
	private static final String ACTION_SUP_LOG="supLog";
	private static final String ACTION_SUP_BATCH_LOG="supBatchLog";
	private static final String ACTION_HELP="help";
	private static CallbackContext callbackContext;
	
	
	
	public static CallbackContext getCallbackContext() {
		return callbackContext;
	}

	public static void setCallbackContext(CallbackContext callbackContext) {
		VHCPlugin.callbackContext = callbackContext;
	}

	@Override
	public boolean execute(String action, final JSONArray args,
			final CallbackContext callbackContext) throws JSONException {
		LogWriter.getLogWriter("INFO", "VHCPlugin").logInfo("Data Received: ACTION="+action+" ARGS: "+args);
		DataProvider dp = null;
		if (VHCLaunchActivity.isBackendConnected()) {
			dp = MBODataProvider.getInstance();
		} else {
			dp = new DummyDataProvider();
		}

		if (action.equals(ACTION_LOGIN)) {
			String username = args.get(0).toString();
			String password = args.getString(1).toString();
			
//		    PluginResult pluginResult = new  PluginResult(PluginResult.Status.NO_RESULT); 
//		    pluginResult.setKeepCallback(true); 
//		    return pluginResult;
			
			
//APP2			cordova.getThreadPool().execute(new Runnable() {
//			    public void run() {
//			        // Main Code goes here
//			        callbackContext.success(); 
//			    }
//			});
			
			boolean result = dp.isUserValid(username, password);
			String res = Boolean.valueOf(result).toString();
			LogWriter.getLogWriter("INFO", "VHCPlugin").logInfo("Data SENT: ACTION="+action+" RETURN: "+res);
			callbackContext.success(res);
		}

		else if (action.equals(ACTION_SEARCH)) {
			//BackgroundFileUploader fileUploader  = new BackgroundFileUploader();
			//fileUploader.execute();
			String searchKey = args.get(0).toString();
			JSONArray jsonOutputArray = new JSONArray();
			JSONObject outputObject = new JSONObject();

			ArrayList<SearchOrder> resultso = dp.getAllOrders(searchKey);
			ArrayList<LocalOrderStore> resultlos = dp.getPendingOrders();

			boolean flag = false;
			String flag1;

			for (SearchOrder so : resultso) {
				
				outputObject = new JSONObject();
				
				flag = false;
				for (LocalOrderStore los : resultlos) {
					if (so.getVBELN().equals(los.getVBELN())) {
						flag = true;
						break;
					}
				}
				flag1 = Boolean.valueOf(flag).toString();
				outputObject.put("isPending", flag1);
				outputObject.put("year", so.getCSTRYEAR());
				outputObject.put("chasis", so.getVHVIN());
				outputObject.put("model", so.getVMODEL_TXT());
				outputObject.put("customer_name", so.getDEBITOR_NAME());
				outputObject.put("advisor_name", so.getPNAME());
				outputObject.put("license_plate", so.getLICPL());
				outputObject.put("date", so.getVISIT_START_DATE());
				outputObject.put("time", so.getVISIT_START_TIME());
				outputObject.put("id", adjustOrderNumberForBackend(so.getVBELN()));
				outputObject.put("spart_txt", so.getSPART_TXT());
				jsonOutputArray.put(outputObject);
			}

			LogWriter.getLogWriter("INFO", "VHCPlugin").logInfo("Data SENT: ACTION="+action+" RETURN: "+jsonOutputArray);
			callbackContext.success(jsonOutputArray);
			

		}

		else if (action.equals(ACTION_GET_PENDING_JOBS)) {

			JSONArray jsonOutputArray = new JSONArray();
			JSONObject outputObject = new JSONObject();

			ArrayList<LocalOrderStore> resultlos = dp.getPendingOrders();
			for (LocalOrderStore so : resultlos) {
				outputObject = new JSONObject();
				outputObject.put("year", so.getCSTRYEAR());
				outputObject.put("chasis", so.getVHVIN());
				outputObject.put("model", so.getVMODEL_TXT());
				outputObject.put("customer_name", so.getDEBITOR_NAME());
				outputObject.put("advisor_name", so.getPNAME());
				outputObject.put("license_plate", so.getLICPL());
				outputObject.put("date", so.getVISIT_START_DATE());
				outputObject.put("time", so.getVISIT_START_TIME());
				outputObject.put("id", adjustOrderNumberForBackend(so.getVBELN()));
				outputObject.put("spart_txt", so.getSPART_TXT());
				jsonOutputArray.put(outputObject);
			}

			LogWriter.getLogWriter("INFO", "VHCPlugin").logInfo("Data SENT: ACTION="+action+" RETURN: "+jsonOutputArray);
			callbackContext.success(jsonOutputArray);
		
		}

		else if (action.equals(ACTION_GET_JOBCARD_SUMMARY)) {
			String orderNumber = args.getString(0).toString();
			JSONObject outputObject = new JSONObject();

			SearchOrder so = dp.getOrderDetails(orderNumber);

			outputObject.put("year_of_mfg", so.getCSTRYEAR());
			outputObject.put("chasis", so.getVHVIN());
			outputObject.put("model", so.getVMODEL_TXT());
			outputObject.put("customer_name", so.getDEBITOR_NAME());
			outputObject.put("service_advisor_name", so.getPNAME());
			outputObject.put("plate", so.getLICPL());
			outputObject.put("date", so.getVISIT_START_DATE());
			outputObject.put("start_time", so.getVISIT_START_TIME());
			outputObject.put("job_jd", adjustOrderNumberForBackend(so.getVBELN()));
			outputObject.put("spart_txt", so.getSPART_TXT());

			LogWriter.getLogWriter("INFO", "VHCPlugin").logInfo("Data SENT: ACTION="+action+" RETURN: "+outputObject);
			callbackContext.success(outputObject);
			
		}

		else if (action.equals(ACTION_GET_QUESTION_LIST)) {
			String orderNumber = args.getString(0).toString();
			JSONArray jsonOutputArray = new JSONArray();
			JSONObject outputObject = new JSONObject();
			JSONArray jsonValuesArray, jsonImageArray, jsonSequenceArray;
			ArrayList<VHCQuestionnaire> ques = dp.getQuestions();
			ArrayList<PEX_VALUES> ques_value;
			ArrayList<String> filesToBeUploaded = dp.getFilesForOrder(orderNumber);

			for (VHCQuestionnaire vhcq : ques) 
				{
					jsonImageArray  =new JSONArray();
					jsonSequenceArray = new JSONArray();
					jsonValuesArray = new JSONArray();
					outputObject = new JSONObject();
					outputObject.put("section_id", vhcq.getSECTION_ID());
					outputObject.put("section_desc", vhcq.getSECTION_DESC());
					outputObject.put("quest_id", vhcq.getQUES_ID());
					outputObject.put("quest_desc", vhcq.getQUES_DESC());
					outputObject.put("quest_type", vhcq.getQUES_TYPE());
					//outputObject.put("sequence", vhcq.getSEQUENCE());
					outputObject.put("mandatory", vhcq.getMANDATORY());
					outputObject.put("default", vhcq.getDEFAUL());
					if(filesToBeUploaded!=null && filesToBeUploaded.size()>0)
						{
						ArrayList<String>listOfFilesForQuestion=dp.getImagesForQuestion(filesToBeUploaded, orderNumber, vhcq.getSECTION_ID(), vhcq.getQUES_ID());
						for(String fileName:listOfFilesForQuestion)
							{
							jsonImageArray.put(fileName);
							}
						}
					outputObject.put("question_image_files", jsonImageArray);
					HashMap<String, String> commentsAndValues=dp.getStoredValuesAndCommentsForQuestion(orderNumber, vhcq.getSECTION_ID(), vhcq.getQUES_ID());
					//userAnswerToQuestion = dp.getStoredValuesForQuestion(orderNumber, vhcq.getSECTION_ID(), vhcq.getQUES_ID());
					outputObject.put("user_answer", commentsAndValues.get(LOCAL_RESULTS_VALUE));
					outputObject.put("comment", commentsAndValues.get(LOCAL_RESULTS_COMMENTS));
					ques_value = dp.getQuestionValue(vhcq.getSECTION_ID(),
						vhcq.getQUES_ID());
				
				if (ques_value != null) {
					for (PEX_VALUES arrlist : ques_value) {
						jsonValuesArray.put(arrlist.getVALUE());
						jsonSequenceArray.put(arrlist.getSEQUENCE());
					}
				}
				outputObject.put("ques_value", jsonValuesArray);
				outputObject.put("ques_sequence", jsonSequenceArray);

				jsonOutputArray.put(outputObject);
			}

			LogWriter.getLogWriter("INFO", "VHCPlugin").logInfo("Data SENT: ACTION="+action+" RETURN: "+jsonOutputArray);
			callbackContext.success(jsonOutputArray);
			
		}

		else if (action.equals(ACTION_SAVE_AND_EXIT)) {
			
			//BackgroundFileUploader fileUploader  = new BackgroundFileUploader();
			//fileUploader.execute();
			String orderNumber, sectionID, questionID, result;
			String comment="";
			ArrayList<QueueRecord> listOfRecords = new ArrayList<QueueRecord>();//arraylist QueueRecord
			
			QueueRecord qr;
			
			JSONArray jsonOutputArray = new JSONArray();
			JSONObject outputObject = new JSONObject();
			orderNumber = args.getJSONArray(0).getString(0);
			orderNumber=adjustOrderNumberForBackend(orderNumber);
			dp.updateLocalOrderRecords(orderNumber);
			
			String flag;
			for (int i = 0; i < args.length(); i++)
				{
				outputObject = new JSONObject();
						
				orderNumber = args.getJSONArray(i).getString(0);
				orderNumber=adjustOrderNumberForBackend(orderNumber);
				
				sectionID = args.getJSONArray(i).getString(1);
				questionID = args.getJSONArray(i).getString(2);
				result = args.getJSONArray(i).getString(3);
				if(args.getJSONArray(i).length()>5)
					{
					comment = args.getJSONArray(i).getString(5);
					}
			
				
				
				for(int j=0;j<args.getJSONArray(i).getJSONArray(4).length();j++)
				{
					qr = new QueueRecord();
					qr.setOrderNumber(args.getJSONArray(i).getString(0));
					qr.setFilePath(args.getJSONArray(i).getJSONArray(4).getString(j));
					listOfRecords.add(qr);
				}
				
							
				flag = Boolean.valueOf(dp.saveIndividualQuestion(orderNumber, sectionID, questionID, result,comment)).toString();
				outputObject.put("result", flag);
				jsonOutputArray.put(outputObject);
			}

			
			if((dp instanceof MBODataProvider) && (listOfRecords.size()>0))
			{
				MBODataProvider mdp= (MBODataProvider)dp;
				mdp.updateFileQueue(listOfRecords);
			}

			LogWriter.getLogWriter("INFO", "VHCPlugin").logInfo("Data SENT: ACTION="+action+" RETURN: "+jsonOutputArray);
			callbackContext.success(jsonOutputArray);
			
		}

		else if (action.equals(ACTION_SUBMIT)) {
			//BackgroundFileUploader fileUploader  = new BackgroundFileUploader();
			//fileUploader.execute();
			String orderNumber=null, sectionID, questionID, result;
			String comment="";
			JSONObject outputObject = new JSONObject();
			orderNumber = args.getJSONArray(0).getString(0);
			orderNumber=adjustOrderNumberForBackend(orderNumber);
			dp.updateLocalOrderRecords(orderNumber);

			ArrayList<QueueRecord> listOfRecords = new ArrayList<QueueRecord>();//arraylist QueueRecord
			
			QueueRecord qr;
			
			for (int i = 0; i < args.length(); i++) {
				orderNumber = args.getJSONArray(i).getString(0);
				orderNumber =adjustOrderNumberForBackend(orderNumber);
				sectionID = args.getJSONArray(i).getString(1);
				questionID = args.getJSONArray(i).getString(2);
				result = args.getJSONArray(i).getString(3);
				
				if(args.getJSONArray(i).length()>5)
					{
					comment = args.getJSONArray(i).getString(5);
					}
				

				for(int j=0;j<args.getJSONArray(i).getJSONArray(4).length();j++)
				{
					qr = new QueueRecord();
					qr.setOrderNumber(orderNumber);
					qr.setFilePath(args.getJSONArray(i).getJSONArray(4).getString(j));
					listOfRecords.add(qr);
				}
				
				dp.saveIndividualQuestion(orderNumber, sectionID, questionID,result,comment);
			}
			
			if((dp instanceof MBODataProvider)&&(listOfRecords.size()>0))
			{
				MBODataProvider mdp= (MBODataProvider)dp;
				mdp.updateFileQueue(listOfRecords);
				//BackgroundFileUploader fileUploader = new BackgroundFileUploader();
				//fileUploader.execute();
			}

			// ArrayList<VHCQuestionnaire> listOfQuestions =
			// dataFetcher.getQuestionsForOrder(orderNumber);
			// dp.saveIndividualQuestion(orderNumber, sectionID, questionID,
			// result)
			// dp.submitQuestionnaire(orderNumber);

			// JSONArray outermostArray= new JSONArray();
			// JSONObject outermostObject = new JSONObject();
			// outermostObject.put("commandName", "submit");
			// outermostObject.put("content", jsonOutputArray);
			// outermostArray.put(outermostObject);
			
			if(orderNumber!=null)
				{
				outputObject.put("message", dp.submitQuestionnaire(orderNumber));
				BackgroundFileUploader fileUploader = new BackgroundFileUploader();
				fileUploader.execute();
				}
			LogWriter.getLogWriter("INFO", "VHCPlugin").logInfo("Data SENT: ACTION="+action+" RETURN: "+outputObject);
			callbackContext.success(outputObject);
			
		}
		
		else if(action.equals(ACTION_EXIT_CHECK))
		{
			String res="";
			boolean isUploadQueueEmpty = dp.isUploadQueueEmpty();
			res = Boolean.valueOf(!isUploadQueueEmpty).toString();
			if(isUploadQueueEmpty)
			{
				try{
					VHCDB.closeConnection();
					android.os.Process.killProcess(android.os.Process.myPid());
				}catch(Exception e)
				{
					LogWriter.getLogWriter("INFO", "VHCPlugin").logError("Data SENT: ACTION="+action+" RETURN: "+res);
				}
			}
			LogWriter.getLogWriter("INFO", "VHCPlugin").logInfo("Data SENT: ACTION="+action+" RETURN: "+res);
			
			//VHCDB.submitLogRecords();
			

			callbackContext.success(res);
			
			/*MBODataProvider mdp;
			String res="";
			if( dp instanceof MBODataProvider)
			{
				mdp = (MBODataProvider)dp;
				//res = new Boolean(mdp.isUploadQueueEmpty()).toString();
				res = Boolean.valueOf(mdp.isUploadQueueEmpty()).toString();
			}
			callbackContext.success(res);
			*/
		}
		
		else if(action.equals(ACTION_SUP_LOG))
		{
			String message="";
			String severity="";
		for (int i = 0; i < args.length(); i++) 
			{
				message = args.getJSONArray(i).getString(0);
				severity =args.getJSONArray(i).getString(1);
				LogWriter.getLogWriter("JSLog", "JSLog").writeJSLog(message, severity);
			}			
			
		}
		
		else if(action.equals(ACTION_SUP_BATCH_LOG))
		{
			String message="";
			String severity="";
		for (int i = 0; i < args.length(); i++) 
			{
				message = args.getJSONArray(i).getString(0);
				severity =args.getJSONArray(i).getString(1);
				//new BatchLogger().execute(message,severity);
			}			
			
		}
		
		else if(action.equals(ACTION_HELP))
		{
			setCallbackContext(callbackContext);
			return true;
		}


		return false;
	}
	
	private  String adjustOrderNumberForBackend(String orderNumber)
	{
		StringBuffer sbuffer= new StringBuffer(orderNumber); 
		while(sbuffer.length()<10)
		{
			sbuffer.insert(0, "0");
		}
		return sbuffer.toString();
	}
	
	public static void displayHelp()
	{
		callbackContext.success();
	}
}
