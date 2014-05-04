AFM.LoginScreen = function(mParent) {
	this.pageID = "pageone";
	this.wrapperComponent = mParent;
	this.pageData = null
	this.setUp();
	this.userName = "";
	this.password = "";
}

AFM.LoginScreen.prototype = {
	setUp : function() {
		this.AddEventListener();
	},
	init : function(data) {
	},
	PageBeforeShow : function() {
	},
	PageShow : function() {
		Logger.log("Login PageShow", AFMLogger.trace, {
			filename : 'LoginScreen.js',
			methodname : 'PageShow'
		});
		this.wrapperComponent.mPopUpAction = "true";
		this.AddEventListener();
		$("#processing_wait_overlay").hide();
	},
	PageHide : function() {
		this.RemoveEventListener();
		Logger.log("Login PageHide", AFMLogger.trace, {
			filename : 'LoginScreen.js',
			methodname : 'PageHide'
		});
	},
	backButtonPressed : function() {
		this.wrapperComponent.goToPreviousPage();
	},
	AddEventListener : function() {
		var that = this;
		$('#login-btn').hammer().bind('click', this.doLogin.bind(this));

	},
	RemoveEventListener : function() {
		$('#login-btn').unbind();
		$('#user-name, #password').off();
	},

	/**
	 * registerSDCardPath class is used to find the device path to store the
	 * images and call the login api
	 * 
	 * @class registerSDCardPath
	 * @param [fileSystemData={}]
	 *            {Object} The object send the file path of the device
	 */
	registerSDCardPath : function(fileSystemData) {
		Logger.log(" registerSD card Path.", AFMLogger.trace, {
			filename : 'LoginScreen.js',
			methodname : 'Start Method:registerSDCardPath'
		});
		AFM.AppConfiguration.sdCardPath = fileSystemData.root.fullPath;
		AFM.AppConfiguration.sdCardPath += '/afm_vhc/';
		var that = this;
		$('#user-name').blur();
		$('#password').blur();
		this.userName = $('#user-name').val();
		this.password = $('#password').val();
		if (this.userName === "" || this.password === "") {
			$('#login-failed').css('visibility', 'visible');
			setTimeout(function() {
				$("#processing_wait_overlay").hide();
			}, 220);
			return false;
		}
		Logger.log("Calling phonegap layer", AFMLogger.trace, {
			filename : 'LoginScreen.js',
			methodname : 'registerSDCardPath'
		});
		setTimeout(function() {
			that.wrapperComponent.sendRequest('login_request', {
				uname : that.userName,
				passwd : that.password,
			}, that.loginStatus.bind(that), that.errorLogin.bind(that));
		}, 500);
		Logger.log(" registerSD card Path.", AFMLogger.trace, {
			filename : 'LoginScreen.js',
			methodname : 'End Method:registerSDCardPath'
		});
	},

	/**
	 * doLogin class is used to accpet login name and password and validate it.
	 * 
	 * @class doLogin
	 */
	doLogin : function() {

	},

	/**
	 * errorLogin class shows the error popup when user enters invalid login
	 * data and validate it.
	 * 
	 * @class errorLogin
	 */
	errorLogin : function() {

	}
}
