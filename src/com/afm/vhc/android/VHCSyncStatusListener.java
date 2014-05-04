package com.afm.vhc.android;

import com.sybase.persistence.ObjectSyncStatusData;
import com.sybase.persistence.SyncStatusListener;
import com.sybase.persistence.SyncStatusState;


public class VHCSyncStatusListener implements SyncStatusListener{

	 long start;
	
	 public VHCSyncStatusListener(){
		 start = System.currentTimeMillis();
	 }
	 
	 public boolean objectSyncStatus(ObjectSyncStatusData statusData){
		 long now = System.currentTimeMillis();
		 long interval = now - start;
		 start = now;
		 String infoMessage;
		 int syncState = statusData.getSyncStatusState();
		 switch (syncState){
		 	case SyncStatusState.SYNC_STARTING:
		 		infoMessage = "START [" + interval + "]";
		 		break;
			 case SyncStatusState.APPLICATION_SYNC_SENDING_HEADER:
				infoMessage = "SENDING HEADERS [" + interval + "]";
				break;
			 case SyncStatusState.APPLICATION_SYNC_SENDING_SCHEMA:
				 infoMessage = "SENDING SCHEMA [" + interval + "]";
				 break;
			 case SyncStatusState.APPLICATION_DATA_UPLOADING:
				 infoMessage = "DATA UPLOADING [" + interval + "] "
						 + statusData.getCurrentMBO() + ": (S>"
						 + statusData.getSentByteCount() + ":"
						 + statusData.getSentRowCount() + " R<"
						 + statusData.getReceivedByteCount() + ":"
						 + statusData.getReceivedRowCount() + ")";
				 break;
			 case SyncStatusState.APPLICATION_SYNC_RECEIVING_UPLOAD_ACK:
				 infoMessage = "RECEIVING UPLOAD ACK [" + interval + "]";
				 break;
			 case SyncStatusState.APPLICATION_DATA_UPLOADING_DONE:
				 infoMessage = "UPLOAD DONE [" + interval + "] "
						 + statusData.getCurrentMBO() + ": (S>"
						 + statusData.getSentByteCount() + ":"
						 + statusData.getSentRowCount() + " R<"
						 + statusData.getReceivedByteCount() + ":"
						 + statusData.getReceivedRowCount() + ")";
				 break;
			 case SyncStatusState.APPLICATION_DATA_DOWNLOADING:
				 infoMessage = "DATA DOWNLOADING[" + interval + "] "
						 + statusData.getCurrentMBO() + ": (S>"
						 + statusData.getSentByteCount() + ":"
						 + statusData.getSentRowCount() + " R<"
						 + statusData.getReceivedByteCount() + ":"
						 + statusData.getReceivedRowCount() + ")"; 
				 break;
	 
			 case SyncStatusState.APPLICATION_SYNC_DISCONNECTING:
				 infoMessage = "DISCONNECTING [" + interval + "]";
				 break;
			 case SyncStatusState.APPLICATION_SYNC_COMMITTING_DOWNLOAD:
				 infoMessage = "COMMITTING DOWNLOAD [" + interval + "] "
						 + statusData.getCurrentMBO() + ": (S>"
						 + statusData.getSentByteCount() + ":"
						 + statusData.getSentRowCount() + " R<"
						 + statusData.getReceivedByteCount() + ":"
						 + statusData.getReceivedRowCount() + ")";
				 break;
			 case SyncStatusState.APPLICATION_SYNC_CANCELLED:
				 infoMessage = "SYNC CANCELED [" + interval + "]";
				 break;
			 case SyncStatusState.APPLICATION_DATA_DOWNLOADING_DONE:
				 infoMessage = "DATA DOWNLOADING DONE [" + interval + "]";
				 break;
			 case SyncStatusState.SYNC_DONE:
				 infoMessage = "DONE [" + interval + "]";
				 break;
			 default:
				 infoMessage = "STATE " + syncState + " [" + interval + "]";
				 break;
		 	}
		 	LogWriter.getLogWriter("INFO", "VHCSyncStatusListener").logInfo(infoMessage);
		 	return false;
		 }
	
}
