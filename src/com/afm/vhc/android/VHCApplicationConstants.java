package com.afm.vhc.android;

public interface VHCApplicationConstants {
	
	public static final String VHC_APPLICATION_IDENTIFIER="VHC";
	public static final String RELAY_SERVER_NAME="relayserver.sybase.com";
//	public static final String FARM_ID="AFM.DEVMBS";
	public static final String REGISTRATION_NETWORK_PROTOCOL="http";
	public static final int REGISTRATION_TIMEOUT_TIME=600;
	
	public static final String PROPERTY_DATABASE_FILE="databaseFile";
	public static final String DATABASE_FILE="/VHCDB.ulj";
	public static final String ENCRYPTION_KEY="VehicleHealthCheck";
	public static final int CACHE_SIZE=102400;
//	public static final int REGISTRATION_PORT=80;
//	
//	public static final String CONNECTION_SERVER_NAME="relayserver.sybase.com";
//	public static final int CONNECTION_PORT=80;
//	public static String CONNECTION_NETWORK_STREAM_PARAMS="url_suffix=/ias_relay_server/client/rs_client.dll/AFM.DEVRBS";
	public static String CONNECTION_NETWORK_PROTOCOL="http";
	
	public static final String SYNC_GROUP_RARELY_CHANGING_DATA="RarelyChangingData";
	public static final String SYNC_GROUP_REQUEST_RESPONSE="RequestResponse";
	
	public static final int  BACKEND_LENGTH_OF_ORDER_NUMBER=10;
	public static final int  ORDER_SAVED_FILE_PUSHED_QUEUE=1;
	public static final int  ORDER_SUBMITTED_FILE_READY_FOR_UPLOAD=2;
	public static final String ORDER_NUMBER_PADDING_CHARACTER="0";
	
	public static final String LOCAL_RESULTS_VALUE="value";
	public static final String LOCAL_RESULTS_COMMENTS="comments";
	public static final String LOCAL_RESULTS_FILES_TO_BE_UPLOADED="filesToBeUploaded";
	
	public static final String PREFERENCE_RELAY_SERVER_ENABLED="relay_server_enabled";
	public static final String PREFERENCE_LOG_ENABLED="logging_config";
	public static final String PREFERENCE_RELAY_SERVER_HOSTNAME="relay_server";
	public static final String PREFERNCE_RELAY_SERVER_RBS_PORT="relay_rbs_port";
	public static final String PREFERNCE_RELAY_SERVER_MBS_PORT="relay_mbs_port";
	public static final String PREFERNCE_RELAY_SERVER_RBS_FARM="relay_farm_id_rbs";
	public static final String PREFERNCE_RELAY_SERVER_MBS_FARM="relay_farm_id_mbs";
	public static final String PREFERNCE_SUP_SERVER_HOSTNAME="sup_server";
	public static final String PREFERNCE_SUP_SERVER_RBS_PORT="sup_rbs_port";
	public static final String PREFERNCE_SUP_SERVER_MBS_PORT="sup_mbs_port";
	public static final String PREFERNCE_SUP_SERVER_RBS_FARM="sup_farm_id_rbs";
	public static final String PREFERNCE_SUP_SERVER_MBS_FARM="sup_farm_id_mbs";
	public static final String PREFERNCE_CURRENT_THEME="application_theme";
	public static final String PREFERENCE_REGISTRATION_PROTOCOL="registration_protocol";
	public static final String PREFERENCE_CONNECTION_PROTOCOL="connection_protocol";
	public static final String PREFERENCE_QUESTION_RESTRICTIONS="question_restrictions";
	public static final String PREFERENCE_FONT_SIZE="font_size";
	
	
	
	


	
	
	
	
//	public static enum ThemeType {
//        TOYOTA(1), LEXUS(2);
//        private int value;
//
//        private ThemeType(int value) {
//                this.value = value;
//        }
//};   


	
	

}
