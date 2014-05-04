/*
 * This class with contain the following #1 - communication with phonegap
 * plugins #2 - different events of phonegap
 */
AFM.PhoneGapLayer = function(mParent) {
	this.mDeviceReady = false;
	this.mWrapper = mParent;
	this.mRequestTracker = {};

	this.setUp();
}

AFM.PhoneGapLayer.prototype = {

	setUp : function() {
		document.addEventListener("deviceready", this._onPhonegapReady.bind(this), true);

	},
	_onPhonegapReady : function() {
		this.mDeviceReady = true;
		document.addEventListener("menubutton", this._onMenuButtonClicked.bind(this), true);
		document.addEventListener("backbutton", this._onBackButtonClicked.bind(this), true);
	},
	_onBackButtonClicked : function(evt) {
		// sending the events to wrapper
		this.mWrapper._onBackButtonClicked(evt);
	},
	_onMenuButtonClicked : function(evt) {
		// sending the events to wrapper
		this.mWrapper._onMenuButtonClicked(evt);
	},
	/**
	 * onLoginSuccess class will be called when the login API return successfully
	 * @class onLoginSuccess
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onLoginSuccess : function(data) {
		Logger.log("Phonegap layer to login response from backend: [" + JSON.stringify(data) + "]", AFMLogger.debug, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onLoginSuccess',
			commit :true
		});
		this.mRequestTracker['login'].success({
			success : (data === "true") ? true : false
		});
		
		//call to help screen
		this.sendRequest('trigger_help', {});	
	},
	
	
	onHelpSuccess:function(data)
	{
		//alert(" HELP SUCCESS RCVD ");
		this.mWrapper.showHelpScreen();
	},
	onHelpFailure : function(data) {
		alert(" HELP FAILURE RCVD ");
	},
	
	/**
	 * onLoginFailure class will be called when the login API return unsuccessfully
	 * @class onLoginFailure
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onLoginFailure : function(data) {
		Logger.log("onLogin Failure: [" + JSON.stringify(data) + "]", AFMLogger.error, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onLoginFailure',
			commit :true
		});
		$("#processing_wait_overlay").hide();
	},
	/**
	 * onPendingSuccess class will be called when the pending job API return successfully
	 * @class onPendingSuccess
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onPendingSuccess : function(data) {
		Logger.log("Phonegap layer to pending job response from backend: [" + JSON.stringify(data) + "]", AFMLogger.debug, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onPendingSuccess',
			commit :true
		});
		this.mWrapper.sessiondata.setPendingJobs(data);
		this.mRequestTracker['pendingJobs'].success(data);
	},
	/**
	 * onPendingFailure class will be called when the pending job API return unsuccessfully
	 * @class onPendingFailure
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onPendingFailure : function(data) {
		Logger.log("onPending Failure: [" + JSON.stringify(data) + "]", AFMLogger.error, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onPendingFailure',
			commit :true
		});
		$("#processing_wait_overlay").hide();
	},
	/**
	 * onSearchSuccess class will be called when the search job id API return successfully
	 * @class onSearchSuccess
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onSearchSuccess : function(data) {
		Logger.log("Phonegap layer to search response from backend: [" + JSON.stringify(data) + "]", AFMLogger.debug, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onSearchSuccess',
			commit :true
		});
		this.mRequestTracker['search'].success(data);
	},
	/**
	 * onSearchFailure class will be called when the search job id API return unsuccessfully
	 * @class onSearchFailure
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onSearchFailure : function(data) {
		Logger.log("onSearch Failure: [" + JSON.stringify(data) + "]", AFMLogger.error, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onSearchFailure',
			commit :true
		});
		$("#processing_wait_overlay").hide();
	},
	/**
	 * onJobDetailSuccess class will be called when the job detail API return successfully
	 * @class onJobDetailSuccess
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onJobDetailSuccess : function(data) {
		Logger.log("Phonegap layer to job detail response from backend: [" + JSON.stringify(data) + "]", AFMLogger.debug, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onJobDetailSuccess',
			commit :true
		});
		this.mRequestTracker['jobCardSummary'].success(data);
	},
	/**
	 * onJobDetailFailure class will be called when the job detail API return unsuccessfully
	 * @class onJobDetailFailure
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onJobDetailFailure : function(data) {
		Logger.log("onJobDetail Failure: [" + JSON.stringify(data) + "]", AFMLogger.error, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onJobDetailFailure',
			commit :true
		});
		$("#processing_wait_overlay").hide();
	},
	
	onSavedOrderSuccess  : function(data) {
		Logger.log("Phonegap layer to question list response from backend : [" + JSON.stringify(data) + "]", AFMLogger.debug, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onSavedOrderSuccess',
			commit :true
		});
		var mQuestionScreenData = [];
		var mTempSections = {};
		var mSectionIdTrackers = [];
		var mandatoryQuestionArray = [];
		data = convertTheData(data);
		/*var mDataImproper = false;
		for (var i = 0; i < data.length; i++) {
			data[i] = (data[i]);
			var questionObject = {};
			var nSectionIndex = mSectionIdTrackers.indexOf(data[i].section_id);
			if (nSectionIndex === -1) {
				// new section
				mSectionIdTrackers.push(data[i].section_id)
				mTempSections[data[i].section_id] = {};
				mTempSections[data[i].section_id].id = data[i].section_id;
				mTempSections[data[i].section_id].label = data[i].section_desc;
				mTempSections[data[i].section_id].questionSet = [];
			}

			questionObject.section_id = data[i].section_id;
			questionObject.content = data[i].quest_desc;
			questionObject.question_id = data[i].quest_id;
			questionObject.question_type = String(data[i].quest_type).toUpperCase();
			questionObject.comment = (data[i].comment !== undefined) ? data[i].comment : '';
			questionObject.answer = (data[i].user_answer !== undefined) ? data[i].user_answer : '';
			questionObject.imgArr = (data[i].question_image_files !== undefined) ? data[i].question_image_files : [];
			questionObject.default = data[i].default;

			if (questionObject.question_type === "OPTIONLIST" && data[i].ques_value.length !== 0) {
				questionObject.question_data = [];
				//logic for sequencing
				if (data[i].ques_sequence !== undefined) {
					var arrSequenceValue = data[i].ques_sequence.slice();
					data[i].ques_sequence.sort();
					for (var qValue = 0; qValue < data[i].ques_sequence.length; qValue++) {
						var nSequenceIndex = arrSequenceValue.indexOf(data[i].ques_sequence[qValue])
						questionObject.question_data[qValue] = data[i].ques_value[nSequenceIndex];

					}
				}
			} else {
				questionObject.question_data = ['< 2mm', '2-4mm', '>4mm'];
			}
			questionObject.mandatory = String(data[i].mandatory).toLowerCase();

			if (questionObject.mandatory === "x") {
				mandatoryQuestionArray.push(questionObject.section_id + "_" + questionObject.question_id);
			}

			questionObject.question_type = this.processQuestionType(questionObject.question_type);
			mTempSections[data[i].section_id].questionSet.push(questionObject);
		}

		// populate the final object with sections and question
		for (var i = 0; i < mSectionIdTrackers.length; i++) {
			mQuestionScreenData.push(mTempSections[mSectionIdTrackers[i]]);
		}
		*/
		var obj = this.mWrapper.sessiondata.updatePendingJobFromSavedOrder(this.mRequestTracker['savedOrderData'].id, mQuestionScreenData, mandatoryQuestionArray,data)
		this.mRequestTracker['savedOrderData'].success(obj.screen_data, obj.mandatory_question);
	},
	onQuestionListForPendingJob  : function(data) {
		Logger.log("Phonegap layer to question list response from backend : [" + JSON.stringify(data) + "]", AFMLogger.debug, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onQuestionListForPendingJob',
			commit :true
		});
		var mQuestionScreenData = [];
		var mTempSections = {};
		var mSectionIdTrackers = [];
		var mandatoryQuestionArray = [];
		data = convertTheData(data);
		var mDataImproper = false;
		for (var i = 0; i < data.length; i++) {
			data[i] = (data[i]);
			var questionObject = {};
			var nSectionIndex = mSectionIdTrackers.indexOf(data[i].section_id);
			if (nSectionIndex === -1) {
				// new section
				mSectionIdTrackers.push(data[i].section_id)
				mTempSections[data[i].section_id] = {};
				mTempSections[data[i].section_id].id = data[i].section_id;
				mTempSections[data[i].section_id].label = data[i].section_desc;
				mTempSections[data[i].section_id].questionSet = [];
			}

			questionObject.section_id = data[i].section_id;
			questionObject.content = data[i].quest_desc;
			questionObject.question_id = data[i].quest_id;
			questionObject.question_type = String(data[i].quest_type).toUpperCase();
			questionObject.comment = (data[i].comment !== undefined) ? data[i].comment : '';
			questionObject.answer = (data[i].user_answer !== undefined) ? data[i].user_answer : '';
			questionObject.imgArr = (data[i].question_image_files !== undefined) ? data[i].question_image_files : [];
			questionObject.default = data[i].default;

			if (questionObject.question_type === "OPTIONLIST" && data[i].ques_value.length !== 0) {
				questionObject.question_data = [];
				//logic for sequencing
				if (data[i].ques_sequence !== undefined) {
					var arrSequenceValue = data[i].ques_sequence.slice();
					data[i].ques_sequence.sort();
					for (var qValue = 0; qValue < data[i].ques_sequence.length; qValue++) {
						var nSequenceIndex = arrSequenceValue.indexOf(data[i].ques_sequence[qValue])
						questionObject.question_data[qValue] = data[i].ques_value[nSequenceIndex];

					}
				}
			} else {
				questionObject.question_data = ['< 2mm', '2-4mm', '>4mm'];
			}
			questionObject.mandatory = String(data[i].mandatory).toLowerCase();

			if (questionObject.mandatory === "x") {
				mandatoryQuestionArray.push(questionObject.section_id + "_" + questionObject.question_id);
			}

			questionObject.question_type = this.processQuestionType(questionObject.question_type);
			mTempSections[data[i].section_id].questionSet.push(questionObject);
		}

		// populate the final object with sections and question
		for (var i = 0; i < mSectionIdTrackers.length; i++) {
			mQuestionScreenData.push(mTempSections[mSectionIdTrackers[i]]);
		}
		
		this.mWrapper.sessiondata.setDefaultQuestionList(mQuestionScreenData.slice(0), mandatoryQuestionArray.slice(0))
		
		//this.mRequestTracker['questionList'].success(mQuestionScreenData, mandatoryQuestionArray);
		// make call to quesitonList
		var objRequest = {};
		objRequest.className = "VHCPlugin";
		objRequest.cmdName = 'savedOrderData';
		objRequest.arguments = [this.mRequestTracker['questionList'].id];
		this.mRequestTracker[objRequest.cmdName] = {};
		this.mRequestTracker[objRequest.cmdName].success = this.mRequestTracker['questionList'].success;
		this.mRequestTracker[objRequest.cmdName].fail = this.mRequestTracker['questionList'].fail;
		this.mRequestTracker[objRequest.cmdName].id = this.mRequestTracker['questionList'].id
		//this.onSavedOrderSuccess([[["0301085330","10","1003","1",[],""],["0301085330","10","1004","1",[],""],["0301085330","10","1006","1",[],""]]])
		this.triggerNativeMethodCallback(objRequest, this.onSavedOrderSuccess.bind(this), this.onQuestionListFailure.bind(this));
		
	},
	
	/**
	 * onQuestionListSuccess class will be called when the question list API return successfully
	 * @class onQuestionListSuccess
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onQuestionListSuccess : function(data) {
		Logger.log("Phonegap layer to question list response from backend : [" + JSON.stringify(data) + "]", AFMLogger.debug, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onQuestionListSuccess',
			commit :true
		});
		var mQuestionScreenData = [];
		var mTempSections = {};
		var mSectionIdTrackers = [];
		var mandatoryQuestionArray = [];
		data = convertTheData(data);
		var mDataImproper = false;
		for (var i = 0; i < data.length; i++) {
			data[i] = (data[i]);
			var questionObject = {};
			var nSectionIndex = mSectionIdTrackers.indexOf(data[i].section_id);
			if (nSectionIndex === -1) {
				// new section
				mSectionIdTrackers.push(data[i].section_id)
				mTempSections[data[i].section_id] = {};
				mTempSections[data[i].section_id].id = data[i].section_id;
				mTempSections[data[i].section_id].label = data[i].section_desc;
				mTempSections[data[i].section_id].questionSet = [];
			}

			questionObject.section_id = data[i].section_id;
			questionObject.content = data[i].quest_desc;
			questionObject.question_id = data[i].quest_id;
			questionObject.question_type = String(data[i].quest_type).toUpperCase();
			questionObject.comment = (data[i].comment !== undefined) ? data[i].comment : '';
			questionObject.answer = (data[i].user_answer !== undefined) ? data[i].user_answer : '';
			questionObject.imgArr = (data[i].question_image_files !== undefined) ? data[i].question_image_files : [];
			questionObject.default = data[i].default;

			if (questionObject.question_type === "OPTIONLIST" && data[i].ques_value.length !== 0) {
				questionObject.question_data = [];
				//logic for sequencing
				if (data[i].ques_sequence !== undefined) {
					var arrSequenceValue = data[i].ques_sequence.slice();
					data[i].ques_sequence.sort();
					for (var qValue = 0; qValue < data[i].ques_sequence.length; qValue++) {
						var nSequenceIndex = arrSequenceValue.indexOf(data[i].ques_sequence[qValue])
						questionObject.question_data[qValue] = data[i].ques_value[nSequenceIndex];

					}
				}
			} else {
				questionObject.question_data = ['< 2mm', '2-4mm', '>4mm'];
			}
			questionObject.mandatory = String(data[i].mandatory).toLowerCase();

			if (questionObject.mandatory === "x") {
				mandatoryQuestionArray.push(questionObject.section_id + "_" + questionObject.question_id);
			}

			questionObject.question_type = this.processQuestionType(questionObject.question_type);
			mTempSections[data[i].section_id].questionSet.push(questionObject);
		}

		// populate the final object with sections and question
		for (var i = 0; i < mSectionIdTrackers.length; i++) {
			mQuestionScreenData.push(mTempSections[mSectionIdTrackers[i]]);
		}
		
		this.mWrapper.sessiondata.setDefaultQuestionList(mQuestionScreenData.slice(0), mandatoryQuestionArray.slice(0))
		this.mRequestTracker['questionList'].success(mQuestionScreenData, mandatoryQuestionArray);
	},
	/**
	 * processQuestionType class is used to check the question type and map with appropriate value
	 * @class processQuestionType
	 * @param [sType]
	 *            This param contains question type
	 */
	processQuestionType : function(sType) {
		var sReturn = 'CHECKBOX';
		switch(sType) {
			case 'DATE':
			case 'TIME':
				sReturn = 'DATETIME';
				break;
			case 'RADIO':
			case 'RADIOBUTTON':
				sReturn = 'RADIOBUTTON';
				break;
			case 'OPTIONLIST':
				sReturn = 'OPTIONLIST';
				break;
			case 'FREETEXT':
				sReturn = 'FREETEXT';
				break;
			case 'CHECKBOX':
				sReturn = 'CHECKBOX';
				break;
		}
		return sReturn;
	},
	/**
	 * onQuestionListFailure class will be called when the question list API return unsuccessfully
	 * @class onQuestionListFailure
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onQuestionListFailure : function(data) {
		Logger.log("onQuestionList Failure: [" + JSON.stringify(data) + "]", AFMLogger.error, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onQuestionListFailure',
			commit :true
		});
		$("#processing_wait_overlay").hide();
	},
	/**
	 * onSaveAndExitSuccess class will be called when the save exit question API return successfully
	 * @class onSaveAndExitSuccess
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onSaveAndExitSuccess : function(data) {
		Logger.log("Phonegap layer to saveexit question list response from backend: [" + JSON.stringify(data) + "]", AFMLogger.debug, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onSaveAndExitSuccess',
			commit :true
		});
		
		// adding up new jobcard to pending jobs list
		this.mWrapper.sessiondata.updatePendingJob(this.mRequestTracker['saveAndExit'].id,this.mRequestTracker['saveAndExit'].content);
		this.mRequestTracker['saveAndExit'].success(data);
	},
	/**
	 * onSaveAndExitFailure class will be called when the save exit question API return             * unsuccessfully
	 * @class onSaveAndExitFailure
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onSaveAndExitFailure : function(data) {
		Logger.log("onSaveAndExit Failure: [" + JSON.stringify(data) + "]", AFMLogger.error, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onSaveAndExitFailure',
			commit :true
		});
		$("#processing_wait_overlay").hide();

	},
	/**
	 * onSubmitSuccess class will be called when the submit question API return successfully
	 * @class onSubmitSuccess
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onSubmitSuccess : function(data) {
		Logger.log("Phonegap layer to submit question list response from backend: [" + JSON.stringify(data) + "]", AFMLogger.debug, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onSubmitSuccess',
			commit :true
		});
		this.mRequestTracker['submit'].success(data);
	},
	/**
	 * onSubmitFailure class will be called when the submit question API return unsuccessfully
	 * @class onSubmitFailure
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onSubmitFailure : function(data) {
		Logger.log("onSubmit Failure: [" + JSON.stringify(data) + "]", AFMLogger.error, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onSubmitFailure',
			commit :true
		});
		$("#processing_wait_overlay").hide();
	},
	/**
	 * onAppExitSuccess class will be called when the exit app API return successfully
	 * @class onAppExitSuccess
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onAppExitSuccess : function(data) {		
		Logger.log("Phonegap layer to appExit response from backend: [" + JSON.stringify(data) + "]", AFMLogger.debug, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onAppExitSuccess',
			commit :true
		});
		this.mRequestTracker['appExit'].success({
			wait : (data === "true") ? true : false
		});
	},
	/**
	 * onAppExitFailure class will be called when the exit app API return unsuccessfully
	 * @class onAppExitFailure
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onAppExitFailure : function(data) {
		Logger.log("onAppExit Failure: [" + JSON.stringify(data) + "]", AFMLogger.error, {
			filename : 'PhoneGapLayer.js',
			methodname : 'onAppExitFailure',
			commit :true
		});
		this.mRequestTracker['appExit'].fail({
			wait : (data === "true") ? true : false
		});
		$("#processing_wait_overlay").hide();
	},
	/**
	 * sendRequest class is used to call the different API based on there requestId and also send   * data to backene
	 * @class sendRequest
	 * @param [requestId]
	 *            This param contains request id to call the API
	 * @param [data={}]
	 *            This object contains data for the API
	 * @param [onSuccess]
	 *            This is a callback success method
	 * @param [onFailure]
	 *            This is a callback failure method
	 */
	sendRequest : function(requestId, data, onSuccess, onFailure) {		
		if (this.mDeviceReady) {
			// communication with plugin layer
			var objRequest = {};
			objRequest.className = "VHCPlugin";

			switch (requestId) {
			case 'trigger_help':
				objRequest.cmdName = 'help';
				objRequest.arguments = [];
				this.mRequestTracker[objRequest.cmdName] = {};
				
				this.triggerNativeMethodCallback(objRequest, this.onHelpSuccess.bind(this), this.onHelpFailure.bind(this));
				break;
				case 'login_request':
					objRequest.cmdName = 'login';
					objRequest.arguments = [data.uname, data.passwd];
					this.mRequestTracker[objRequest.cmdName] = {};
					this.mRequestTracker[objRequest.cmdName].success = onSuccess;
					this.mRequestTracker[objRequest.cmdName].fail = onFailure;
					this.triggerNativeMethodCallback(objRequest, this.onLoginSuccess.bind(this), this.onLoginFailure.bind(this));
					break;
				case 'pending_jobs':
					objRequest.cmdName = 'pendingJobs';
					objRequest.arguments = [];
					this.mRequestTracker[objRequest.cmdName] = {};
					this.mRequestTracker[objRequest.cmdName].success = onSuccess;
					this.mRequestTracker[objRequest.cmdName].fail = onFailure;
					this.triggerNativeMethodCallback(objRequest, this.onPendingSuccess.bind(this), this.onPendingFailure.bind(this));
					break;
				case 'search_result':
					objRequest.cmdName = 'search';
					objRequest.arguments = [data.serviceOrderId];
					this.mRequestTracker[objRequest.cmdName] = {};
					this.mRequestTracker[objRequest.cmdName].success = onSuccess;
					this.mRequestTracker[objRequest.cmdName].fail = onFailure;
					this.triggerNativeMethodCallback(objRequest, this.onSearchSuccess.bind(this), this.onSearchFailure.bind(this));
					break;
				case 'single_job':
					
					onSuccess(this.mWrapper.sessiondata.getJobCardSummary(data.serviceOrderId));
					/* JS LAYER IS HAVING THE DATA, SO FETCHING IT FROM SESSION
					objRequest.cmdName = 'jobCardSummary';
					objRequest.arguments = [data.serviceOrderId];
					this.mRequestTracker[objRequest.cmdName] = {};
					this.mRequestTracker[objRequest.cmdName].success = onSuccess;
					this.mRequestTracker[objRequest.cmdName].fail = onFailure;
					this.triggerNativeMethodCallback(objRequest, this.onJobDetailSuccess.bind(this), this.onJobDetailFailure.bind(this));
					*/
					break;
				case 'job_card_section_and_question':
					//add the check
					console.log("##  checking conditions"); 
					if(this.mWrapper.sessiondata.isJobPending(data.serviceOrderId))
					{
						// is from pending list
						console.log("##  Job is from Pending List");
						if(this.mWrapper.sessiondata.pendingJobQuestionAvailable(data.serviceOrderId))
						{
							console.log("##  Job[Pending List] in same session");
							// is the question set available in same session
							var mD = this.mWrapper.sessiondata.getPendingJobQuestionList(data.serviceOrderId);
							onSuccess(mD.screen_data, mD.mandatory_question);
							
						}
						else
						{ 
							// AS PER DISCUSSION --  THERE HAS TO CALL TO QUESTIONLIST FIRST
							if(this.mWrapper.sessiondata.isDefaultQuestionSetAvailable())
							{
								console.log("##  Job[Pending List]  not in same session");
								// we make a call to actually call the saved data
								objRequest.cmdName = 'savedOrderData';
								objRequest.arguments = [data.serviceOrderId];
								this.mRequestTracker[objRequest.cmdName] = {};
								this.mRequestTracker[objRequest.cmdName].success = onSuccess;
								this.mRequestTracker[objRequest.cmdName].fail = onFailure;
								this.mRequestTracker[objRequest.cmdName].id = data.serviceOrderId
								//this.onSavedOrderSuccess([[["0301085330","10","1003","1",[],""],["0301085330","10","1004","1",[],""],["0301085330","10","1006","1",[],""]]]
								this.triggerNativeMethodCallback(objRequest, this.onSavedOrderSuccess.bind(this), this.onQuestionListFailure.bind(this));
							}
							else
								{
									//demand a new question set
									objRequest.cmdName = 'questionList';
									objRequest.arguments = [data.serviceOrderId];
									this.mRequestTracker[objRequest.cmdName] = {};
									this.mRequestTracker[objRequest.cmdName].success = onSuccess;
									this.mRequestTracker[objRequest.cmdName].fail = onFailure;
									this.mRequestTracker[objRequest.cmdName].id = data.serviceOrderId
									
									this.triggerNativeMethodCallback(objRequest, this.onQuestionListForPendingJob.bind(this), this.onQuestionListFailure.bind(this));
								}
						}
					}
					else
					{
						console.log("##  Job[Not from Pending List] ");
						//fresh questionlist
						if(this.mWrapper.sessiondata.isDefaultQuestionSetAvailable())
						{
							// use default question set
							console.log("##  Job[Not from Pending List] We have default Question Set ");
							var d = this.mWrapper.sessiondata.getDefaultQuestionSet();
							onSuccess(d.screen_data, d.mandatory_question);
						}
						else
						{
							console.log("##  Job[Not from Pending List] We do not have default Question Set. So fetch it from Server ");
							//demand a new question set
							objRequest.cmdName = 'questionList';
							objRequest.arguments = [data.serviceOrderId];
							this.mRequestTracker[objRequest.cmdName] = {};
							this.mRequestTracker[objRequest.cmdName].success = onSuccess;
							this.mRequestTracker[objRequest.cmdName].fail = onFailure;
							this.triggerNativeMethodCallback(objRequest, this.onQuestionListSuccess.bind(this), this.onQuestionListFailure.bind(this));
						}
					}
					
					break;
				case 'save_and_exit':
					objRequest.cmdName = 'saveAndExit';
					if (data.content.length == 0)
						data.content = [[data.serviceOrderId, "", "", "", [], ""]];

					objRequest.arguments = data.content;
					
					this.mRequestTracker[objRequest.cmdName] = {};
					this.mRequestTracker[objRequest.cmdName].success = onSuccess;
					this.mRequestTracker[objRequest.cmdName].fail = onFailure;
					this.mRequestTracker['saveAndExit'].content = data.content;
					this.mRequestTracker['saveAndExit'].id = data.serviceOrderId;
					
					
					this.triggerNativeMethodCallback(objRequest, this.onSaveAndExitSuccess.bind(this), this.onSaveAndExitFailure.bind(this));
					break;
				case 'submit':
					objRequest.cmdName = 'submit';
					objRequest.arguments = data.content;
					this.mRequestTracker[objRequest.cmdName] = {};
					this.mRequestTracker[objRequest.cmdName].success = onSuccess;
					this.mRequestTracker[objRequest.cmdName].fail = onFailure;
					this.triggerNativeMethodCallback(objRequest, this.onSubmitSuccess.bind(this), this.onSubmitFailure.bind(this));

					break;
				case 'appExit':
					objRequest.cmdName = 'appExit';
					objRequest.arguments = [];
					this.mRequestTracker[objRequest.cmdName] = {};
					this.mRequestTracker[objRequest.cmdName].success = onSuccess;
					this.mRequestTracker[objRequest.cmdName].fail = onFailure;
					this.triggerNativeMethodCallback(objRequest, this.onAppExitSuccess.bind(this), this.onAppExitFailure.bind(this));
					break;
				case 'trace':				
					objRequest.cmdName = 'supLog';
					objRequest.arguments = data;
					this.mRequestTracker[objRequest.cmdName] = {};
					this.mRequestTracker[objRequest.cmdName].success = onSuccess;
					this.mRequestTracker[objRequest.cmdName].fail = onFailure;
					AFM.AppConfiguration.previousTime = new Date();
					this.triggerNativeMethodCallback(objRequest, this.onLogSuccess.bind(this), this.onLogFailure.bind(this));
					
				break;	
			}
		} else {
			alert(' DEVICE NOT READY ');
		}
	},
	
	 
	onLogSuccess : function(data) {
		this.mRequestTracker['supLog'].success(data);
	},
	/**
	 * onSearchFailure class will be called when the search job id API return unsuccessfully
	 * @class onSearchFailure
	 * @param [data={}]
	 *            This object contains data for the API
	 */
	onLogFailure : function(data) {
		this.mRequestTracker['supLog'].fail(data);
	},
	/**
	 * triggerNativeMethodCallback class is used to call the API throught the native layer
	 * @class triggerNativeMethodCallback
	 * @param [objRequest={}]
	 *            This object contains data for the API
	 * @param [onSuccess]
	 *            This is a callback success method
	 * @param [onFailure]
	 *            This is a callback failure method
	 */
	triggerNativeMethodCallback : function(objRequest, onSuccess, onFailure) {
		try {
			Logger.log("Native Plugin Call: [" + JSON.stringify(objRequest) + "]", AFMLogger.debug, {
				filename : 'PhoneGapLayer.js',
				methodname : 'triggerNativeMethodCallback'
			});

			cordova.exec(onSuccess, onFailure, objRequest.className, objRequest.cmdName, objRequest.arguments);
		} 
		catch (e) {
			alert(' exception : ' + e);
		}
	},
	/**
	 * isDeviceReady class is used to check the device status
	 * @class isDeviceReady
	 */
	isDeviceReady : function() {
		return this.mDeviceReady
	}
}
