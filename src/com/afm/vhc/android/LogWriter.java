package com.afm.vhc.android;


import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.afm.vhc.VHCDB;
import com.afm.vhc.VHCLaunchActivity;
import com.sybase.persistence.LogLevel;
import com.sybase.persistence.Logger;

import android.os.Environment;

public class LogWriter {
	
	private String category;
	private String location;
	private File traceFile;
	private File logFile; 
	private static LogWriter logWriter;
	
	private LogWriter()
	{
		 
	}
	
	public static LogWriter getLogWriter(String category, String location)
	{
		
		if(logWriter==null)
			logWriter=new LogWriter();
		logWriter.category=category;
		logWriter.location=location;
		return logWriter;
	}
	
	private File getLogFile()
	{
		String storageCardPrefix = Environment.getExternalStorageDirectory().getPath();
		
        File dir = new File(storageCardPrefix + "/afm_vhc/");

        if (!dir.exists()) {
            
            boolean directoryCreated = dir.mkdir();
            
            if (!directoryCreated) {
                throw new RuntimeException("Log file directory not created");
            }
            
        }
		File logFile = new File(storageCardPrefix + "/afm_vhc/" + "VHCLogs.txt");
		 if (!logFile.exists())
	       {
	          try
	          {
	             logFile.createNewFile();

	          } 
	          catch (IOException e)
	          {
	              getLogWriter("ERROR", "LogWriter").logError("Exception while creating log file");
                  logException(e);

	          }
	       }
		 return logFile;
	}
	
	public static boolean deleteLogFile(){
	    
	    File logFile = new File(Environment.getExternalStorageDirectory().getPath() + "/afm_vhc/" + "VHCLogs.txt");
	    
	    boolean deletionSuccess = true;
	    
	    if(logFile.exists()){
	        deletionSuccess = logFile.delete();
	    }
	    
	    return deletionSuccess;
	}
	
	public void logWarning(String message)
    {       
        
		message=  "WARN:" +message;
        writeLog(message,"TRACE");
 
    }

	public  void logError(Throwable paramThrowable)
	{
			//paramThrowable=" ERROR: "+paramThrowable;
	        writeLog(paramThrowable);
	}
	public  void logError(String message)
	{
			message= "ERROR:" +message;
	        writeLog(message,"ERROR");
	}
	public  void logInfo(String message)
	{
			message= "INFO:" +message;
	        writeLog(message,"TRACE");
	}
	
	public  void logDebug(String message)
	{
			message= "DEBUG:" +message;
	        writeLog(message,"TRACE");
	}
	
	private void logException(Throwable paramThrowable){
       getLogWriter("ERROR", "LogWriter").logError(paramThrowable.toString());
       getLogWriter("ERROR", "LogWriter").logError(paramThrowable);
       System.exit(0);
    }

	private void writeLog(String message,String logLevel) {
        BufferedWriter buf = null;
        if(VHCLaunchActivity.isLoggingEnabled())
        {
        	try {
        		if (logFile == null)
        			logFile = getLogFile();
        		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        		Date date = new Date();
        		message = category + ":" + dateFormat.format(date) + message + "\r\n";
        		buf = new BufferedWriter(new FileWriter(logFile, true));
        		buf.append(message);
        		buf.newLine();
        		
        		Logger logger = VHCDB.getLogger();
        		// set log level to debug
        		logger.setLogLevel(LogLevel.TRACE);
        		// create a log record with ERROR level and the error message.
        		if(logLevel.equals("TRACE"))
        			{
        			logger.trace(message);        			
        			}
        		else if(logLevel.equals("ERROR"))
        			{
        			logger.error(message);
        			VHCDB.submitLogRecords();
        			}
        		else if(logLevel.equals("DEBUG"))
        			{
        			logger.debug(message);
        			}
        		    			
        		
        		
        		} 
        	catch (IOException e) 
        			{
        			throw new RuntimeException("Exception while writing the buffer stream", e);
        			}
        	catch(Exception e)
        			{
        				//TODO:
        			}
        	finally {
        					safeClose(buf);
        					
        			}
        	
        }
	}
	
	
	public void writeJSLog(String message,String logLevel) {
        BufferedWriter buf = null;
        if(VHCLaunchActivity.isLoggingEnabled())
        {
        	try {
        		if (logFile == null)
        			logFile = getLogFile();
        		message = message + "\r\n";
        		buf = new BufferedWriter(new FileWriter(logFile, true));
        		buf.append(message);
        		buf.newLine();
        		
        		Logger logger = VHCDB.getLogger();
        		// set log level to debug
        		logger.setLogLevel(LogLevel.TRACE);
        		// create a log record with ERROR level and the error message.
        		if(logLevel.equals("TRACE"))
        			{
        			logger.trace(message);        			
        			}
        		else if(logLevel.equals("ERROR"))
        			{
        			logger.error(message);
        			VHCDB.submitLogRecords();
        			}
        		else if(logLevel.equals("DEBUG"))
        			{
        			logger.debug(message);
        			}
        		    			
        		
        		
        		} 
        	catch (IOException e) 
        			{
        			throw new RuntimeException("Exception while writing the buffer stream", e);
        			}
        	catch(Exception e)
        			{
        				//TODO:
        			}
        	finally {
        					safeClose(buf);
        					
        			}
        	
        }
	}
	
	
    private void safeClose(BufferedWriter buf) {
        if (null != buf) {
            try {
                buf.flush();
                buf.close();
            } catch (IOException e) {
                getLogWriter("ERROR", "LogWriter").logError("Exception while closing the buffer stream");
                logException(e);
            }
        }
    }

    private void writeLog(Throwable paramThrowable) {
        PrintStream ps = null;
        FileOutputStream fos = null;
        try {
            if (logFile == null)
                logFile = getLogFile();
            fos = new FileOutputStream(logFile, true);
            ps = new PrintStream(fos);
            paramThrowable.printStackTrace(ps);

        } catch (IOException e) {
            throw new RuntimeException("Exception while writing the print stream", e);
        } finally {
            if (null != ps) {
                ps.flush();
                ps.close();
            }
            if(null != fos){
                try {
                    fos.flush();
                    fos.close();
                } catch (IOException e) {
                    getLogWriter("ERROR", "LogWriter").logError("Exception while closing the file stream");
                    logException(e);
                }
            }
        }
    }
}
//    private void writeTrace(String message) {
//        BufferedWriter buf = null;
//        try {
//            if (traceFile == null)
//                traceFile = getTraceFile();
//            if (traceFile == null)
//                return;
//            DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
//            Date date = new Date();
//            message = location + ":" + dateFormat.format(date) + message + "\r\n";
//            buf = new BufferedWriter(new FileWriter(traceFile, true));
//            buf.append(message);
//            buf.newLine();
//        } catch (IOException e) {
//            throw new RuntimeException("Exception while writing the buffer stream", e);
//        } finally {
//            safeClose(buf);
//        }
//
//    }

//	private File getTraceFile() {
//		String storageCardPrefix = Environment.getExternalStorageDirectory().getPath();
//		File dir = new File(storageCardPrefix + LOG_TRACE_FOLDER);
//        if (!dir.exists()) {
//           return null;
//        }
//		File traceFile = new File(storageCardPrefix + LOG_TRACE_FOLDER + LOG_TRACE_FILE_NAME);
//		 if (!traceFile.exists())
//	       {
//	          try
//	          {
//	        	  traceFile.createNewFile();
//
//	          } 
//	          catch (IOException e)
//	          {
//	            throw new RuntimeException("Exception while creating a new file", e);
//
//	          }
//	       }
//		 return traceFile;
//	}
	

