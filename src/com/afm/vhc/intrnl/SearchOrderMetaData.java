/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.2.4.179
 * mbs - false 
 */  
package com.afm.vhc.intrnl;

@SuppressWarnings("all")
public class SearchOrderMetaData extends com.sybase.reflection.EntityMetaDataEx
{
    /**
     * Sybase internal use only.
     */
    public SearchOrderMetaData()
    {
        super(com.afm.vhc.VHCDB.getMetaData());
        _init();
    }
    protected void _init()
    {
        setId(9);
        setAttributes(new com.sybase.reflection.AttributeMetaDataList());
        setAttributeMap(new com.sybase.reflection.AttributeMap());
        com.sybase.reflection.AttributeMetaData VBELN_attribute = addAttributeWithParams
        	(78, "VBELN", "string", 
        	10, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"a\"", "varchar(40)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData DEBITOR_NAME_attribute = addAttributeWithParams
        	(79, "DEBITOR_NAME", "string", 
        	40, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"b\"", "varchar(160)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData VHVIN_attribute = addAttributeWithParams
        	(80, "VHVIN", "string", 
        	35, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"c\"", "varchar(140)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData LICPL_attribute = addAttributeWithParams
        	(81, "LICPL", "string", 
        	15, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"d\"", "varchar(60)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData CSTRYEAR_attribute = addAttributeWithParams
        	(82, "CSTRYEAR", "string", 
        	4, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"e\"", "varchar(16)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData SPART_TXT_attribute = addAttributeWithParams
        	(83, "SPART_TXT", "string", 
        	20, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"f\"", "varchar(80)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData VMODEL_TXT_attribute = addAttributeWithParams
        	(84, "VMODEL_TXT", "string", 
        	40, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"g\"", "varchar(160)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData VISIT_START_DATE_attribute = addAttributeWithParams
        	(85, "VISIT_START_DATE", "date?", 
        	-1, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"h\"", "date", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData VISIT_START_TIME_attribute = addAttributeWithParams
        	(86, "VISIT_START_TIME", "time?", 
        	-1, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"i\"", "time", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData PNAME_attribute = addAttributeWithParams
        	(87, "PNAME", "string", 
        	40, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"j\"", "varchar(160)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData pending_attribute = addAttributeWithParams
        	(20001, "pending", "boolean", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"pending\"", "tinyint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData pendingChange_attribute = addAttributeWithParams
        	(20002, "pendingChange", "char", 
        	1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"_pc\"", "char(1)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData replayPending_attribute = addAttributeWithParams
        	(20005, "replayPending", "long", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"_rp\"", "bigint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData replayFailure_attribute = addAttributeWithParams
        	(20006, "replayFailure", "long", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"_rf\"", "bigint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData cvpOperation_attribute = addAttributeWithParams
        	(659, "cvpOperation", "bigString?", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"cvp_operation_header\"", "long varchar", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData cvpOperationLobs_attribute = addAttributeWithParams
        	(660, "cvpOperationLobs", "bigString?", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"cvp_operation_lobs\"", "long varchar", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData surrogateKey_attribute = addAttributeWithParams
        	(88, "surrogateKey", "long", 
        	-1, 
        	false, true, false, false, false, 
        	false,false, 
        	"\"l\"", "bigint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.GLOBAL,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData replayCounter_attribute = addAttributeWithParams
        	(20004, "replayCounter", "long", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"_rc\"", "bigint", "_rc", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData disableSubmit_attribute = addAttributeWithParams
        	(20003, "disableSubmit", "boolean", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"_ds\"", "tinyint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData cvpOperationLength_attribute = addAttributeWithParams
        	(1246, "cvpOperationLength", "long", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"cvpOperation_length\"", "bigint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData cvpOperationLobsLength_attribute = addAttributeWithParams
        	(1247, "cvpOperationLobsLength", "long", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"cvpOperationLobs_length\"", "bigint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        initAttributeMapFromAttributes();
        setName("SearchOrder");
        setTable("\"vhc_1_0_searchorder\"");
        setSynchronizationGroup("RequestResponse");
        com.sybase.reflection.IndexMetaData findByPrimaryKeyIndex_index = new com.sybase.reflection.IndexMetaData();
        findByPrimaryKeyIndex_index.setName("findByPrimaryKeyIndex");
        findByPrimaryKeyIndex_index.getAttributes().add(VBELN_attribute);
        this.getIndice().add(findByPrimaryKeyIndex_index);
        this.getKeyAttributes().add((surrogateKey_attribute));
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