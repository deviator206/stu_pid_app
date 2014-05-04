package com.afm.vhc.android;

import com.afm.vhc.R;
import com.afm.vhc.VHCLaunchActivity;

import android.content.Intent;
import android.content.SharedPreferences;
import android.content.SharedPreferences.OnSharedPreferenceChangeListener;
import android.os.Bundle;
import android.preference.Preference;
import android.preference.PreferenceActivity;
import android.preference.PreferenceCategory;
import android.preference.PreferenceManager;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;

public class ApplicationSettingActivity extends PreferenceActivity implements OnSharedPreferenceChangeListener,VHCApplicationConstants {

	@Override
	public void onCreate(Bundle savedInstanceState)  {
		super.onCreate(savedInstanceState);

		addPreferencesFromResource(R.xml.preferences);
		//Add logic for enabling and disabling on first run
		PreferenceCategory  relayServerCategory = (PreferenceCategory) findPreference("relay_server_configurations");
		PreferenceCategory supServerCategory = (PreferenceCategory) findPreference("sup_server_configurations");
		SharedPreferences sharedPreferences = PreferenceManager.getDefaultSharedPreferences(this);
    	
        if(sharedPreferences.getBoolean(PREFERENCE_RELAY_SERVER_ENABLED, false))
        {

        	relayServerCategory.setEnabled(true);
        	supServerCategory.setEnabled(false);
        }
        else
        {

        	supServerCategory.setEnabled(true);
        	relayServerCategory.setEnabled(false);
        }
			
	}

	
	@Override
	protected void onResume() {
	    super.onResume();
	    
	    getPreferenceScreen().getSharedPreferences()
	            .registerOnSharedPreferenceChangeListener(this);
	   
	    
	}

	@Override
	protected void onPause() {
	    super.onPause();
	    getPreferenceScreen().getSharedPreferences()
	            .unregisterOnSharedPreferenceChangeListener(this);
	}
    
	@Override
	public void onSharedPreferenceChanged(SharedPreferences sharedPreferences, String key) 
	{

		PreferenceCategory supServerCategory,relayServerCategory;
		
        if (key.equals(PREFERENCE_RELAY_SERVER_ENABLED))
        {
        	 relayServerCategory = (PreferenceCategory) findPreference("relay_server_configurations");
        	 supServerCategory = (PreferenceCategory) findPreference("sup_server_configurations");
        	
            if(sharedPreferences.getBoolean(PREFERENCE_RELAY_SERVER_ENABLED, false))
            {

            	relayServerCategory.setEnabled(true);
            	supServerCategory.setEnabled(false);
            }
            else
            {

            	supServerCategory.setEnabled(true);
            	relayServerCategory.setEnabled(false);
            }

        }
        
//        if (key.equals(PREFERENCE_LOG_ENABLED))
//        {
//        	VHCLaunchActivity.setLoggingEnabled(sharedPreferences.getBoolean(PREFERENCE_LOG_ENABLED, false));
//
//        }
    }
	

}
