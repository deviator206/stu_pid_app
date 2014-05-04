package com.afm.vhc.android;

import android.os.AsyncTask;

public class BatchLogger  extends AsyncTask<String, Void, Void>{

	@Override
	protected Void doInBackground(String... params) {
		String message=params[0];
		String severity=params[1];
		LogWriter.getLogWriter("JSLog", "JSLog").writeJSLog(message, severity);
		return null;
	}

}
