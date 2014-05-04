package com.afm.vhc.android;

import android.content.Context;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;

public class ApplicationSettingsManager implements VHCApplicationConstants{
	
	private static ApplicationSettingsManager applicationSettingsManager;
	
	public String getRelayServerHostName() {
		return relayServerHostName;
	}

	public void setRelayServerHostName(String relayServerHostName) {
		this.relayServerHostName = relayServerHostName;
	}

	public int getRelayServerRegistrationPort() {
		return relayServerRegistrationPort;
	}

	public void setRelayServerRegistrationPort(int realyServerRegistrationPort) {
		this.relayServerRegistrationPort = realyServerRegistrationPort;
	}

	public int getRelayServerSynchPort() {
		return relayServerSynchPort;
	}

	public void setRelayServerSynchPort(int relayServerSynchPort) {
		this.relayServerSynchPort = relayServerSynchPort;
	}

	public String getRelayServerMBSFarmID() {
		return relayServerMBSFarmID;
	}

	public void setRelayServerMBSFarmID(String relayServerMBSFarmID) {
		this.relayServerMBSFarmID = relayServerMBSFarmID;
	}

	public String getRelayServerRBSFarmID() {
		return relayServerRBSFarmID;
	}

	public void setRelayServerRBSFarmID(String relayServerRBSFarmID) {
		this.relayServerRBSFarmID = relayServerRBSFarmID;
	}

	public String getConnectionNetworkStreamParams() {
		return connectionNetworkStreamParams;
	}

	public void setConnectionNetworkStreamParams(
			String connectionNetworkStreamParams) {
		this.connectionNetworkStreamParams = connectionNetworkStreamParams;
	}

	private String relayServerHostName;
	private int relayServerRegistrationPort;
	private int relayServerSynchPort;	
	private String relayServerMBSFarmID;
	private String relayServerRBSFarmID;
	private String connectionNetworkStreamParams;
	private String currentTheme;
	private String supServerHostName;
	private int supServerRegistrationPort;
	private int supServerSynchPort;
	private String supServerMBSFarmID;
	private String supServerRBSFarmID;
	private boolean logEnabled;
	private boolean relayServerEnabled;
	private String registrationProtocol;
	private String fontSize;
	private boolean questionRestrictions;
	
	public String getFontSize() {
		return fontSize;
	}

	public void setFontSize(String fontSize) {
		this.fontSize = fontSize;
	}

	public boolean isQuestionRestrictions() {
		return questionRestrictions;
	}

	public void setQuestionRestrictions(boolean questionRestrictions) {
		this.questionRestrictions = questionRestrictions;
	}

	public String getRegistrationProtocol() {
		return registrationProtocol;
	}

	public void setRegistrationProtocol(String registrationProtocol) {
		this.registrationProtocol = registrationProtocol;
	}

	private String connectionProtocol;
	
	
	
	public String getConnectionProtocol() {
		return connectionProtocol;
	}

	public void setConnectionProtocol(String connectionProtocol) {
		this.connectionProtocol = connectionProtocol;
	}

	public boolean isRelayServerEnabled() {
		return relayServerEnabled;
	}

	public void setRelayServerEnabled(boolean relayServerEnabled) {
		this.relayServerEnabled = true;// relayServerEnabled;
	}

	public String getSupServerHostName() {
		return supServerHostName;
	}

	public void setSupServerHostName(String supServerHostName) {
		this.supServerHostName = supServerHostName;
	}

	public static ApplicationSettingsManager getApplicationSettingsManager() {
		return applicationSettingsManager;
	}

	public static void setApplicationSettingsManager(
			ApplicationSettingsManager applicationSettingsManager) {
		ApplicationSettingsManager.applicationSettingsManager = applicationSettingsManager;
	}

	public String getCurrentTheme() {
		return currentTheme;
	}

	public void setCurrentTheme(String currentTheme) {
		this.currentTheme = currentTheme;
	}

	public int getSupServerRegistrationPort() {
		return supServerRegistrationPort;
	}

	public void setSupServerRegistrationPort(int supServerRegistrationPort) {
		this.supServerRegistrationPort = supServerRegistrationPort;
	}

	public int getSupServerSynchPort() {
		return supServerSynchPort;
	}

	public void setSupServerSynchPort(int supServerSynchPort) {
		this.supServerSynchPort = supServerSynchPort;
	}

	public String getSupServerMBSFarmID() {
		return supServerMBSFarmID;
	}

	public void setSupServerMBSFarmID(String supServerMBSFarmID) {
		this.supServerMBSFarmID = supServerMBSFarmID;
	}


	




	public boolean isLogEnabled() {
		return logEnabled;
	}

	public void setLogEnabled(boolean logEnabled) {
		this.logEnabled = logEnabled;
	}

	public String getSupServerRBSFarmID() {
		return supServerRBSFarmID;
	}

	public void setSupServerRBSFarmID(String supServerRBSFarmID) {
		this.supServerRBSFarmID = supServerRBSFarmID;
	}

	private ApplicationSettingsManager()
	{
		
	}
	
	public static ApplicationSettingsManager getInstance(Context context)
	{
		if(applicationSettingsManager==null)
			{
				applicationSettingsManager= new ApplicationSettingsManager();
				applicationSettingsManager.initialize(context);
			}
		return applicationSettingsManager;
	}
	
	public static void cleanApplicationSettings()
	{
		applicationSettingsManager=null;
	}
	
	private void initialize(Context context)
	{
		SharedPreferences sharedPref = PreferenceManager.getDefaultSharedPreferences(context);
		setRelayServerHostName(sharedPref.getString(PREFERENCE_RELAY_SERVER_HOSTNAME,"relayserver.sybase.com"));
		setRelayServerRegistrationPort(Integer.parseInt(sharedPref.getString(PREFERNCE_RELAY_SERVER_MBS_PORT, "80")));
		setRelayServerSynchPort(Integer.parseInt(sharedPref.getString(PREFERNCE_RELAY_SERVER_RBS_PORT,"80")));	
		setRelayServerMBSFarmID("AFMQ.QMBS");
		setRelayServerRBSFarmID("AFMQ.QRBS");
		setConnectionNetworkStreamParams("url_suffix=/ias_relay_server/client/rs_client.dll/"+relayServerRBSFarmID);
		setSupServerRegistrationPort(Integer.parseInt(sharedPref.getString(PREFERNCE_SUP_SERVER_MBS_PORT, "5001")));
		setSupServerSynchPort(Integer.parseInt(sharedPref.getString(PREFERNCE_SUP_SERVER_RBS_PORT,"2480")));
		setSupServerMBSFarmID(sharedPref.getString(PREFERNCE_RELAY_SERVER_MBS_FARM, ""));
		setSupServerRBSFarmID(sharedPref.getString(PREFERNCE_RELAY_SERVER_RBS_FARM, ""));
		setCurrentTheme(sharedPref.getString(PREFERNCE_CURRENT_THEME,"TOYOTA"));
		setLogEnabled(sharedPref.getBoolean(PREFERENCE_LOG_ENABLED,false));
		setRelayServerEnabled(sharedPref.getBoolean(PREFERENCE_RELAY_SERVER_ENABLED,false));
		setRegistrationProtocol(sharedPref.getString(PREFERENCE_REGISTRATION_PROTOCOL,"http"));
		setConnectionProtocol(sharedPref.getString(PREFERENCE_CONNECTION_PROTOCOL,"http"));	
		setQuestionRestrictions(sharedPref.getBoolean(PREFERENCE_QUESTION_RESTRICTIONS,true));
		setFontSize(sharedPref.getString(PREFERENCE_FONT_SIZE, "Normal"));
	}
}
