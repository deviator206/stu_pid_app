/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.2.4.179
 * mbs - false 
 */
package com.afm.vhc;

@SuppressWarnings("all")
public  class VHCLocalUploadQueueKey extends com.sybase.persistence.AbstractStructure implements com.sybase.reflection.ClassWithMetaData
{
    private static com.afm.vhc.intrnl.VHCLocalUploadQueueKeyMetaData META_DATA = new com.afm.vhc.intrnl.VHCLocalUploadQueueKeyMetaData();
    
    /**
     * Return MetaData instance.  
     */
    public com.sybase.reflection.ClassMetaData getClassMetaData()
    {
        return META_DATA;
    }
    
    /**
     * Return MetaData instance.  
     */
    public static com.sybase.reflection.ClassMetaData getMetaData()
    {
        return META_DATA;
    }
    protected static com.sybase.sup.client.persistence.ClassDelegate DELEGATE = 
        new com.sybase.sup.client.persistence.ClassDelegate("VHCLocalUploadQueueKey", com.afm.vhc.VHCLocalUploadQueueKey.class, META_DATA, com.afm.vhc.VHCDB.getDelegate());
    
    /**
     * Creates an instance of com.afm.vhc.VHCLocalUploadQueueKey  
     */
    public VHCLocalUploadQueueKey()
    {
        this.setClassDelegate(DELEGATE);
        _init();
    }
    protected void _init()
    {
        
    }
    
    private java.lang.String __VBELN ;  
    
    private java.lang.String __FILEPATH ;  
    
    public java.lang.String getAttributeString(int id)
    {
        switch(id)
        {
        case 387:
            return getVBELN();
        case 388:
            return getFILEPATH();
        default:
            return super.getAttributeString(id);
        }
    }
    
    public void setAttributeString(int id, java.lang.String v)
    {
        switch(id)
        {
        case 387:
            setVBELN((java.lang.String)v);
            break;
        case 388:
            setFILEPATH((java.lang.String)v);
            break;
        default:
            super.setAttributeString(id, v);
            break;
        }
    }
    
    public Object getAttributeJson(int id)
    {
        switch(id)
        {
        default:
            return super.getAttributeJson(id);
        }
    }
    
    public void setAttributeJson(int id, Object value)
    {
        switch(id)
        {
        default:
            super.setAttributeJson(id, value);
            break;
        }
    }
    
    /**
     * get the value of VBELN  
     */
    public java.lang.String getVBELN()
    {
        
        return __VBELN;
    }
    
    /**
     * Set the value of VBELN  
     */
    public void setVBELN(java.lang.String value)
    {
        __VBELN = value;
    }
    
    /**
     * get the value of FILEPATH  
     */
    public java.lang.String getFILEPATH()
    {
        
        return __FILEPATH;
    }
    
    /**
     * Set the value of FILEPATH  
     */
    public void setFILEPATH(java.lang.String value)
    {
        __FILEPATH = value;
    }
}