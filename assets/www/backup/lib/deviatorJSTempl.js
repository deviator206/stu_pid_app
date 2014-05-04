/**
 * @author sandeep_bamane
 */

HTMLTemplate = function() {

	this.temporaryCallback = null;
	this.jsonTemplates = {};
	this.bAllTemplateLoaded = false;
	return this;
}

HTMLTemplate.prototype = {

	loadTemplate : function(arrTemplateNames, sType, callBackFunction) {
		this.jsonTemplates = {};
		this.temporaryCallback = (callBackFunction != null) ? callBackFunction
				: null;

		var sContentToBeStored = "";
		if (sType == 'script') {
			for ( var nIndex = 0; nIndex < arrTemplateNames.length; nIndex++) {
				var sTemp = document.getElementById(arrTemplateNames[nIndex]);

				sContentToBeStored = sTemp.innerHTML
				this.jsonTemplates[arrTemplateNames[nIndex]] = {};
				this.jsonTemplates[arrTemplateNames[nIndex]].returnContent = sContentToBeStored;
			}
		} else {
			for ( var key in arrTemplateNames) {
				sContentToBeStored = arrTemplateNames[key].html;
				this.jsonTemplates[key] = {};
				this.jsonTemplates[key].returnContent = sContentToBeStored;
			}
		}

		this.bAllTemplateLoaded = true;
	},
	renderTemplate : function(templateName, data) {
		if (this.bAllTemplateLoaded) {// all template is loaded
			if (this.jsonTemplates.hasOwnProperty(templateName)) {// if
				// property
				// exist
				var sReturn = this.jsonTemplates[templateName].returnContent
				if (data != null || data != undefined) {
					var objT = this.clone(this.jsonTemplates);
					var sTempContent = this.constructData(data,
							objT[templateName].returnContent);
					sReturn = (sTempContent == undefined) ? "" : sTempContent;
				}
				return sReturn;
			}
		}
	},
	clone : function(obj) {
		if (obj == null || typeof (obj) != 'object')
			return obj;
		var temp = obj.constructor();
		// changed
		for ( var key in obj)
			temp[key] = this.clone(obj[key]);
		return temp;
	},

	constructData : function(data, target) {
		var returnString = undefined
		var sTemp = target;
		for ( var key in data) {
			var searchingKey = key.toLowerCase();
			searchingKey = '<%' + searchingKey + '%>'
			var nIndex = sTemp.indexOf(searchingKey);
			if (nIndex != -1) {
				sTemp = String(sTemp).replace(searchingKey, data[key]);
			}

		}
		returnString = sTemp
		return returnString;
	}
}

if (!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
		if (typeof this !== "function") {
			// closest thing possible to the ECMAScript 5 internal IsCallable
			// function
			throw new TypeError(
					"Function.prototype.bind - what is trying to be bound is not callable");
		}

		var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function() {
		}, fBound = function() {
			return fToBind.apply(this instanceof fNOP && oThis ? this : oThis,
					aArgs.concat(Array.prototype.slice.call(arguments)));
		};

		fNOP.prototype = this.prototype;
		fBound.prototype = new fNOP();

		return fBound;
	};
}

(function(window) {
	"use strict";

	var alert = window.alert,
	// the JQuery object
	$ = window.$, sParentDivName, moduleName, otherUIElements, AppUtility = (function() {
		var module = {
			isHelpOpen : false,
			initialize : function(sDivName, objData) {
				sParentDivName = sDivName
				otherUIElements = objData
			},
			showHelp : function(objJSON) {
				AppUtility.isHelpOpen = true;
				if (moduleName != objJSON.moduleName) {
					// new screen
					document.getElementById(sParentDivName).innerHTML = "";
					var arrT = objJSON.arrData;
					if (arrT === undefined)
						return;
					var domFrag = document.createDocumentFragment();
					for ( var i = 0; i < arrT.length; i++) {
						var mDomElement;
						mDomElement = document.createElement('div');
						mDomElement.innerHTML = arrT[i].sContent;
						switch (arrT[i].sType) {
						case "text":
							mDomElement.className = otherUIElements.helpText+ " " + arrT[i].className;
							break;
						case "left-round-clockwise-arrow":
							mDomElement.className = otherUIElements.clockwise+ " " + arrT[i].className;
							break;
						case "right-round-anti-clockwise-arrow":
							mDomElement.className = otherUIElements.antiClockwise+ " " + arrT[i].className;
							break;
						case "straight-arrow":
							mDomElement.className = otherUIElements.straigntArrow+ " " + arrT[i].className;
							break;
						case 'ok-btn':
							mDomElement.setAttribute('id', 'module-help-ok-btn')
							mDomElement.className = otherUIElements.okGotItButton+ " " + arrT[i].className;
							mDomElement.addEventListener("click",module.hideHelp.bind(module));
							break;
						}
						domFrag.appendChild(mDomElement);
					}
					document.getElementById(sParentDivName).appendChild(domFrag);
				}

				if (sParentDivName !== undefined)
					document.getElementById(sParentDivName).style.display = "block";
			},
			hideHelp : function() {
				if (sParentDivName !== undefined){
					document.getElementById(sParentDivName).style.display = "none";
					AppUtility.isHelpOpen = false;
					if(otherUIElements.closecallback !== undefined)
						{
							otherUIElements.closecallback();
						}
				}
			}
		};

		return module;

	}());

	// expose the object globally as a past of the namespace
	window.AppUtility = AppUtility;
}(window));