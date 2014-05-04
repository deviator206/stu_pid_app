package com.afm.vhc.android;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import android.app.IntentService;
import android.content.Intent;
import android.os.Environment;
import android.util.Log;
import com.afm.vhc.VHCDB;
import com.afm.vhc.VHCLocalUploadQueue;
import com.afm.vhc.VHCQuestionnaireUploadFilesAsXStringOperation;
import com.sybase.collections.GenericList;

public class FileUploadService  extends IntentService implements VHCApplicationConstants{

	public FileUploadService() 
		{
		super("FileUploadService");
		}

	@Override
	protected void onHandleIntent(Intent intent) 
		{
    	GenericList<VHCLocalUploadQueue> filesToBeUploaded= VHCLocalUploadQueue.findAll();
    	boolean uploadResult=false;
    	
    	for(VHCLocalUploadQueue singleFile:filesToBeUploaded)
    		{
    			if(singleFile.getSTATUS()==ORDER_SUBMITTED_FILE_READY_FOR_UPLOAD)
    				{
    					try{
    						String fileName="something";
    						uploadResult=uploadImage(fileName,singleFile.getFILEPATH() , singleFile.getVBELN());
    						if(uploadResult)
    							{
    							singleFile.delete();
    							singleFile.save();
    							}
    						}
    						catch(Exception e)
    							{
    							Log.e("File Upload Error",e.getLocalizedMessage());
    							}
    				}	
    		}		
		}
	
	public boolean uploadImage(String fileName,String filePath, String orderNumber)
	   	{
	   		
	   		VHCQuestionnaireUploadFilesAsXStringOperation fileUploadOperation = new VHCQuestionnaireUploadFilesAsXStringOperation();
	   		fileUploadOperation.setPIM_FILENAME(fileName);
	   		fileUploadOperation.setPIM_XCONTENT(fileToByteArrayConverter(filePath));
	   		fileUploadOperation.setPIM_VBELN(orderNumber);   		
	   		fileUploadOperation.save();
	   		fileUploadOperation.submitPending();
	   		VHCDB.synchronize();
	   		
	   		return true;
	   		
	   	}
	private byte[] fileToByteArrayConverter(String filePath)
	{
	//AssetManager assetManager = context.getAssets();
	File dir= Environment.getExternalStorageDirectory();
	File fileToBeUploaded= new File(dir,filePath);
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
           Log.e("ERROR", e.getLocalizedMessage());
		}
	catch (IOException e1) 
		{
		Log.e("ERROR", e1.getLocalizedMessage());
		}
	return b;
	}
}
