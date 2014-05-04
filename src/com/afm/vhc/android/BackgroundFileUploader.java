package com.afm.vhc.android;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import android.os.AsyncTask;
import android.os.Environment;
import android.util.Log;
import com.afm.vhc.VHCDB;
import com.afm.vhc.VHCLocalUploadQueue;
import com.afm.vhc.VHCQuestionnaireUploadFilesAsXStringOperation;
import com.sybase.collections.GenericList;

public class BackgroundFileUploader extends AsyncTask<Void, Void, Void> implements VHCApplicationConstants{

//        private final ProgressDialog dialog = new ProgressDialog(
//                MainActivity.this);

        protected void onPreExecute() {
//            this.dialog.setMessage("Loading...");
//            this.dialog.setCancelable(false);
//            this.dialog.show();
        }
            @Override
            protected Void doInBackground(Void... params) {
            	LogWriter.getLogWriter("INFO", "BackgroundFileUploader").logInfo("Entering doInBackground");
            	GenericList<VHCLocalUploadQueue> filesToBeUploaded= VHCLocalUploadQueue.findAll();
            	boolean uploadResult=false;
            	
            	for(VHCLocalUploadQueue singleFile:filesToBeUploaded)
            		{
            			if(singleFile.getSTATUS()==ORDER_SUBMITTED_FILE_READY_FOR_UPLOAD)
            				{
            					try{
            						String fileName=singleFile.getFILEPATH();
            						uploadResult=uploadImage(fileName,singleFile.getFILEPATH() , singleFile.getVBELN());
            						if(uploadResult)
            							{
            							singleFile.delete();
            							singleFile.save();
            							}
            						}
            						catch(Exception e)
            							{
            							LogWriter.getLogWriter("ERROR", "BackgroundFileUploader:doInBackground").logError(e);
            							Log.e("File Upload Error",e.getLocalizedMessage());
            							}
            				}	
            		}

//            	ArrayList<QueueRecord> fileQueue = new ArrayList<QueueRecord>();
//            	 QueueRecord r1 = new  QueueRecord();
//            	 r1.setFileName("Hello1.txt");
//            	 r1.setFilePath("/vhc/Greetings.txt");
//            	 r1.setOrderNumber("0300029605");
//            	 fileQueue.add(r1);
//            	 
//            	 r1= new QueueRecord();
//            	 r1.setFileName("Hello2.txt");
//            	 r1.setFilePath("/vhc/Greetings.txt");
//            	 r1.setOrderNumber("0300029605");
//            	 fileQueue.add(r1);
//            	try{
//            		for(QueueRecord record:fileQueue)
//            			{
//            			GenericList<Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_CONTENT> imageContent = new GenericList<Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_CONTENT>();
//            			Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_CONTENT lineContent = new Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_CONTENT();
//            			lineContent.setLINE(fileToByteArrayConverter(record.getFilePath()));
//            			imageContent.add(lineContent);
//            			uploadImage(record.getFileName(), imageContent, record.getOrderNumber());
//            			Log.i("Log","File Uploaded");
//            			}
//            	}catch(Exception e)
//            	{
//            		Log.e("ERROR", e.getLocalizedMessage());
//            	}
//            		
//////                File sdCard = Environment.getExternalStorageDirectory();
//// //            uploadFile(sdCard.getAbsolutePath() + "/PruebasEvaluacion/text.txt");
////            	uploadFile();
            	LogWriter.getLogWriter("INFO", "BackgroundFileUploader").logInfo("Exiting doInBackground");
            	return null;

            }

            protected void onPostExecute(Void result) {

//                // For future requirements
//
//                if (dialog.isShowing()) {
//                    dialog.dismiss();
//                }

            }
        

       
       private byte[] fileToByteArrayConverter(String fileName)
		{
    	 LogWriter.getLogWriter("INFO", "BackgroundFileUploader").logInfo("Entering fileToByteArrayConverter with fileName="+fileName);   
		//AssetManager assetManager = context.getAssets();
		File dir= Environment.getExternalStorageDirectory();
		fileName = "afm_vhc/"+fileName;
		File fileToBeUploaded= new File(dir,fileName);
		FileInputStream fis =null ;
		
		byte[] b = null;
		try 
			{
			fis= new FileInputStream(fileToBeUploaded);
			//InputStream inputStream = assetManager.open(fileName);
			b=new byte[(int) fis.available()];
			fis.read(b);
			fis.close();			
			} 
		catch (FileNotFoundException e) 
			{
			LogWriter.getLogWriter("ERROR", "BackgroundFileUploader:fileToByteArrayConverter").logError(e);
               Log.e("ERROR", e.getLocalizedMessage());
			}
		catch (IOException e1) 
			{
			LogWriter.getLogWriter("ERROR", "BackgroundFileUploader:fileToByteArrayConverter").logError(e1);
			Log.e("ERROR", e1.getLocalizedMessage());
			}
		LogWriter.getLogWriter("INFO", "BackgroundFileUploader").logInfo("Exiting fileToByteArray");
		return b;
		}
       public boolean uploadImage(String fileName,String filePath, String orderNumber)
   	{
    	LogWriter.getLogWriter("INFO", "BackgroundFileUploader").logInfo("Entering uploadImage with fileName="+fileName+ " filePath="+filePath+" orderNumber="+orderNumber);
   		VHCQuestionnaireUploadFilesAsXStringOperation fileUploadOperation = new VHCQuestionnaireUploadFilesAsXStringOperation();
   		fileUploadOperation.setPIM_FILENAME(filePath);
   		fileUploadOperation.setPIM_XCONTENT(fileToByteArrayConverter(filePath));
   		fileUploadOperation.setPIM_VBELN(orderNumber);   		
   		fileUploadOperation.save();
   		fileUploadOperation.submitPending();
   		VHCDB.synchronize();
   		LogWriter.getLogWriter("INFO", "BackgroundFileUploader").logInfo("Exiting uploadImage");
   		return true;
   		
   	}
}