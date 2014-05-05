/**
 * @author C5189602
 */



$(document).ready(function() {
		appInstance = new AppWrapper();

});


var AppWrapper = function() {
	this.mScreenManager = resource_data.screens;
	this.nGameState = 10;
	this.mCurrentScreen ={};
	this.mHTMLTemplate = null;
	this.appRestarted =false;
	this.start();
}

AppWrapper.prototype = {
	renderTemplate : function(id, data) {
		var mH = this.mHTMLTemplate.renderTemplate(id, data)
		if (mH == undefined)
			trace(" INVALID ID FOR TEMPLATING : " + id);

		return (mH !== undefined) ? mH : "";
	},
	start :function()
	{
		this.mHTMLTemplate = new HTMLTemplate();
		this.nGameState = 20;
		this.nextScene();
	},
	resetSession : function() {
		this.nGameState = 20;
		this.featuresadded = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
	}
	,
	/*
	 10 -  Loading
	 20 - Landing
	 40 - Intro
	 60 - Actual Main Screen
	 80 - End Screen
	 * */
	nextScene : function() {
		trace(" showing : " + this.nGameState)
		switch(this.nGameState) {
			case 10:
				this.nGameState = 20;
				this.mCurrentScreen = new LoadingScreen(this);
				break;
			case 20:
				this.resetSession();
				this.nGameState = 40;
				this.mCurrentScreen = new LandingScreen(this);
				break;
			case 40:
				this.nGameState = 60;
				this.mCurrentScreen = new DreamFoneScreen(this);
				break;
			case 60:
				this.nGameState = 80;
				this.mCurrentScreen = new ZoomFoneScreen(this);
				break;
			case 80:
				this.nGameState = 100;
				
				this.mCurrentScreen = new SignUp(this);
				break;
			case 100 :
				this.nGameState = 20;
				this.appRestarted  =true;
				this.mCurrentScreen = new RestartScreen(this);
			
				break;	

		}
	},
	showScreen : function(c) {
		var a = 0;
		if (c !== undefined) {
			for ( a = 0; a < this.mScreenManager.length; a++) {
				if (c != this.mScreenManager[a]) {
					document.getElementById(this.mScreenManager[a]).style.display = "none"
				} else {
					document.getElementById(this.mScreenManager[a]).style.display = "block"
				}
			}
		} else {
			for ( a = 0; a < this.mScreenManager.length; a++) {
				document.getElementById(this.mScreenManager[a]).style.display = "none"
			}
		}

	}
}



trace = function(str)
{
	console.log("## APP LOGS : "+str);
}
