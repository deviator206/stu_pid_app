/*
 global AFM
 */
AFM.AppScreen = function(mParent) {
	this.pageID = "PageFive";
	this.wrapperComponent = mParent;
	this.mCurrentSelected = -1;
	this.cameraCurrentLocation = "";

	this.mScreenData = {};
	this.mJobCardId = '';
	this.mMandatoryQuestionData = '';
	this.mAppData = {};
	this.element = null;
	this.rotation = 0;
	this.panelCount = 0;
	this.totalPanelCount = 0;
	this.theta = 0;
	this.isHorizontal = true;
	this.transformProp = "WebkitTransform";
	this.limelightIndex = 0;
	this.totalObjectCount = 0;
	this.totalRequriedObject = 0;
	this.initialCarouselLoadingComplete = false;
	this.totalMandatoryCount = 0;
	this.imageScrollerObj = null;

	// required for storing up latest displayed question container
	this.sListId = "";
	this.bottomPanelList = '';
	this.mandatoryQuestion = [];
	this.bHorizontalScrollerEnabled = false;
	this.mMiddleElement = '';
	this.mFilterQuestionsMiddleElem = '';
	this.bDefaultThemeApplied = false;

	this.setUp();
	this.scrollObj = {};
	this.footerDisplay = '';

	// submit the answer to backend-we would require ARRAY of
	// objects{orderNumber,sectionID,questionID,result}
	this.arrSubmitToBackend = [];
	this.arrAvoidReplica = [];
}

AFM.AppScreen.prototype = {
	setUp : function() {
	},
	init : function(data) {
		if (this.mJobCardId !== undefined) {
			this.mJobCardId = data.serviceOrderId;
		}
		if (this.mAppData != undefined) {
			this.mAppData = data.appData;
		}
		if (this.mMandatoryQuestionData != undefined) {
			this.mMandatoryQuestionData = data.mandatoryQuestionData
		}
	},
	PageBeforeShow : function() {
		this.reset();
		this.isAnimationOfQuestionContainerComplete = true;
		this.createUIElements(this.mAppData, this.mMandatoryQuestionData);
		$('#attention, #caution, #ok').removeClass('selected-btn');
		$('#job-card-id').text(this.mJobCardId);
		
		if (this.wrapperComponent.mQuestionRestriction) {

			$("#question_container_1_wrapper").css('z-Index', '2');
			$("#question_container_2_wrapper").css('z-Index', '1');
			$("#question_container_3_wrapper").css('z-Index', '0');
		} 
		else {
			$("#question_container_1_wrapper").css({
				'z-Index' : '2',
				'overflow' : 'hidden',
				'overflow-y' : 'scroll'
			});
			$("#question_container_2_wrapper").css({
				'z-Index' : '1',
				'overflow' : 'hidden',
				'overflow-y' : 'scroll'
			});
			$("#question_container_3_wrapper").css({
				'z-Index' : '0',
				'overflow' : 'hidden',
				'overflow-y' : 'scroll'
			});
		}		
	},
	PageShow : function() {
		Logger.log("appScreen PageShow", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'PageShow'
		});
		if (this.wrapperComponent.mPopUpAction != 'goBackOk') {
			this.wrapperComponent.mPopUpAction = "true";
		}
	},
	PageHide : function() {
		this.initialCarouselLoadingComplete = false;
		this.RemoveEventListener();
	},
	AddEventListener : function() {
		$('#hide_footer').hammer().on('swipe', this.clickHandler.bind(this));
		$('#show_footer').hammer().on('swipe', this.clickHandler.bind(this));
		$('#attention').hammer().bind('click', this.clickHandler.bind(this));
		$('#caution').hammer().bind('click', this.clickHandler.bind(this));
		$('#mandatory').hammer().bind('click', this.clickHandler.bind(this));
		$('#ok').hammer().bind('click', this.clickHandler.bind(this));
		$('#submit_btn').hammer().bind('click', this.clickHandler.bind(this));
		$('#popup_ok').hammer().bind('click', this.popUpOkAction.bind(this));
		$('#save_exit_btn').hammer().bind('click', this.clickHandler.bind(this));
		$('#carousel').hammer().on('webkitTransitionEnd', this.loadAndAnimateQuestion.bind(this));
		$('#question_wapper_container').on('webkitTransitionEnd', this.pageTransitionComplete.bind(this));
		$("#close-img-lightbox-btn").on('click', function() {
			$("#image_gallery_popup").popup('close');
		});
		$(".job-name-btn").on('click', function() {
			AppUtility.showHelp({
				arrData : AFM.AppConfiguration.getHelpScreenData('questionaryScreen'),
				moduleName : 'questionaryScreen'
			});
		});
	},
	RemoveEventListener : function() {
		$('#hide_footer').off();
		$('#show_footer').off();
		$('.access-camera').off();
		$('.section_holder').unbind();
		$('#attention').unbind();
		$('#caution').unbind();
		$('#ok').unbind();
		$('#popup_ok').unbind();
		$('#carousel').off();
		$('#save_exit_btn').unbind();
		$('#submit_btn').unbind();
		$('.HorizontalScroller').off();
		$("#close-img-lightbox-btn").off();
		$('#question_wapper_container').off();
		$('.option1').off();
		$('.option2').off();
		$('.option3').off();
		$('.HorizontalScroller').off();
		$('.searchOption1').off();
		$('.searchOption2').off();
		$('.searchOption3').off();
		$('#mandatory').off();
		$('.comment-submit-radio').off();
		$('.comment-submit-option').off();
		$('.comment-submit-checkbox').off();
		$('.HorizontalScrollerSearch').off();
		$('.checklist-toggle-switch-search').off();
		$('.textfield-bg-search').off();
		$(".job-name-btn").off();
	},
	/**
	 * showErrorPopup class is used to show the error popup
	 * @class showErrorPopup
	 * @param [msg] this param is used to get the message for popup
	 * @param [text] this param is used to get the runtime text for popup
	 * @param [cmd] this param is used to get the command for which we need to show the popup
	 *
	 */
	showErrorPopup : function(msg, text, cmd) {
		$("#processing_wait_overlay").show();
		if (cmd === "getJobCardDetail") {
			this.wrapperComponent.mPopUpAction = 'goBackOk';
		} else if (cmd === "submit" || cmd === "saveAdExit") {
			this.wrapperComponent.mPopUpAction = 'errorSubmitiing';
		}
		$('#popup_alert').show();
		$('.pop-up-job-id-text').text(text);
		$('.pop-up-text-msg').text(msg);
		this.openPopUp();
	},
	/**
	 * clickHandler class will receive currentTarget id of the event and perform
	 * the different tasks.
	 * @class clickHandler
	 * @param [event={}]
	 *            {Object} The object whose properties will be rendered to get
	 *            event details.
	 */
	clickHandler : function(event) {
		var that = this;
		$('.overlapping-footer').on('webkitTransitionEnd', function() {
			if (that.footerDisplay == 'hide' || that.footerDisplay == '') {
				$('.overlapping-footer').hide();
				$('.show-footer-btn').show();
			}
		});
		switch (event.currentTarget.id) {
			case 'section_holder':
				Logger.log("Clicked on side section", AFMLogger.trace, {
					filename : 'AppScreen.js',
					methodname : 'clickHandler'
				});
				if (this.mCurrentSelected != event.currentTarget.id) {
					this.mCurrentSelected = event.currentTarget.id;
					this.loadQuestion(this.mCurrentSelected);
				}
				break;
			case 'show_footer':
				$('.overlapping-footer').show();
				$('.show-footer-btn').hide();
				setTimeout(function() {
					$('.overlapping-footer').css('-webkit-transform', 'translateX(0%)');
				}, 0);
				this.footerDisplay = 'show';
				break;
			case 'hide_footer':
				$('.overlapping-footer').css('-webkit-transform', 'translateX(85%)');
				this.footerDisplay = 'hide';
				break;
			case 'attention':
				Logger.log("Clicked on attention button bottom bar for filtering", AFMLogger.trace, {
					filename : 'AppScreen.js',
					methodname : 'clickHandler'
				});
				if (this.isAnimationOfQuestionContainerComplete) {
					this.wrapperComponent.showProcessingOverlay();
					setTimeout(function() {
						that.removeSelection('caution', 'ok', 'mandatory');	
						if($('#attention').hasClass('selected-btn')){
							$('#attention_selected').removeClass('attention-selected');
						}
						else{
							$('#attention_selected').addClass('attention-selected');
						}
						$('#attention').toggleClass('selected-btn');
						that.filterQuestions($('#attention').hasClass('selected-btn'), 1);
					}, 300);
				}
				break;
			case 'caution':
				Logger.log("Clicked on caution button of bottom bar for filtering", AFMLogger.trace, {
					filename : 'AppScreen.js',
					methodname : 'clickHandler'
				});
				if (this.isAnimationOfQuestionContainerComplete) {
					this.wrapperComponent.showProcessingOverlay();
					setTimeout(function() {
						that.removeSelection('attention', 'ok', 'mandatory');
						if($('#caution').hasClass('selected-btn')){
							$('#caution_selected').removeClass('caution-selected');
						}
						else{
							$('#caution_selected').addClass('caution-selected');
						}
						$('#caution').toggleClass('selected-btn');
						that.filterQuestions($('#caution').hasClass('selected-btn'), 2);
					}, 300);
				}
				break;
			case 'ok':
				Logger.log("Clicked on ok button of bottom bar for filtering", AFMLogger.trace, {
					filename : 'AppScreen.js',
					methodname : 'clickHandler'
				});
				if (this.isAnimationOfQuestionContainerComplete) {
					this.wrapperComponent.showProcessingOverlay();
					setTimeout(function() {
						that.removeSelection('attention', 'caution', 'mandatory');
						if($('#ok').hasClass('selected-btn')){
							$('#ok_selected').removeClass('ok-selected');
						}
						else{
							$('#ok_selected').addClass('ok-selected');
						}
						$('#ok').toggleClass('selected-btn');
						that.filterQuestions($('#ok').hasClass('selected-btn'), 3);
					}, 500);
				}
				break;
			case 'mandatory':
				Logger.log("Clicked on mandatory button of bottom bar for filtering", AFMLogger.trace, {
					filename : 'AppScreen.js',
					methodname : 'clickHandler'
				});
				if (this.isAnimationOfQuestionContainerComplete) {
					this.wrapperComponent.showProcessingOverlay();
					setTimeout(function() {
						that.removeSelection('attention', 'caution', 'ok');
						if($('#mandatory').hasClass('selected-btn')){
							$('#mandatory_selected').removeClass('mandatory-selected');
						}
						else{
							$('#mandatory_selected').addClass('mandatory-selected');
						}
						$('#mandatory').toggleClass('selected-btn');
						that.filterQuestions($('#mandatory').hasClass('selected-btn'), 4);
					}, 500);
				}
				break;
			case 'submit_btn':
				Logger.log("Clicked on submit button", AFMLogger.trace, {
					filename : 'AppScreen.js',
					methodname : 'clickHandler'
				});
				$('.pop-up-job-id').text(this.mJobCardId);
				var that = this;
				if (this.mandatoryQuestion.length === 0) {
					$("#confirm_yes_btn").off();
					$("#confirm_no_btn").off();
					$("#confirm-message-text").html("Do You Really Want to Submit.");
					$("#confirmation_popup").show();
					$("#confirmation_popup").popup({
						history : false
					});
					$("#confirmation_popup").popup("open", {
						transition : "none"
					});

					this.wrapperComponent.mPopUpAction = "confirmationPopupCancel"
					$("#confirm_yes_btn").on('click', function() {
						that.wrapperComponent.mPopUpAction = 'submitOk';
						$("#confirmation_popup").popup('close');
						$("#confirmation_popup").hide();
						that.wrapperComponent.showProcessingOverlay();
						Logger.log("Sending data to phonegap layer", AFMLogger.trace, {
							filename : 'AppScreen.js',
							methodname : 'clickHandler'
						});
						setTimeout(function() {
							that.wrapperComponent.sendRequest('submit', {
								serviceOrderId : that.mJobCardId,
								content : that.arrSubmitToBackend
							}, that.submittedData.bind(that), that.showErrorPopup.bind(that, "Please try after some time. ", "Error in submitting data ", "submit"));
						}, 300);
					});

					$("#confirm_no_btn").on('click', function() {
						that.wrapperComponent.mPopUpAction = 'true';
						$("#confirmation_popup").popup('close');
						$("#confirmation_popup").hide();
					});
				} else {
					$('#popup_alert').show();
					$('.pop-up-job-id-text').text('');
					$('.pop-up-job-id').text('');
					$('.pop-up-text-msg').text('Please select the mandatory question.');
					this.wrapperComponent.mPopUpAction = 'mandatoryQuestionOk';
					this.openPopUp();
				}
				break;
			case 'save_exit_btn':
				Logger.log("Clicked on SaveExit button", AFMLogger.trace, {
					filename : 'AppScreen.js',
					methodname : 'clickHandler'
				});
				this.wrapperComponent.showProcessingOverlay();
				$('#popup_alert').show();
				$('.pop-up-job-id').text(this.mJobCardId);
				this.wrapperComponent.mPopUpAction = 'saveExitOk';
				$('.pop-up-job-id-text').text('Job ID');
				$('.pop-up-text-msg').text('Has been saved successfully.');
				setTimeout(function() {
					that.confirmSaveData();
				}, 300);
				break;
		}
	},
	/**
	 * backButtonPressed class is used to show the popup when device back button pressed
	 * @class backButtonPressed
	 */
	backButtonPressed : function() {
		this.popUpOkAction(true);
	},
	/**
	 * openPopUp class is used to open the popup
	 * @class openPopUp
	 */
	openPopUp : function() {
		$('#popup_alert').popup({
			history : false
		});
		$('#popup_alert').popup('open', {
			transition : 'none'
		});
	},
	/**
	 * popUpOkAction class is called when the ok button of the popup is clicked and perform the *different action on that basis
	 * @class popUpOkAction
	 * @param [bCheck] this parameter is used to check whether device back button is pressed or not
	 */
	popUpOkAction : function(bCheck) {
		Logger.log("Clicked on popup ok button", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'popUpOkAction'
		});
		if (bCheck != true) {
			switch(this.wrapperComponent.mPopUpAction) {
				case 'submitOk':
				case 'saveExitOk':
					$('#popup_alert').hide();
					$('#popup_alert').popup('close');
					this.wrapperComponent.showProcessingOverlay();
					this.navigateToSearch();
					break;
				case 'goBackOk':
					this.wrapperComponent.showProcessingOverlay();
					this.wrapperComponent.goToPreviousPage();
					break;
				case 'errorSubmitiing':
					this.wrapperComponent.hideProcessingOverlay();
					break;
				case 'confirmationPopupCancel':
					$("#confirmation_popup").popup('close');
					$("#confirmation_popup").hide();
					break;
				case 'mandatoryQuestionOk':
					this.wrapperComponent.hideProcessingOverlay();
					$('#popup_alert').hide();
					$('#popup_alert').popup('close');
					break;
			}
		} else {
			switch(this.wrapperComponent.mPopUpAction) {
				case "true":
				case "submitOk":
				case "saveExitOk":
					$('#popup_alert').hide();
					$('#popup_alert').popup('close');
					this.navigateToSearch();
					break;
				case "mandatoryQuestionOk":
					this.wrapperComponent.hideProcessingOverlay();
					$('#popup_alert').hide();
					$('#popup_alert').popup('close');
					break;
				case "goBackOk":
					this.wrapperComponent.showProcessingOverlay();
					this.wrapperComponent.goToPreviousPage();
					break;
				case "errorSubmitiing":
					this.wrapperComponent.hideProcessingOverlay();
					break
				case "confirmationPopupCancel":
					$("#confirmation_popup").popup('close');
					$("#confirmation_popup").hide();
					break;
				case "commentPopUp":
					$("#comment_popup").hide();
					break;
				case "dateTimePopup":
					$("#date_time_popup").popup("close");
					break;
			}
			this.mPopUpAction = 'true';
		}
		this.wrapperComponent.mPopUpAction = "true";
	},

	/**
	 * loadAndAnimateQuestion class will load and animate the question after the
	 * rotation of gear is stopped
	 *
	 * @class loadAndAnimateQuestion
	 */
	loadAndAnimateQuestion : function(event) {
		if (this.initialCarouselLoadingComplete && event.originalEvent.propertyName == '-webkit-transform') {
			this.isAnimationOfQuestionContainerComplete = false;
			this.loadQuestion(this.mCurrentSelected);
			$('#img_' + this.limelightIndex).find(".face").addClass("light-shadow");
		}
	},
	/**
	 * submittedData class will submit the data to server
	 *
	 * @class submittedData
	 */
	submittedData : function() {		
		this.wrapperComponent.mPopUpAction = 'submitOk';
		$('#popup_alert').show();
		$('.pop-up-job-id-text').text('Job ID');
		$('.pop-up-text-msg').text('Has been submitted successfully.');
		this.openPopUp();
	},
	/**
	 * saveData class will save the data in localStorage
	 *
	 * @class saveData
	 */
	confirmSaveData : function() {
		Logger.log("Calling phonegap layer for to save data", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'popUpOkAction'
		});
		var that = this;
		setTimeout(function() {
			that.wrapperComponent.sendRequest('save_and_exit', {
				serviceOrderId : that.mJobCardId,
				content : that.arrSubmitToBackend
			}, that.saveAndNavigate.bind(that), that.showErrorPopup.bind(that, "Please try after some time. ", "Error in save and exit data ", "saveAdExit"));
		}, 600);
	},
	/**
	 * submitAndNavigate class will navigate to the other screen
	 *
	 * @class submitAndNavigate
	 */
	saveAndNavigate : function() {
		this.wrapperComponent.hideProcessingOverlay();
		this.openPopUp();
		this.wrapperComponent.mPopUpAction = 'saveExitOk';
	},
	/**
	 * navigateToSearch class will navigate to the search screen
	 *
	 * @class navigateToSearch
	 */
	navigateToSearch : function() {
		this.wrapperComponent.showProcessingOverlay();
		this.wrapperComponent.navigateToPage({
			rule : 'loadData'
		}, "page_two", 'slide', true, false);
	},
	/**
	 * removeOptionSelection class will receive three params and remove the
	 * selection of the quetion.
	 *
	 * @class removeOptionSelection
	 * @param [parentId={}]
	 *            parent Id of the question
	 * @param [id1={}]
	 *            one of the option id of question
	 * @param [id2={}]
	 *            one of the option id of question
	 */
	removeOptionSelection : function(parentId, id1, id2) {
		if ($('#' + parentId + " ." + id1).hasClass('selected-btn')) {
			$('#' + parentId + " ." + id1).removeClass('selected-btn')
		}
		if ($('#' + parentId + " ." + id2).hasClass('selected-btn')) {
			$('#' + parentId + " ." + id2).removeClass('selected-btn')
		}
	},
	/**
	 * removeSelection class will receive three params and remove the selection
	 * of bottom bar.
	 *
	 * @class removeSelection
	 * @param [id1={}]
	 *            attention id of bottom bar
	 * @param [id2={}]
	 *            caution id of bottom bar
	 * @param [id3={}]
	 *            ok id of bottom bar
	 */
	removeSelection : function(id1, id2, id3, id4) {
		Logger.log("Removing bottom bar button selection", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'removeSelection'
		});
		if ($('#' + id1).hasClass('selected-btn')) {
			$('#' + id1).removeClass('selected-btn');		
			$('#' + id1+'_selected').removeClass(id1+'-selected');			
		}
		else{
			$('#' + id1+'_selected').removeClass(id1+'-selected');
		}
		if ($('#' + id2).hasClass('selected-btn')) {
			$('#' + id2).removeClass('selected-btn');		
			$('#' + id2+'_selected').removeClass(id2+'-selected');			
		}
		else{
			$('#' + id2+'_selected').removeClass(id2+'-selected');
		}
		if ($('#' + id3).hasClass('selected-btn')) {
			$('#' + id3).removeClass('selected-btn');	
			$('#' + id3+'_selected').removeClass(id3+'-selected');			
		}
		else{
			$('#' + id3+'_selected').removeClass(id3+'-selected');
		}
		if ($('#' + id4).hasClass('selected-btn')) {
			$('#' + id4).removeClass('selected-btn');
			$('#' + id4+'_selected').removeClass(id4+'-selected');
		}
		else{
			$('#' + id4+'_selected').removeClass(id4+'-selected');
		}
	},
	/**
	 * loadQuestion class will take the section id and call the questionLoaded
	 * class
	 *
	 * @class loadQuestion
	 * @param [sectionId={}]
	 *            id of section
	 */
	loadQuestion : function(sectionId) {
		this.questionLoaded(this.mScreenData[sectionId]);
	},
	/**
	 * questionLoaded class will receive the set of quetsion in data object and
	 * load into the screen.
	 *
	 * @class questionLoaded
	 * @param [data={}]
	 *            This object contains list of question set for the setion
	 */
	questionLoaded : function(data) {
		Logger.log("Loading the question list", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'Start Method: questionLoaded'
		});
		/**
		 * #1 populate the content #2 add to main content - container #3 Add
		 * event listener #4 make is visible and start animating
		 */
		if (data.length <= 0) {
			alert(' NO DATA RETURNED FOR QUESTIONS');
			return false;
		}
		this.mMiddleElement ='';
		var sListId = 'question_container_1';

		if (this.bottomPanelList === '') {
			if (this.sListId === 'question_container_1_wrapper') {
				sListId = 'question_container_2'
			} else if (this.sListId === 'question_container_2_wrapper') {
				sListId = 'question_container_1'
			}
		} else {
			var mListID = (this.bottomPanelList).split('_wrapper')[0];

			if (mListID === 'question_container_2') {
				sListId = 'question_container_1'
			} else if (mListID === 'question_container_1') {
				sListId = 'question_container_2'
			}
			this.bottomPanelList = '';
		}
		document.getElementById(sListId).style.display = "none";
		$('#' + sListId).empty();
		var sHTMLContent = '';
		var displayMandatoryStar = "";
		var addMandatoryImage ='<img src="css/images/common/questionare/icn_mandatory.png">'
		for (var i = 0; i < data.length; i++) {
			displayMandatoryStar = "";
			if (data[i].mandatory !== "x") {
				displayMandatoryStar = "hideMandatoryStar";
			}
			
			// extra value added to img_data for 0th index
			var img_data = new Array({
				src : '',
				display : 'none'
			}, {
				src : '',
				display : 'none'
			}, {
				src : '',
				display : 'none'
			}, {
				src : '',
				display : 'none'
			});
			var mTempClass = new Array(0, "", "", "");

			var mMarginLeft = 0;
			var camera_display = 'hidden';
			var selectedYes = '';
			var selectedNo = '';
			var scrollerElem = "";
			var slideValue = 0;
			var imageCount = 1;
			if (data[i].imgArr != undefined) {
				// image instance
				for (var imgIndex = 0; imgIndex < data[i].imgArr.length; imgIndex++) {
					img_data[imgIndex + 1] = {}
					img_data[imgIndex + 1].src = AFM.AppConfiguration.sdCardPath + "" + this.mJobCardId + "_" + data[i].section_id + "_" + data[i].question_id + "_" + (imgIndex + 1) + ".jpg";
					img_data[imgIndex + 1].display = 'block';
				}
				imageCount = data[i].imgArr.length + 1;
			}

			switch(data[i].question_type) {
				case "RADIOBUTTON":
					mTempClass[Number(data[i].answer)] = 'option' + Number(data[i].answer) + '-selected selected-btn';
					mTempClass[0] = Number(data[i].answer);
					camera_display = 'visible';
					if (data[i].answer == 3) {
						camera_display = 'hidden';
					}
					sHTMLContent += this.wrapperComponent.mHTMLTemplate.renderTemplate('question-single-row-structure-1', {
						mandatory : displayMandatoryStar,
						mandatory_image_exist:(displayMandatoryStar==="" && !this.wrapperComponent.mQuestionRestriction)? addMandatoryImage:"",
						question_index : i + 1,
						id : data[i].question_id,
						id_for_highlight : data[i].question_id,
						question_content : data[i].content,
						s1_id : data[i].question_id,
						s2_id : data[i].question_id,
						s3_id : data[i].question_id,
						add_img_src_1 : img_data[1].src,
						add_img_src_2 : img_data[2].src,
						add_img_src_3 : img_data[3].src,
						visiual_layout1 : img_data[1].display,
						visiual_layout2 : img_data[2].display,
						visiual_layout3 : img_data[3].display,
						selected_on_of1 : mTempClass[1],
						selected_on_of2 : mTempClass[2],
						selected_on_of3 : mTempClass[3],
						comment_img : (data[i].comment != undefined && data[i].comment != "") ? 'comment-filled-img' : 'comment-img',
						answer_option : 'answer-option' + mTempClass[0],
						display_status_of_camera : camera_display,
						image_count : imageCount
					});
					break;
				case "OPTIONLIST":
					if (data[i].sliding_status !== undefined) {
						mMarginLeft = data[i].sliding_status * 360 * -1;
						slideValue = data[i].sliding_status;
					}
					scrollerElem = "";
					for ( j = 0; j < data[i].question_data.length; j++) {
						scrollerElem += " <div class = 'snapElems'>" + data[i].question_data[j] + "</div>";
					}
					sHTMLContent += this.wrapperComponent.mHTMLTemplate.renderTemplate('question-single-row-structure-2', {
						mandatory : displayMandatoryStar,
						mandatory_image_exist:(displayMandatoryStar==="" && !this.wrapperComponent.mQuestionRestriction)? addMandatoryImage:"",
						question_index : i + 1,
						id : data[i].question_id,
						id_for_highlight : data[i].question_id,
						question_content : data[i].content,
						s1_id : data[i].question_id,
						s2_id : data[i].question_id,
						s3_id : data[i].question_id,
						slide_value : slideValue,
						scroller_elem : scrollerElem,
						add_img_src_1 : img_data[1].src,
						add_img_src_2 : img_data[2].src,
						add_img_src_3 : img_data[3].src,
						visiual_layout1 : img_data[1].display,
						visiual_layout2 : img_data[2].display,
						visiual_layout3 : img_data[3].display,
						comment_img : (data[i].comment != undefined && data[i].comment != "") ? 'comment-filled-img' : 'comment-img',
						answer_option : 'answer-option' + mTempClass[0],
						shifting_left : mMarginLeft,
						display_status_of_camera : 'visible',
						image_count : imageCount
					});
					break;
				case "CHECKBOX":
					if (data[i].answer == "Yes") {
						selectedYes = "selected";
					} else {
						selectedNo = "selected";
					}

					sHTMLContent += this.wrapperComponent.mHTMLTemplate.renderTemplate('question-single-row-structure-3', {
						mandatory : displayMandatoryStar,
						mandatory_image_exist:(displayMandatoryStar==="" && !this.wrapperComponent.mQuestionRestriction)? addMandatoryImage:"",
						question_index : i + 1,
						id : data[i].question_id,
						id_for_highlight : data[i].question_id,
						question_content : data[i].content,
						s1_id : data[i].question_id,
						s2_id : data[i].question_id,
						s3_id : data[i].question_id,
						add_img_src_1 : img_data[1].src,
						add_img_src_2 : img_data[2].src,
						add_img_src_3 : img_data[3].src,
						visiual_layout1 : img_data[1].display,
						visiual_layout2 : img_data[2].display,
						visiual_layout3 : img_data[3].display,
						radio_option_val_1 : 'Yes',
						radio_option_val_2 : 'No',
						slider_no : data[i].question_id,
						toggle_switch_index : data[i].question_id,
						selected_yes : selectedYes,
						selected_no : selectedNo,
						comment_img : (data[i].comment != undefined && data[i].comment != "") ? 'comment-filled-img' : 'comment-img',
						answer_option : 'answer-option' + mTempClass[0],
						display_status_of_camera : 'visible',
						image_count : imageCount
					});
					break;
				case "FREETEXT":
					sHTMLContent += this.wrapperComponent.mHTMLTemplate.renderTemplate('question-single-row-structure-4', {
						mandatory : displayMandatoryStar,
						mandatory_image_exist:(displayMandatoryStar==="" && !this.wrapperComponent.mQuestionRestriction)? addMandatoryImage:"",
						question_index : i + 1,
						id : data[i].question_id,
						id_for_highlight : data[i].question_id,
						s1_id : data[i].question_id,
						s2_id : data[i].question_id,
						s3_id : data[i].question_id,
						add_img_src_1 : img_data[1].src,
						add_img_src_2 : img_data[2].src,
						add_img_src_3 : img_data[3].src,
						visiual_layout1 : img_data[1].display,
						visiual_layout2 : img_data[2].display,
						visiual_layout3 : img_data[3].display,
						question_content : data[i].content,
						input_no : data[i].question_id,
						input_value : (data[i].answer != undefined) ? data[i].answer : '',
						answer_option : 'answer-option' + mTempClass[0],
						display_status_of_camera : 'visible',
						image_count : imageCount
					});
					break;
				case "DATETIME":
					sHTMLContent += this.wrapperComponent.mHTMLTemplate.renderTemplate('question-single-row-structure-5', {
						mandatory : displayMandatoryStar,
						mandatory_image_exist:(displayMandatoryStar==="" && !this.wrapperComponent.mQuestionRestriction)? addMandatoryImage:"",
						question_index : i + 1,
						id : data[i].question_id,
						id_for_highlight : data[i].question_id,
						question_content : data[i].content,
						s1_id : data[i].question_id,
						s2_id : data[i].question_id,
						s3_id : data[i].question_id,
						add_img_src_1 : img_data[1].src,
						add_img_src_2 : img_data[2].src,
						add_img_src_3 : img_data[3].src,
						visiual_layout1 : img_data[1].display,
						visiual_layout2 : img_data[2].display,
						visiual_layout3 : img_data[3].display,
						date_time_picker_no : data[i].question_id,
						date_time_value : (data[i].answer != undefined) ? data[i].answer : '',
						comment_img : (data[i].comment != undefined && data[i].comment != "") ? 'comment-filled-img' : 'comment-img',
						answer_option : 'answer-option' + mTempClass[0],
						display_status_of_camera : 'visible',
						image_count : imageCount
					});
					break;
			}
		}
		var dummyElem = "<li class = 'question-layout no-background'></li>";
		sHTMLContent = dummyElem + sHTMLContent + dummyElem;
		dummyElem = null;
		$('#' + sListId).html(sHTMLContent);
		$('.checklist-toggle-switch').slider();
		$('.checklist-toggle-switch').bind("change", this.onToggleSwitchChange.bind(this, false));
		$('.textfield-bg').on('blur', this.onBlurForInput.bind(this, false));
		$('.snapElems').addClass("change-color-snap-element");
		for (var i = 0; i < data.length; i++) {
			if (data[i].question_type == 'DATETIME') {
				this.hookupDateTimePicker($("#" + sListId + " #date_time_picker_" + data[i].question_id), data[i].question_id, this.mCurrentSelected, i, false);
			}
		}
		var that = this;
		$('.comment-submit').on('tap', function(evt) {
			if (that.wrapperComponent.mQuestionRestriction) {
				if (that.mMiddleElement === evt.currentTarget.parentNode.parentNode.parentNode.parentNode.id) {
					that.displayCommentPopup(evt);
				}
			} else {
				that.displayCommentPopup(evt);
			}
		});
		$('.access-camera').on('tap', function(evt) {
			var mParent = evt.currentTarget.parentNode.parentNode.parentNode.parentNode;
			var key;
			if (that.wrapperComponent.mQuestionRestriction) {
				if (that.mMiddleElement === mParent.id) {
					key = that.mCurrentSelected;
					that.callCamera(evt, mParent, key, false);
				}
			} else {
				key = that.mCurrentSelected;
				that.callCamera(evt, mParent, key, false);
			}
		});

		$('.option1').on('tap', function(evt) {
			evt.preventDefault();
			evt.stopImmediatePropagation();
			if (that.wrapperComponent.mQuestionRestriction) {
				if (that.mMiddleElement === evt.currentTarget.parentNode.parentNode.id) {
					that.selectAnswerOne(evt);
				}
			} else {
				that.selectAnswerOne(evt);
			}
		});

		$('.option2').on('tap', function(evt) {
			evt.preventDefault();
			evt.stopImmediatePropagation();
			if (that.wrapperComponent.mQuestionRestriction) {
				if (that.mMiddleElement === evt.currentTarget.parentNode.parentNode.id) {
					that.selectAnswerTwo(evt);
				}
			} else {
				that.selectAnswerTwo(evt);
			}
		});
		$('.option3').on('tap', function(evt) {
			evt.preventDefault();
			evt.stopImmediatePropagation();
			if (that.wrapperComponent.mQuestionRestriction) {
				if (that.mMiddleElement === evt.currentTarget.parentNode.parentNode.id) {
					that.selectAnswerThree(evt);
				}
			} else {
				that.selectAnswerThree(evt);
			}
		});

		$('.HorizontalScroller').on('swipeleft', function(event) {
			if (that.wrapperComponent.mQuestionRestriction) {
				if (that.mMiddleElement === event.currentTarget.parentNode.parentNode.parentNode.id) {
					that.animateScrollLeft(event);
				}
			} else {
				that.animateScrollLeft(event);
			}
		});
		$('.HorizontalScroller').on('swiperight', function(event) {
			if (that.wrapperComponent.mQuestionRestriction) {
				if (that.mMiddleElement === event.currentTarget.parentNode.parentNode.parentNode.id) {
					that.animateScrollRight(event);
				}
			} else {
				that.animateScrollRight(event);
			}
		});
		$('.HorizontalScroller').on('webkitTransitionEnd', function() {
			that.bHorizontalScrollerEnabled = false;
			$('.snapElems').addClass("change-color-snap-element");
		});

		setTimeout(this.isAllElemAdded.bind(this, i, sListId, data), 50);
		Logger.log("Loading the question list", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'End Method: questionLoaded'
		});
	},

	/**
	 * displayCommentPopup class opens the popup to read/write/delete the comment for questions
	 * @class displayCommentPopup
	 * @param [event={}]
	 *            This object contains events about the handler
	 */
	displayCommentPopup : function(event) {
		Logger.log("Displaying popup for comment", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'displayCommentPopup'
		});
		$('.ui-comment-popup-layout').css('display', 'block');
		$('#image_gallery_popup').css('display', 'none');
		$("#comment_popup").show();
		$("#popup_close").off();
		$("#popup_save").off();
		$("#popup_delete").off();
		this.wrapperComponent.mPopUpAction = 'commentPopUp';
		var index = event.currentTarget.parentNode.parentNode.parentNode.parentNode.id;
		var elem = event.currentTarget;
		if (this.mScreenData.hasOwnProperty(this.mCurrentSelected)) {
			var questionSet = this.mScreenData[this.mCurrentSelected];
			var nTemp = parseInt($("#" + index).attr('data-questionindex')) - 1;
			if (questionSet[nTemp].comment == undefined) {
				$("#comment").val("");
			} else {
				$("#comment").val("" + questionSet[nTemp].comment);
			}
		}
		$("#popup_close").on('click', function() {
			$('#image_gallery_popup').css('display', 'none');
			$("#comment_popup").hide();
		});
		var that = this;
		var text_value = "";
		$("#popup_save").on('click', function() {
			text_value = $("#comment").val();
			if (text_value != "") {
				$(elem).removeClass('comment-img');
				$(elem).addClass('comment-filled-img');
			} else {
				$(elem).addClass('comment-img');
				$(elem).removeClass('comment-filled-img');
			}
			var nTemp = parseInt($("#" + index).attr('data-questionindex')) - 1;
			that.updateQuestionSet({
				key : that.mCurrentSelected,
				index : nTemp,
				action : 'submit_comment',
				value : text_value
			});
			$("#comment_popup").hide();

		});
		$("#popup_delete").on('click', function() {
			$("#comment").val("");
			text_value = "";
			$(elem).removeClass('comment-filled-img');
			$(elem).addClass('comment-img');
			var nTemp = parseInt($("#" + index).attr('data-questionindex')) - 1;
			that.updateQuestionSet({
				key : that.mCurrentSelected,
				index : nTemp,
				action : 'submit_comment',
				value : text_value
			});
		});
	},

	doMiddleElementCheck : function(parentElem) {
		var useMiddleElement = false;
		if (this.wrapperComponent.mQuestionRestriction) {
			if (this.mFilterQuestionsMiddleElem === parentElem) {
				useMiddleElement = true;
			}
		} else {
			useMiddleElement = true;
		}

		return useMiddleElement;
	},
	/**
	 * displayCommentSearchPopup class opens the popup to read/write/delete the comment for questions
	 * @class displayCommentSearchPopup
	 * @param [type={}] this is used to get the type of the question
	 * @param [event={}]
	 *            This object contains events about the handler
	 */
	displayCommentSearchPopup : function(type, event) {
		this.wrapperComponent.mPopUpAction = 'commentPopUp';
		var parentElem, dataElem, index, key, questionId, elem, questionSet, nTemp;
		parentElem = event.currentTarget.parentNode.parentNode.parentNode.parentNode;

		if (this.doMiddleElementCheck(parentElem.id)) {
			$("#popup_close").off();
			$("#popup_save").off();
			$("#popup_delete").off();
			$('#image_gallery_popup').css('display', 'none');
			$("#comment_popup").show();

			if (type === "radio") {
				dataElem = $(parentElem).find(".save_answer");
				key = dataElem[0].getAttribute('data-key');
				index = dataElem[0].getAttribute('data-index');
				questionId = dataElem[0].getAttribute('data-questionId');
				dataElem = null;
			} else if (type === "option") {
				key = parentElem.getAttribute('data-key');
				index = parentElem.getAttribute('data-index');
				questionId = parentElem.getAttribute('data-questionId');
			} else if (type === "checkbox") {
				dataElem = $(parentElem).find(".checklist-toggle-switch-search");
				key = dataElem[0].getAttribute('data-key');
				index = dataElem[0].getAttribute('data-questionIndex');
				questionId = dataElem[0].getAttribute('data-questionId');
				dataElem = null;
			} else if (type === "datetime") {
				key = parentElem.getAttribute('data-key');
				index = parentElem.getAttribute('data-question-index');
				questionId = parentElem.getAttribute('data-questionId');
			}
			parentElem = null;
			elem = event.currentTarget;
			questionSet = this.mScreenData[key];
			nTemp = Number(index);
			if (questionSet[nTemp].comment == undefined) {
				$("#comment").val("");
			} else {
				$("#comment").val("" + questionSet[nTemp].comment);
			}

			$("#popup_close").on('click', function() {
				$("#comment_popup").hide();
			});
			var that = this;
			var text_value = "";
			$("#popup_save").on('click', function() {
				text_value = $("#comment").val();
				if (text_value != "") {
					$(elem).removeClass('comment-img');
					$(elem).addClass('comment-filled-img');
				} else {
					$(elem).addClass('comment-img');
					$(elem).removeClass('comment-filled-img');
				}
				if (key === that.mCurrentSelected) {
					if (text_value != "") {
						$("#" + questionId + " .comment-submit").removeClass('comment-img');
						$("#" + questionId + " .comment-submit").addClass('comment-filled-img');
					} else {
						$("#" + questionId + " .comment-submit").addClass('comment-img');
						$("#" + questionId + " .comment-submit").removeClass('comment-filled-img');
					}
				}
				that.updateQuestionSet({
					comment : text_value,
					index : index,
					key : key,
					questionId : questionId
				}, true);
				$("#comment_popup").hide();
			});
			$("#popup_delete").on('click', function() {
				$("#comment").val("");
				text_value = "";
				$(elem).removeClass('comment-filled-img');
				$(elem).addClass('comment-img');
				that.updateQuestionSet({
					comment : text_value,
					index : index,
					key : key,
					questionId : questionId
				}, true);
			});
		}
	},
	/**
	 * onBlurForInput class will update the question set comment and called on the blur event of    * comment box
	 * @class onBlurForInput
	 * @param [isearch={}] this param contains true/ false value
	 * @param [event={}]
	 *            This object contains events about the handler
	 */
	onBlurForInput : function(isearch, event) {
		var text_value = $(event.currentTarget).val();
		var elem, parentElem, index, key;
		if (isearch) {
			parentElem = event.currentTarget.parentNode.parentNode.id;
			elem = document.getElementById(parentElem).getAttribute("data-questionId");
			key = document.getElementById(parentElem).getAttribute("data-key");
			if (key == this.mCurrentSelected) {
				$("#" + elem + " .textfield-bg").val(text_value + "");
			}
			index = document.getElementById(parentElem).getAttribute("data-question-index");
		} else {
			key = this.mCurrentSelected;
			elem = event.currentTarget.parentNode.parentNode.id;
			index = parseInt($("#" + elem).attr('data-questionindex')) - 1;
		}
		this.updateQuestionSet({
			key : key,
			index : index,
			action : 'submit_datetime_input_radio',
			value : text_value
		});
	},
	/**
	 * onToggleSwitchChange class will update the question set when toggle button is changed
	 * @class onToggleSwitchChange
	 * @param [isearch={}] this param contains true/ false value
	 * @param [event={}]
	 *            This object contains events about the handler
	 */
	onToggleSwitchChange : function(isSearch, event) {
		var toggleElem = event.currentTarget;
		var toggleElemParent = event.currentTarget.parentNode.parentNode.parentNode;
		var toggleSwitchValue = $(toggleElem).val();
		var index = toggleElemParent.getAttribute('data-questionindex');
		index = parseInt(index) - 1;
		if (isSearch) {
			var key = toggleElem.getAttribute("data-key");
			if (this.mCurrentSelected == key) {
				var questionId = toggleElem.getAttribute("data-questionId");
				$("#" + questionId + " .checklist-toggle-switch").val('' + toggleSwitchValue).slider('refresh');
			}
		} else {
			var key = this.mCurrentSelected;
		}
		this.updateQuestionSet({
			key : key,
			index : index,
			action : 'submit_datetime_input_radio',
			value : toggleSwitchValue
		});
	},
	/**
	 * onDatePickerValueChanged class will update the question set when datepicker value is changed
	 * @class onToggleSwitchChange
	 * @param [isearch={}] this param contains index of the question set
	 * @param [textDate={}]
	 *            This object contains current datepikcer value
	 */
	onDatePickerValueChanged : function(index, textDate) {
		var index = parseInt($("#" + index).attr('data-questionindex')) - 1;
		this.updateQuestionSet({
			key : this.mCurrentSelected,
			index : index,
			action : 'submit_datetime_input_radio',
			value : textDate
		});
	},
	/**
	 * hookupDateTimePicker class will open the datepicker popup box
	 * @class hookupDateTimePicker
	 * @param [isearch] this param contains value true/false
	 * @param [questionId] this param contains the questionid
	 * @param [index] this param contains the index of the question
	 * @param [key] this param contains the answer of the question
	 * @param [elem] this contains the dom element of the question
	 */
	hookupDateTimePicker : function(elem, questionId, key, index, isSearch) {
		Logger.log("Displaying popup for datepicker", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'hookupDateTimePicker'
		});
		$(elem).blur();
		var pickerIndex;
		if (isSearch) {
			pickerIndex = key + questionId;
		} else {
			pickerIndex = questionId;
		}
		$(elem).invokeChronos({
			formatSequence : ["mm", "dd", "yyyy", "hrs", "mins", "timeFormat"],
			screenObj : this,
			wrapperID : 'date_time_picker_wrapper',
			popupID : 'date_time_popup',
			tplID : 'date_time_picker_tpl',
			inputElem : elem,
			pickerIndex : index,
			cancelBtnText : 'Cancel',
			setBtnText : 'Set',
			setHeaderText : function() {
				return "Set Date and Time";
			},
			formatInputValue : function(value) {
				var valueStr = value[0] + ", " + value[1] + " " + value[2] + ", " + value[3] + ":" + value[4] + " " + value[5];
				$(elem).val(valueStr);
				this.screenObj.updateQuestionSet({
					key : key,
					index : index,
					action : 'submit_datetime_input_radio',
					value : valueStr
				});
				if (isSearch && key === this.screenObj.mCurrentSelected) {
					$("#date_time_picker_" + questionId).val(valueStr);
				}
			}
		});
	},
	/**
	 * isAllElemAdded class will add the question element in the dom
	 * @class isAllElemAdded
	 * @param [i] this param contains index of the question
	 * @param [sListId] this param contains the questionid
	 * @param [data[]] this contains question data
	 */
	isAllElemAdded : function(i, sListId, data) {
		var elem = document.getElementById(data[i - 1].question_id);
		if (elem !== null) {
			this.animateQuestionContainer.bind(this, sListId, data)();

		} else {
			setTimeout(this.isAllElemAdded.bind(this, i, sListId, data), 50);
		};
	},
	/**
	 * animateQuestionContainer class will add the question element in the dom based on side section
	 * @class animateQuestionContainer
	 * @param [sListId] this param contains the questionid
	 * @param [data[]] this contains question data
	 */
	animateQuestionContainer : function(sListId, data) {
		Logger.log("Loading question set for new section", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'animateQuestionContainer'
		});
		var that = this;
		document.getElementById(sListId).style.display = "block";
		that.animateContent(sListId + "_wrapper");
		if (this.wrapperComponent.mQuestionRestriction) {

			if (that.scrollObj[sListId] == undefined) {

				that.scrollObj[sListId] = new iScroll(sListId + '_content', {
					hScroll : false,
					vScroll : true,
					snap : 'li',
					momentum : false,
					hScrollbar : false,
					vScrollbar : false,
					onScrollMove : function() {
						AFM.AppConfiguration.previousTime = new Date();
						if (!that.bHorizontalScrollerEnabled && !that.bDefaultThemeApplied && this.dirX == 0) {
							that.bDefaultThemeApplied = true;
							that.resetTheHighlight(sListId);
							if ($('#' + that.mMiddleElement + " .textfield-bg").is(":focus")) {
								$('#' + that.mMiddleElement + " .textfield-bg").blur();
							}

							$('#' + that.mMiddleElement).removeClass('question-layout-middle-element');
							$('#' + that.mMiddleElement + ' .mandatory_star_icon').empty();
						}
					},
					onScrollEnd : function() {
						if (!that.bHorizontalScrollerEnabled) {
							var middleElem = Number(this.currPageY) + 1;
							var listLength = $('#' + sListId)[0].children.length;
							var listElemsArr = $('#' + sListId)[0].children;
							var topElemIndex = 0;
							var bottomElemIndex = 0;
							var maxFlowOutIndex = listLength - 2;
							var topElemId = "";
							var bottomElemId = "";
							if (middleElem > maxFlowOutIndex) {
								middleElem = maxFlowOutIndex;
							}
							if (middleElem < 1) {
								middleElem = 1;
							}
							topElemIndex = middleElem - 1;
							bottomElemIndex = middleElem + 1;
							if ($("#"+sListId)[0].children[middleElem] !== undefined && $("#"+sListId)[0].children[middleElem].id !== undefined) {
								that.bDefaultThemeApplied = false;
								that.mMiddleElement = $("#"+sListId)[0].children[middleElem].id;
							}
							if ($("#"+sListId)[0].children[topElemIndex] !== undefined && $("#"+sListId)[0].children[topElemIndex].id !== undefined) {
								topElemId = $("#"+sListId)[0].children[topElemIndex].id;
							}
							if ($("#"+sListId)[0].children[bottomElemIndex] !== undefined && $("#"+sListId)[0].children[bottomElemIndex].id !== undefined) {
								bottomElemId = $("#"+sListId)[0].children[bottomElemIndex].id;
							}
							that.prioritizeQuestionHighlight(that.mMiddleElement, topElemId, bottomElemId, sListId);
						}
					}
				});
			} else {
				that.scrollObj[sListId].refresh();
				that.scrollObj[sListId].scrollToElement('li:nth-child(1)', 0);
			}
			that.mMiddleElement = data[0].question_id;
			if (data[1] !== undefined) {
				that.prioritizeQuestionHighlight(that.mMiddleElement, undefined, data[1].question_id, sListId);
			} else {
				that.prioritizeQuestionHighlight(that.mMiddleElement, undefined, undefined, sListId);
			}
		} else {
			//removing al the overlay used for disabling
			$("#" + sListId + "_wrapper").find(' .toggle-overlay').hide();
		}
		if (document.getElementById("processing_wait_overlay").style.display === "block") {
			this.wrapperComponent.hideProcessingOverlay();
		}
	},
	/**
	 * animateScrollLeft class will receive the event object and perform the
	 * swipe left animation
	 * @class animateScrollLeft
	 * @param [event={}]
	 *            This object contains events related to the object.
	 */
	animateScrollLeft : function(event, isearch) {
		event.preventDefault();
		var parentId = event.currentTarget.parentNode.parentNode.parentNode.id;
		var key, questionId, count, questionSet, nTemp;
		var index = parseInt($("#" + parentId).attr('data-questionindex')) - 1;
		if (isearch) {
			key = document.getElementById(parentId).getAttribute("data-key");
			questionId = document.getElementById(parentId).getAttribute("data-questionid");
			nTemp = document.getElementById(parentId).getAttribute("data-index");
			count = this.getSliderCount(parentId, isearch, key, questionId);
			questionSet = this.mScreenData[key];
		} else {
			count = this.getSliderCount(parentId, false, this.mCurrentSelected, index);
			questionSet = this.mScreenData[this.mCurrentSelected];
			nTemp = index;
			questionId = parentId;
			key = this.mCurrentSelected;
		}
		// decremented by 1 coz array index starts with 0
		if (nTemp !== undefined) {
			noOfElem = questionSet[nTemp].question_data.length - 1;
			if (noOfElem < 0) {
				noOfElem = 0;
			}
		}
		if (count < noOfElem) {
			this.bHorizontalScrollerEnabled = true;
			if (isearch) {
				var scrollElem = $('#' + parentId + ' .HorizontalScrollerSearch');
			} else {
				var scrollElem = $('#' + parentId + ' .HorizontalScroller');
			}
			$('#' + parentId + ' .snapElems').removeClass("change-color-snap-element");
			var marginLeft = parseInt(scrollElem.css('marginLeft'));
			var defaultSwipeWidth = 360;
			marginLeft -= defaultSwipeWidth;
			scrollElem.css('marginLeft', marginLeft + 'px');
			scrollElem.addClass('animateHorizontalScroll');
			count++;
			$('#' + parentId + ' .engine-oil-count').text(count);
			if (isearch && this.mCurrentSelected == key) {
				$('#' + questionId + ' .engine-oil-count').text(count);
				$('#' + questionId + ' .HorizontalScroller').removeClass('animateHorizontalScroll');
				$('#' + questionId + ' .HorizontalScroller').css('marginLeft', marginLeft + 'px');
			}

			this.updateQuestionSet({
				key : key,
				index : index,
				action : 'submit_sliding_status',
				value : count
			});
		}

	},
	/**
	 * animateScrollRight class will receive the event object and perform the
	 * swipe right animation
	 * @class animateScrollRight
	 * @param [event={}]
	 *            This object contains events related to the object.
	 */
	animateScrollRight : function(evt, isearch) {
		evt.preventDefault();
		var parentId = evt.currentTarget.parentNode.parentNode.parentNode.id;
		var key, questionId, count, index;
		index = parseInt($("#" + parentId).attr('data-questionindex')) - 1;
		if (isearch) {
			key = document.getElementById(parentId).getAttribute("data-key");
			questionId = document.getElementById(parentId).getAttribute("data-questionid");
			count = this.getSliderCount(parentId, isearch, key, questionId);
		} else {
			count = this.getSliderCount(parentId, false, this.mCurrentSelected, index);
			questionId = parentId;
			key = this.mCurrentSelected;
		}

		if (count > 0) {
			this.bHorizontalScrollerEnabled = true;

			if (isearch) {
				var scrollElem = $('#' + parentId + ' .HorizontalScrollerSearch');
			} else {
				var scrollElem = $('#' + parentId + ' .HorizontalScroller');
			}
			$('#' + parentId + ' .snapElems').removeClass("change-color-snap-element");
			var marginLeft = parseInt(scrollElem.css('marginLeft'));
			var defaultSwipeWidth = 360;
			marginLeft += defaultSwipeWidth;
			scrollElem.css('marginLeft', marginLeft + 'px');
			scrollElem.addClass('animateHorizontalScroll');
			count--;
			$('#' + parentId + ' .engine-oil-count').text(count);
			if (isearch && this.mCurrentSelected == key) {
				$('#' + questionId + ' .engine-oil-count').text(count);
				$('#' + questionId + ' .HorizontalScroller').removeClass('animateHorizontalScroll');
				$('#' + questionId + ' .HorizontalScroller').css('marginLeft', marginLeft + 'px');
			}

			this.updateQuestionSet({
				key : key,
				index : index,
				action : 'submit_sliding_status',
				value : count
			});
		}
	},
	/**
	 * callCamera class will receive the event object and open the camera of a
	 * device
	 * @class callCamera
	 * @param [event={}]
	 *            This object contains events related to the object.
	 */
	callCamera : function(event, mParent, key, isSearch, questionId) {
		Logger.log("Opening camera to take picture", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'callCamera'
		});
		if (isSearch) {
			this.cameraCurrentLocation = questionId;
		} else {
			this.cameraCurrentLocation = mParent.id;
		}
		if (this.wrapperComponent.isPhoneGapReady()) {
			navigator.camera.getPicture(this.onCameraSuccess.bind(this, key, isSearch), this.cameraError.bind(this), {
				quality : 30,
				destinationType : navigator.camera.DestinationType.FILE_URL,
				targetWidth : -1,
				targetHeight : -1,
				correctOrientation : false
			});
		}
	},
	/**
	 * cameraSuccess class is a callback method of camera and will receive the
	 * image in base64.
	 *
	 * @class cameraSuccess
	 * @param [imageData={}]
	 *            This object contains image in base64 format
	 */
	onCameraSuccess : function(key, isSearch, imageURL) {
		Logger.log("Picture taken successfully", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'onCameraSuccess'
		});
		if (AFM.AppConfiguration.cameraMode === 0) {
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, this.onFileSystemSuccess.bind(this, imageURL, key, isSearch), this.onFileSystemFail.bind(this, 'Get Destination Dir'));
		} else {
			this.DisplayNUpdate(key, isSearch, imageURL, imageURL);
		}
	},
	/**
	 * onFileSystemFail class is a callback method of filesystem and will receive the file system  * error message
	 * @class onFileSystemFail
	 */
	onFileSystemFail : function(caller, error) {
		error = error || '[error]';
		caller = caller || '[caller]';
		alert('Error > ' + caller + " code: " + error.code);
	},
	/**
	 * onFileSystemSuccess class is a callback method of file systent and will receive the callback * success message
	 * @class onFileSystemSuccess
	 * @param [mediaFiles={}]
	 *            This object contains image url
	 * @param [isSearch] this conatins the true/false value
	 * @param [fileSystem={}]
	 *            This object contains destination for the image file
	 */
	onFileSystemSuccess : function(mediaFiles, key, isSearch, fileSystem) {
		var directoryEntry = fileSystem.root;
		directoryEntry.getDirectory("afm_vhc", {
			create : true,
			exclusive : false
		}, this.onDirectorySuccess.bind(this, mediaFiles, key, isSearch), this.onFileSystemFail.bind(this, 'Get onDirectorySuccess Dir'));
	},
	/**
	 * onDirectorySuccess class is a callback method of camera and will receive the
	 * image in base64.
	 *
	 * @class onDirectorySuccess
	 * @param [mediaFiles={}]
	 *            This object contains image url
	 * @param [isSearch] this conatins the true/false value
	 * @param [destination={}]
	 *            This object contains destination for the image file
	 */
	onDirectorySuccess : function(mediaFiles, key, isSearch, destination) {
		// move the file
		Logger.log("Created directory successfully to store images", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'onDirectorySuccess'
		});
		window.resolveLocalFileSystemURI(mediaFiles, this.gotFileEntry.bind(this, destination, key, isSearch), this.onFileSystemFail.bind(this, 'Get Target Image'));
	},
	/**
	 * gotFileEntry class is used to move the image to the destination
	 * @class gotFileEntry
	 * @param [targetImg={}]
	 *            This object contains image url
	 * @param [isSearch] this conatins the true/false value
	 * @param [destination={}]
	 *            This object contains destination for the image file
	 */
	gotFileEntry : function(destination, key, isSearch, targetImg) {
		var imgCount;
		if (isSearch) {
			imgCount = $('#search' + key + this.cameraCurrentLocation + ' .image-count').text();
		} else {
			imgCount = $('#' + this.cameraCurrentLocation + ' .image-count').text();
		}
		if (imgCount == 4) {
			imgCount = 1;
		}
		var name = this.mJobCardId + "_" + key + "_" + this.cameraCurrentLocation + "_" + imgCount + ".jpg";
		targetImg.moveTo(destination, name, this.DisplayNUpdate.bind(this, key, isSearch, name), this.onFileSystemFail.bind(this, 'Move Image'));
	},
	/**
	 * DisplayNUpdate class is used to display the image and update in the backend
	 * @class DisplayNUpdate
	 * @param [imageURL={}]
	 *            This object contains image url
	 * @param [isSearch] this conatins the true/false value
	 * @param [name={}]
	 *            This object contains name of the image file
	 */
	DisplayNUpdate : function(key, isSearch, name, imageURL) {

		
		if (AFM.AppConfiguration.cameraMode === 0) {
			imageURL = imageURL.fullPath;
		}
		var imgCount;
		if (isSearch) {
			imgCount = $('#search' + key + this.cameraCurrentLocation + ' .image-count').text();
			
		} else {
			imgCount = $('#' + this.cameraCurrentLocation + ' .image-count').text();
		}
		if (imgCount == 4) {
			imgCount = 1;
		}

		var sName, index, sNameBack;
		if (isSearch) {
			$('#search' + key + this.cameraCurrentLocation + ' .img' + imgCount).css('display', 'block');
			sName = 'myImage' + imgCount + '_search' + key + this.cameraCurrentLocation;
			index = parseInt($('#search' + key + this.cameraCurrentLocation).attr('data-questionindex')) - 1;
			if (key === this.mCurrentSelected) {
				$('#' + this.cameraCurrentLocation + ' .img' + imgCount).css('display', 'block');
				sNameBack = 'myImage' + imgCount + '_' + this.cameraCurrentLocation;
				document.getElementById(sNameBack).src = imageURL;
			}
		} else {
			$('#' + this.cameraCurrentLocation + ' .img' + imgCount).css('display', 'block');
			sName = 'myImage' + imgCount + '_' + this.cameraCurrentLocation;
			index = parseInt($("#" + this.cameraCurrentLocation).attr('data-questionindex')) - 1;
		}
		
		
		var image = document.getElementById(sName);
		image.src = imageURL;
		this.updateQuestionSet({
			key : key,
			index : index,
			action : 'submit_image',
			value : name,
			imgCnt : imgCount
		});
		
		
		imgCount++;
		
		
		if (isSearch) {
			$('#search' + key + this.cameraCurrentLocation + ' .image-count').text(imgCount);
			if (key === this.mCurrentSelected) {
				$('#' + this.cameraCurrentLocation + ' .image-count').text(imgCount);
			}
		} else {
			$('#' + this.cameraCurrentLocation + ' .image-count').text(imgCount);
		}
		
		$(image).on('click', this.callImageLightBox.bind(this, key, index));
	},
	/**
	 * cameraError class is a error callback for the camera
	 * @class cameraError
	 * @param [message={}]
	 *            This object contains error messgae for the camera
	 */
	cameraError : function(message) {
		Logger.log("Error in opening camera", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'cameraError'
		});
		console.log("Error in camera calling = " + message);
	},
	/**
	 * callImageLightBox class will open the image in popup
	 * @class callImageLightBox
	 * @param [questionIndex={}]
	 *            This object contains qustion index for which we are opening the popup
	 */

	callImageLightBox : function(key, questionIndex) {
		Logger.log("Opening images in popup", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'callImageLightBox'
		});
		$("#close-img-lightbox-btn").show();
		var questionSet = this.mScreenData[key];
		var galleryPopulationArr = questionSet[questionIndex].imgArr;
		var scrollerWidth = 0;
		var imageURL = '';
		var widthMultiplier = 0;
		for (var i = 0; i < galleryPopulationArr.length; i++) {
			if (galleryPopulationArr[i] !== "" && galleryPopulationArr[i] !== undefined) {
				imageURL = galleryPopulationArr[i];
				sHTMLTemplate = this.wrapperComponent.mHTMLTemplate.renderTemplate('image_gallery_images_tpl', {
					popup_id : this.mCurrentSelected,
					img_count : i + 1,
					gallery_image_src : AFM.AppConfiguration.sdCardPath + imageURL
				});
				$("#image_scroller_container").append(sHTMLTemplate);
				widthMultiplier++;
			}
		}
		scrollerWidth = 756 * widthMultiplier;
		$("#image_scroller_container").width(scrollerWidth);
		if (this.imageScrollerObj !== null) {
			this.imageScrollerObj.destroy();
			this.imageScrollerObj = null;
		}
		this.imageScrollerObj = new iScroll('image_gallery_wrapper', {
			hScroll : true,
			vScroll : false,
			snap : true,
			momentum : false,
			bounce : false
		});
		$("#image_gallery_popup").popup({
			history : false
		});
		$("#image_gallery_popup").popup("open", {
			transition : "none"
		});
	},
	/**
	 * selectAnswerOne class will receive the event object and show answer one
	 * is selected and other two delected
	 *
	 * @class selectAnswerOne
	 * @param [event={}]
	 *            This object contains events related to the object.
	 */
	selectAnswerOne : function(event) {
		Logger.log("You selected answer attention", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'selectAnswerOne'
		});
		var parentId = event.currentTarget.parentNode.parentNode.id;
		if ($('#' + parentId + ' .option1').hasClass('selected-btn')) {
			return true;
		}
		this.removeOptionSelection(parentId, 'option2', 'option3');

		$('#' + parentId + ' .save_answer').html('answer-option1')
		$('#' + parentId + ' .option1').addClass('option1-selected selected-btn');
		$('#' + parentId + ' .option2').removeClass('option2-selected selected-btn');
		$('#' + parentId + ' .option3').removeClass('option3-selected selected-btn');
		var index = parseInt($("#" + parentId).attr('data-questionindex')) - 1;
		this.updateQuestionSet({
			key : this.mCurrentSelected,
			index : index,
			action : 'submit_answer',
			value : '1'
		});
		var flag = $('#' + parentId + ' .option1').hasClass('option1-selected selected-btn');

		if (flag) {
			$('#' + parentId + ' .camera-layout').css('visibility', 'visible');
		} else {
			$('#' + parentId + ' .camera-layout').css('visibility', 'hidden');
		}
	},
	/**
	 * selectAnswerTwo class will receive the event object and show answer
	 * second is selected and other two delected
	 *
	 * @class selectAnswerTwo
	 * @param [event={}]
	 *            This object contains events related to the object.
	 */
	selectAnswerTwo : function(event) {
		Logger.log("You selected answer caution", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'selectAnswerTwo'
		});
		var parentId = event.currentTarget.parentNode.parentNode.id;
		if ($('#' + parentId + ' .option2').hasClass('selected-btn')) {
			return true;
		}
		this.removeOptionSelection(parentId, 'option1', 'option3');
		var spanTextElem = $(event.currentTarget).children()[0];
		$('#' + parentId + ' .save_answer').html('answer-option2');
		$('#' + parentId + ' .option2').addClass('option2-selected selected-btn');
		$('#' + parentId + ' .option1').removeClass('option1-selected selected-btn');
		$('#' + parentId + ' .option3').removeClass('option3-selected selected-btn');
		var index = parseInt($("#" + parentId).attr('data-questionindex')) - 1;
		this.updateQuestionSet({
			key : this.mCurrentSelected,
			index : index,
			action : 'submit_answer',
			value : '2'
		})
		if ($('#' + parentId + ' .option2').hasClass('option2-selected selected-btn')) {
			$('#' + parentId + ' .camera-layout').css('visibility', 'visible');
		} else {
			$('#' + parentId + ' .camera-layout').css('visibility', 'hidden');
		}
	},
	/**
	 * selectAnswerThree class will receive the event object and show answer
	 * third is selected and other two delected
	 *
	 * @class selectAnswerThree
	 * @param [event={}]
	 *            This object contains events related to the object.
	 */
	selectAnswerThree : function(event) {
		Logger.log("You selected answer ok", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'selectAnswerThree'
		});
		var parentId = event.currentTarget.parentNode.parentNode.id;
		if ($('#' + parentId + ' .option3').hasClass('selected-btn')) {
			return true;
		}
		$('#' + parentId + ' .camera-layout').css('visibility', 'hidden');
		this.removeOptionSelection(parentId, 'option1', 'option2');
		$('#' + parentId + ' .save_answer').html('answer-option3');
		$('#' + parentId + ' .option3').addClass('option3-selected selected-btn');
		$('#' + parentId + ' .option1').removeClass('option1-selected selected-btn');
		$('#' + parentId + ' .option2').removeClass('option2-selected selected-btn');
		var index = parseInt($("#" + parentId).attr('data-questionindex')) - 1;
		this.updateQuestionSet({
			key : this.mCurrentSelected,
			index : index,
			action : 'submit_answer',
			value : '3'
		})
	},
	/**
	 * filterQuestions class will sort all the quetions availabe for the job
	 *
	 * @class filterQuestions
	 * @param [flag={}]
	 *            this contains true or false value
	 * @param [value={}]
	 *            this param contains values of bottom bar for sorting
	 */
	filterQuestions : function(flag, value) {
		Logger.log("Question filtering in process", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'Start Method: filterQuestions'
		});
		var currentCount = 0;
		var doiScroll = false;
		if (this.wrapperComponent.mQuestionRestriction) {
			doiScroll = true
		}

		if (value == 1) {
			currentCount = $('#attention #totalAttentionCount').text();
		}
		if (value == 2) {
			currentCount = $('#caution #totalCautionCount').text();
		}
		if (value == 3) {
			currentCount = $('#ok #totalOkCount').text();
		}
		if (value == 4) {
			currentCount = $('#totalMandatoryCount').text();
		}
		if (currentCount == 0) {
			document.getElementById("processing_wait_overlay").style.display = "none";
			return true;
		}
		var filterQuestionsElems = null;
		var that = this;
		var middleElemIndex = 1;
		var top = '';
		var bottom = '';
		var elemLength = 0;
		var displayMandatoryStar = "";
		var addMandatoryImage ='<img src="css/images/common/questionare/icn_mandatory.png">'
		$('.searchOption1').off('click');
		$('.searchOption2').off('click');
		$('.searchOption3').off('click');
		if (flag) {
			$("#question_container_3_wrapper").show();
			if (this.sListId !== 'question_container_3_wrapper') {
				// this is added so that we do not overwrite the previous page
				// as same dummy 3 wrapper
				this.bottomPanelList = this.sListId
			}
			$("#" + this.sListId).css('z-Index', '0');
			this.sListId = 'question_container_3_wrapper';
			$("#question_container_3_wrapper").css('z-index', '1');
			var slideValue = 0;
			var scrollerElem = "";
			var mMarginLeft = 0;
			var selectedYes = '';
			var selectedNo = '';
			var isMandatory = false;
			var dataTimePickerArray = [];
			$("#question_container_3").empty();
			var tabData, rowData, i, sHTMLContent = '', mTempClass = [0, "", "", ""], key, img_data, camera_display, imgIndex;
			for (key in this.mScreenData) {
				tabData = this.mScreenData[key];
				for ( i = 0; i < tabData.length; i++) {
					img_data = [{
						src : '',
						display : 'none'
					}, {
						src : '',
						display : 'none'
					}, {
						src : '',
						display : 'none'
					}, {
						src : '',
						display : 'none'
					}];

					rowData = tabData[i];
					selectedYes = '';
					selectedNo = '';
					displayMandatoryStar = "";
					if (rowData.mandatory !== "x") {
						displayMandatoryStar = "hideMandatoryStar";
						isMandatory = false;
					} else if (rowData.mandatory === "x") {
						isMandatory = true;
					}
					mTempClass = [0, "", "", ""];
					if (rowData.question_type == 'RADIOBUTTON' && rowData.answer != undefined) {
						mTempClass[Number(rowData.answer)] = 'option' + Number(rowData.answer) + '-selected selected-btn';
						mTempClass[0] = Number(rowData.answer);
					}
					camera_display = 'visible';
					if (rowData.question_type == 'RADIOBUTTON' && (rowData.answer === '3' || rowData.answer === undefined)) {
						camera_display = 'hidden';
					}
					var imageCount = 1;
					if (rowData.imgArr != undefined) {
						// image instance
						for ( imgIndex = 0; imgIndex < rowData.imgArr.length; imgIndex++) {
							img_data[imgIndex + 1] = {}
							img_data[imgIndex + 1].src = AFM.AppConfiguration.sdCardPath + "" + this.mJobCardId + "_" + rowData.section_id + "_" + rowData.question_id + "_" + (imgIndex + 1) + ".jpg";
							img_data[imgIndex + 1].display = 'block';
						}
						imageCount = rowData.imgArr.length + 1;
					}
					if (rowData.question_type == 'OPTIONLIST') {
						slideValue = 0;
						mMarginLeft = 0;
						if (rowData.sliding_status != undefined) {
							mMarginLeft = rowData.sliding_status * 360 * -1;
							slideValue = rowData.sliding_status;
						}
						scrollerElem = "";
						for ( j = 0; j < rowData.question_data.length; j++) {
							scrollerElem += " <div class = 'snapElems'>" + rowData.question_data[j] + "</div>";
						}
					}
					if (rowData.question_type == 'CHECKBOX' && rowData.answer != undefined) {
						if (rowData.answer == "Yes") {
							selectedYes = "selected";
						} else {
							selectedNo = "selected";
						}
					}
					if ((rowData.question_type == 'RADIOBUTTON' && mTempClass[0] == value) || (rowData.question_type == 'RADIOBUTTON' && value == 4 && isMandatory )) {
						sHTMLContent += this.wrapperComponent.mHTMLTemplate.renderTemplate('search-question-single-row-structure-1', {
							mandatory : displayMandatoryStar,
							mandatory_image_exist:(displayMandatoryStar==="" && !doiScroll)? addMandatoryImage:"",
							question_index : i + 1,
							id : 'search' + key + rowData.question_id,
							question_content : rowData.content,
							selected_on_of1 : mTempClass[1],
							selected_on_of2 : mTempClass[2],
							selected_on_of3 : mTempClass[3],
							s1_id : 'search' + key + rowData.question_id,
							s2_id : 'search' + key + rowData.question_id,
							s3_id : 'search' + key + rowData.question_id,
							add_img_src_1 : img_data[1].src,
							add_img_src_2 : img_data[2].src,
							add_img_src_3 : img_data[3].src,
							visiual_layout1 : img_data[1].display,
							visiual_layout2 : img_data[2].display,
							visiual_layout3 : img_data[3].display,
							display_status_of_camera : camera_display,
							answer : 'answer-option' + mTempClass[0],
							comment_img : (rowData.comment != undefined && rowData.comment != "") ? 'comment-filled-img' : 'comment-img',
							key : key,
							index : i,
							question_id : rowData.question_id,
							image_count : imageCount
						});
					}
					if (rowData.question_type == 'OPTIONLIST' && value == 4 && isMandatory) {
						sHTMLContent += this.wrapperComponent.mHTMLTemplate.renderTemplate('search-question-single-row-structure-2', {
							mandatory : displayMandatoryStar,
							mandatory_image_exist:(displayMandatoryStar==="" && !doiScroll)? addMandatoryImage:"",
							question_index : i + 1,
							id : 'search' + key + rowData.question_id,
							id_for_highlight : 'search' + rowData.question_id,
							question_content : rowData.content,
							s1_id : 'search' + key + rowData.question_id,
							s2_id : 'search' + key + rowData.question_id,
							s3_id : 'search' + key + rowData.question_id,
							slide_value : slideValue,
							scroller_elem : scrollerElem,
							add_img_src_1 : img_data[1].src,
							add_img_src_2 : img_data[2].src,
							add_img_src_3 : img_data[3].src,
							visiual_layout1 : img_data[1].display,
							visiual_layout2 : img_data[2].display,
							visiual_layout3 : img_data[3].display,
							comment_img : (rowData.comment != undefined && rowData.comment != "") ? 'comment-filled-img' : 'comment-img',
							answer_option : 'answer-option' + mTempClass[0],
							shifting_left : mMarginLeft,
							display_status_of_camera : camera_display,
							key : key,
							index : i,
							question_id : rowData.question_id,
							image_count : imageCount
						});
					}
					if (rowData.question_type == 'CHECKBOX' && value == 4 && isMandatory) {
						sHTMLContent += this.wrapperComponent.mHTMLTemplate.renderTemplate('search-question-single-row-structure-3', {
							mandatory : displayMandatoryStar,
							mandatory_image_exist:(displayMandatoryStar==="" && !doiScroll)? addMandatoryImage:"",
							question_index : i + 1,
							id : 'search' + key + rowData.question_id,
							id_for_highlight : 'search' + rowData.question_id,
							question_content : rowData.content,
							s1_id : 'search' + key + rowData.question_id,
							s2_id : 'search' + key + rowData.question_id,
							s3_id : 'search' + key + rowData.question_id,
							add_img_src_1 : img_data[1].src,
							add_img_src_2 : img_data[2].src,
							add_img_src_3 : img_data[3].src,
							visiual_layout1 : img_data[1].display,
							visiual_layout2 : img_data[2].display,
							visiual_layout3 : img_data[3].display,
							radio_option_val_1 : 'Yes',
							radio_option_val_2 : 'No',
							slider_no : 'search' + key + rowData.question_id,
							toggle_switch_index : rowData.question_id,
							selected_yes : selectedYes,
							selected_no : selectedNo,
							comment_img : (rowData.comment != undefined && rowData.comment != "") ? 'comment-filled-img' : 'comment-img',
							answer_option : 'answer-option' + mTempClass[0],
							display_status_of_camera : camera_display,
							key : key,
							index : i,
							question_id : rowData.question_id,
							image_count : imageCount
						});
					}
					if (rowData.question_type == 'FREETEXT' && value == 4 && isMandatory) {
						sHTMLContent += this.wrapperComponent.mHTMLTemplate.renderTemplate('search-question-single-row-structure-4', {
							mandatory : displayMandatoryStar,
							mandatory_image_exist:(displayMandatoryStar==="" && !doiScroll)? addMandatoryImage:"",
							question_index : i + 1,
							id : 'search' + key + rowData.question_id,
							id_for_highlight : 'search' + rowData.question_id,
							question_content : rowData.content,
							s1_id : 'search' + key + rowData.question_id,
							s2_id : 'search' + key + rowData.question_id,
							s3_id : 'search' + key + rowData.question_id,
							add_img_src_1 : img_data[1].src,
							add_img_src_2 : img_data[2].src,
							add_img_src_3 : img_data[3].src,
							visiual_layout1 : img_data[1].display,
							visiual_layout2 : img_data[2].display,
							visiual_layout3 : img_data[3].display,
							input_no : 'search' + key + rowData.question_id,
							input_value : (rowData.answer != undefined) ? rowData.answer : '',
							answer_option : 'answer-option' + mTempClass[0],
							display_status_of_camera : camera_display,
							question_id : rowData.question_id,
							index : i,
							key : key,
							image_count : imageCount
						});
					}
					if (rowData.question_type == 'DATETIME' && value == 4 && isMandatory) {
						var dateTimeObj = {
							key : key,
							questionId : rowData.question_id,
							index : i
						};
						dataTimePickerArray.push(dateTimeObj);
						sHTMLContent += this.wrapperComponent.mHTMLTemplate.renderTemplate('search-question-single-row-structure-5', {
							mandatory : displayMandatoryStar,
							mandatory_image_exist:(displayMandatoryStar==="" && !doiScroll)? addMandatoryImage:"",
							question_index : i + 1,
							id : 'search' + key + rowData.question_id,
							id_for_highlight : 'search' + rowData.question_id,
							question_content : rowData.content,
							s1_id : 'search' + key + rowData.question_id,
							s2_id : 'search' + key + rowData.question_id,
							s3_id : 'search' + key + rowData.question_id,
							add_img_src_1 : img_data[1].src,
							add_img_src_2 : img_data[2].src,
							add_img_src_3 : img_data[3].src,
							visiual_layout1 : img_data[1].display,
							visiual_layout2 : img_data[2].display,
							visiual_layout3 : img_data[3].display,
							date_time_picker_no : key + rowData.question_id,
							date_time_value : (rowData.answer != undefined) ? rowData.answer : '',
							comment_img : (rowData.comment != undefined && rowData.comment != "") ? 'comment-filled-img' : 'comment-img',
							answer_option : 'answer-option' + mTempClass[0],
							display_status_of_camera : camera_display,
							question_id : rowData.question_id,
							index : i,
							key : key,
							image_count : imageCount
						});
					}
				};
			};
			var dummyElem = "<li class = 'question-layout no-background'></li>";
			sHTMLContent = dummyElem + sHTMLContent + dummyElem;
			$("#question_container_3").html(sHTMLContent);

			filterQuestionsElems = $("#question_container_3").children();
			top = $(filterQuestionsElems[middleElemIndex-1])[0].id;
			bottom = $(filterQuestionsElems[middleElemIndex+1])[0].id;
			if (doiScroll)
				that.mFilterQuestionsMiddleElem = $(filterQuestionsElems[middleElemIndex])[0].id;
			$('.snapElems').addClass("change-color-snap-element");
			if (doiScroll)
				that.prioritizeQuestionHighlight(that.mFilterQuestionsMiddleElem, top, bottom, 'question_container_3');
			$('.comment-submit-radio').on('click', this.displayCommentSearchPopup.bind(this, "radio"));
			$('.comment-submit-option').on('click', this.displayCommentSearchPopup.bind(this, "option"));
			$('.comment-submit-checkbox').on('click', this.displayCommentSearchPopup.bind(this, "checkbox"));
			$('.comment-submit-datetime').on('click', this.displayCommentSearchPopup.bind(this, "datetime"));
			$('.searchOption1').on('click', this.searchOption1Handler.bind(this));
			$('.searchOption2').on('click', this.searchOption2Handler.bind(this));
			$('.searchOption3').on('click', this.searchOption3Handler.bind(this));
			var that = this;
			$(".access-camera-option").on('tap', function(evt) {
				var mParent = evt.currentTarget.parentNode.parentNode.parentNode.parentNode;
				var key, questionId;
				if (that.doMiddleElementCheck(mParent.id)) {
					key = mParent.getAttribute("data-key");
					questionId = mParent.getAttribute("data-questionId");
					that.callCamera(evt, mParent, key, true, questionId);
				}
			});
			$(".access-camera-radio").on('tap', function(evt) {
				var mParent = evt.currentTarget.parentNode.parentNode.parentNode.parentNode;
				var key, questionId;
				if (that.doMiddleElementCheck(mParent.id)) {
					key = $("#"+mParent.id).find(".save_answer")[0].getAttribute("data-key");
					questionId = $("#"+mParent.id).find(".save_answer")[0].getAttribute("data-questionId");
					that.callCamera(evt, mParent, key, true, questionId);
				}
			});
			$(".access-camera-datetime").on('tap', function(evt) {
				var mParent = evt.currentTarget.parentNode.parentNode.parentNode.parentNode;
				var key, questionId;
				if (that.doMiddleElementCheck(mParent.id)) {
					key = mParent.getAttribute("data-key");
					questionId = mParent.getAttribute("data-questionId");
					that.callCamera(evt, mParent, key, true, questionId);
				}
			});
			$(".access-camera-input").on('tap', function(evt) {
				var mParent = evt.currentTarget.parentNode.parentNode.parentNode.parentNode;
				var key, questionId;
				if (that.doMiddleElementCheck(mParent.id)) {
					key = mParent.getAttribute("data-key");
					questionId = mParent.getAttribute("data-questionId");
					that.callCamera(evt, mParent, key, true, questionId);
				}
			});
			$(".access-camera-checkbox").on('tap', function(evt) {
				var mParent = evt.currentTarget.parentNode.parentNode.parentNode.parentNode;
				var key, questionId;
				if (that.doMiddleElementCheck(mParent.id)) {
					key = $("#"+mParent.id).find(".checklist-toggle-switch-search")[0].getAttribute("data-key");
					questionId = $("#"+mParent.id).find(".checklist-toggle-switch-search")[0].getAttribute("data-questionId");
					that.callCamera(evt, mParent, key, true, questionId);
				}
			});
			$('.HorizontalScrollerSearch').on('swipeleft', function(event) {
				if (that.doMiddleElementCheck(event.currentTarget.parentNode.parentNode.parentNode.id)) {
					that.animateScrollLeft(event, true);
				}
			});
			$('.HorizontalScrollerSearch').on('swiperight', function(event) {
				if (that.doMiddleElementCheck(event.currentTarget.parentNode.parentNode.parentNode.id)) {
					that.animateScrollRight(event, true);
				}
			});
			$('.HorizontalScrollerSearch').on('webkitTransitionEnd', function() {
				that.bHorizontalScrollerEnabled = false;
				$('.snapElems').addClass("change-color-snap-element");
			});
			$('.checklist-toggle-switch-search').slider();
			$('.checklist-toggle-switch-search').bind("change", this.onToggleSwitchChange.bind(this, true));
			$('.textfield-bg-search').on('blur', this.onBlurForInput.bind(this, true));
			for (var k = 0; k < dataTimePickerArray.length; k++) {
				this.hookupDateTimePicker($("#date_time_picker_" + dataTimePickerArray[k].key + dataTimePickerArray[k].questionId), dataTimePickerArray[k].questionId, dataTimePickerArray[k].key, dataTimePickerArray[k].index, true);
			};			
		} else {
			if (value !== 0) {
				// value == 0 that means bottom panel deselection. so original
				// list shd be shown
				$("#question_container_3_wrapper").hide();
				this.sListId = this.bottomPanelList;
				this.bottomPanelList = '';
			}
			this.removeSelection('caution', 'ok', 'attention', 'mandatory');
		}

		if (doiScroll) {
			if (this.scrollObj.question_container_3_content === undefined) {
				this.scrollObj.question_container_3_content = new iScroll('question_container_3_content', {
					hScroll : false,
					vScroll : true,
					snap : 'li',
					momentum : false,
					hScrollbar : false,
					vScrollbar : false,
					onScrollMove : function() {
						AFM.AppConfiguration.previousTime = new Date();
						if (this.dirX === 0) {
							if ($("#" + that.mFilterQuestionsMiddleElem + " .comment-bg-search").is(":focus")) {
								$("#" + that.mFilterQuestionsMiddleElem + " .comment-bg-search").blur();
							}
							$('#' + that.mFilterQuestionsMiddleElem + ' .mandatory_star_icon').empty();
						}
					},
					onScrollEnd : function() {
						if (this.dirX === 0) {
							middleElemIndex = this.currPageY + 1;
							filterQuestionsElems = $("#question_container_3").children();
							elemLength = filterQuestionsElems.length - 2;
							if (that.mFilterQuestionsMiddleElem === '') {
								middleElemIndex = 1;
							} else if (this.dirY === 1) {
								if (middleElemIndex > elemLength) {
									middleElemIndex = elemLength;
								}
							} else if (this.dirY === -1) {
								if (middleElemIndex < 1) {
									middleElemIndex = 1;
								}
							}
							if (middleElemIndex > elemLength || middleElemIndex === elemLength) {
								bottom = "";
							} else {
								bottom = $(filterQuestionsElems[middleElemIndex+1])[0].id;
							}
							if (middleElemIndex === 1 || middleElemIndex < 1) {
								top = "";
							} else {
								top = $(filterQuestionsElems[middleElemIndex-1])[0].id;
							}
							that.mFilterQuestionsMiddleElem = $(filterQuestionsElems[middleElemIndex])[0].id;
							that.prioritizeQuestionHighlight(that.mFilterQuestionsMiddleElem, top, bottom, 'question_container_3');
						}
					}
				});
			} else {
				this.scrollObj.question_container_3_content.refresh();
			}
		} else {
			$("#question_container_3").find(' .toggle-overlay').hide();
		}
		$("#processing_wait_overlay").hide();
		Logger.log("Question filtering is done", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'End Method: filterQuestions'
		});
	},
	/**
	 * searchOption1Handler class will sort all the quetions availabe for
	 * attention
	 *
	 * @class searchOption1Handler
	 * @param [event={}]
	 *            This object contains events related to the object.
	 */
	searchOption1Handler : function(event) {
		var parentElem = event.currentTarget.parentNode.parentNode;

		if (this.doMiddleElementCheck(parentElem.id)) {
			if ($(parentElem).find(".searchOption1").hasClass('selected-btn')) {
				return true;
			}
			var dataElem = $(parentElem).find(".save_answer");
			var key = dataElem[0].getAttribute('data-key');
			var index = dataElem[0].getAttribute('data-index');
			var questionId = dataElem[0].getAttribute('data-questionid');
			var id = parentElem.id;
			$("#" + id).find(".camera-layout").css('visibility', 'visible');
			this.removeOptionSelection(id, 'searchOption2', 'searchOption3')
			$(parentElem).find(".searchOption1").addClass('selected-btn option1-selected');
			$(parentElem).find(".searchOption2").removeClass('option2-selected');
			$(parentElem).find(".searchOption3").removeClass('option3-selected');
			this.updateQuestionSet({
				value : '1',
				index : index,
				key : key
			}, true);

			if (this.mCurrentSelected == key) {
				id = questionId;
				this.removeOptionSelection(id, 'option2', 'option3')
				$("#" + id).find(".option1").addClass('option1-selected selected-btn');
				$("#" + id).find(".option2").removeClass('option2-selected selected-btn');
				$("#" + id).find(".option3").removeClass('option3-selected selected-btn');
				$("#" + id).find(".save_answer").html('answer-option1');
				$("#" + id).find(".camera-layout").css('visibility', 'visible');
			}
			dataElem.html('answer-option1');
		}
	},
	/**
	 * searchOption2Handler class will sort all the quetions availabe for
	 * caution
	 *
	 * @class searchOption2Handler
	 * @param [event={}]
	 *            This object contains events related to the object.
	 */
	searchOption2Handler : function(event) {
		var parentElem = event.currentTarget.parentNode.parentNode;

		if (this.doMiddleElementCheck(parentElem.id)) {
			if ($(parentElem).find(".searchOption2").hasClass('selected-btn')) {
				return true;
			}
			dataElem = $(parentElem).find('.save_answer');
			var key = dataElem[0].getAttribute('data-key');
			var index = dataElem[0].getAttribute('data-index');
			var questionId = dataElem[0].getAttribute('data-questionid');
			var id = parentElem.id;
			$('#' + id + ' .camera-layout').css('visibility', 'visible');
			this.removeOptionSelection(id, 'searchOption1', 'searchOption3');
			$(parentElem).find(".searchOption2").addClass('selected-btn option2-selected');
			$(parentElem).find(".searchOption1").removeClass('option1-selected');
			$(parentElem).find(".searchOption3").removeClass('option3-selected');
			this.updateQuestionSet({
				value : '2',
				index : index,
				key : key
			}, true);
			if (this.mCurrentSelected == key) {
				id = questionId;
				$("#" + id).find(".option2").addClass('option2-selected selected-btn');
				$("#" + id).find(".option1").removeClass('option1-selected selected-btn');
				$("#" + id).find(".option3").removeClass('option3-selected selected-btn');
				$("#" + id).find(".save_answer").html('answer-option2');
				$("#" + id).find(".camera-layout").css('visibility', 'visible');
			}
			dataElem.html('answer-option2');
		}
	},
	/**
	 * searchOption3Handler class will sort all the quetions availabe for ok
	 *
	 * @class searchOption3Handler
	 * @param [event={}]
	 *            This object contains events related to the object.
	 */
	searchOption3Handler : function(event) {
		var parentElem = event.currentTarget.parentNode.parentNode;

		if (this.doMiddleElementCheck(parentElem.id)) {
			if ($(parentElem).find(".searchOption3").hasClass('selected-btn')) {
				return true;
			}
			var dataElem = $(parentElem).find(".save_answer");
			var key = dataElem[0].getAttribute('data-key');
			var index = dataElem[0].getAttribute('data-index');
			var questionId = dataElem[0].getAttribute('data-questionid');
			var id = parentElem.id;
			$('#' + id + ' .camera-layout').css('visibility', 'hidden');
			this.removeOptionSelection(id, 'searchOption1', 'searchOption2');
			$(parentElem).find(".searchOption3").addClass('selected-btn option3-selected');
			$(parentElem).find(".searchOption1").removeClass('option1-selected');
			$(parentElem).find(".searchOption2").removeClass('option2-selected');
			this.updateQuestionSet({
				value : '3',
				index : index,
				key : key
			}, true);
			if (this.mCurrentSelected == key) {
				id = questionId;
				this.removeOptionSelection(id, 'option1', 'option2');
				$("#" + id).find(".option3").addClass('option3-selected selected-btn');
				$("#" + id).find(".option2").removeClass('option2-selected selected-btn');
				$("#" + id).find(".option1").removeClass('option1-selected selected-btn');
				$("#" + id).find(".save_answer").html('answer-option3');
				$('#' + id + ' .camera-layout').css('visibility', 'hidden');
			}
			dataElem.html('answer-option3');
		}
	},
	/**
	 * updateSideSectionCount class will update the count of question set based on
	 * side section element
	 *
	 * @class updateSideSectionCount
	 * @param [presentSide={}]
	 *            This param contains present count
	 * @param [pastSide={}]
	 *            This param contains past count
	 */
	updateSideSectionCount : function(presentSide, pastSide, sideSectionKey) {
		Logger.log("Updating the side section count for ok/caution/attention", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'updateSideSectionCount'
		});
		var currentSection = 'side-section-count-' + sideSectionKey;
		if (presentSide != undefined) {
			presentSide = Number(presentSide);
		}
		if (pastSide != undefined) {
			pastSide = Number(pastSide);
		}
		var lastValueSide;
		var decreaseValueSide;
		if (presentSide != undefined) {
			if (presentSide == 1) {
				lastValueSide = $('.' + currentSection + ' .attention-count').html();
				lastValueSide = Number(lastValueSide);
				lastValueSide++;
				$('.' + currentSection + ' .attention-count').html(lastValueSide);
			} else if (presentSide == 2) {
				lastValueSide = $('.' + currentSection + ' .caution-count').html();
				lastValueSide = Number(lastValueSide);
				lastValueSide++;
				$('.' + currentSection + ' .caution-count').html(lastValueSide);
			} else if (presentSide == 3) {
				lastValueSide = $('.' + currentSection + ' .ok-count').html();
				lastValueSide = Number(lastValueSide);
				lastValueSide++;
				$('.' + currentSection + ' .ok-count').html(lastValueSide);
			}
		}
		if (pastSide != undefined) {
			if (pastSide == 1) {
				decreaseValueSide = $('.' + currentSection + ' .attention-count').html();
				decreaseValueSide = Number(decreaseValueSide);
				decreaseValueSide--;
				$('.' + currentSection + ' .attention-count').html(decreaseValueSide);
			} else if (pastSide == 2) {
				decreaseValueSide = $('.' + currentSection + ' .caution-count').html();
				decreaseValueSide = Number(decreaseValueSide);
				decreaseValueSide--;
				$('.' + currentSection + ' .caution-count').html(decreaseValueSide);
			} else if (pastSide == 3) {
				decreaseValueSide = $('.' + currentSection + ' .ok-count').html();
				decreaseValueSide = Number(decreaseValueSide);
				decreaseValueSide--;
				$('.' + currentSection + ' .ok-count').html(decreaseValueSide);
			}
		}
	},
	/**
	 * updateConditionCount class will update the count of question set based on
	 * bottom bar element
	 *
	 * @class updateConditionCount
	 * @param [present={}]
	 *            This param contains present count
	 * @param [past={}]
	 *            This param contains past count
	 */
	updateConditionCount : function(present, past) {
		Logger.log("Updating the bottom bar count for ok/caution/attention", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'updateConditionCount'
		});
		if (present != undefined) {
			present = Number(present);
		}
		if (past != undefined) {
			past = Number(past);
		}
		var lastValue;
		var decreaseValue;
		if (present != undefined) {
			if (present == 1) {
				lastValue = $('#totalAttentionCount').html();
				lastValue = Number(lastValue);
				lastValue++;
				$('#totalAttentionCount').html(lastValue);
			} else if (present == 2) {
				lastValue = $('#totalCautionCount').html();
				lastValue = Number(lastValue);
				lastValue++;
				$('#totalCautionCount').html(lastValue);
			} else if (present == 3) {
				lastValue = $('#totalOkCount').html();
				lastValue = Number(lastValue);
				lastValue++;
				$('#totalOkCount').html(lastValue);
			}
		}
		if (past != undefined) {
			if (past == 1) {
				decreaseValue = $('#totalAttentionCount').html();
				decreaseValue = Number(decreaseValue);
				decreaseValue--;
				$('#totalAttentionCount').html(decreaseValue);
			} else if (past == 2) {
				decreaseValue = $('#totalCautionCount').html();
				decreaseValue = Number(decreaseValue);
				decreaseValue--;
				$('#totalCautionCount').html(decreaseValue);
			} else if (past == 3) {
				decreaseValue = $('#totalOkCount').html();
				decreaseValue = Number(decreaseValue);
				decreaseValue--;
				$('#totalOkCount').html(decreaseValue);
			}

		}

	},
	/**
	 * animateContent class will receive id of section and animate the section
	 *
	 * @class animateContent
	 * @param [id={}]
	 *            id of the section
	 */
	animateContent : function(id) {
		// overlapping based on absolute position and zIndex

		var sTemp = '';
		if (this.sListId !== "") {
			sTemp = (this.sListId).split('_wrapper')[0];
			document.getElementById(sTemp).style.zIndex = '1';
		}
		this.sListId = id;

		document.getElementById(id).style.zIndex = '2';

		$('#' + id).addClass('questionPageShow');
		$('#' + id).removeClass('questionPageHide');
		$('#' + id).addClass('animatePage');

	},
	/**
	 * pageTransitionComplete class will be called when page transition of the question is completed
	 * @class pageTransitionComplete
	 * @param [event={}]
	 *            This object contains events related to the object.
	 */
	pageTransitionComplete : function(event) {
		$('#' + this.sListId).removeClass('animatePage');
		if (this.sListId != "question_container_3_wrapper") {
			$("#question_container_3_wrapper").hide();
		}
		$('#' + this.sListId).css('z-index', '1');
		if (this.sListId == 'question_container_1_wrapper') {
			$('#question_container_2_wrapper').addClass('questionPageHide');
			$('#question_container_2_wrapper').removeClass('questionPageShow');
			$('#question_container_2').empty();
		} else if (this.sListId == 'question_container_2_wrapper') {
			$('#question_container_1_wrapper').addClass('questionPageHide');
			$('#question_container_1_wrapper').removeClass('questionPageShow');
			$('#question_container_1').empty();
		}
		this.isAnimationOfQuestionContainerComplete = true;
	},
	/**
	 * getSliderCount class  fetch the local slider counter
	 * @class getSliderCount
	 * @param [question_id={}]
	 *            This object contains parent question id for which slider changes
	 * @param [isSearch] this param having the true/false value
	 * @param [actualQuestionId={}]
	 *            This object contains question id
	 */
	getSliderCount : function(question_id, isSearch, key, actualQuestionId) {
		var questionSet = [];
		var nTemp;
		if (isSearch) {
			questionSet = this.mScreenData[key];
			nTemp = Number(actualQuestionId) - 1;
		} else {
			questionSet = this.mScreenData[this.mCurrentSelected];
			nTemp = actualQuestionId;
		}
		// decremented by 1 coz array index starts with 0
		var sliding_stat = 0;
		if (questionSet[nTemp].sliding_status != undefined) {
			sliding_stat = questionSet[nTemp].sliding_status;
		}
		return sliding_stat;
	},
	/**
	 * updateQuestionSet class  updates the all the qustion's answer into the object
	 * @class updateQuestionSet
	 * @param [objData={}]
	 *            This object contains qusetion data
	 * @param [notRegular]
	 *            This object contains value true/false
	 */
	updateQuestionSet : function(objData, notRegular) {
		Logger.log("Updating the question's answer", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'Start Method: updateQuestionSet'
		});
		if (notRegular == undefined) {
			if (this.mScreenData.hasOwnProperty(objData.key)) {
				var questionSet = this.mScreenData[objData.key];
				// array indes begins with 0
				var nTemp = objData.index;
				switch (objData.action) {
					case 'submit_answer':
						if (questionSet[nTemp].answer != undefined && objData.value == questionSet[nTemp].answer) {
							objData.value = undefined;
						}
						this.updateConditionCount(objData.value, questionSet[nTemp].answer);
						this.updateSideSectionCount(objData.value, questionSet[nTemp].answer, objData.key);
						questionSet[nTemp].answer = objData.value;
						this.updateBackendDataStructure({
							key:nTemp,
							sectionId : objData.key,
							questionId : questionSet[nTemp].question_id,
							result : questionSet[nTemp].answer,
							img_arr : (questionSet[nTemp].imgArr !== undefined) ? questionSet[nTemp].imgArr : [],
							comment : (questionSet[nTemp].comment !== undefined) ? questionSet[nTemp].comment : "",
						}, "result_update");
						break;
					case 'submit_image':
						
						if( questionSet[nTemp].imgArr === undefined)
							 questionSet[nTemp].imgArr = [];
						
						questionSet[nTemp].imgArr[objData.imgCnt - 1] = objData.value;
						this.updateBackendDataStructure({
							key:nTemp,
							sectionId : objData.key,
							questionId : questionSet[nTemp].question_id,
							result : (questionSet[nTemp].answer !== undefined) ? questionSet[nTemp].answer : '',
							img_arr : (questionSet[nTemp].imgArr !== undefined) ? questionSet[nTemp].imgArr : [],
							comment : (questionSet[nTemp].comment !== undefined) ? questionSet[nTemp].comment : "",
						}, "img_update");
						break;
					case 'submit_sliding_status':
						questionSet[nTemp].sliding_status = objData.value;
						this.updateBackendDataStructure({
							sectionId : objData.key,
							key:nTemp,
							questionId : questionSet[nTemp].question_id,
							result : questionSet[nTemp].question_data[objData.value],
							img_arr : (questionSet[nTemp].imgArr !== undefined) ? questionSet[nTemp].imgArr : [],
							comment : (questionSet[nTemp].comment !== undefined) ? questionSet[nTemp].comment : "",
						}, "result_update");
						break;
					case 'submit_datetime_input_radio':
						questionSet[nTemp].answer = objData.value;
						this.updateBackendDataStructure({
							sectionId : objData.key,
							key:nTemp,
							questionId : questionSet[nTemp].question_id,
							result : questionSet[nTemp].answer,
							img_arr : (questionSet[nTemp].imgArr !== undefined) ? questionSet[nTemp].imgArr : [],
							comment : (questionSet[nTemp].comment !== undefined) ? questionSet[nTemp].comment : "",
						}, "result_update");
						break;
					case 'submit_comment':
						questionSet[nTemp].comment = objData.value;
						this.updateBackendDataStructure({
							sectionId : objData.key,
							key:nTemp,
							questionId : questionSet[nTemp].question_id,
							result : (questionSet[nTemp].answer !== undefined) ? questionSet[nTemp].answer : '',
							img_arr : (questionSet[nTemp].imgArr !== undefined) ? questionSet[nTemp].imgArr : [],
							comment : questionSet[nTemp].comment
						}, "update_comment");
						break;
				}
				this.mScreenData[objData.key] = questionSet;
			} else {
				alert('INCORRECT SECTION ID');
			}
		} else {
			var questionSet = this.mScreenData[objData.key];
			var nTemp = Number(objData.index)
			if (objData.comment !== undefined) {
				questionSet[nTemp].comment = objData.comment;
				this.updateBackendDataStructure({
					sectionId : objData.key,
					key:nTemp,
					questionId : questionSet[nTemp].question_id,
					result : (questionSet[nTemp].answer !== undefined) ? questionSet[nTemp].answer : '',
					img_arr : (questionSet[nTemp].imgArr !== undefined) ? questionSet[nTemp].imgArr : [],
					comment : objData.comment
				}, "update_comment");
			} else {
				if (questionSet[nTemp].answer != undefined && objData.value == questionSet[nTemp].answer) {
					objData.value = undefined;
				}
				this.updateConditionCount(objData.value, questionSet[nTemp].answer);
				this.updateSideSectionCount(objData.value, questionSet[nTemp].answer, objData.key);
				questionSet[nTemp].answer = objData.value;

				this.mScreenData[objData.key] = questionSet;
				this.updateBackendDataStructure({
					sectionId : objData.key,
					key:nTemp,
					questionId : questionSet[nTemp].question_id,
					result : questionSet[nTemp].answer,
					img_arr : (questionSet[nTemp].imgArr !== undefined) ? questionSet[nTemp].imgArr : [],
					comment : (questionSet[nTemp].comment !== undefined) ? questionSet[nTemp].comment : ''

				}, "result_update");
			}
		}
		Logger.log("Updating the question's answer", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'End Method: updateQuestionSet'
		});

	},
	/**
	 * updateBackendDataStructure class  updates the all the qustion's answer into the backend
	 * @class updateBackendDataStructure
	 * @param [data={}]
	 *            This object contains qusetion data
	 */
	updateBackendDataStructure : function(data, type) {
		var sOrderId = this.mJobCardId;
		var sectionId = data.sectionId;
		var questionId = data.questionId;

		var sUniqueCombination = sOrderId + "_" + sectionId + "_" + questionId;
		var mandatoryCombination = sectionId + "_" + questionId;
		var isMandatory = this.mandatoryQuestion.indexOf(mandatoryCombination);
		var mandatoryCount = 0;
		if (isMandatory !== -1) {
			this.mandatoryQuestion.splice(isMandatory, 1);
			mandatoryCount = this.totalMandatoryCount - this.mandatoryQuestion.length;
			$('#mandatoryCount').text(mandatoryCount);
		}
		// check if record exist
		var checkIfExist = this.arrAvoidReplica.indexOf(sUniqueCombination);
		if (checkIfExist != -1) {
			// if YES - then udpate the record
			// updation can be imgURL, answer, KEY FOR LOCAL
			var questionObject = [sOrderId, sectionId, questionId, data.result, data.img_arr, data.comment,data.key];
			this.arrSubmitToBackend[checkIfExist] = questionObject;
		} else {
			// if NO - then addup the new record
			// adding result, imgURL
			var questionObject = [sOrderId, sectionId, questionId, data.result, data.img_arr, data.comment,data.key];
			var len = this.arrSubmitToBackend.length;

			this.arrSubmitToBackend[len] = questionObject;
			this.arrAvoidReplica[len] = sUniqueCombination;
		}
	},
	/**
	 * updateQuestionCount class  updates the count for which answer is given
	 * @class updateQuestionCount
	 * @param [data={}]
	 *            This object contains qusetion data
	 */
	updateQuestionCount : function(data) {
		var attentionCount = 0, cautionCount = 0, okCount = 0, mandatoryCount = 0;
		for (var i = 0; i < data.length; i++) {
			for (var k = 0; k < data[i].questionSet.length; k++) {
				if (data[i].questionSet[k].answer == "1") {
					attentionCount++;
				} else if (data[i].questionSet[k].answer == "2") {
					cautionCount++;
				} else if (data[i].questionSet[k].answer == "3") {
					okCount++;
				}
				if (data[i].questionSet[k].mandatory === 'x' && ((data[i].questionSet[k].answer !== undefined && data[i].questionSet[k].answer !== "") || data[i].questionSet[k].sliding_status !== undefined)) {
					mandatoryCount++;
					var mandatoryCombination = data[i].questionSet[k].section_id + "_" + data[i].questionSet[k].question_id;
					var isMandatory = this.mandatoryQuestion.indexOf(mandatoryCombination);
					if (isMandatory !== -1) {
						this.mandatoryQuestion.splice(isMandatory, 1);
					}
				}
			}
		}
		$('#totalAttentionCount').text(attentionCount);
		$('#totalCautionCount').text(cautionCount);
		$('#totalOkCount').text(okCount);
		$('#mandatoryCount').text(mandatoryCount);
	},
	/**
	 * createUIElements class create the UI structure for all the question set
	 * @class createUIElements
	 * @param [data={}]
	 *            This object contains qusetion data
	 * @param [mandatoryQuestionData={}]
	 *            This object contains mandatory qusetion data
	 */
	createUIElements : function(mChangeddata, mandatoryQuestionData) {
		Logger.log("Creating the Questionary screen UI", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'Start Method: createUIElements'
		});
		if (mandatoryQuestionData === undefined) {
			mandatoryQuestionData = ["005_5", "10_4", "003_1", "10_2", "004_1", "005_1", "005_2", "005_6", "002_1", "002_2"];
		}
		
		var data = mChangeddata.slice(0);
		
		if(this.wrapperComponent.sessiondata.isJobPending(this.mJobCardId))
		{
			data = this.wrapperComponent.sessiondata.updatedAnswersFromContent(this.mJobCardId,data)
		}
		this.mandatoryQuestion = mandatoryQuestionData;
		this.totalMandatoryCount = mandatoryQuestionData.length;
		this.updateAnswerToDefault(data);
		this.updateQuestionCount(data);
		$("#totalMandatoryCount").empty();
		$("#totalMandatoryCount").html("" + this.totalMandatoryCount);
		// fetched data must be fed into for creation of side sections
		if (data.length !== 0) {

			$('#carousel').empty();
			// populate questions
			for (var i = 0; i < data.length; i++) {
				
					this.mScreenData[data[i].id] = JSON.parse(JSON.stringify(data[i].questionSet));
				
			};
			
			
			$($("#mypanel").children()[0]).addClass("noPadding");
			var parentComponent = document.getElementById('carousel');
			this.totalObjectCount = data.length;
			this.totalRequriedObject = this.corectionForProperUI(this.totalObjectCount);

			this.dynamicallyAddElements(parentComponent, data);
			this.element = parentComponent;
			this.totalPanelCount = this.element.children.length;
			this.panelCount = parseInt(this.totalRequriedObject, 10);
			this.isHorizontal = false;
			$("#carousel").addClass('panels-backface-invisible');

			this.AddEventListener();
			this.mCurrentSelected = data[0].id;
			this.loadQuestion(this.mCurrentSelected);
			this.modify();

		} else {
			// sections are empty
			$('#popup_ok').hammer().bind('click', this.popUpOkAction.bind(this));
			this.wrapperComponent.mPopUpAction = 'goBackOk';
			$('#popup_alert').show();
			$('.pop-up-job-id-text').text('No data found ');
			$('.pop-up-text-msg').text('Redirecting to previous screen.');
			this.openPopUp();
		}
		Logger.log("Creating the Questionary screen UI", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'End Method: createUIElements'
		});

	},
	/**
	 * updateAnswerToDefault class will update the default answer to the question
	 * @class createUIEupdateAnswerToDefaultlements
	 * @param [data={}]
	 *            This object contains qusetion data
	 */
	updateAnswerToDefault : function(data) {
		Logger.log("Updating the question's answer to default value", AFMLogger.trace, {
			filename : 'AppScreen.js',
			methodname : 'updateAnswerToDefault'
		});
		for (var i = 0; i < data.length; i++) {
			for (var k = 0; k < data[i].questionSet.length; k++) {
				if ((data[i].questionSet[k].answer === undefined || data[i].questionSet[k].answer === "" ) && (data[i].questionSet[k]['default'] !== undefined && data[i].questionSet[k]['default'] !== "")) {
					if (data[i].questionSet[k].question_type == "CHECKBOX") {
						if (data[i].questionSet[k]['default'] === "X" || data[i].questionSet[k]['default'] === "x") {
							data[i].questionSet[k].answer = "Yes";
						} else {
							data[i].questionSet[k].answer = "No";
						}
					} else {
						if (data[i].questionSet[k].question_type == "OPTIONLIST") {
							data[i].questionSet[k].sliding_status = data[i].questionSet[k].question_data.indexOf(data[i].questionSet[k]['default']);
							if (data[i].questionSet[k].sliding_status === -1) {
								data[i].questionSet[k].sliding_status = undefined;
							}
						}
						data[i].questionSet[k].answer = data[i].questionSet[k]['default'];
					}
					this.updateBackendDataStructure({
						sectionId : data[i].questionSet[k].section_id,
						questionId : data[i].questionSet[k].question_id,
						result : data[i].questionSet[k].answer,
						img_arr : (data[i].questionSet[k].imgArr !== undefined) ? data[i].questionSet[k].imgArr : [],
						comment : (data[i].questionSet[k].comment !== undefined) ? data[i].questionSet[k].comment : "",
					}, "result_update");
				}
			}
		}
	},
	/**
	 * corectionForProperUI class is used to return no elements needs to be created for required UI
	 * @class corectionForProperUI
	 * @param [totalRequriedObject]
	 *            This object contains min no of required object
	 */
	corectionForProperUI : function(totalRequriedObject) {
		if (totalRequriedObject < 7) {
			return this.corectionForProperUI(totalRequriedObject + this.totalObjectCount);
		} else {
			return totalRequriedObject;
		}
	},
	/**
	 * dynamicallyAddElements class is used add the elements dynamically in the given structure
	 * @class dynamicallyAddElements
	 * @param [parentComponent]
	 *            This object contains parent id of the question
	 * @param [data]
	 *            This object contains question data
	 */
	dynamicallyAddElements : function(parentComponent, data) {
		var totalCnt = this.totalRequriedObject;
		var that = this;
		for (var i = 0, j = 0; i < totalCnt; i++, j++) {
			if (j >= this.totalObjectCount) {
				j = 0;
			}
			var attentionCount = 0, cautionCount = 0, okCount = 0;
			for (var k = 0; k < data[j].questionSet.length; k++) {
				if (data[j].questionSet[k].answer == "1") {
					attentionCount++;
				} else if (data[j].questionSet[k].answer == "2") {
					cautionCount++;
				} else if (data[j].questionSet[k].answer == "3") {
					okCount++;
				}
			}
			var domEle = document.createElement('div');
			domEle.setAttribute('id', 'img_' + i);
			domEle.setAttribute('data-internalId', data[j].id);
			domEle.className = 'cubeContainer side-section-count-' + data[j].id;

			parentComponent.appendChild(domEle);
			var cubeEle = $('<div class="cube"><div class="face one"></div> <div class="face two"> </div> <div class="face three"></div> <div class="face four"></div> <div class="face five"></div> <div class="face six"></div></div>');
			$(domEle).append(cubeEle);
			var frontFaceCube = $(cubeEle).find('.two');
			cubeEle = null;
			var labelContainer = $('<div class="label-wrapper"><div class="label-container"> <p class="gear-face-label">' + data[j].label + '</p> </div> </div>');
			frontFaceCube.append(labelContainer);
			labelContainer = null;
			var notifyContainer = $('<div class="notify-container"> <div class="attentionNotifier"></div> <div class="cautionNotifier"></div> <div class="okNotifier"></div> </div> ');
			frontFaceCube.append(notifyContainer);
			notifyContainer = null;

			var notifyCountContainer = $('<div class="notify-count-container"> <div class="attention-count">' + attentionCount + '</div> <div class="caution-count">' + cautionCount + '</div> <div class="ok-count">' + okCount + '</div> </div>');
			notifyCountContainer.className = 'notify-count-container';
			frontFaceCube.append(notifyCountContainer);
			notifyCountContainer = null;

			domEle.addEventListener("click", function(ev) {
				ev.preventDefault();
			}, false);

			$('#img_' + i).on("touchstart", function(event) {
				event.preventDefault();
				event.stopPropagation();
				that.rotateToDestinedIndex(event.currentTarget);
			});
			domEle = null;
		}
	},
	/**
	 * reset class is used to reset the global param
	 * @class reset
	 */
	reset : function() {

		this.element = null;
		this.rotation = 0;
		this.panelCount = 0;
		this.totalPanelCount = 0;
		this.theta = 0;
		this.isHorizontal = true;
		this.transformProp = "WebkitTransform";
		this.limelightIndex = 0;
		this.totalObjectCount = 0;
		this.totalRequriedObject = 0;
		this.initialCarouselLoadingComplete = false;
		this.arrSubmitToBackend = [];
		this.arrAvoidReplica = [];

	},
	/**
	 * modify class is used to modify the created structure based on the user data
	 * @class modify
	 */
	modify : function() {
		var panel, angle, i;
		this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
		this.theta = 360 / this.panelCount;
		if (this.theta >= 50) {
			this.panelSize = 295;
		} else if (this.theta < 50 && this.theta > 40) {
			this.panelSize = 265;
		} else if (this.theta > 36 && this.theta <= 40) {
			this.panelSize = 240;
		} else if (this.theta > 33 && this.theta <= 36) {
			this.panelSize = 230;
		} else if (this.theta > 30 && this.theta <= 33) {
			this.panelSize = 220;
		} else {
			this.panelSize = 210;
		}

		// do some trig to figure out how big the carousel
		// is in 3D space
		this.radius = Math.round((this.panelSize / 2) / Math.tan(Math.PI / this.panelCount));

		for ( i = 0; i < this.panelCount; i++) {
			panel = this.element.children[i];
			angle = this.theta * i;
			panel.style.opacity = 1;
			// rotate panel, then push it out in 3D space
			panel.style[this.transformProp] = this.rotateFn + '(' + angle + 'deg) translateZ(' + this.radius + 'px)';
		}

		// hide other panels
		for (; i < this.totalPanelCount; i++) {
			panel = this.element.children[i];
			panel.style.opacity = 0;
			panel.style[this.transformProp] = 'none';
		}

		// adjust rotation so panels are always flat
		this.rotation = Math.round(this.rotation / this.theta) * this.theta;
		$('#img_' + this.limelightIndex).find(".face").addClass("light-shadow");
		this.transform();

	},
	/**
	 * transform class is used to push the carousel back in 3D space, and rotate it
	 * @class transform
	 */
	transform : function() {
		// push the carousel back in 3D space,
		// and rotate it
		this.element.style[this.transformProp] = 'translateZ(-' + this.radius + 'px) ' + this.rotateFn + '(' + this.rotation + 'deg)';
	},
	/**
	 * rotateToDestinedIndex class is used to rotate the side section element based on the user click
	 * @class rotateToDestinedIndex
	 * @param [elem]
	 *            This object contains question data
	 */
	rotateToDestinedIndex : function(elem) {
		if (this.isAnimationOfQuestionContainerComplete) {
			this.initialCarouselLoadingComplete = true;
			this.filterQuestions(false, 0);
			var id = elem.id;
			var internalId = elem.getAttribute('data-internalId');
			if (this.mCurrentSelected != internalId) {
				this.mCurrentSelected = internalId;
			}
			var str = Number(String(id).split('_')[1]);

			var fromFrontDistance;
			if (str < this.limelightIndex) {
				fromFrontDistance = this.totalRequriedObject - this.limelightIndex + str;
			} else {
				fromFrontDistance = str - this.limelightIndex;
			}

			var fromBackDistance;

			if (this.limelightIndex == 0) {
				fromBackDistance = this.totalRequriedObject - str;
			} else if (this.limelightIndex < str) {
				fromBackDistance = this.limelightIndex + (this.totalRequriedObject - str);
			} else {
				fromBackDistance = this.limelightIndex - str;
			}

			if (fromBackDistance < fromFrontDistance) {
				increment = -fromBackDistance;
				this.rotation -= this.theta * increment;
			} else {
				increment = fromFrontDistance;
				this.rotation -= this.theta * increment;
			}
			if (increment !== 0) {
				$('#img_' + this.limelightIndex).find(".face").removeClass("light-shadow");
			}

			this.limelightIndex = str;

			this.transform();
		}
	},
	/**
	 * resetTheHighlight class is used to reset the highlighted question based on user moves
	 * @class resetTheHighlight
	 * @param [sListId]
	 *            This object contains question data
	 */
	resetTheHighlight : function(sListId) {
		$('#' + sListId + ' .question-layout').removeClass('question-layout-top-element question-layout-bottom-element');
		$('#' + sListId + ' .question-layout').addClass('question-layout-shift-left');
	},
	/**
	 * prioritizeQuestionHighlight class is used to reset the highlighted question based on user moves
	 * @class prioritizeQuestionHighlight
	 * @param [sListId]
	 *            This object contains question data
	 * @param [middle]
	 *            This object contains middle element id
	 * @param [top]
	 *            This object contains top element id
	 * @param [bottom]
	 *            This object contains bottom element id
	 */
	prioritizeQuestionHighlight : function(middle, top, bottom, listID) {
		var topElem = null;
		var bottomElem = null;
		var middleElem = $("#" + listID).find("#" + middle);
		if (top !== "" && top !== undefined) {
			topElem = $("#" + listID).find("#" + top);
		} else {
			topElem = "";
		}
		if (bottom !== "" && bottom !== undefined) {
			bottomElem = $("#" + listID).find("#" + bottom);
		} else {
			bottomElem = "";
		}
		this.resetTheHighlight(listID);
		if (middleElem !== "" && middleElem !== undefined) {
			middleElem.removeClass('question-layout-shift-left');
			middleElem.addClass('question-layout-middle-element');
			middleElem.find(' .mandatory_star_icon').empty();
			middleElem.find(' .mandatory_star_icon').html('<img src="css/images/common/questionare/icn_mandatory.png">');
			middleElem.find(' .toggle-overlay').hide();
			middleElem.find(' .comment-overlay').hide();
		}
		if (topElem !== "" && topElem !== undefined) {
			topElem.removeClass('question-layout-middle-element');
			topElem.addClass('question-layout-shift-left question-layout-top-element');
			topElem.find(' .mandatory_star_icon').empty();
			topElem.find(' .toggle-overlay').show();
			topElem.find(' .comment-overlay').show();
		}
		if (bottomElem !== "" && bottomElem !== undefined) {
			bottomElem.removeClass('question-layout-middle-element');
			bottomElem.addClass('question-layout-shift-left question-layout-bottom-element');
			bottomElem.find(' .mandatory_star_icon').empty();
			bottomElem.find(' .toggle-overlay').show();
			bottomElem.find(' .comment-overlay').show();
			;
		}
	}
}
/**
 * containsCaseInsensitive class is used avoid the case insensitive while filtering the questions
 * @class containsCaseInsensitive
 */
jQuery.expr[':'].containsCaseInsensitive = function(a, i, m) {
	return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};


/*function trace(str)
{
	//only for dev..tobe deleted
	console.log(str);
}*/