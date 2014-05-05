/**
 * @author C5189602
 */

function DreamFoneScreen(a) {
	this.mApplication = a;
	this.mDivName = resource_data.dom['create-actual'];

	this.mdata = resource_data.featurelist;
	this.timer = -1;
	this.toast_timer = resource_data.toastTimer;
	this.arrCell = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
	this.setUp()
}

DreamFoneScreen.prototype = {

	setUp : function() {
		this.mApplication.showScreen(this.mDivName);
		trace(" Dream:Phn .");
		$(".main-conatiner").html($("#feature_screen_entity").html())
		
			//add dropover event

			$(".dragable").hammer({
				drag_max_touches : 0
			}).on("dragstart", this.onDragStart.bind(this));
			$(".dragable").hammer({
				drag_max_touches : 0
			}).on("drag", this.onDrag.bind(this));
			$(".dragable").hammer({
				drag_max_touches : 0
			}).on("dragend", this.handleDragLeave.bind(this));

			$(".dragable").hammer({
				drag_max_touches : 0
			}).on("click", this.clickHandler.bind(this));

			$(".dropped").hammer({
				drag_max_touches : 0
			}).on("dragstart", this.onDragStart.bind(this));
			$(".dropped").hammer({
				drag_max_touches : 0
			}).on("drag", this.onDrag.bind(this));
			$(".dropped").hammer({
				drag_max_touches : 0
			}).on("dragend", this.handleDragLeave_1.bind(this));

		
		
			$("#next_btn_fone").hammer({
				drag_max_touches : 0
			}).on("click", this.nextScreen.bind(this));
	

	},

	removeEventListener : function() {
		$("#next_btn_fone").hammer({
			drag_max_touches : 0
		}).off();

		$(".dropped").hammer({
			drag_max_touches : 0
		}).off();
		$(".dragable").hammer({
			drag_max_touches : 0
		}).off();
	},
	onDragStart : function(event) {

		var touches = event.gesture.touches;

		var clonedElem = $(event.currentTarget).clone();

		var width = event.currentTarget.clientWidth - 24;

		var height = event.currentTarget.clientHeight;

		clonedElem[0].id = "clonedElem";

		clonedElem.css({

			position : 'absolute',

			left : touches[0].pageX - width / 2,

			top : touches[0].pageY - height / 2,

			width : '160px',
			height : '140px'

		});

		$(".main-conatiner").append(clonedElem);

		event.currentTarget.style.opacity = "0.2";

		event.gesture.preventDefault();

	},

	onDrag : function(event) {

		var touches = event.gesture.touches;

		var width = event.currentTarget.clientWidth - 24;

		var height = event.currentTarget.clientHeight;

		$("#clonedElem").css({

			left : touches[0].pageX - width / 2,

			top : touches[0].pageY - height / 2

		});

		event.gesture.preventDefault();

	},
	handleDragLeave : function(evt) {
		console.log(evt.currentTarget.id + " :: " + this.arrCell.length);
		var nIndex = Number(String(evt.currentTarget.id).split("_")[1]);
		var available = this.arrCell.indexOf(-1);
		if (available !== -1) {
			this.arrCell[available] = nIndex;
			$("#cell" + available).addClass(this.mdata[nIndex].classname)
		} else {
			evt.currentTarget.style.opacity = "1";
		}
		/*else {
		 var prevIndex = this.arrCell.shift();
		 $("#cell").removeClass(this.mdata[prevIndex].classname)
		 this.arrCell.push(nIndex);
		 $("#cell"+this.arrCell.length).addClass(this.mdata[nIndex].classname)

		 }*/

		document.getElementById("clonedElem").parentNode.removeChild(document.getElementById("clonedElem"));
		//$("#cell1").addClass("camera-img ")
	},

	handleDragLeave_1 : function(evt) {

		var prevIndex = Number(String(evt.currentTarget.id).split("cell")[1]);
		;//this.arrCell.shift();
		var calcIndex = prevIndex;
		console.log(prevIndex + " :arrr: " + this.arrCell[calcIndex] + " :ce:" + this.arrCell);
		$("#cell" + prevIndex).removeClass(this.mdata[this.arrCell[calcIndex]].classname)
		$("#cell" + prevIndex).css("opacity", "1");
		$("#d_" + this.arrCell[calcIndex]).css("opacity", "1");
		this.arrCell[calcIndex] = -1;
		document.getElementById("clonedElem").parentNode.removeChild(document.getElementById("clonedElem"));

	},

	clickHandler : function(evt) {

		console.log("" + evt.currentTarget.id);
		var nIndex = Number(String(evt.currentTarget.id).split("_")[1]);
		this.showToast(this.mdata[nIndex].description);

		//this.mApplication.nextScene();

	},
	showToast : function(str) {
		clearTimeout(this.timer);
		document.getElementById('toast').innerHTML = str;
		document.getElementById('toast').style.opacity = "1";
		this.timer = setTimeout(function() {
			document.getElementById('toast').style.opacity = "0";

		}, this.toast_timer)
	},
	nextScreen : function() {
		this.removeEventListener();
		this.mApplication.featuresadded = this.arrCell;
		this.mApplication.nextScene();
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

