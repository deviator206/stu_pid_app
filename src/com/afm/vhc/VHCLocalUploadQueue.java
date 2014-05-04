/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.2.4.179
 * mbs - false 
 */
package com.afm.vhc;

@SuppressWarnings("all")
public  class VHCLocalUploadQueue extends com.sybase.persistence.AbstractLocalEntity implements com.sybase.persistence.LocalBusinessObject, com.sybase.reflection.ClassWithMetaData
{
    /** Begin code region: MetaData **/
    private static com.afm.vhc.intrnl.VHCLocalUploadQueueMetaData META_DATA = new com.afm.vhc.intrnl.VHCLocalUploadQueueMetaData();
    
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
        com.sybase.sup.client.persistence.DelegateFactory.createEntityDelegate("VHCLocalUploadQueue", com.afm.vhc.VHCLocalUploadQueue.class, "VHC.VHCLocalUploadQueue", META_DATA, com.afm.vhc.VHCDB.getDelegate());
    
    
    /** Begin code region: Properties **/
    private int __STATUS ;  
    
    private java.lang.String __VBELN ;  
    
    private java.lang.String __FILEPATH ;  
    
    public java.lang.String getAttributeString(int id)
    {
        switch(id)
        {
        case 352:
            return getVBELN();
        case 353:
            return getFILEPATH();
        default:
            return super.getAttributeString(id);
        }
    }
    
    public void setAttributeString(int id, java.lang.String v)
    {
        switch(id)
        {
        case 352:
            setVBELN((java.lang.String)v);
            break;
        case 353:
            setFILEPATH((java.lang.String)v);
            break;
        default:
            super.setAttributeString(id, v);
            break;
        }
    }
    public int getAttributeInt(int id)
    {
        switch(id)
        {
        case 354:
            return getSTATUS();
        default:
            return super.getAttributeInt(id);
        }
    }
    
    public void setAttributeInt(int id, int v)
    {
        switch(id)
        {
        case 354:
            setSTATUS((int)v);
            break;
        default:
            super.setAttributeInt(id, v);
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
     * Creates an instance of com.afm.vhc.VHCLocalUploadQueue  
     */
    public VHCLocalUploadQueue()
    {
        setEntityDelegate(DELEGATE);
        _init();
    }
    protected void _init()
    {
        
    }
    /** End code region: Constructor and init **/
    
    /**
     * get the value of STATUS  
     */
    public int getSTATUS()
    {
        
        return __STATUS;
    }
    
    /**
     * Set the value of STATUS  
     */
    public void setSTATUS(int value)
    {
        if(__STATUS != value)
        {
            _isDirty = true;
        }
        __STATUS = value;
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
        if ((__VBELN == null) != (value == null) || (value != null && ! value.equals(__VBELN)))
        {
            _isDirty = true;
        }
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
        if ((__FILEPATH == null) != (value == null) || (value != null && ! value.equals(__FILEPATH)))
        {
            _isDirty = true;
        }
        __FILEPATH = value;
    }
    
    /**
     * Search mobile business object using surrogateKey
     * @param id surrogateKey
     * @return mobile business object
     */
    public static com.afm.vhc.VHCLocalUploadQueue find(com.afm.vhc.VHCLocalUploadQueueKey id)
    {
        String intervalName = null;
        if(com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.isEnabled)
        {
            intervalName = "VHCLocalUploadQueue.find()";
            com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.getInstance().startInterval(intervalName, com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.PersistenceRead);
        }
        try
        {
            Object[] keys = new Object[]{id.getVBELN(),id.getFILEPATH()};
            return (com.afm.vhc.VHCLocalUploadQueue)(DELEGATE.findEntityWithKeys(keys));
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
    public static com.afm.vhc.VHCLocalUploadQueue load(com.afm.vhc.VHCLocalUploadQueueKey id)
    {
        return (com.afm.vhc.VHCLocalUploadQueue)(DELEGATE.load(id));
    }
    
    /**
     * Get surroget key of the mobile business object  
     */
    public com.afm.vhc.VHCLocalUploadQueueKey _pk()
    {
        return (com.afm.vhc.VHCLocalUploadQueueKey)i_pk();
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
     * Find a List of VHCLocalUploadQueue
     * @param query The query to be filter.
     * @exception PersistenceException Thrown if unable to retrieve mobile business object.
     */
    public static com.sybase.collections.GenericList<com.afm.vhc.VHCLocalUploadQueue> findWithQuery(com.sybase.persistence.Query query)
    {
        return (com.sybase.collections.GenericList<com.afm.vhc.VHCLocalUploadQueue>)(Object)DELEGATE.findWithQuery(query, com.afm.vhc.VHCLocalUploadQueue.class);
    }
    
    /**
     * Find a List of Com.afm.vhc.VHCLocalUploadQueue
     * @exception PersistentException Thrown if unable to retrieve mobile business object.
     */
    public static com.sybase.collections.GenericList<com.afm.vhc.VHCLocalUploadQueue> findAll(int skip, int take)
    {
        String intervalName = null;
        if(com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.isEnabled)
        {
            intervalName = "VHCLocalUploadQueue.findAll";
            com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.getInstance().startInterval(intervalName, com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.PersistenceRead);
        }
        try
        {
    
            
                String _selectSQL = " x.\"c\",x.\"a\",x.\"b\" FROM \"co_vhc_1_0_vhclocaluploadqueue\" x";
                _selectSQL = "select " + _selectSQL;
                String[] ids = new String[0];
                com.sybase.reflection.DataType[] dts = new com.sybase.reflection.DataType[]{    
                };
                Object[] values = new Object[] { 
                };
                com.sybase.collections.GenericList<Object> res = DELEGATE.findWithSQL(_selectSQL, dts, values, ids, skip, take, com.afm.vhc.VHCLocalUploadQueue.class);
                return (com.sybase.collections.GenericList<com.afm.vhc.VHCLocalUploadQueue>)(Object)res;
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
     * Find a list of com.afm.vhc.VHCLocalUploadQueue  
     */
    public static com.sybase.collections.GenericList<com.afm.vhc.VHCLocalUploadQueue> findAll()
    {
        return findAll(0, Integer.MAX_VALUE);
    }
    /**
     * Find a List of Com.afm.vhc.VHCLocalUploadQueue
     * @exception PersistentException Thrown if unable to retrieve mobile business object.
     */
    public static com.sybase.collections.GenericList<com.afm.vhc.VHCLocalUploadQueue> findByVBELN(java.lang.String VBELN, int skip, int take)
    {
        String intervalName = null;
        if(com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.isEnabled)
        {
            intervalName = "VHCLocalUploadQueue.findByVBELN";
            com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.getInstance().startInterval(intervalName, com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.PersistenceRead);
        }
        try
        {
    
            
                String _selectSQL = " x.\"c\",x.\"a\",x.\"b\" FROM \"co_vhc_1_0_vhclocaluploadqueue\" x WHERE x.\"a\" = ?";
                _selectSQL = "select " + _selectSQL;
                String[] ids = new String[0];
                com.sybase.reflection.DataType[] dts = new com.sybase.reflection.DataType[]{    
                    com.sybase.reflection.DataType.forName("string"),
                };
                Object[] values = new Object[] { 
                    VBELN,
                };
                com.sybase.collections.GenericList<Object> res = DELEGATE.findWithSQL(_selectSQL, dts, values, ids, skip, take, com.afm.vhc.VHCLocalUploadQueue.class);
                return (com.sybase.collections.GenericList<com.afm.vhc.VHCLocalUploadQueue>)(Object)res;
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
     * Find a list of com.afm.vhc.VHCLocalUploadQueue  
     */
    public static com.sybase.collections.GenericList<com.afm.vhc.VHCLocalUploadQueue> findByVBELN(java.lang.String VBELN)
    {
        return findByVBELN(VBELN, 0, Integer.MAX_VALUE);
    }
    /**
     * Find a List of Com.afm.vhc.VHCLocalUploadQueue
     * @exception PersistentException Thrown if unable to retrieve mobile business object.
     */
    public static com.sybase.collections.GenericList<com.afm.vhc.VHCLocalUploadQueue> findByFILEPATH(java.lang.String FILEPATH, int skip, int take)
    {
        String intervalName = null;
        if(com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.isEnabled)
        {
            intervalName = "VHCLocalUploadQueue.findByFILEPATH";
            com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.getInstance().startInterval(intervalName, com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.PersistenceRead);
        }
        try
        {
    
            
                String _selectSQL = " x.\"c\",x.\"a\",x.\"b\" FROM \"co_vhc_1_0_vhclocaluploadqueue\" x WHERE x.\"b\" = ?";
                _selectSQL = "select " + _selectSQL;
                String[] ids = new String[0];
                com.sybase.reflection.DataType[] dts = new com.sybase.reflection.DataType[]{    
                    com.sybase.reflection.DataType.forName("string"),
                };
                Object[] values = new Object[] { 
                    FILEPATH,
                };
                com.sybase.collections.GenericList<Object> res = DELEGATE.findWithSQL(_selectSQL, dts, values, ids, skip, take, com.afm.vhc.VHCLocalUploadQueue.class);
                return (com.sybase.collections.GenericList<com.afm.vhc.VHCLocalUploadQueue>)(Object)res;
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
     * Find a list of com.afm.vhc.VHCLocalUploadQueue  
     */
    public static com.sybase.collections.GenericList<com.afm.vhc.VHCLocalUploadQueue> findByFILEPATH(java.lang.String FILEPATH)
    {
        return findByFILEPATH(FILEPATH, 0, Integer.MAX_VALUE);
    }
    /**
     * Find a mobile business object Com.afm.vhc.VHCLocalUploadQueue
     * @exception PersistentException Thrown if unable to retrieve mobile business object.
     */
    public static com.afm.vhc.VHCLocalUploadQueue findByPrimaryKey(java.lang.String VBELN
                                                                   ,java.lang.String FILEPATH)
    {
        String intervalName = null;
        if(com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.isEnabled)
        {
            intervalName = "VHCLocalUploadQueue.findByPrimaryKey";
            com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.getInstance().startInterval(intervalName, com.sybase.mobile.util.perf.impl.PerformanceAgentServiceImpl.PersistenceRead);
        }
        try
        {
    
            
                String _selectSQL = "SELECT x.\"c\",x.\"a\",x.\"b\" FROM \"co_vhc_1_0_vhclocaluploadqueue\" x WHERE x.\"a\" = ? AND x.\"b\" = ?";
                String[] ids = new String[0];
                com.sybase.reflection.DataType[] dts = new com.sybase.reflection.DataType[]{    
                    com.sybase.reflection.DataType.forName("string"),
                    com.sybase.reflection.DataType.forName("string"),
                };
                Object[] values = new Object[] { 
                    VBELN,
                    FILEPATH,
                };
                Object res = DELEGATE.findWithSQL(_selectSQL, dts, values, ids, com.afm.vhc.VHCLocalUploadQueue.class);
                return (com.afm.vhc.VHCLocalUploadQueue)res;
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
     * Returns the MBOs that are updated locally but not submitted.  
     */
    public static com.sybase.collections.GenericList<com.afm.vhc.VHCLocalUploadQueue> getPendingObjects(int skip, int take)
    {
        return (com.sybase.collections.GenericList<com.afm.vhc.VHCLocalUploadQueue>)(Object)DELEGATE.getPendingObjects(skip, take);
    }
    
    /**
     * Returns the MBOs that are updated locally but not submmited.  
     */
    public static com.sybase.collections.GenericList<com.afm.vhc.VHCLocalUploadQueue> getPendingObjects()
    {
        return (com.sybase.collections.GenericList<com.afm.vhc.VHCLocalUploadQueue>)(Object)DELEGATE.getPendingObjects();
    }
    
    /** End code region: Finder methods **/
}