package com.afm.vhc.android;

import java.util.ArrayList;
import java.util.HashMap;
import com.afm.vhc.LocalOrderStore;
import com.afm.vhc.PEX_VALUES;
import com.afm.vhc.SearchOrder;
import com.afm.vhc.VHCQuestionnaire;


public interface DataProvider {
	/**
	 * This method  retreives all the orders whose order number match the search key provided 
	 * @param searchKey
	 * @return
	 */
	public ArrayList<SearchOrder> getAllOrders(String searchKey);
	/**
	 * This method  retreives all the details for the order provided as input 
	 * @param orderNumber
	 * @return
	 */
	public  SearchOrder getOrderDetails(String orderNumber);
	/**
	 * Method for validating user's credentials
	 * @param username
	 * @param password
	 * @return
	 */
	public  boolean isUserValid(String username, String password);
	public  ArrayList<LocalOrderStore> getPendingOrders();
	public ArrayList<VHCQuestionnaire> getQuestions();
	public ArrayList<PEX_VALUES> getQuestionValue(String section_id, String ques_id);
	public boolean saveIndividualQuestion(String orderNumber, String sectionID, String questionID, String result,String comment);
	public String submitQuestionnaire(String orderNumber);
	public String getStoredValuesForQuestion(String orderNumber, String sectionId, String questionId);
	public boolean isUploadQueueEmpty();
	public HashMap<String,String> getStoredValuesAndCommentsForQuestion(String orderNumber, String sectionId, String questionId);
	public ArrayList<String> getImagesForQuestion(ArrayList<String> filesForOrder,String orderNumber, String sectionId, String questionId);
	public ArrayList<String> getFilesForOrder(String orderNumber);
	boolean updateLocalOrderRecords(String orderNumber);
}
