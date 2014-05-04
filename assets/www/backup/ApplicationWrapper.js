/**
 * This handles the following
 * - navigation
 * - communication (between pages and backend layers)
 * - loading of new pages
 * - listening to main events from JQM
 * - configuration using JSON
 */
/**
 * AFM Global NameSpacing
 */
var AFM = AFM || {};
/**
 * Creates an instance of AFM.ApplicationWrapper.
 * @class ApplicationWrapper
 * @constructor
 * @this {AFM.ApplicationWrapper}
 */
AFM.ApplicationWrapper = function(config) {

	this.nApplicationState = 0;
	this.mCurrentPage = null;
	this.mCurrentPageId = '';
	this.mPageStack = {};
	this.mScreenName = {};

	this.mQuestionRestriction =  false;
	this.appMode = 0;
	this.triggerAppStart = [];
	this.mBackendInterface = null;
	this.pullConfigurations();
	this.mHTMLTemplate = null;
	this.mPopUpAction = '';
	this.sessiondata = null;
	this.setUp();
}

AFM.ApplicationWrapper.prototype = {
	/**
	 * fetches the configurations from JSON file
	 * @class pullConfigurations
	 * @this {AFM.ApplicationWrapper}
	 */
	pullConfigurations : function() {
		this.mScreenName = AFM.AppConfiguration.screenName;
		this.appMode = AFM.AppConfiguration.appMode;
		this.triggerAppStart = AFM.AppConfiguration.triggerAppStart;
		AppUtility.initialize('vhc_help', {
			closecallback :this.helpClosed.bind(this),
			helpText : 'help-text',
			straigntArrow : 'help-straight-arrow',
			okGotItButton : 'help-ok-btn',
			antiClockwise : 'help-Lshape-anticlockwise-arrow'
		});
	},

	/**
	 * sets up teh following - the basic event-listeners required. - preloading
	 * of the templates - first navigation
	 * @class setUp
	 * @this {AFM.ApplicationWrapper}
	 */
	setUp : function() {
		this.addPageEventListeners();
		if (this.mBackendInterface == null) {
			this.mBackendInterface = new AFM.PhoneGapLayer(this);
		}

		//AFM.AppDataCenter.init();
		//this.sessiondata = new	AFM.AppSessionData(this);
		this.mHTMLTemplate = new HTMLTemplate();
		this.mHTMLTemplate.loadTemplate([], 'script');
			
		console.log("triggerAppStart "+this.triggerAppStart)
		this.navigateToPage({}, this.triggerAppStart, 'slide', false, false);

	},
	/**
	 * used for navigation from 1 page to another
	 * @class navigateToPage
	 * @this {AFM.ApplicationWrapper}
	 * @param {json}
	 *            triggerData - any data that is required while moving from 1
	 *            page to another
	 * @param {string}
	 *            pageId -Id of the destination page
	 * @param {string}
	 *            transitionType - identifying type of transition
	 * @param {Boolean}
	 *            isReverse -detecting whether the ransition requested should be
	 *            clockwise or anti-clockwise
	 * @param {Boolean}
	 *            isChangeHash
	 */
	navigateToPage : function(triggerData, pageId, transitionType, isReverse, isChangeHash) {
		if (this.mPageStack[pageId] == null || this.mPageStack[pageId] == undefined) {
			if (this.mScreenName.hasOwnProperty(pageId)) {
				this.mPageStack[pageId] = {};
				this.mPageStack[pageId].content = new window.AFM[this.mScreenName[pageId]](this);
				/**
				 * IF ANY CUSTOMIZATION REQUIRED.. switch(pageId) { case
				 * 'pageone': break; }
				 */
			} else {
				navigator.app.exitApp();
				return false;
			}
		}
		if (this.mCurrentPage != null && !isReverse && triggerData.rule == undefined) {
			this.mPageStack[pageId].previousPage = [];
			this.mPageStack[pageId].previousPage.push(this.mCurrentPageId);

		}

		this.mCurrentPage = this.mPageStack[pageId].content;
		this.mCurrentPageId = pageId;
		if (this.methodExist(this.mCurrentPage, 'init')) {
			this.mCurrentPage.init(triggerData);
		}
		setTimeout(function() {
			$.mobile.changePage($("#" + pageId), {
				transition : transitionType,
				reverse : isReverse,
				changeHash : isChangeHash
			});
		}, 50);
	},
	/**
	 * @class _pageShow
	 * would be triggered internall on PAGE SHOW event dispatched by JQM. This
	 * event would then trigger methods on current visible page
	 *
	 * @this {AFM.ApplicationWrapper}
	 * @param {json}
	 *            event -event object of the trigger
	 * @param {json}
	 *            data - data incase we need to send any infor in this
	 *            event-handler
	 *
	 */

	_pageShow : function(event, data) {

		event.preventDefault();
		if (this.methodExist(this.mPageStack[event.target.id].content, 'PageShow')) {
			this.mPageStack[event.target.id].content.PageShow();
		}
	},
	/**
	 * @class _pageHide
	 * would be triggered internall on PAGE HIDE event dispatched by JQM. This
	 * event would then trigger methods on current visible page
	 *
	 * @this {AFM.ApplicationWrapper}
	 * @param {json}
	 *            event -event object of the trigger
	 * @param {json}
	 *            data - data incase we need to send any infor in this
	 *            event-handler
	 *
	 */
	_pageHide : function(event, data) {
		event.preventDefault();
		if (this.methodExist(this.mPageStack[event.target.id].content, 'PageHide')) {
			this.mPageStack[event.target.id].content.PageHide();
		}
	},
	/**
	 * @class _pageBeforeShow
	 * would be triggered internall on PAGE BEFORE SHOW event dispatched by JQM.
	 *
	 * @this {AFM.ApplicationWrapper}
	 * @param {json}
	 *            event -event object of the trigger
	 * @param {json}
	 *            data - data incase we need to send any infor in this
	 *            event-handler
	 *
	 */
	_pageBeforeShow : function(event, data) {
		event.preventDefault();
		if (this.methodExist(this.mPageStack[event.target.id].content, 'PageBeforeShow')) {
			this.mPageStack[event.target.id].content.PageBeforeShow();
		}
	},
	/**
	 * @class addPageEventListeners
	 * Registering the events on documents and assigning valid
	 * @this {AFM.ApplicationWrapper}
	 */

	addPageEventListeners : function() {

		$(document).bind("pagehide", this._pageHide.bind(this));
		$(document).bind("pagebeforeshow", this._pageBeforeShow.bind(this));
		$(document).on("pageshow", this._pageShow.bind(this));

	},
	/**
	 * @class methodExist
	 * @ignore this is internally used for checking if method exist
	 */
	methodExist : function(obj, methodName) {
		var bReturn = false;
		if ( typeof (obj[methodName]) != 'undefined') {
			bReturn = true;
		}
		return bReturn;
	},
	/**
	 * @class sendRequest
	 * communication with PHONEGAP Layer and JS dummy data Layer is achieved
	 * here.
	 *@this {AFM.ApplicationWrapper}
	 *@param {string} requestId -specifying the requestId
	 *@param {json} data - data in case we need to send any info
	 *@param {function} onSuccess - callback function when response is success
	 *@param {function} onFailure - callback function when response is failure
	 */
	sendRequest : function(requestId, data, onSuccess, onFailure) {
		if (this.appMode == 1) {
			// actual server interaction
			this.mBackendInterface.sendRequest(requestId, data, onSuccess, onFailure);
		} else {
			// debug mode so dummy data
			AFM.AppDataCenter.process(requestId, data, onSuccess);
		}

	},

	/**
	 * @class isPhoneGapReady
	 * detecting whether the phonegap is ready
	 * @this {AFM.ApplicationWrapper}
	 *
	 */
	isPhoneGapReady : function() {
		return this.mBackendInterface.isDeviceReady();
	},

	/**
	 * @class goToPreviousPage
	 * directly being called from ANY of the <Page Classes> so as to traverse to
	 * previous page
	 * @this {AFM.ApplicationWrapper}
	 */
	goToPreviousPage : function() {
		this.mPopUpAction == 'false'
		if (this.mPageStack[this.mCurrentPageId].previousPage != undefined) {
			this.navigateToPage({
				traverse : 'back'
			}, this.mPageStack[this.mCurrentPageId].previousPage[0], 'slide', true, false);
		} else {
			this.showProcessingOverlay();
			this.sendRequest('appExit', {}, this.appExitSuccess.bind(this), this.appExitFailure.bind(this));
		}
	},

	/**
	 * @class quitApplication
	 * This method is used to quit application
	 * @this {AFM.ApplicationWrapper}
	 */
	quitApplication : function() {
		navigator.app.exitApp();
	},

	/**
	 * @class appExitSuccess
	 * This method is callback success method for to quit the application
	 * @this {AFM.ApplicationWrapper}
	 */
	appExitSuccess : function(data) {
		this.hideProcessingOverlay();
		if (data.wait) {
			$("#confirm-message-text").html("You are about to exit the application.This may lead to loss of data please wait");
			$('#confirm_yes_btn').unbind();
			$('#confirm_no_btn').unbind();
			$("#confirmation_popup").show();
			$("#confirmation_popup").popup({
				history : false
			});
			$("#confirmation_popup").popup("open", {
				transition : "none"
			});
			$("#confirm_yes_btn").on('click', function() {
				$("#confirmation_popup").popup('close');
				$("#confirmation_popup").hide();

			});
			$("#confirm_no_btn").on('click', function() {
				$("#confirmation_popup").popup('close');
				$("#confirmation_popup").hide();
				navigator.app.exitApp();
			});
		} 
		else {
			this.quitApplication();
		}
	},
	/**
	 * @class appExitFailure
	 * This method is callback failure method for to quit the application
	 * @this {AFM.ApplicationWrapper}
	 */
	appExitFailure : function(data) {
		this.hideProcessingOverlay();
		this.quitApplication();
	},
	/**
	 * @class showProcessingOverlay
	 * This method is shows the processing overlay
	 * @this {AFM.ApplicationWrapper}
	 */
	showProcessingOverlay : function() {
		setTimeout(function() {
			$("#processing_wait_overlay").show();
		}, 0);
	},
	/**
	 * @class hideProcessingOverlay
	 * This method is hides the processing overlay
	 * @this {AFM.ApplicationWrapper}
	 */
	hideProcessingOverlay : function() {
		setTimeout(function() {
			$("#processing_wait_overlay").hide();
		}, 0);
	},
	/**
	 * @class parseTheData
	 * This method is used to parse the JSON data
	 * @this {AFM.ApplicationWrapper}
	 */
	parseTheData : function(data) {

		// 1 -- fetching from native layer
		if (this.appMode === 1) {
			data = convertTheData(data);
		}
		return data;
	},
	/**
	 * @class clone
	 * @ignore for cloning objects @this {AFM.ApplicationWrapper}
	 */
	clone : function(obj) {
		if (obj == null || typeof (obj) != 'object') {
			return obj;
		}
		var temp = obj.constructor();
		// changed
		for (var key in obj) {
			temp[key] = this.clone(obj[key]);
		}
		return temp;
	},
	/**
	 * @class _onBackButtonClicked
	 * @ignore mapped with back button click @this {AFM.ApplicationWrapper}
	 */
	_onBackButtonClicked : function(evt) {
		Logger.log("Device back button pressed", AFMLogger.trace, {
			filename : 'ApplicationWrapper.js',
			methodname : '_onBackButtonClicked'
		});
		if (this.mPopUpAction !== 'true') {
			this.mCurrentPage.backButtonPressed();
			return false;
		}
		if(AppUtility.isHelpOpen){
			AppUtility.hideHelp();
			return;
		}		
		if (this.mCurrentPageId === 'page_five') {
			this.showProcessingOverlay();
			$("#question_container_3").empty();
			$("#question_container_2").empty();
			$("#question_container_1").empty();
			$('#carousel').empty();
		}
		this.goToPreviousPage();
	},
	
	showHelpScreen:function()
	{
		
		AppUtility.showHelp({
			arrData : AFM.AppConfiguration.getHelpScreenData(this.mCurrentPageId),
			moduleName :this.mCurrentPageId
		});
		//alert(" | "+this.mCurrentPageId);
	},
	
	helpClosed:function()
	{
		this.sendRequest('trigger_help', {});
	},
	/**
	 * @class _onMenuButtonClicked
	 * @ignore mapped with menu button click @this {AFM.ApplicationWrapper}
	 */
	_onMenuButtonClicked : function(evt) {

	}
}
/**
 * @class convertTheData
 * This method is used to parse the JSON data into array
 * @this {AFM.ApplicationWrapper}
 */
convertTheData = function(data) {
	var JSONString = JSON.stringify(data);
	return JSON.parse(JSONString);
};

/***
 * Logger Utility
 *
 *  */
( function(window) {"use strict";

		var alert = window.alert,
		// the JQuery object
		$ = window.$, mLogTrackerArray = [], Logger = ( function() {
				var module = {
					mApplicationTag : "## AFM Logs: ",
					mCurrentDate : '',
					onSuccess : function(data) {
						mLogTrackerArray = [];
					},
					onFailure : function(data) {
						var msg = (new Date()).getTime() + "|" + AFMLogger.loggingIndication + "|logger screen| looger-error-callback|" + JSON.stringify(data);
						mLogTrackerArray.push([msg, AFMLogger.fatal]);
					},
					log : function(msg, debugLevel, prop) {
						module.mCurrentDate = new Date();						
						if (debugLevel === undefined) {
							//log is locally or its simple traces							
						} else {
							// log the messages to backend
							prop = module.validateLogProperties(prop)
							msg = (new Date()).getTime() + "|" + AFMLogger.loggingIndication + "|" + prop.filename + "|" + prop.methodname + "|" + msg;
							mLogTrackerArray.push([msg, debugLevel]);			
							switch(AFMLogger.debugFrequency) {
								case 1:
									//submit only latest
									if (AFMLogger.enableLogs == "ALL" || AFMLogger.enableLogs == debugLevel) {
										var obj = mLogTrackerArray[mLogTrackerArray.length - 1];
										gAppInstace.sendRequest('trace', [obj], module.onSuccess.bind(module), module.onFailure.bind(module));
									}
									break;
								case 0:
									if (prop.commit) {
										//submit all logs up till now
										gAppInstace.sendRequest('trace', mLogTrackerArray, module.onSuccess.bind(module), module.onFailure.bind(module));
									}
									break;
								default:
									//dont send to native
									console.log(msg);
									break;
							}
						}
					},

					roundUp : function(num, dec) {
						return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
					},
					validateLogProperties : function(prop) {
						prop.filename = (prop.filename === undefined) ? "no_file_name" : prop.filename;
						prop.methodname = (prop.methodname === undefined) ? "no_mthd_name" : prop.methodname;
						prop.commit = (prop.commit === undefined) ? false : true;
						return prop;
					}
				};

				return module;

			}());

		// expose the object globally as a past of the namespace
		window.Logger = Logger;

	}(window));

window.onerror = function(message, url, lineNo) {
	message = message + " URL:" + url + " LineNo." + lineNo;
	Logger.log(" Error:" + message, AFMLogger.fatal, {
		filename : url,
		methodname : 'window.onerror'
	});
}
