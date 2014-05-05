/**
 * @author C5189602
 */

function LandingScreen(a) {
	this.mApplication = a;
	this.mDivName = resource_data.dom['landing'];
	this.mGameSplashLoader = null;
	this.mGameAssetLoader = null;
	this.setUp()
}

LandingScreen.prototype = {

	setUp : function() {
		this.mApplication.showScreen(this.mDivName);
		trace(" Landing :Phn .");

		$("#" + this.mDivName).html($("#landing_screen_entity").html())
		document.getElementById("create_dream_phone").addEventListener("click", this.clickHandler.bind(this), false);
	},
	clickHandler : function(evt) {
		this.removeEventListener();
		this.mApplication.nextScene();

	},

	removeEventListener : function() {
		document.getElementById("create_dream_phone").removeEventListener("click", this.clickHandler.bind(this), false);
	},
	onWrapperPush : function(cmd, data) {

	}
}

/*

 function LandingScreen(a) {
 this.mApplication = a;
 this.mDivName = resource_data.dom['landing'];
 this.mGameSplashLoader = null;
 this.mGameAssetLoader = null;
 this.setUp()
 }

 LandingScreen.prototype = {

 setUp : function() {
 this.mApplication.showScreen(this.mDivName);

 var resourceKey, sHTML = this.mApplication.renderTemplate('loading_screen_ui', {
 });
 document.getElementById(this.mDivName).innerHTML = sHTML;

 trace(" loading..");
 },
 onWrapperPush : function(cmd, data) {

 }
 }

 * */

