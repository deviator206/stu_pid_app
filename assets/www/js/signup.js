/**
 * @author C5189602
 */

function SignUp(a) {
	this.mApplication = a;
	this.mDivName = resource_data.dom['signup'];
	this.mGameSplashLoader = null;
	this.mGameAssetLoader = null;
	this.setUp()
}

SignUp.prototype = {

	setUp : function() {
		this.mApplication.showScreen(this.mDivName);
		trace(" SignUp :Phn .");
		document.getElementById("create_dream_phone").addEventListener("click",this.clickHandler.bind(this),false);
	},
	clickHandler:function(evt)
	{
		this.mApplication.nextScene();
		
	},
	onWrapperPush : function(cmd, data) {

	}
}
