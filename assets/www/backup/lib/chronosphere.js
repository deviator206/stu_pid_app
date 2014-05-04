(function($) {
	$.fn.invokeChronos = function(options) {
		var chronosObj = new Chronosphere();
		chronosObj.bindDefaults.bind(chronosObj)(options);
		chronosObj.saveCurrentTimeInfo();
		$(options.inputElem).on('tap', function() {			
			options.screenObj.wrapperComponent.mPopUpAction = 'dateTimePopup';
			chronosObj.populatePicker.bind(chronosObj)();
			$("#" + options.popupID).popup({
				history : false
			});
			$("#" + options.popupID).popup("open", {
				transition : "none"
			});
		});
	}
	var Chronosphere = function() {
		this.defaults = { // defaults object - Includes parameters to be set prior to initialization on the plugin.
			screenObj : null,
			inputElem : null,
			wrapperID : '',
			popupID : '',
			tplID : '',
			pickerIndex : 0,
			cancelBtnText : 'Cancel',
			setBtnText : 'Set',
			setHeaderText : function() {
				return "Header Text";
			},
			setInitialValue : null,
			formatInputValue : function() {
				
			},
			formatSequence: ["mm", "dd", "yyyy", "hrs", "mins", "timeFormat"]
		}
		
		/*** Class Variables ****/
		
		this.trimmedMonthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
		this.monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		this.todaysDate = null;
		this.todaysMonth = null;
		this.todaysYear = null;
		this.currentMonthIndex = null;
		this.currentDate = null;
		this.currentYear = null;
		this.currentHours = null;
		this.currentMins = null;
		this.currentFormat = null;
		this.finalValueArr = [];
		this.finalValueStr = "";
	}
	
	/******** Desc: 
	  Saves the current or default date attributes set in the defaults method.
	  @ Function - saveCurrentTimeInfo; @Class "Chronosphere"
	  
	 ***********/
	Chronosphere.prototype.saveCurrentTimeInfo = function() {
		var _dateObj = new Date();
		this.currentMonthIndex = _dateObj.getMonth();
		this.currentDate = _dateObj.getDate();
		this.currentYear = _dateObj.getFullYear();
		this.todaysMonth = this.trimmedMonthList[this.currentMonthIndex];
		this.todaysDate = this.currentDate;
		this.todaysYear = this.currentYear;
		this.currentHours = _dateObj.getHours();
		this.currentMins = _dateObj.getMinutes();
		if (this.currentHours >= 12) {
			this.currentFormat = "PM";
		} else {
			this.currentFormat = "AM";
		}
		if(this.currentHours > 12) {
			this.currentHours = this.currentHours - 12;	
		}
		if(this.defaults.setInitialValue !== null) {
			var initValObj = this.defaults.setInitialValue([this.currentMonthIndex, this.currentDate, this.currentYear, this.currentHours, this.currentMins, this.currentFormat]);
			this.currentMonthIndex = initValObj["mm"];
			this.currentDate = initValObj["dd"];
			this.currentYear = initValObj["yyyy"];
			this.currentHours = initValObj["hrs"];
			this.currentMins = initValObj["mins"];
			this.currentFormat = initValObj["timeFormat"]; 
		}
	};

	/******** Desc: 
	  Retrieves the changed/unchanged Date Attributes
	  @ Function - getDateAttr; @Class "Chronosphere"
	  
	 ***********/

	Chronosphere.prototype.getDateAttr = function(attr) {
		var _dateObj = new Date();
		var monthNum = null;
		switch(attr) {
			case "month":
				monthNum = this.currentMonthIndex;
				return this.trimmedMonthList[monthNum];
				break;
			case "date":
				return this.currentDate;
				break;
			case "year":
				return this.currentYear;
				break;
			case "hrs":
				return this.currentHours;
				break;
			case "mins":
				return this.currentMins;
				break;
			case "timeFormat":
				return this.currentFormat;
				break;
		}
	};
	
	/******** Desc: 
	  Returns the Maximum Number of days in a month based on the Current Changed/Unchanged Month.
	  @ Function - getCurrentMonthDays; @Class "Chronosphere"
	  
	 ***********/

	Chronosphere.prototype.getCurrentMonthDays = function() {
		var monthIndex = this.currentMonthIndex;
		return this.monthDays[monthIndex];
	};
	
	/******** Desc: 
	  Validates the defaults object with the pre-initialization values.
	  @ Function - bindDefaults; @Class "Chronosphere"
	  
	 ***********/
	Chronosphere.prototype.bindDefaults = function(options) {
		for (var key in this.defaults) {
			if (options[key] !== undefined) {
				this.defaults[key] = options[key];
			}
		}
	};
	
	/******** Desc: 
	  populates the Picker UI
	  @ Function - populatePicker; @Class "Chronosphere"
	  
	 ***********/
	Chronosphere.prototype.populatePicker = function() {		
		$('.date_time_popup').css('display','block');
		var that = this;
		var sHTMLContent = this.defaults.screenObj.wrapperComponent.mHTMLTemplate.renderTemplate(this.defaults.tplID, {
			picker_index : this.defaults.pickerIndex,
			header_text : this.defaults.setHeaderText(),
			header_index : this.defaults.pickerIndex,
			cancel_btn_index : this.defaults.pickerIndex,
			set_btn_index : this.defaults.pickerIndex,
			cancel_btn_text : this.defaults.cancelBtnText,
			set_btn_text : this.defaults.setBtnText,
			set_btn_text_index : this.defaults.pickerIndex,
			cancel_btn_text_index : this.defaults.pickerIndex,
			plus_btn_field_1 : this.defaults.formatSequence[0]+'_' + this.defaults.pickerIndex,
			display_field_1 : this.defaults.formatSequence[0]+'_' + this.defaults.pickerIndex,
			minus_btn_field_1 : this.defaults.formatSequence[0]+'_' + this.defaults.pickerIndex,
			plus_btn_field_2 : this.defaults.formatSequence[1]+'_' + this.defaults.pickerIndex,
			display_field_2 : this.defaults.formatSequence[1]+'_' + this.defaults.pickerIndex,
			minus_btn_field_2 : this.defaults.formatSequence[1]+'_' + this.defaults.pickerIndex,
			plus_btn_field_3 : this.defaults.formatSequence[2]+'_' + this.defaults.pickerIndex,
			display_field_3 : this.defaults.formatSequence[2]+'_' + this.defaults.pickerIndex,
			minus_btn_field_3 : this.defaults.formatSequence[2]+'_' + this.defaults.pickerIndex,
			plus_btn_field_4 : this.defaults.formatSequence[3]+'_' + this.defaults.pickerIndex,
			display_field_4 : this.defaults.formatSequence[3]+'_' + this.defaults.pickerIndex,
			minus_btn_field_4 : this.defaults.formatSequence[3]+'_' + this.defaults.pickerIndex,
			plus_btn_field_5 : this.defaults.formatSequence[4]+'_' + this.defaults.pickerIndex,
			display_field_5 : this.defaults.formatSequence[4]+'_' + this.defaults.pickerIndex,
			minus_btn_field_5 : this.defaults.formatSequence[4]+'_' + this.defaults.pickerIndex,
			plus_btn_format_field_1 : this.defaults.formatSequence[0],
			display_format_field_1 : this.defaults.formatSequence[0],
			minus_btn_format_field_1 : this.defaults.formatSequence[0],
			plus_btn_format_field_2 : this.defaults.formatSequence[1],
			display_format_field_2 : this.defaults.formatSequence[1],
			minus_btn_format_field_2 : this.defaults.formatSequence[1],
			plus_btn_format_field_3 : this.defaults.formatSequence[2],
			display_format_field_3 : this.defaults.formatSequence[2],
			minus_btn_format_field_3 : this.defaults.formatSequence[2],
			plus_btn_format_field_4 : this.defaults.formatSequence[3],
			display_format_field_4 : this.defaults.formatSequence[3],
			minus_btn_format_field_4 : this.defaults.formatSequence[3],
			plus_btn_format_field_5 : this.defaults.formatSequence[4],
			display_format_field_5 : this.defaults.formatSequence[4],
			minus_btn_format_field_5 : this.defaults.formatSequence[4],
			time_format_field : this.defaults.formatSequence[5],
			plus_control_index_1 : this.defaults.pickerIndex,
			display_control_index_1 : this.defaults.pickerIndex,
			minus_control_index_1 : this.defaults.pickerIndex,
			plus_control_index_2 : this.defaults.pickerIndex,
			display_control_index_2 : this.defaults.pickerIndex,
			minus_control_index_2 : this.defaults.pickerIndex,
			plus_control_index_3 : this.defaults.pickerIndex,
			display_control_index_3 : this.defaults.pickerIndex,
			minus_control_index_3 : this.defaults.pickerIndex,
			plus_control_index_4 : this.defaults.pickerIndex,
			display_control_index_4 : this.defaults.pickerIndex,
			minus_control_index_4 : this.defaults.pickerIndex,
			plus_control_index_5 : this.defaults.pickerIndex,
			display_control_index_5 : this.defaults.pickerIndex,
			minus_control_index_5 : this.defaults.pickerIndex,
			time_format_index : this.defaults.pickerIndex,
			display1_id : this.defaults.formatSequence[0]+"_text_" + this.defaults.pickerIndex,
			display2_id : this.defaults.formatSequence[1]+"_text_" + this.defaults.pickerIndex,
			display3_id : this.defaults.formatSequence[2]+"_text_" + this.defaults.pickerIndex,
			display4_id : this.defaults.formatSequence[3]+"_text_" + this.defaults.pickerIndex,
			display5_id : this.defaults.formatSequence[4]+"_text_" + this.defaults.pickerIndex,
			display6_id : this.defaults.formatSequence[5]+"_text_" + this.defaults.pickerIndex
		});
		$("#" + this.defaults.wrapperID).empty();
		$("#" + this.defaults.wrapperID).html(sHTMLContent);
		var eventElemsArr = [$("#picker_control_plus_btn_mm_" + this.defaults.pickerIndex), $("#picker_control_minus_btn_mm_" + this.defaults.pickerIndex), $("#picker_control_plus_btn_" + 'dd_' + this.defaults.pickerIndex), $("#picker_control_minus_btn_dd_" + this.defaults.pickerIndex), $("#picker_control_plus_btn_yyyy_" + this.defaults.pickerIndex), $("#picker_control_minus_btn_yyyy_" + this.defaults.pickerIndex), $("#picker_control_plus_btn_hrs_" + this.defaults.pickerIndex), $("#picker_control_minus_btn_hrs_" + this.defaults.pickerIndex), $("#picker_control_plus_btn_mins_" + this.defaults.pickerIndex), $("#picker_control_minus_btn_mins_" + this.defaults.pickerIndex), $("#picker_control_time_format_" + this.defaults.pickerIndex)];
		this.attachEventListeners(eventElemsArr);
		this.flashCurrentDate(this.defaults.pickerIndex);
	};
	
	/******** Desc: 
	  Changes Date - Time picker UI Attributes on change actions.
	  @ Function - flashCurrentDate; @Class "Chronosphere"
	  
	 ***********/
	Chronosphere.prototype.flashCurrentDate = function(index) {
		var month = this.getDateAttr("month");
		var date = this.getDateAttr("date");
		var year = this.getDateAttr("year");
		var hrs = this.getDateAttr("hrs");
		if (hrs < 10) {
			hrs = "0" + hrs;
		}
		var mins = this.getDateAttr("mins");
		if (mins < 10) {
			mins = "0" + mins;
		}
		var timeFormat = this.getDateAttr("timeFormat");
		$("#mm_text_" + index).empty();
		$("#yyyy_text_" + index).empty();
		$("#ddd_text_" + index).empty();
		$("#hrs_text_" + index).empty();
		$("#mins_text_" + index).empty();
		$("#timeFormat_text_" + index).empty();
		$("#mm_text_" + index).html(month);
		$("#dd_text_" + index).html(date);
		$("#yyyy_text_" + index).html(year);
		$("#hrs_text_" + index).html(hrs);
		$("#mins_text_" + index).html(mins);
		$("#timeFormat_text_" + index).html(timeFormat);
		this.formulateFinalStr();
	};
	
	/******** Desc: 
	  Attaches tap event Listeners on Picker action buttons
	  @ Function - attachEventListeners; @Class "Chronosphere"
	  
	 ***********/
	Chronosphere.prototype.attachEventListeners = function(elemsArr) {
		var incrementBool = true;
		var actionType = "";
		var controlType = "";
		var that = this;
		for (var i = 0; i < elemsArr.length; i++) {
			actionType = $(elemsArr[i]).attr('data-action');
			controlType = $(elemsArr[i]).attr('data-formatfield');
			if (actionType === 'plus') {
				incrementBool = true;
			} else {
				incrementBool = false;
			}
			$(elemsArr[i]).on('tap', this.initiateTimeLapse.bind(this, elemsArr[i], incrementBool, controlType))
		}
		$("#chronos_picker_set_btn_"+this.defaults.pickerIndex).on('tap', function() {
			$("#" + that.defaults.popupID).popup("close");
			that.defaults.formatInputValue(that.finalValueArr);
		});
		$("#chronos_picker_cancel_btn_"+this.defaults.pickerIndex).on('tap', function() {
			$("#" + that.defaults.popupID).popup("close");
		});
	};
	
	/******** Desc: 
	  Formulates the Final Date Time Values after Change.
	  @ Function - formulateFinalStr; @Class "Chronosphere"
	  
	 ***********/
	Chronosphere.prototype.formulateFinalStr = function() {
		this.finalValueArr = [];
		var month = this.getDateAttr("month");
		var date = this.getDateAttr("date");
		var year = this.getDateAttr("year");
		var hrs = this.getDateAttr("hrs");
		if (hrs < 10) {
			hrs = "0" + hrs;
		}
		var mins = this.getDateAttr("mins");
		if (mins < 10) {
			mins = "0" + mins;
		}
		var timeFormat = this.getDateAttr("timeFormat");
		for(var i = 0; i < this.defaults.formatSequence.length; i++) {
			switch(this.defaults.formatSequence[i]) {
				case "mm":
					this.finalValueArr.push(month);
				break;
				case "dd":
					this.finalValueArr.push(date);
				break;
				case "yyyy":
					this.finalValueArr.push(year);
				break;
				case "hrs":
					this.finalValueArr.push(hrs);
				break;
				case "mins":
					this.finalValueArr.push(mins);
				break;
				case "timeFormat":
					this.finalValueArr.push(timeFormat);
				break;
			}
		}
	};

	/******** Desc: 
	  Changes and Validates Picker's Date & Time Attributes based on Picker button actions.
	  @ Function - initiateTimeLapse, alterMonth, alterDate, alterYear, alterHrs, alterMins, alterFormat; @Class "Chronosphere"
	  
	 ***********/
	Chronosphere.prototype.initiateTimeLapse = function(elem, incrementBool, controlType) {
		switch(controlType) {
			case "mm":
				this.alterMonth(incrementBool);
				break;
			case "dd":
				this.alterDate(incrementBool);
				break;
			case "yyyy":
				this.alterYear(incrementBool);
				break;
			case "hrs":
				this.alterHrs(incrementBool);
				break;
			case "mins":
				this.alterMins(incrementBool);
				break;
			case "timeFormat":
				this.alterFormat();
				break;
		}
		this.flashCurrentDate(this.defaults.pickerIndex);
	};

	Chronosphere.prototype.alterMonth = function(incrementBool) {
		var maxDays = 0;
		if (incrementBool) {// increment months
			if (this.currentMonthIndex < 11) {
				this.currentMonthIndex++;
			}
		} else {// decrement months
			if (this.currentMonthIndex > 0) {
				this.currentMonthIndex--;
			}
		}
		maxDays = this.getCurrentMonthDays();
		if (this.currentDate > maxDays) {
			this.currentDate = maxDays;
		}
	};

	Chronosphere.prototype.alterDate = function(incrementBool) {
		var maxDays = this.getCurrentMonthDays();
		if (incrementBool) {// increment months
			if (this.currentDate < maxDays) {
				this.currentDate++;
			}
		} else {// decrement months
			if (this.currentDate > 1) {
				this.currentDate--;
			}
		}
	};

	Chronosphere.prototype.alterYear = function(incrementBool) {
		var maxYear = this.todaysYear + 3;
		var minYear = this.todaysYear;
		if (incrementBool) {// increment months
			if (this.currentYear < maxYear) {
				this.currentYear++;
			}
		} else {// decrement months
			if (this.currentYear > minYear) {
				this.currentYear--;
			}
		}
	};

	Chronosphere.prototype.alterHrs = function(incrementBool) {
		var maxHrs = 12;
		var minHrs = 1;
		if (incrementBool) {// increment months
			if (this.currentHours < maxHrs) {
				this.currentHours++;
			}
		} else {// decrement months
			if (this.currentHours > minHrs) {
				this.currentHours--;
			}
		}
	};

	Chronosphere.prototype.alterMins = function(incrementBool) {
		var maxMins = 59;
		var minMins = 0;
		if (incrementBool) {// increment months
			if (this.currentMins < maxMins) {
				this.currentMins++;
			}
		} else {// decrement months
			if (this.currentMins > minMins) {
				this.currentMins--;
			}
		}
	};

	Chronosphere.prototype.alterFormat = function() {
		if (this.currentFormat === 'PM') {
			this.currentFormat = "AM";
		} else {
			this.currentFormat = "PM";
		}
	};
})(jQuery);
