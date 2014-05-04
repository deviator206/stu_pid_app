package com.afm.vhc.android;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;
import java.lang.Thread.UncaughtExceptionHandler;

public class CustomExceptionHandler implements UncaughtExceptionHandler {

    private UncaughtExceptionHandler defaultUEH;

    //private String localPath;


    public CustomExceptionHandler(String localPath) {
        //this.localPath = localPath;
        this.defaultUEH = Thread.getDefaultUncaughtExceptionHandler();
    }

    public void uncaughtException(Thread t, Throwable e) {
        final Writer result = new StringWriter();
        final PrintWriter printWriter = new PrintWriter(result);
        e.printStackTrace(printWriter);
        String stacktrace = result.toString();
        printWriter.close();
        String filename = System.currentTimeMillis() + ".stacktrace";

//        if (localPath != null) {
//            writeToFile(stacktrace, filename);
//        }
        LogWriter.getLogWriter("UNCAUGHT EXCEPTION", "APPCORE");
       
        defaultUEH.uncaughtException(t, e);
    }

//    private void writeToFile(String stacktrace, String filename) {
//        BufferedWriter bos = null;
//        try {
//            bos = new BufferedWriter(new FileWriter(
//                    localPath + "/" + filename));
//            bos.write(stacktrace);
//            bos.flush();
//        } catch (IOException e) {
//            throw new RuntimeException("Exception while writing into the buffer stream", e);
//        }
//        finally{
//           safeClose(bos);
//        }
//    }
    
//    public void safeClose(BufferedWriter bos) {
//        if (null != bos) {
//          try {
//              bos.close();
//          } catch (IOException e) {
//              throw new RuntimeException("Exception while closing the buffer stream", e);
//          }
//        }
//    }


}