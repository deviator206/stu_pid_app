package com.afm.vhc.intrnl;

public  class VHCDBMetaData extends com.sybase.reflection.DatabaseMetaData
{
    /**
     * Sybase internal use only.
     */
    public VHCDBMetaData(com.sybase.sup.client.persistence.DatabaseDelegate dbDelegate)
    {
        this.setDelegate(dbDelegate);
        _init();	
    }
    
    protected void _init()
    {
        setId(20);
        setAttributes(new com.sybase.reflection.AttributeMetaDataList());
        setAttributeMap(new com.sybase.reflection.AttributeMap());
        initAttributeMapFromAttributes();
        setName("VHCDB");
        com.sybase.reflection.ClassMetaDataList _classList = new com.sybase.reflection.ClassMetaDataList(20);
        com.sybase.reflection.ClassMap _classMap = new com.sybase.reflection.ClassMap();
        setClassList(_classList);
        setClassMap(_classMap);
        com.afm.vhc.intrnl.Z_MF_SUBMIT_VHC_PIM_VHC_RESULTSMetaData _Z_MF_SUBMIT_VHC_PIM_VHC_RESULTSMetaData = (com.afm.vhc.intrnl.Z_MF_SUBMIT_VHC_PIM_VHC_RESULTSMetaData)(com.afm.vhc.Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS.getMetaData());
        _classList.add(_Z_MF_SUBMIT_VHC_PIM_VHC_RESULTSMetaData);
        _classMap.add("Z_MF_SUBMIT_VHC_PIM_VHC_RESULTS", _Z_MF_SUBMIT_VHC_PIM_VHC_RESULTSMetaData);
        com.afm.vhc.intrnl.SearchOrderMetaData _SearchOrderMetaData = (com.afm.vhc.intrnl.SearchOrderMetaData)(com.afm.vhc.SearchOrder.getMetaData());
        _classList.add(_SearchOrderMetaData);
        _classMap.add("SearchOrder", _SearchOrderMetaData);
        com.afm.vhc.intrnl.VHCQuestionnaireMetaData _VHCQuestionnaireMetaData = (com.afm.vhc.intrnl.VHCQuestionnaireMetaData)(com.afm.vhc.VHCQuestionnaire.getMetaData());
        _classList.add(_VHCQuestionnaireMetaData);
        _classMap.add("VHCQuestionnaire", _VHCQuestionnaireMetaData);
        com.afm.vhc.intrnl.ET_BAPIRETURNMetaData _ET_BAPIRETURNMetaData = (com.afm.vhc.intrnl.ET_BAPIRETURNMetaData)(com.afm.vhc.ET_BAPIRETURN.getMetaData());
        _classList.add(_ET_BAPIRETURNMetaData);
        _classMap.add("ET_BAPIRETURN", _ET_BAPIRETURNMetaData);
        com.afm.vhc.intrnl.LocalOrderStoreMetaData _LocalOrderStoreMetaData = (com.afm.vhc.intrnl.LocalOrderStoreMetaData)(com.afm.vhc.LocalOrderStore.getMetaData());
        _classList.add(_LocalOrderStoreMetaData);
        _classMap.add("LocalOrderStore", _LocalOrderStoreMetaData);
        com.afm.vhc.intrnl.LocalVHCResultStoreMetaData _LocalVHCResultStoreMetaData = (com.afm.vhc.intrnl.LocalVHCResultStoreMetaData)(com.afm.vhc.LocalVHCResultStore.getMetaData());
        _classList.add(_LocalVHCResultStoreMetaData);
        _classMap.add("LocalVHCResultStore", _LocalVHCResultStoreMetaData);
        com.afm.vhc.intrnl.PEX_BAPIRETURNMetaData _PEX_BAPIRETURNMetaData = (com.afm.vhc.intrnl.PEX_BAPIRETURNMetaData)(com.afm.vhc.PEX_BAPIRETURN.getMetaData());
        _classList.add(_PEX_BAPIRETURNMetaData);
        _classMap.add("PEX_BAPIRETURN", _PEX_BAPIRETURNMetaData);
        com.afm.vhc.intrnl.PEX_VALUESMetaData _PEX_VALUESMetaData = (com.afm.vhc.intrnl.PEX_VALUESMetaData)(com.afm.vhc.PEX_VALUES.getMetaData());
        _classList.add(_PEX_VALUESMetaData);
        _classMap.add("PEX_VALUES", _PEX_VALUESMetaData);
        com.afm.vhc.intrnl.UserInfoMetaData _UserInfoMetaData = (com.afm.vhc.intrnl.UserInfoMetaData)(com.afm.vhc.UserInfo.getMetaData());
        _classList.add(_UserInfoMetaData);
        _classMap.add("UserInfo", _UserInfoMetaData);
        com.afm.vhc.intrnl.VHCLocalUploadQueueMetaData _VHCLocalUploadQueueMetaData = (com.afm.vhc.intrnl.VHCLocalUploadQueueMetaData)(com.afm.vhc.VHCLocalUploadQueue.getMetaData());
        _classList.add(_VHCLocalUploadQueueMetaData);
        _classMap.add("VHCLocalUploadQueue", _VHCLocalUploadQueueMetaData);
        com.afm.vhc.intrnl.LocalVHCResultStoreKeyMetaData _LocalVHCResultStoreKeyMetaData = (com.afm.vhc.intrnl.LocalVHCResultStoreKeyMetaData)(com.afm.vhc.LocalVHCResultStoreKey.getMetaData());
        _classList.add(_LocalVHCResultStoreKeyMetaData);
        _classMap.add("LocalVHCResultStoreKey", _LocalVHCResultStoreKeyMetaData);
        com.afm.vhc.intrnl.VHCLocalUploadQueueKeyMetaData _VHCLocalUploadQueueKeyMetaData = (com.afm.vhc.intrnl.VHCLocalUploadQueueKeyMetaData)(com.afm.vhc.VHCLocalUploadQueueKey.getMetaData());
        _classList.add(_VHCLocalUploadQueueKeyMetaData);
        _classMap.add("VHCLocalUploadQueueKey", _VHCLocalUploadQueueKeyMetaData);
        com.afm.vhc.intrnl.LogRecordImplMetaData _LogRecordImplMetaData = (com.afm.vhc.intrnl.LogRecordImplMetaData)(com.afm.vhc.LogRecordImpl.getMetaData());
        _classList.add(_LogRecordImplMetaData);
        _classMap.add("LogRecordImpl", _LogRecordImplMetaData);
        com.afm.vhc.intrnl.OperationReplayMetaData _OperationReplayMetaData = (com.afm.vhc.intrnl.OperationReplayMetaData)(com.afm.vhc.intrnl.OperationReplay.getMetaData());
        _classList.add(_OperationReplayMetaData);
        _classMap.add("OperationReplay", _OperationReplayMetaData);
        com.afm.vhc.intrnl.SISSubscriptionKeyMetaData _SISSubscriptionKeyMetaData = (com.afm.vhc.intrnl.SISSubscriptionKeyMetaData)(com.afm.vhc.intrnl.SISSubscriptionKey.getMetaData());
        _classList.add(_SISSubscriptionKeyMetaData);
        _classMap.add("SISSubscriptionKey", _SISSubscriptionKeyMetaData);
        com.afm.vhc.intrnl.SISSubscriptionMetaData _SISSubscriptionMetaData = (com.afm.vhc.intrnl.SISSubscriptionMetaData)(com.afm.vhc.intrnl.SISSubscription.getMetaData());
        _classList.add(_SISSubscriptionMetaData);
        _classMap.add("SISSubscription", _SISSubscriptionMetaData);
        com.afm.vhc.intrnl.PackagePropertiesMetaData _PackagePropertiesMetaData = (com.afm.vhc.intrnl.PackagePropertiesMetaData)(com.afm.vhc.PackageProperties.getMetaData());
        _classList.add(_PackagePropertiesMetaData);
        _classMap.add("PackageProperties", _PackagePropertiesMetaData);
        com.afm.vhc.intrnl.ChangeLogKeyMetaData _ChangeLogKeyMetaData = (com.afm.vhc.intrnl.ChangeLogKeyMetaData)(com.afm.vhc.ChangeLogKey.getMetaData());
        _classList.add(_ChangeLogKeyMetaData);
        _classMap.add("ChangeLogKey", _ChangeLogKeyMetaData);
        com.afm.vhc.intrnl.ChangeLogImplMetaData _ChangeLogImplMetaData = (com.afm.vhc.intrnl.ChangeLogImplMetaData)(com.afm.vhc.ChangeLogImpl.getMetaData());
        _classList.add(_ChangeLogImplMetaData);
        _classMap.add("ChangeLogImpl", _ChangeLogImplMetaData);
        com.afm.vhc.intrnl.OfflineAuthenticationMetaData _OfflineAuthenticationMetaData = (com.afm.vhc.intrnl.OfflineAuthenticationMetaData)(com.afm.vhc.OfflineAuthentication.getMetaData());
        _classList.add(_OfflineAuthenticationMetaData);
        _classMap.add("OfflineAuthentication", _OfflineAuthenticationMetaData);
        com.afm.vhc.intrnl.VHCQuestionnaireUploadFilesAsXStringOperationMetaData _VHCQuestionnaireUploadFilesAsXStringOperationMetaData = (com.afm.vhc.intrnl.VHCQuestionnaireUploadFilesAsXStringOperationMetaData)(com.afm.vhc.VHCQuestionnaireUploadFilesAsXStringOperation.getMetaData());
        _classList.add(_VHCQuestionnaireUploadFilesAsXStringOperationMetaData);
        _classMap.add("VHCQuestionnaireUploadFilesAsXStringOperation", _VHCQuestionnaireUploadFilesAsXStringOperationMetaData);
        com.afm.vhc.intrnl.VHCQuestionnaireSubmitVHCResultOperationMetaData _VHCQuestionnaireSubmitVHCResultOperationMetaData = (com.afm.vhc.intrnl.VHCQuestionnaireSubmitVHCResultOperationMetaData)(com.afm.vhc.VHCQuestionnaireSubmitVHCResultOperation.getMetaData());
        _classList.add(_VHCQuestionnaireSubmitVHCResultOperationMetaData);
        _classMap.add("VHCQuestionnaireSubmitVHCResultOperation", _VHCQuestionnaireSubmitVHCResultOperationMetaData);
        com.afm.vhc.intrnl.KeyPackageNameMetaData _KeyPackageNameMetaData = (com.afm.vhc.intrnl.KeyPackageNameMetaData)(com.afm.vhc.KeyPackageName.getMetaData());
        _classList.add(_KeyPackageNameMetaData);
        _classMap.add("KeyPackageName", _KeyPackageNameMetaData);
        com.afm.vhc.intrnl.ServerPersonalizationMetaData _ServerPersonalizationMetaData = (com.afm.vhc.intrnl.ServerPersonalizationMetaData)(com.afm.vhc.ServerPersonalization.getMetaData());
        _classList.add(_ServerPersonalizationMetaData);
        _classMap.add("ServerPersonalization", _ServerPersonalizationMetaData);
        com.afm.vhc.intrnl.PersonalizationParametersMetaData _PersonalizationParametersMetaData = (com.afm.vhc.intrnl.PersonalizationParametersMetaData)(com.afm.vhc.PersonalizationParameters.getMetaData());
        _classList.add(_PersonalizationParametersMetaData);
        _classMap.add("PersonalizationParameters", _PersonalizationParametersMetaData);
        com.afm.vhc.intrnl.KeyGeneratorMetaData _KeyGeneratorMetaData = (com.afm.vhc.intrnl.KeyGeneratorMetaData)(com.afm.vhc.KeyGenerator.getMetaData());
        _classList.add(_KeyGeneratorMetaData);
        _classMap.add("KeyGenerator", _KeyGeneratorMetaData);
        com.afm.vhc.intrnl.LocalKeyGeneratorMetaData _LocalKeyGeneratorMetaData = (com.afm.vhc.intrnl.LocalKeyGeneratorMetaData)(com.afm.vhc.LocalKeyGenerator.getMetaData());
        _classList.add(_LocalKeyGeneratorMetaData);
        _classMap.add("LocalKeyGenerator", _LocalKeyGeneratorMetaData);
        com.sybase.reflection.EntityMetaDataList _entityList = new com.sybase.reflection.EntityMetaDataList(20);
        com.sybase.reflection.EntityMap _entityMap = new com.sybase.reflection.EntityMap();
        setEntityList(_entityList);
        setEntityMap(_entityMap);
        _entityList.add(_LocalKeyGeneratorMetaData);
        _entityMap.add("LocalKeyGenerator", _LocalKeyGeneratorMetaData);
        _entityList.add(_OfflineAuthenticationMetaData);
        _entityMap.add("OfflineAuthentication", _OfflineAuthenticationMetaData);
        _entityList.add(_VHCLocalUploadQueueMetaData);
        _entityMap.add("VHCLocalUploadQueue", _VHCLocalUploadQueueMetaData);
        _entityList.add(_LocalVHCResultStoreMetaData);
        _entityMap.add("LocalVHCResultStore", _LocalVHCResultStoreMetaData);
        _entityList.add(_LocalOrderStoreMetaData);
        _entityMap.add("LocalOrderStore", _LocalOrderStoreMetaData);
        _entityList.add(_ET_BAPIRETURNMetaData);
        _entityMap.add("ET_BAPIRETURN", _ET_BAPIRETURNMetaData);
        _entityList.add(_SearchOrderMetaData);
        _entityMap.add("SearchOrder", _SearchOrderMetaData);
        _entityList.add(_KeyGeneratorMetaData);
        _entityMap.add("KeyGenerator", _KeyGeneratorMetaData);
        _entityList.add(_ServerPersonalizationMetaData);
        _entityMap.add("ServerPersonalization", _ServerPersonalizationMetaData);
        _entityList.add(_PackagePropertiesMetaData);
        _entityMap.add("PackageProperties", _PackagePropertiesMetaData);
        _entityList.add(_SISSubscriptionMetaData);
        _entityMap.add("SISSubscription", _SISSubscriptionMetaData);
        _entityList.add(_OperationReplayMetaData);
        _entityMap.add("OperationReplay", _OperationReplayMetaData);
        _entityList.add(_LogRecordImplMetaData);
        _entityMap.add("LogRecordImpl", _LogRecordImplMetaData);
        _entityList.add(_ChangeLogImplMetaData);
        _entityMap.add("ChangeLogImpl", _ChangeLogImplMetaData);
        _entityList.add(_VHCQuestionnaireSubmitVHCResultOperationMetaData);
        _entityMap.add("VHCQuestionnaireSubmitVHCResultOperation", _VHCQuestionnaireSubmitVHCResultOperationMetaData);
        _entityList.add(_VHCQuestionnaireUploadFilesAsXStringOperationMetaData);
        _entityMap.add("VHCQuestionnaireUploadFilesAsXStringOperation", _VHCQuestionnaireUploadFilesAsXStringOperationMetaData);
        _entityList.add(_PEX_BAPIRETURNMetaData);
        _entityMap.add("PEX_BAPIRETURN", _PEX_BAPIRETURNMetaData);
        _entityList.add(_UserInfoMetaData);
        _entityMap.add("UserInfo", _UserInfoMetaData);
        _entityList.add(_PEX_VALUESMetaData);
        _entityMap.add("PEX_VALUES", _PEX_VALUESMetaData);
        _entityList.add(_VHCQuestionnaireMetaData);
        _entityMap.add("VHCQuestionnaire", _VHCQuestionnaireMetaData);
        com.sybase.collections.StringList _publications = new com.sybase.collections.StringList(20);
        com.sybase.reflection.EntityListMap _publicationsToEntities = new com.sybase.reflection.EntityListMap();
        _publications.add("RarelyChangingData");
        com.sybase.reflection.EntityMetaDataList RarelyChangingDataEntities = new com.sybase.reflection.EntityMetaDataList(20);
        RarelyChangingDataEntities.add(_VHCQuestionnaireMetaData);
        RarelyChangingDataEntities.add(_PEX_VALUESMetaData);
        RarelyChangingDataEntities.add(_UserInfoMetaData);
        RarelyChangingDataEntities.add(_PEX_BAPIRETURNMetaData);
        RarelyChangingDataEntities.add(_VHCQuestionnaireUploadFilesAsXStringOperationMetaData);
        RarelyChangingDataEntities.add(_VHCQuestionnaireSubmitVHCResultOperationMetaData);
        RarelyChangingDataEntities.add(_ChangeLogImplMetaData);
        RarelyChangingDataEntities.add(_LogRecordImplMetaData);
        RarelyChangingDataEntities.add(_OperationReplayMetaData);
        RarelyChangingDataEntities.add(_SISSubscriptionMetaData);
        RarelyChangingDataEntities.add(_PackagePropertiesMetaData);
        RarelyChangingDataEntities.add(_ServerPersonalizationMetaData);
        RarelyChangingDataEntities.add(_KeyGeneratorMetaData);
        _publicationsToEntities.add("RarelyChangingData", RarelyChangingDataEntities);
        _publications.add("RequestResponse");
        com.sybase.reflection.EntityMetaDataList RequestResponseEntities = new com.sybase.reflection.EntityMetaDataList(20);
        RequestResponseEntities.add(_SearchOrderMetaData);
        RequestResponseEntities.add(_ET_BAPIRETURNMetaData);
        RequestResponseEntities.add(_ChangeLogImplMetaData);
        RequestResponseEntities.add(_LogRecordImplMetaData);
        RequestResponseEntities.add(_OperationReplayMetaData);
        RequestResponseEntities.add(_SISSubscriptionMetaData);
        RequestResponseEntities.add(_PackagePropertiesMetaData);
        RequestResponseEntities.add(_ServerPersonalizationMetaData);
        RequestResponseEntities.add(_KeyGeneratorMetaData);
        _publicationsToEntities.add("RequestResponse", RequestResponseEntities);
        _publications.add("unsubscribe");
        com.sybase.reflection.EntityMetaDataList unsubscribeEntities = new com.sybase.reflection.EntityMetaDataList(20);
        unsubscribeEntities.add(_KeyGeneratorMetaData);
        _publicationsToEntities.add("unsubscribe", unsubscribeEntities);
        _publications.add("system");
        com.sybase.reflection.EntityMetaDataList systemEntities = new com.sybase.reflection.EntityMetaDataList(20);
        systemEntities.add(_LogRecordImplMetaData);
        systemEntities.add(_OperationReplayMetaData);
        systemEntities.add(_ServerPersonalizationMetaData);
        systemEntities.add(_SISSubscriptionMetaData);
        systemEntities.add(_PackagePropertiesMetaData);
        systemEntities.add(_KeyGeneratorMetaData);
        _publicationsToEntities.add("system", systemEntities);
        _publications.add("initialSync");
        com.sybase.reflection.EntityMetaDataList initialSyncEntities = new com.sybase.reflection.EntityMetaDataList(20);
        initialSyncEntities.add(_PackagePropertiesMetaData);
        initialSyncEntities.add(_ServerPersonalizationMetaData);
        initialSyncEntities.add(_KeyGeneratorMetaData);
        _publicationsToEntities.add("initialSync", initialSyncEntities);
        setDatabaseFile("VHC_V011_0.ulj");
        setDatabaseName("VHC_V011_0");
        initEntityListMap(_publicationsToEntities);
        setSynchronizationGroups(_publications);
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