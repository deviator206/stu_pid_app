/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.2.4.179
 * mbs - false 
 */  
package com.afm.vhc.intrnl;

@SuppressWarnings("all")
public class Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_FILESMetaData extends com.sybase.reflection.ClassMetaData
{
    /**
     * Sybase internal use only.
     */
    public Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_FILESMetaData()
    {
        super(com.afm.vhc.VHCDB.getMetaData());
        _init();
    }
    protected void _init()
    {
        setId(21);
        setAttributes(new com.sybase.reflection.AttributeMetaDataList());
        setAttributeMap(new com.sybase.reflection.AttributeMap());
        com.sybase.reflection.AttributeMetaData FILENAME_attribute = addAttributeWithParams
        	(65, "FILENAME", "string", 
        	255, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"\"", "varchar(255)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData FILECONTENT_attribute = addAttributeWithParams
        	(66, "FILECONTENT", "string", 
        	300, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"\"", "varchar(300)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        initAttributeMapFromAttributes();
        setName("Z_MF_UPLOAD_ATTACHMENT_TO_GOS_PIM_FILES");
        
    }
    
    /**
     * Sybase internal use only.
     */
    public  boolean isEntity()
    {
        return false;
    }
    
    /**
     * Sybase internal use only.
     */
    public  boolean isService()
    {
        return false;
    }
}