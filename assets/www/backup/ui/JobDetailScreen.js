AFM.JobDetailScreen = function(mParent) {
    this.pageID = "PageFour";
    this.wrapperComponent = mParent;
    this.setUp();
    this.serviceOrderId = "";
    this.mPageReverse="";
}

AFM.JobDetailScreen.prototype = {
    setUp : function() {
    },
	init : function(data) {
        if (data.serviceOrderId != undefined && data.traverse === undefined){
            this.serviceOrderId = data.serviceOrderId;
		}        
        if(data.traverse !== undefined){
        	this.mPageReverse=data.traverse;
		}
    },
	PageBeforeShow : function() {
		Logger.log("PageBeforeShow", AFMLogger.trace, {
			filename : 'JobDetailScreen.js',
			methodname : 'PageBeforeShow'
		});
		if (this.serviceOrderId != undefined){
			Logger.log("Calling phonegap layer", AFMLogger.trace, {
				filename : 'JobDetailScreen.js',
				methodname : 'PageBeforeShow'
			});
			 this.wrapperComponent.sendRequest('single_job', {
				serviceOrderId : this.serviceOrderId
			}, this.showVehicleDetail.bind(this), this.errorVehicleDetail.bind(this));
		}
    },
    PageShow : function() {
    	Logger.log("PageShow", AFMLogger.trace, {
			filename : 'JobDetailScreen.js',
			methodname : 'PageShow'
		});
		this.wrapperComponent.mPopUpAction ="true";
        this.AddEventListener();
		$("#processing_wait_overlay").hide();
    }, 	
    PageHide : function() {
        this.RemoveEventListener();
    },
  
    AddEventListener : function() {
        $('#next-btn').hammer().bind('click', this.clickHandler.bind(this));
		$(".vehicle-detail-content").on('click', function(){
			AppUtility.showHelp({arrData : AFM.AppConfiguration.getHelpScreenData('searchOrderDetails'),moduleName :'searchOrderDetails'})					
		});		
    },
    RemoveEventListener : function() {
        $('#next-btn').unbind();
		$(".vehicle-detail-content").off();
    },
	
	/**
	*popUpOkAction class will close the popup
	*@class popUpOkAction
	*/
    popUpOkAction : function () {
    	this.wrapperComponent.goToPreviousPage();
      	$("#popup_alert").popup("close");
    },
	/**
	*clickHandler class is used to navigate the next screen one user taps on next button on the screen
	*@class clickHandler
	*/
    clickHandler : function() {
    	this.wrapperComponent.showProcessingOverlay();
    	Logger.log("Clicked on next button", AFMLogger.trace, {
			filename : 'JobDetailScreen.js',
			methodname : 'navigateToAppScreen'
		});        
        Logger.log("Calling phonegap layer for questionary data", AFMLogger.trace, {
			filename : 'JobDetailScreen.js',
			methodname : 'navigateToAppScreen'
		});
        var that = this;
        setTimeout(function() {
        	that.wrapperComponent.sendRequest('job_card_section_and_question', {
				serviceOrderId : that.serviceOrderId
			}, that.navigateToAppScreen.bind(that), that.showErrorPopup.bind(that, that.serviceOrderId, "No data found for"));
        }, 200);
    },
	/**
	*navigateToAppScreen class is used to check the data is null or not, if not the it will navigate the next screen one user taps on next button on the screen
	*@class navigateToAppScreen
	*@param [data={}] {Object} The object whose properties will be rendered to get the app screen data
	*@param [mandatoryData={}] {Object} The object whose properties will be rendered to get the *mandatory Question data
	*/
    navigateToAppScreen : function(data, mandatoryData){
    	if(data !== undefined && data.length != 0){
    		Logger.log("Navigating to app screen", AFMLogger.trace, {
    			filename : 'JobDetailScreen.js',
    			methodname : 'navigateToAppScreen'
    		});
    		//setting the current job
    		this.wrapperComponent.sessiondata.saveCurrentJobCard(data, mandatoryData);
	    	this.wrapperComponent.navigateToPage({
	            serviceOrderId : this.serviceOrderId,
	            appData : data,
	            mandatoryQuestionData : mandatoryData
	        }, "page_five", 'slide', false, false);
    	}
    	else{
    		this.showErrorPopup(this.serviceOrderId, "No data found for");
    	}
    },
	/**
	*showErrorPopup class is used to show the error popup
	*@class showErrorPopup
	*@param [msg={}] {Object} The object whose properties will be rendered to get the message for *popup
	*@param [text={}] {Object} The object whose properties will be rendered to get the runtime text *for popup
	*/
    showErrorPopup : function (msg, text) {
    	this.wrapperComponent.hideProcessingOverlay();	
      	$('#popup_alert').show();
		$('.pop-up-job-id-text').text(text);
		$('.pop-up-text-msg').text(msg);
		$('#popup_ok').off();
		$('#popup_ok').hammer().bind('click', function(){
			$("#popup_alert").popup("close");
			$("#processing_wait_overlay").hide();
		});
		this.openPopUp();
	},
	/**
	*errorVehicleDetail class is used to show the popup when backend throws an exception and *navigate to back screen
	*@class errorVehicleDetail
	*/
    errorVehicleDetail : function () {
    	this.wrapperComponent.hideProcessingOverlay();
      	$('#popup_alert').show();
		$('.pop-up-job-id').text(""+this.serviceOrderId);
		$('.pop-up-job-id-text').text('No data found for ');
		$('.pop-up-text-msg').text('Redirecting to previous screen.');
		$('#popup_ok').off();
		$('#popup_ok').hammer().bind('click', this.popUpOkAction.bind(this));
		this.openPopUp();
    },
	/**
	*openPopUp class is used to open the popup
	*@class openPopUp
	*/
	openPopUp : function(){
		$('#popup_alert').popup({history : false});
		$('#popup_alert').popup('open', {transition : 'none'});			
	},
	/**
	*showVehicleDetail class will receive the data object which contain details about selected jobCard
	*and show in the screen
	*@class showVehicleDetail
	*@param [data={}] {Object} The object whose properties will be rendered to get the details of *job card
	*/
    showVehicleDetail : function(data) {
    	Logger.log("Showing vehicle details", AFMLogger.trace, {
			filename : 'JobDetailScreen.js',
			methodname : 'Start Method: showVehicleDetail'
		});
    	data = this.wrapperComponent.parseTheData(data);
    	if (data.length !== 0) {
			$('#job-id').text(data.id);
			$('#customer-name').text(data.customer_name);
            $('#transmission').text(data.chasis);
			$('#plate').text(data.license_plate);
            //$('#mfg-year').text(data.year_of_mfg);
			$('#mfg-year').text(data.year);
            $('#vehicle-type').text(data.division);
            $('#model-name').text(data.model);
            $('#job-date').text(data.date);
			$('#contact-number').text(data.start_time);
			$('#vehicle-make').text(data.advisor_name);            
        }
    	Logger.log("Showing vehicle details", AFMLogger.trace, {
			filename : 'JobDetailScreen.js',
			methodname : 'End Method: showVehicleDetail'
		});
    },
	/**
	*backButtonPressed class is used to handle the back button fuctionality
	*@class backButtonPressed
	*/
	backButtonPressed :function(){			
		this.wrapperComponent.goToPreviousPage();
	}	
}