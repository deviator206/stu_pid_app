/**
 * @author C5189602
 */

function ZoomFoneScreen(a) {
	this.mApplication = a;
	this.mDivName = resource_data.dom['zoom'];
	this.mGameSplashLoader = null;
	this.mGameAssetLoader = null;
	this.setUp()
}

ZoomFoneScreen.prototype = {

	setUp : function() {
		this.mApplication.showScreen(this.mDivName);
		
		$("#zoomed_fone_overlap").html($("#zoom_screen_entity").html());
		
		
		trace(" Zoom :Phn .");
		var mdata = resource_data.featurelist;
		var i = 0,  arrFeatures=[];
		for ( i = 0; i < this.mApplication.featuresadded.length; i++) {
			if (this.mApplication.featuresadded[i] !== -1) {
				arrFeatures.push(this.mApplication.featuresadded[i]);
			}
		}

		if (arrFeatures.length == 0) {
			arrFeatures.push(0);
			arrFeatures.push(1);
		}

		for ( i = 0; i < arrFeatures.length; i++) {
			$("#cell_" + i).addClass(mdata[arrFeatures[i]].classname)
		}

		document.getElementById("next_btn_zoom").addEventListener("click", this.clickHandler.bind(this), false);
	},
	clickHandler : function(evt) {
		this.mApplication.nextScene();

	},
	onWrapperPush : function(cmd, data) {

	}
}
