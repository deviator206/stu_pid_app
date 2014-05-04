AFM.SearchResultScreen = function(mParent) {
    this.pageID = "PageThree";
    this.wrapperComponent = mParent;
    this.setUp();
    this.serviceOrderId = "";
	this.mSearchedKey = "";
	this.searchResult = "";
	this.mPageReverse="";
}

AFM.SearchResultScreen.prototype = {
    setUp : function() {
    },
	init : function(data) {
		if(data != undefined && data.serviceOrderId !=undefined){
			this.mSearchedKey = data.serviceOrderId;
		}
		if(data != undefined && data.searchData !=undefined){
			this.searchResult = data.searchData;
		}	
        if(data.traverse !== undefined){
        	this.mPageReverse=data.traverse;
		}
    },
	PageBeforeShow : function() {
		if( this.mPageReverse !== "back" ){
			this.searchJobReceived(this.searchResult);
		}
		$('.add-hover').removeClass('ui-selected-btn-bg');
    },
    PageShow : function() {
    	Logger.log("Search Result Screen PageShow", AFMLogger.trace, {
			filename : 'SearchResultScreen.js',
			methodname : 'PageShow'
		});
		this.wrapperComponent.mPopUpAction ="true";
        this.AddEventListener();
		this.wrapperComponent.hideProcessingOverlay();
    },
    PageHide : function() {
        this.RemoveEventListener();
        Logger.log("Search Result Screen PageHide", AFMLogger.trace, {
			filename : 'SearchResultScreen.js',
			methodname : 'PageHide'
		});
    },
    AddEventListener : function() {
        $('#back-btn').hammer().bind('click', this.backButtonPressed.bind(this));
        if( this.mPageReverse === "back" ){
        	$('.vehicle-detail-info').hammer().on('click', this.getVehicleDetailInfo.bind(this));
		}
		$(".search-header-text").on('click', function(){
			AppUtility.showHelp({arrData : AFM.AppConfiguration.getHelpScreenData('searchOrderList'),moduleName :'searchOrderList'});					
		});
    },
    RemoveEventListener : function() {
        $('#back-btn').unbind();
        $('.vehicle-detail-info').off();
		$(".search-header-text").off();
    },		
	/**
	*backButtonPressed class is used to handle the back button fuctionality
	*@class backButtonPressed
	*/
	backButtonPressed :function(){			
		this.wrapperComponent.goToPreviousPage();
	},	
	/**
	*getVehicleDetailInfo class will get the serviceOrderId and navigate to the jobCard detail info *screen
	*@class getVehicleDetailInfo
	*/
    getVehicleDetailInfo : function(event) {
    	Logger.log("Clicked on job card for detail", AFMLogger.trace, {
			filename : 'SearchResultScreen.js',
			methodname : 'Start Method: getVehicleDetailInfo'
		});
    	AFM.AppConfiguration.logText = 'Job Card selection success to Job Detail Pageshow';
    	AFM.AppConfiguration.previousTime = new Date();
		this.wrapperComponent.showProcessingOverlay();
		this.serviceOrderId = event.currentTarget.id;
		$('#'+this.serviceOrderId).parent().addClass('ui-selected-btn-bg');
		var that = this;
		setTimeout( function(){
			that.wrapperComponent.navigateToPage({		
	            serviceOrderId : that.serviceOrderId
	        }, "page_four", 'slide', false, false);
		}, 50);
		Logger.log("Clicked on job card for detail", AFMLogger.trace, {
			filename : 'SearchResultScreen.js',
			methodname : 'End Method: getVehicleDetailInfo'
		});
    },
	/**
	*searchJobReceived class will receive the data object which contains list of searched jobs
	*@class searchJobReceived
	*@param [data={}] {Object} The object whose properties will be rendered to get the searched job *list
	*/
    searchJobReceived : function(data) {       
        if (data.length !== 0) {
            $('#insert-vehicle-detail').empty();
            $('#search-list-id').show();
            $('#search-empty').hide();
            sContent = this.getVehicleDetails(data);
            $('#insert-vehicle-header-detail').html(this.wrapperComponent.mHTMLTemplate.renderTemplate('vehicle-search-list-header', {}));
            $('#insert-vehicle-detail').html(sContent);
            $('.vehicle-detail-info').hammer().on('click', this.getVehicleDetailInfo.bind(this));
        } else {
            $('#search-empty').show();
            $('#search-list-id').hide();
        }
    },
	/**
	*getVehicleDetails class will receive the data object which contain details about selected jobCard
	*@class getVehicleDetails
	*@param [data={}] {Object} The object whose properties will be rendered to get the details of job card
	*@return {String} This class returns the vehicle details template
	*/
    getVehicleDetails : function(data) {
        var sContent = "", isPending = false;
        this.wrapperComponent.sessiondata.resetSearchResult();
        for (var i = 0; i < data.length; i++) {
        	data[i] = this.wrapperComponent.parseTheData(data[i]);
        	isPending = this.wrapperComponent.sessiondata.isJobPending(data[i].id);
        	this.wrapperComponent.sessiondata.addSearchResult(data[i].id, data[i],isPending);
        	
        	sContent += this.wrapperComponent.mHTMLTemplate.renderTemplate('vehicle-search-list', {
                job_card_id : data[i].id,
                id : data[i].id,
                year : data[i].year,
                make : data[i].chasis,
                model : data[i].model,
                pending_job_show_hide : (isPending == true || isPending == 'true') ? 'block' : 'none',
                view_detail : 'vehicle-detail-info'
            });
        }
        return sContent;
    }
}