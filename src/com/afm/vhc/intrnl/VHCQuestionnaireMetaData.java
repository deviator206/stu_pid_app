/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.2.4.179
 * mbs - false 
 */  
package com.afm.vhc.intrnl;

@SuppressWarnings("all")
public class VHCQuestionnaireMetaData extends com.sybase.reflection.EntityMetaDataEx
{
    /**
     * Sybase internal use only.
     */
    public VHCQuestionnaireMetaData()
    {
        super(com.afm.vhc.VHCDB.getMetaData());
        _init();
    }
    protected void _init()
    {
        setId(12);
        setAttributes(new com.sybase.reflection.AttributeMetaDataList());
        setAttributeMap(new com.sybase.reflection.AttributeMap());
        com.sybase.reflection.AttributeMetaData SECTION_ID_attribute = addAttributeWithParams
        	(116, "SECTION_ID", "string", 
        	2, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"a\"", "varchar(8)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData SECTION_DESC_attribute = addAttributeWithParams
        	(117, "SECTION_DESC", "string", 
        	100, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"b\"", "varchar(400)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData QUES_ID_attribute = addAttributeWithParams
        	(118, "QUES_ID", "string", 
        	4, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"c\"", "varchar(16)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData QUES_DESC_attribute = addAttributeWithParams
        	(119, "QUES_DESC", "string", 
        	255, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"d\"", "varchar(1020)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData QUES_TYPE_attribute = addAttributeWithParams
        	(120, "QUES_TYPE", "string", 
        	10, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"e\"", "varchar(40)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData MANDATORY_attribute = addAttributeWithParams
        	(121, "MANDATORY", "string", 
        	1, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"f\"", "varchar(4)", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData DEFAUL_attribute = addAttributeWithParams
        	(122, "DEFAUL", "string", 
        	300, 
        	false, false, false, false, false, 
        	false,false, 
        	"\"g\"", "varchar(1200)", "", 0, 0, 
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
        	(699, "cvpOperation", "bigString?", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"cvp_operation_header\"", "long varchar", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData cvpOperationLobs_attribute = addAttributeWithParams
        	(700, "cvpOperationLobs", "bigString?", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"cvp_operation_lobs\"", "long varchar", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData surrogateKey_attribute = addAttributeWithParams
        	(123, "surrogateKey", "long", 
        	-1, 
        	false, true, false, false, false, 
        	false,false, 
        	"\"h\"", "bigint", "", 0, 0, 
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
        	(1269, "cvpOperationLength", "long", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"cvpOperation_length\"", "bigint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData cvpOperationLobsLength_attribute = addAttributeWithParams
        	(1270, "cvpOperationLobsLength", "long", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"cvpOperationLobs_length\"", "bigint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        initAttributeMapFromAttributes();
        setName("VHCQuestionnaire");
        setTable("\"vhc_1_0_vhcquestionnaire\"");
        setSynchronizationGroup("RarelyChangingData");
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