/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.2.4.179
 * mbs - false 
 */
package com.afm.vhc;

@SuppressWarnings("all")
public  class KeyPackageName extends com.sybase.persistence.AbstractStructure implements com.sybase.reflection.ClassWithMetaData
{
    private static com.afm.vhc.intrnl.KeyPackageNameMetaData META_DATA = new com.afm.vhc.intrnl.KeyPackageNameMetaData();
    
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
        new com.sybase.sup.client.persistence.ClassDelegate("KeyPackageName", com.afm.vhc.KeyPackageName.class, META_DATA, com.afm.vhc.VHCDB.getDelegate());
    
    /**
     * Creates an instance of com.afm.vhc.KeyPackageName  
     */
    public KeyPackageName()
    {
        this.setClassDelegate(DELEGATE);
        _init();
    }
    protected void _init()
    {
        
    }
    
    private java.lang.String __key_name ;  
    
    private java.lang.String __package_name ;  
    
    private java.lang.String __user_name ;  
    
    private java.lang.String __domain_name ;  
    
    public java.lang.String getAttributeString(int id)
    {
        switch(id)
        {
        case 612:
            return getKey_name();
        case 614:
            return getPackage_name();
        case 613:
            return getUser_name();
        case 615:
            return getDomain_name();
        default:
            return super.getAttributeString(id);
        }
    }
    
    public void setAttributeString(int id, java.lang.String v)
    {
        switch(id)
        {
        case 612:
            setKey_name((java.lang.String)v);
            break;
        case 614:
            setPackage_name((java.lang.String)v);
            break;
        case 613:
            setUser_name((java.lang.String)v);
            break;
        case 615:
            setDomain_name((java.lang.String)v);
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
     * get the value of key_name  
     */
    public java.lang.String getKey_name()
    {
        
        return __key_name;
    }
    
    /**
     * Set the value of key_name  
     */
    public void setKey_name(java.lang.String value)
    {
        __key_name = value;
    }
    
    /**
     * get the value of package_name  
     */
    public java.lang.String getPackage_name()
    {
        
        return __package_name;
    }
    
    /**
     * Set the value of package_name  
     */
    public void setPackage_name(java.lang.String value)
    {
        __package_name = value;
    }
    
    /**
     * get the value of user_name  
     */
    public java.lang.String getUser_name()
    {
        
        return __user_name;
    }
    
    /**
     * Set the value of user_name  
     */
    public void setUser_name(java.lang.String value)
    {
        __user_name = value;
    }
    
    /**
     * get the value of domain_name  
     */
    public java.lang.String getDomain_name()
    {
        
        return __domain_name;
    }
    
    /**
     * Set the value of domain_name  
     */
    public void setDomain_name(java.lang.String value)
    {
        __domain_name = value;
    }
}