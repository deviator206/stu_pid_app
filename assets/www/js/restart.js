/**
 * @author C5189602
 */

function RestartScreen(a) {
	this.mApplication = a;
	this.mDivName = resource_data.dom['restart'];
	this.mGameSplashLoader = null;
	this.mGameAssetLoader = null;
	this.setUp()
}

RestartScreen.prototype = {

	setUp : function() {
		this.mApplication.showScreen(this.mDivName);
		trace(" Restart :Phn .");
		$("#"+this.mDivName).html($("#restart_screen_entity").html())
		document.getElementById("restart_app").addEventListener("click",this.clickHandler.bind(this),false);
	},
	clickHandler:function(evt)
	{
		
		this.mApplication.nextScene();
		
	},
	onWrapperPush : function(cmd, data) {

	}
}
