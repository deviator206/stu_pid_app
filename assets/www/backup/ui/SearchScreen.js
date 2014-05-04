AFM.SearchScreen = function(mParent) {
    this.pageID = "pagetwo";
    this.wrapperComponent = mParent;
    this.mSearchKey = "";
    this.setUp();
	this.mData;
	this.mDisplayedIndex = 0;
	this.serviceOrderId = "";
	this.mPageReverse="";
	this.rule = "";
	this.isPendingJobHelp = false;	
}

AFM.SearchScreen.prototype = {
    setUp : function() {
    },
	init : function(data) {
		if(data.traverse !== undefined){
			this.mPageReverse=data.traverse;
		}
		this.rule = data.rule;
    },    
    PageBeforeShow : function() {
    	if( this.mPageReverse !== "back" || this.rule == 'loadData'){			
			this.wrapperComponent.sendRequest('pending_jobs', {}, this.pendingJobReceived.bind(this), this.showErrorPopup.bind(this, "Error Getting Pending Jobs", "", ""));
		}
    },	
	PageShow : function() {
		Logger.log("Search Screen PageShow", AFMLogger.trace, {
			filename : 'SearchScreen.js',
			methodname : 'PageShow'
		});
		this.wrapperComponent.mPopUpAction ="true";
		this.AddEventListener();
		this.wrapperComponent.hideProcessingOverlay();
    },
    PageHide : function() {
        this.RemoveEventListener();
		$('#job_card_id').parent().removeClass('ui-selected-btn-bg');
		Logger.log("Search Screen PageHide", AFMLogger.trace, {
			filename : 'SearchScreen.js',
			methodname : 'PageHide'
		});
    }, 	
    AddEventListener : function() {    	
        var that = this;
        $('#search-btn').hammer().bind('click', this.searchJobCard.bind(this));
		$('#job_card_id').hammer().on('click', this.getVehicleDetailInfo.bind(this));
		$('#prev-pending-job-btn').hammer().bind('click', this.displayPendingPrevNext.bind(this,"prev"));
		$('#next-pending-job-btn').hammer().bind('click', this.displayPendingPrevNext.bind(this,"next"));		
		$(".search-input-text").on('click', this.showPendingHelp.bind(this));
        // when used jquery! It was triggering twice
        document.getElementById('service-order-id').onkeypress = function(e) {
            if (e.keyCode == 13) {
                that.searchJobCard(event);
            }
        }
    },
    RemoveEventListener : function() {     
        $('#job_card_id').hammer().off();
		$('#search-order-id').off();        
        $('#search-btn').unbind();
		$('#prev-pending-job-btn').unbind();
		$('#next-pending-job-btn').unbind();
        document.getElementById('service-order-id').onkeypress = null;
		$('.search-input-text').off();
    },
	/**
	*showErrorPopup class will show the error popup
	*@class showErrorPopup
	*@param [msg={}] {Object} The object whose properties will be rendered to get message
	*@param [text={}] {Object} The object whose properties will be rendered to get text for popup
	*@param [id={}] {Object} The object whose properties will be rendered to get id of popup
	*/
    showErrorPopup : function (msg, text, id) {
    	$("#processing_wait_overlay").show();
      	$('#popup_alert').show();
		$('.pop-up-job-id').text(id);
		$('.pop-up-job-id-text').text(text);
		$('.pop-up-text-msg').text(msg);
		$('#popup_ok').off();
		$('#popup_ok').hammer().bind('click', this.popUpOkAction.bind(this));
		$('#popup_alert').popup({history : false});
		$('#popup_alert').popup('open', {transition : 'none'});
    },
	/**
	*popUpOkAction class will close the popup
	*@class popUpOkAction
	*/
    popUpOkAction : function () {
    	$("#popup_alert").popup("close");
    	$("#processing_wait_overlay").hide();
    },
	/**
	*searchJobCard class is used to search all matching job entered by the user.
	*@class searchJobCard
	*/
    searchJobCard : function(evt) {
    	Logger.log("Clicked on Search button", AFMLogger.trace, {
			filename : 'SearchScreen.js',
			methodname : 'Start Method: searchJobCard'
		});
		this.mSearchKey = $('#service-order-id').val();
        if (this.mSearchKey == ""){
            return false;
		}
		var that = this;
		$('#service-order-id').blur();
		setTimeout(function(){
			$("#processing_wait_overlay").show();
		}, 200);
		Logger.log("Calling phonegap layer", AFMLogger.trace, {
			filename : 'SearchScreen.js',
			methodname : 'searchJobCard'
		});
		setTimeout(function(){
			that.wrapperComponent.sendRequest('search_result', {
				serviceOrderId : that.mSearchKey
			}, that.searchJobResult.bind(that), that.showErrorPopup.bind(that, "Please Try Again", "No data found for ", that.mSearchKey));
		}, 500);
		Logger.log("Clicked on Search button", AFMLogger.trace, {
			filename : 'SearchScreen.js',
			methodname : 'End Method: searchJobCard'
		});
    },
	/**
	*searchJobResult class is used to navigate the user to next screen on the basis of data
	*@class searchJobResult
	*/
	searchJobResult : function(data){
		Logger.log("Search result success", AFMLogger.trace, {
			filename : 'SearchScreen.js',
			methodname : 'Start Method: searchJobResult'
		});
		if(data.length === 1){
			Logger.log("Navigating to Job Detail page", AFMLogger.trace, {
				filename : 'SearchScreen.js',
				methodname : 'searchJobResult'
			});
			this.wrapperComponent.sessiondata.resetSearchResult();
			this.wrapperComponent.sessiondata.addSearchResult(data[0].id, data[0],false);
			this.wrapperComponent.navigateToPage({
				serviceOrderId : data[0].id				
			}, "page_four", 'slide', false, false);
		}
		else{
			Logger.log("Navigating to Search result page", AFMLogger.trace, {
				filename : 'SearchScreen.js',
				methodname : 'searchJobResult'
			});
			var mCheck = 0;
			this.wrapperComponent.navigateToPage({
				serviceOrderId : this.mSearchKey,
				searchData : data
			}, "page_three", 'slide', false, false);
		}
		Logger.log("Searching Job card", AFMLogger.trace, {
			filename : 'SearchScreen.js',
			methodname : 'End Method: searchJobResult'
		});
	},
	/**
	*getVehicleDetailInfo class will get the serviceOrderId and navigate to the jobCard detail info *screen
	*@class getVehicleDetailInfo
	*/
    getVehicleDetailInfo : function(event) { 
    	Logger.log("Clicked on pending job card and navigating to Job detail screen", AFMLogger.trace, {
			filename : 'SearchScreen.js',
			methodname : 'Start Method: getVehicleDetailInfo'
		});
		this.wrapperComponent.showProcessingOverlay();
		$('#job_card_id').parent().addClass('ui-selected-btn-bg');
        this.serviceOrderId = $('#job_id').text();
        this.wrapperComponent.navigateToPage({
            serviceOrderId : this.serviceOrderId
        }, "page_four", 'slide', false, false);
        Logger.log("Clicked on pending job card and navigating to Job detail screen", AFMLogger.trace, {
			filename : 'SearchScreen.js',
			methodname : 'End Method: getVehicleDetailInfo'
		});
    },
	/**
	*pendingJobReceived class will receive the data object which contains list of pending jobs
	*@class pendingJobReceived
	*@param [data={}] {Object} The object whose properties will be rendered to get the pending job list
	*/
    pendingJobReceived : function(data) {
    	Logger.log("Pending Job result success", AFMLogger.trace, {
			filename : 'SearchScreen.js',
			methodname : 'Start Method: pendingJobReceived'
		});
        var sContent = "";
        if (data.length !== 0) {
			this.isPendingJobHelp = true;
			$('#no-peding-job').hide();
            $('#pending-job').show();
			this.mData = data;
			this.mDisplayedIndex = 0;
			this.displayJobData();
        } else {
			this.isPendingJobHelp = false;
			$('#no-peding-job').show();
            $('#pending-job').hide();		
        }  		
        Logger.log("Pending Job result success", AFMLogger.trace, {
			filename : 'SearchScreen.js',
			methodname : 'End Method: pendingJobReceived'
		});
    },
	/**
	*displayJobData class will display the next prev button on the basis of data
	*@class displayJobData
	*/
	displayJobData:function(){
		if(this.mData.length == 1){
			$('#next-pending-job-btn').hide();
			$('#prev-pending-job-btn').hide();
		}
		else{
			if(this.mDisplayedIndex == this.mData.length - 1){
				$('#next-pending-job-btn').hide();
				$('#prev-pending-job-btn').show();
			}
			else if(this.mDisplayedIndex == 0){
				$('#prev-pending-job-btn').hide();
				$('#next-pending-job-btn').show();
			}
			else{
				$('#next-pending-job-btn').show();
				$('#prev-pending-job-btn').show();
			}
		}	
		$('#job_id').text(this.mData[this.mDisplayedIndex].id);
		$('#year').text(this.mData[this.mDisplayedIndex].year);
		$('#make').text(this.mData[this.mDisplayedIndex].chasis);
		$('#model').text(this.mData[this.mDisplayedIndex].model);
	},
	/**
	*displayPendingPrevNext class will display the data on the basis of next prev button
	*@class displayJobData
	*/
	displayPendingPrevNext:function(buttonClicked){
		switch(buttonClicked){
			case "next":
				this.mDisplayedIndex++;
			break;
			case "prev":
				this.mDisplayedIndex--;
			break;
		}
		this.displayJobData();
	},
	/**
	*showPendingHelp class will display help screen for pending job data of search screen
	*@class showPendingHelp
	*/
	showPendingHelp : function(){
		AppUtility.showHelp({arrData : AFM.AppConfiguration.getHelpScreenData('searchOrder'),moduleName :'searchOrder'});
		if(this.isPendingJobHelp)
			$('.pending-help').css('display','block');
		else
			$('.pending-help').css('display','none');
	},
}