/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.2.4.179
 * mbs - false 
 */
package com.afm.vhc;

@SuppressWarnings("all")
public  class PEX_BAPIRETURN2 extends com.sybase.persistence.AbstractEntity implements com.sybase.persistence.MobileBusinessObject, com.sybase.reflection.ClassWithMetaData
{
    /** Begin code region: MetaData **/
    private static com.afm.vhc.intrnl.PEX_BAPIRETURN2MetaData META_DATA = new com.afm.vhc.intrnl.PEX_BAPIRETURN2MetaData();
    
    /**
     * return MetaData object  
     */
    public com.sybase.reflection.ClassMetaData getClassMetaData()
    {
        return META_DATA;
    }
    
    /**
     * return MetaData object  
     */
    public static com.sybase.reflection.EntityMetaData getMetaData()
    {
        return META_DATA;
    }
    
    /** End code region: MetaData **/
    protected static com.sybase.sup.client.persistence.EntityDelegate DELEGATE = 
        com.sybase.sup.client.persistence.DelegateFactory.createEntityDelegate("PEX_BAPIRETURN2", com.afm.vhc.PEX_BAPIRETURN2.class, "VHC.PEX_BAPIRETURN2", META_DATA, com.afm.vhc.VHCDB.getDelegate());
    
    
    /** Begin code region: Properties **/
    private java.lang.String __TYPE ;  
    
    private java.lang.String __ID ;  
    
    private java.lang.String __NUMBER ;  
    
    private java.lang.String __MESSAGE ;  
    
    private java.lang.String __MESSAGE_V1 ;  
    
    private java.lang.String __MESSAGE_V2 ;  
    
    private java.lang.String __MESSAGE_V3 ;  
    
    private java.lang.String __MESSAGE_V4 ;  
    
      
    
      
    
      
    
      
    
    private com.sybase.persistence.BigString __cvpOperation ;  
    
    private com.sybase.persistence.BigString __cvpOperationLobs ;  
    
    private long __surrogateKey ;  
    
      
    
      
    
    private long __cvpOperationLength ;  
    
    private long __cvpOperationLobsLength ;  
    
    public long getAttributeLong(int id)
    {
        switch(id)
        {
        case 333:
            return getSurrogateKey();
        case 1404:
            return getCvpOperationLength();
        case 1405:
            return getCvpOperationLobsLength();
        default:
            return super.getAttributeLong(id);
        }
    }
    
    public void setAttributeLong(int id, long v)
    {
        switch(id)
        {
        case 333:
            setSurrogateKey((long)v);
            break;
        case 1404:
            setCvpOperationLength((long)v);
            break;
        case 1405:
            setCvpOperationLobsLength((long)v);
            break;
        default:
            super.setAttributeLong(id, v);
            break;
        }
    }
    public com.sybase.persistence.BigString getAttributeNullableBigString(int id)
    {
        switch(id)
        {
        case 844:
            return getCvpOperation();
        case 845:
            return getCvpOperationLobs();
        default:
            return super.getAttributeNullableBigString(id);
        }
    }
    
    public java.lang.String getAttributeString(int id)
    {
        switch(id)
        {
        case 325:
            return getTYPE();
        case 326:
            return getID();
        case 327:
            return getNUMBER();
        case 328:
            return getMESSAGE();
        case 329:
            return getMESSAGE_V1();
        case 330:
            return getMESSAGE_V2();
        case 331:
            return getMESSAGE_V3();
        case 332:
            return getMESSAGE_V4();
        default:
            return super.getAttributeString(id);
        }
    }
    
    public void setAttributeString(int id, java.lang.String v)
    {
        switch(id)
        {
        case 325:
            setTYPE((java.lang.String)v);
            break;
        case 326:
            setID((java.lang.String)v);
            break;
        case 327:
            setNUMBER((java.lang.String)v);
            break;
        case 328:
            setMESSAGE((java.lang.String)v);
            break;
        case 329:
            setMESSAGE_V1((java.lang.String)v);
            break;
        case 330:
            setMESSAGE_V2((java.lang.String)v);
            break;
        case 331:
            setMESSAGE_V3((java.lang.String)v);
            break;
        case 332:
            setMESSAGE_V4((java.lang.String)v);
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
    /** End code region: Properties **/
    
    /** Begin code region: Constructor and init **/
    /**
     * Creates an instance of com.afm.vhc.PEX_BAPIRETURN2  
     */
    public PEX_BAPIRETURN2()
    {
        setEntityDelegate(DELEGATE);
        _init();
    }
    protected void _init()
    {
        
    }
    /** End code region: Constructor and init **/
    
    /**
     * get the value of TYPE  
     */
    public java.lang.String getTYPE()
    {
        
        return __TYPE;
    }
    
    /**
     * Set the value of TYPE  
     */
    public void setTYPE(java.lang.String value)
    {
        if ((__TYPE == null) != (value == null) || (value != null && ! value.equals(__TYPE)))
        {
            _isDirty = true;
        }
        __TYPE = value;
    }       
    /**
     * get the value of ID  
     */
    public java.lang.String getID()
    {
        
        return __ID;
    }
    
    /**
     * Set the value of ID  
     */
    public void setID(java.lang.String value)
    {
        if ((__ID == null) != (value == null) || (value != null && ! value.equals(__ID)))
        {
            _isDirty = true;
        }
        __ID = value;
    }       
    /**
     * get the value of NUMBER  
     */
    public java.lang.String getNUMBER()
    {
        
        return __NUMBER;
    }
    
    /**
     * Set the value of NUMBER  
     */
    public void setNUMBER(java.lang.String value)
    {
        if ((__NUMBER == null) != (value == null) || (value != null && ! value.equals(__NUMBER)))
        {
            _isDirty = true;
        }
        __NUMBER = value;
    }       
    /**
     * get the value of MESSAGE  
     */
    public java.lang.String getMESSAGE()
    {
        
        return __MESSAGE;
    }
    
    /**
     * Set the value of MESSAGE  
     */
    public void setMESSAGE(java.lang.String value)
    {
        if ((__MESSAGE == null) != (value == null) || (value != null && ! value.equals(__MESSAGE)))
        {
            _isDirty = true;
        }
        __MESSAGE = value;
    }       
    /**
     * get the value of MESSAGE_V1  
     */
    public java.lang.String getMESSAGE_V1()
    {
        
        return __MESSAGE_V1;
    }
    
    /**
     * Set the value of MESSAGE_V1  
     */
    public void setMESSAGE_V1(java.lang.String value)
    {
        if ((__MESSAGE_V1 == null) != (value == null) || (value != null && ! value.equals(__MESSAGE_V1)))
        {
            _isDirty = true;
        }
        __MESSAGE_V1 = value;
    }       
    /**
     * get the value of MESSAGE_V2  
     */
    public java.lang.String getMESSAGE_V2()
    {
        
        return __MESSAGE_V2;
    }
    
    /**
     * Set the value of MESSAGE_V2  
     */
    public void setMESSAGE_V2(java.lang.String value)
    {
        if ((__MESSAGE_V2 == null) != (value == null) || (value != null && ! value.equals(__MESSAGE_V2)))
        {
            _isDirty = true;
        }
        __MESSAGE_V2 = value;
    }       
    /**
     * get the value of MESSAGE_V3  
     */
    public java.lang.String getMESSAGE_V3()
    {
        
        return __MESSAGE_V3;
    }
    
    /**
     * Set the value of MESSAGE_V3  
     */
    public void setMESSAGE_V3(java.lang.String value)
    {
        if ((__MESSAGE_V3 == null) != (value == null) || (value != null && ! value.equals(__MESSAGE_V3)))
        {
            _isDirty = true;
        }
        __MESSAGE_V3 = value;
    }       
    /**
     * get the value of MESSAGE_V4  
     */
    public java.lang.String getMESSAGE_V4()
    {
        
        return __MESSAGE_V4;
    }
    
    /**
     * Set the value of MESSAGE_V4  
     */
    public void setMESSAGE_V4(java.lang.String value)
    {
        if ((__MESSAGE_V4 == null) != (value == null) || (value != null && ! value.equals(__MESSAGE_V4)))
        {
            _isDirty = true;
        }
        __MESSAGE_V4 = value;
    }       
    /**
     * get the value of cvpOperation  
     */
    public com.sybase.persistence.BigString getCvpOperation()
    {
        
        if(__cvpOperation==null)
        {
        	__cvpOperation = new com.sybase.persistence.internal.BigStringImpl(this, "cvpOperation");
        }
        return __cvpOperation;
    }       
    /**
     * get the value of cvpOperationLobs  
     */
    public com.sybase.persistence.BigString getCvpOperationLobs()
    {
        
        if(__cvpOperationLobs==null)
        {
        	__cvpOperationLobs = new com.sybase.persistence.internal.BigStringImpl(this, "cvpOperationLobs");
        }
        return __cvpOperationLobs;
    }       
    /**
     * get the value of surrogateKey  
     */
    public long getSurrogateKey()
    {
        
        return __surrogateKey;
    }
    
    /**
     * Set the value of surrogateKey  
     */
    public void setSurrogateKey(long value)
    {
        if(__surrogateKey != value)
        {
            _isDirty = true;
        }
        __surrogateKey = value;
    }       
    /**
     * get the value of cvpOperationLength  
     */
    public long getCvpOperationLength()
    {
        
        return __cvpOperationLength;
    }
    
    /**
     * Set the value of cvpOperationLength  
     */
    public void setCvpOperationLength(long value)
    {
        if(__cvpOperationLength != value)
        {
            _isDirty = true;
        }
        __cvpOperationLength = value;
    }       
    /**
     * get the value of cvpOperationLobsLength  
     */
    public long getCvpOperationLobsLength()
    {
        
        return __cvpOperationLobsLength;
    }
    
    /**
     * Set the value of cvpOperationLobsLength  
     */
    public void setCvpOperationLobsLength(long value)
    {
        if(__cvpOperationLobsLength != value)
        {
            _isDirty = true;
        }
        __cvpOperationLobsLength = value;
    }
    
    /**
     * Search mobile business object using surrogateKey
     * @param id surrogateKey
     * @return mobile business object
     */
    public static com.afm.vhc.PEX_BAPIRETURN2 find(long id)
    {
        String intervalName = null;
        if(com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.isEnabled)
        {
            intervalName = "PEX_BAPIRETURN2.find()";
            com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.getInstance().startInterval(intervalName, com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.PersistenceRead);
        }
        try
        {
            Object[] keys = new Object[]{id};
            return (com.afm.vhc.PEX_BAPIRETURN2)(DELEGATE.findEntityWithKeys(keys));
        }
        finally
        {
            if(com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.isEnabled)
            {
                com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.getInstance().stopInterval(intervalName);
            }
        }
    }
    
    /**
     * Get the mobile business object by surrogate key.
     * @param id surrogate key
     * @return the mobile business object for the surroget key
     * @exception ObjectNotFoundException Thrown if unable to retrieve mobile business object.
     */
    public static com.afm.vhc.PEX_BAPIRETURN2 load(long id)
    {
        return (com.afm.vhc.PEX_BAPIRETURN2)(DELEGATE.load(id));
    }
    
    /**
     * Get surroget key of the mobile business object  
     */
    public java.lang.Long _pk()
    {
        return (java.lang.Long)i_pk();
    }
    
    /** Begin code region: Finder methods **/
    /**
     * return MBO count filter by query object  
     */
    public static int getSize(com.sybase.persistence.Query query)
    {
        return DELEGATE.getSize(query);
    }
    
    /**
     * Find a List of PEX_BAPIRETURN2
     * @param query The query to be filter.
     * @exception PersistenceException Thrown if unable to retrieve mobile business object.
     */
    public static com.sybase.collections.GenericList<com.afm.vhc.PEX_BAPIRETURN2> findWithQuery(com.sybase.persistence.Query query)
    {
        return (com.sybase.collections.GenericList<com.afm.vhc.PEX_BAPIRETURN2>)(Object)DELEGATE.findWithQuery(query, com.afm.vhc.PEX_BAPIRETURN2.class);
    }
    
    /**
     * Find a List of Com.afm.vhc.PEX_BAPIRETURN2
     * @exception PersistentException Thrown if unable to retrieve mobile business object.
     */
    public static com.sybase.collections.GenericList<com.afm.vhc.PEX_BAPIRETURN2> findAll(int skip, int take)
    {
        String intervalName = null;
        if(com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.isEnabled)
        {
            intervalName = "PEX_BAPIRETURN2.findAll";
            com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.getInstance().startInterval(intervalName, com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.PersistenceRead);
        }
        try
        {
            String _selectSQL = "select " + " x.\"a\",x.\"b\",x.\"c\",x.\"d\",x.\"e\",x.\"f\",x.\"g\",x.\"h\",x.\"pending\",x.\"_pc\",x.\"_rp\",x.\"_rf\",x.\"i\",x.\"_rc\",x.\"_ds\",x.\"cvpOperation_length\",x.\"cvpOperationLobs_length\" FROM \"vhc_1_0_pex_bapireturn2\" x where (((x.\"pending\" = 1 or not exists (select x_os.\"i\" from \"vhc_1_0_pex_bapi"
                                                + "return2_os\" x_os where x_os.\"i\" = x.\"i\"))))"; 
            return (com.sybase.collections.GenericList<com.afm.vhc.PEX_BAPIRETURN2>)(Object)DELEGATE.findWithSQL(skip, take, _selectSQL, com.afm.vhc.PEX_BAPIRETURN2.class);
        }
        finally
        {
            if(com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.isEnabled)
            {
                com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.getInstance().stopInterval(intervalName);
            }
        }
    }
    /**
     * Find a list of com.afm.vhc.PEX_BAPIRETURN2  
     */
    public static com.sybase.collections.GenericList<com.afm.vhc.PEX_BAPIRETURN2> findAll()
    {
        return findAll(0, Integer.MAX_VALUE);
    }
    
    /**
     * Returns the MBOs that are updated locally but not submitted.  
     */
    public static com.sybase.collections.GenericList<com.afm.vhc.PEX_BAPIRETURN2> getPendingObjects(int skip, int take)
    {
        return (com.sybase.collections.GenericList<com.afm.vhc.PEX_BAPIRETURN2>)(Object)DELEGATE.getPendingObjects(skip, take);
    }
    
    /**
     * Returns the MBOs that are updated locally but not submmited.  
     */
    public static com.sybase.collections.GenericList<com.afm.vhc.PEX_BAPIRETURN2> getPendingObjects()
    {
        return (com.sybase.collections.GenericList<com.afm.vhc.PEX_BAPIRETURN2>)(Object)DELEGATE.getPendingObjects();
    }
    
    /** End code region: Finder methods **/
    /**
     * Returns the log record list.  
     */
    public com.sybase.collections.GenericList<com.sybase.persistence.LogRecord> getLogRecords()
    {
        return com.afm.vhc.LogRecordImpl.findByEntity("PEX_BAPIRETURN2", keyToString());
    }
    
    
    
    
    
    public void create()
    {
        throw new com.sybase.persistence.NoSuchOperationException(com.sybase.persistence.NoSuchOperationException.NO_SUCH_OPERATION);
    }
    
    public void update()
    {
        throw new com.sybase.persistence.NoSuchOperationException(com.sybase.persistence.NoSuchOperationException.NO_SUCH_OPERATION);
    }      
    
    public void delete()
    {
        throw new com.sybase.persistence.NoSuchOperationException(com.sybase.persistence.NoSuchOperationException.NO_SUCH_OPERATION);
    }      
    
    
    
    
    /**
     * Submit pending operations of the mobile business object (ready for sending to server)  
     */
    public static void submitPendingOperations()
    {
        DELEGATE.submitPendingOperations();
    }
    
    /**
     * Cancel all the pending operations (not submitted operation).  
     */
    public static void cancelPendingOperations()
    {
        DELEGATE.cancelPendingOperations();
    }
    
    /**
     * Get the last called operation of the mobile business object  
     */
    public String getLastOperation()
    {
        if (!getCvpOperation().isNull())
        {
            com.sybase.afx.json.JsonObject cvpOperation = (com.sybase.afx.json.JsonObject)(com.sybase.afx.json.JsonReader.parse(__cvpOperation.getValue()));
            return (String)cvpOperation.get("cvp_name");
        }
        if (getPendingChange() == 'C')
        {
        }
        else if (getPendingChange() == 'D')
        {
        }
        else if (getPendingChange() == 'U')
        {
        }
        return null;
    }
    
    public com.afm.vhc.PEX_BAPIRETURN2 getDownloadState()
    {
        return (com.afm.vhc.PEX_BAPIRETURN2)i_getDownloadState();
    }
    
    public com.afm.vhc.PEX_BAPIRETURN2 getOriginalState()
    {
        return (com.afm.vhc.PEX_BAPIRETURN2)i_getOriginalState();
    }
    
    /**
     * Install a callback handler
     */
    public static void registerCallbackHandler(com.sybase.persistence.CallbackHandler handler)
    {
        DELEGATE.registerCallbackHandler(handler);
    }
    
    public static com.sybase.persistence.CallbackHandler getCallbackHandler()
    {
        return DELEGATE.getCallbackHandler();
    }
}