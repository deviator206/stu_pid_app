/**
 * Generated by Sybase AFX Compiler with templateJ
 * Compiler version - 2.2.4.179
 * mbs - false 
 */  
package com.afm.vhc.intrnl;

@SuppressWarnings("all")
public class VHCQuestionnaireSubmitVHCResultOperationMetaData extends com.sybase.reflection.EntityMetaDataEx
{
    /**
     * Sybase internal use only.
     */
    public VHCQuestionnaireSubmitVHCResultOperationMetaData()
    {
        super(com.afm.vhc.VHCDB.getMetaData());
        _init();
    }
    protected void _init()
    {
        setId(13);
        setAttributes(new com.sybase.reflection.AttributeMetaDataList());
        setAttributeMap(new com.sybase.reflection.AttributeMap());
        com.sybase.reflection.AttributeMetaData PIM_VHC_RESULTS_attribute = addAttributeWithParams
        	(192, "PIM_VHC_RESULTS", "com.afm.vhc.Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS*", 
        	-1, 
        	false, false, false, false, true, 
        	false,false, 
        	"\"a\"", "LONG VARCHAR", "", 0, 0, 
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
        	(1117, "cvpOperation", "bigString?", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"cvp_operation_header\"", "long varchar", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData cvpOperationLobs_attribute = addAttributeWithParams
        	(1118, "cvpOperationLobs", "bigString?", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"cvp_operation_lobs\"", "long varchar", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData PIM_VHC_RESULTSValid_attribute = addAttributeWithParams
        	(1127, "PIM_VHC_RESULTSValid", "boolean", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"none\"", "tinyint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData id_attribute = addAttributeWithParams
        	(194, "id", "long", 
        	-1, 
        	false, true, false, false, false, 
        	false,false, 
        	"\"b\"", "bigint", "", 0, 0, 
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
        	(1500, "cvpOperationLength", "long", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"cvpOperation_length\"", "bigint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        com.sybase.reflection.AttributeMetaData cvpOperationLobsLength_attribute = addAttributeWithParams
        	(1501, "cvpOperationLobsLength", "long", 
        	-1, 
        	false, false, true, false, false, 
        	false,false, 
        	"\"cvpOperationLobs_length\"", "bigint", "", 0, 0, 
        	com.sybase.reflection.AttributeMetaData.GENERATED_SCHEME.NONE,
        	"", "null", com.sybase.reflection.PersonalizationMetaData.PersonalizationType.None,
        	false, false, false);
        initAttributeMapFromAttributes();
        setName("VHCQuestionnaireSubmitVHCResultOperation");
        setTable("\"vhc_1_0_vhcquestionnairesubmitvhcresultoperation\"");
        setSynchronizationGroup("RarelyChangingData");
        this.getKeyAttributes().add((id_attribute));
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