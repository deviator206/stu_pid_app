package com.afm.vhc;

import org.apache.cordova.DroidGap;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.widget.Toast;

import com.afm.vhc.android.ApplicationSettingsManager;
import com.afm.vhc.android.CustomExceptionHandler;
import com.afm.vhc.android.LogWriter;
import com.afm.vhc.android.MBODataProvider;
import com.afm.vhc.android.VHCApplicationConstants;
import com.afm.vhc.android.VHCPlugin;

public class VHCLaunchActivity extends DroidGap implements VHCApplicationConstants {
	
	private static boolean  backendConnected= true;
	private static boolean  loggingEnabled= false;



	public static boolean isLoggingEnabled() {
		return loggingEnabled;
	}

	public static void setLoggingEnabled(boolean loggingEnabled) {
		VHCLaunchActivity.loggingEnabled = loggingEnabled;
	}

	public static boolean isBackendConnected() {
		return backendConnected;
	}

	private static void setBackendConnected(boolean backendConnected) {
		VHCLaunchActivity.backendConnected = backendConnected;
	}

	@Override
	public void onCreate(Bundle savedInstanceState) {
		Context context = getApplicationContext();
		ApplicationSettingsManager.cleanApplicationSettings();
		ApplicationSettingsManager settingsManager=ApplicationSettingsManager.getInstance(context);
		boolean loggingPref = settingsManager.isLogEnabled();
		String currentTheme= settingsManager.getCurrentTheme();
		boolean questionRestrictions=settingsManager.isQuestionRestrictions();
		String fontSize=settingsManager.getFontSize();
		setBackendConnected(true);
		setLoggingEnabled(loggingPref);
		LogWriter.deleteLogFile();
		
		super.onCreate(savedInstanceState);
		MBODataProvider.getInstance().setContext(context);
		Thread.setDefaultUncaughtExceptionHandler(new CustomExceptionHandler("afm-vhc"));
		
		
		super.loadUrl("file:///android_asset/www/index.html?currentTheme='"+currentTheme+"'&logging='"+loggingPref+"'&questionRestrictions='"+questionRestrictions+"'&fontSize='"+fontSize+"'");
	}
	
	public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.main_menu, menu);
        return true;
    }
	
    public boolean onOptionsItemSelected(MenuItem item) {
    		switch(item.getItemId())
    		{
    		case R.id.settings_menu:
    			Intent intent = new Intent(this, com.afm.vhc.android.ApplicationSettingActivity.class);
    			startActivity(intent);
    			break;
    			
    		case R.id.help_menu:
    				VHCPlugin.displayHelp();   			
    			
    		}
    		return true;
    }
    
    public void onPause()
    {
    	super.onPause();
    	
    	try{
    		
    		//VHCDB.submitLogRecords();
    		
    	}catch(Exception e)
    	{
    		//LogWriter.getLogWriter("", "").writeLog("", "ERROR");
    		
    	}
//    	finally{
//    		android.os.Process.killProcess(android.os.Process.myPid());
//    	}
    		
    }
    
//    @Override
//    public void onStop()
//    {
//    	super.onStop();
//    	android.os.Process.killProcess(android.os.Process.myPid());
//    	
//    }



}
