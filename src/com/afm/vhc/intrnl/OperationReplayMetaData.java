/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.2.4.179
 * mbs - false 
 */  
package com.afm.vhc.intrnl;

@SuppressWarnings("all")
public class OperationReplayMetaData extends com.sybase.reflection.EntityMetaDataEx
{
    /**
     * Sybase internal use only.
     */
    public OperationReplayMetaData()
    {
        super(com.afm.vhc.VHCDB.getMetaData());
        _init();
    }
    protected void _init()
    {
        setId(4);
        setAttributes(new com.sybase.reflection.AttributeMetaDataList());
        setAttributeMap(new com.sybase.reflection.AttributeMap());
        com.sybase.reflection.AttributeMetaData remoteId_attribute = addAttributeWithParams
        	(437, "remoteId", "string", 
        	100, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"a\"", "varchar(100)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData component_attribute = addAttributeWithParams
        	(439, "component", "string", 
        	200, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"c\"", "varchar(200)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData entityKey_attribute = addAttributeWithParams
        	(440, "entityKey", "string", 
        	256, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"d\"", "varchar(256)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData attributes_attribute = addAttributeWithParams
        	(441, "attributes", "string", 
        	-1, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"e\"", "LONG VARCHAR", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData operation_attribute = addAttributeWithParams
        	(442, "operation", "string", 
        	100, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"f\"", "varchar(100)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData parameters_attribute = addAttributeWithParams
        	(443, "parameters", "string", 
        	-1, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"g\"", "LONG VARCHAR", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData replayLog_attribute = addAttributeWithParams
        	(444, "replayLog", "string?", 
        	-1, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"h\"", "LONG VARCHAR", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData exception_attribute = addAttributeWithParams
        	(445, "exception", "string?", 
        	-1, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"i\"", "LONG VARCHAR", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData completed_attribute = addAttributeWithParams
        	(446, "completed", "boolean", 
        	-1, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"j\"", "tinyint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData requestId_attribute = addAttributeWithParams
        	(438, "requestId", "long", 
        	-1, 
        	false, true, false, false, false, 
        	false,false, 
        	"\"b\"", "bigint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.GLOBAL,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        initAttributeMapFromAttributes();
        setName("OperationReplay");
        setTable("\"vhc_1_0_operationreplay\"");
        setSynchronizationGroup("system");
        this.getKeyAttributes().add((requestId_attribute));
    }
    
    /**
     * Sybase internal use only.
     */
    public  boolean isEntity()
    {
        return true;
    }
    
    /**
     * Sybase internal use only.
     */
    public  boolean isService()
    {
        return false;
    }
}