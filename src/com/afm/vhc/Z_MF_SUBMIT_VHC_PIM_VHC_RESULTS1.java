/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.2.4.179
 * mbs - false 
 */
package com.afm.vhc;

@SuppressWarnings("all")
public  class Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS1 extends com.sybase.persistence.AbstractStructure implements com.sybase.reflection.ClassWithMetaData
{
    private static com.afm.vhc.intrnl.Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS1MetaData META_DATA = new com.afm.vhc.intrnl.Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS1MetaData();
    
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
        new com.sybase.sup.client.persistence.ClassDelegate("Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS1", com.afm.vhc.Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS1.class, META_DATA, com.afm.vhc.VHCDB.getDelegate());
    
    /**
     * Creates an instance of com.afm.vhc.Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS1  
     */
    public Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS1()
    {
        this.setClassDelegate(DELEGATE);
        _init();
    }
    protected void _init()
    {
        
    }
    
    private java.lang.String __VBELN ;  
    
    private java.lang.String __ZZVHC_SECTIOID ;  
    
    private java.lang.String __ZZVHC_QID ;  
    
    private java.lang.String __ZZVHC_VALUE ;  
    
    private java.lang.String __ZZVHC_COMMENT ;  
    
    public java.lang.String getAttributeString(int id)
    {
        switch(id)
        {
        case 62:
            return getVBELN();
        case 63:
            return getZZVHC_SECTIOID();
        case 64:
            return getZZVHC_QID();
        case 65:
            return getZZVHC_VALUE();
        case 66:
            return getZZVHC_COMMENT();
        default:
            return super.getAttributeString(id);
        }
    }
    
    public void setAttributeString(int id, java.lang.String v)
    {
        switch(id)
        {
        case 62:
            setVBELN((java.lang.String)v);
            break;
        case 63:
            setZZVHC_SECTIOID((java.lang.String)v);
            break;
        case 64:
            setZZVHC_QID((java.lang.String)v);
            break;
        case 65:
            setZZVHC_VALUE((java.lang.String)v);
            break;
        case 66:
            setZZVHC_COMMENT((java.lang.String)v);
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
     * get the value of ZZVHC_SECTIOID  
     */
    public java.lang.String getZZVHC_SECTIOID()
    {
        
        return __ZZVHC_SECTIOID;
    }
    
    /**
     * Set the value of ZZVHC_SECTIOID  
     */
    public void setZZVHC_SECTIOID(java.lang.String value)
    {
        __ZZVHC_SECTIOID = value;
    }
    
    /**
     * get the value of ZZVHC_QID  
     */
    public java.lang.String getZZVHC_QID()
    {
        
        return __ZZVHC_QID;
    }
    
    /**
     * Set the value of ZZVHC_QID  
     */
    public void setZZVHC_QID(java.lang.String value)
    {
        __ZZVHC_QID = value;
    }
    
    /**
     * get the value of ZZVHC_VALUE  
     */
    public java.lang.String getZZVHC_VALUE()
    {
        
        return __ZZVHC_VALUE;
    }
    
    /**
     * Set the value of ZZVHC_VALUE  
     */
    public void setZZVHC_VALUE(java.lang.String value)
    {
        __ZZVHC_VALUE = value;
    }
    
    /**
     * get the value of ZZVHC_COMMENT  
     */
    public java.lang.String getZZVHC_COMMENT()
    {
        
        return __ZZVHC_COMMENT;
    }
    
    /**
     * Set the value of ZZVHC_COMMENT  
     */
    public void setZZVHC_COMMENT(java.lang.String value)
    {
        __ZZVHC_COMMENT = value;
    }
}