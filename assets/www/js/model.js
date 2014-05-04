/**
 * @author C5189602
 */


var resource_data = {
	getImageInstance : function(key) {
		return resource_data.images[key][1];
	},
	getPath : function(key) {
		return (resource_data.images[key] !== undefined ) ? resource_data.images[key][1].src : ""
	},
	images : {
		
		

	},
	toastTimer : 500,//millisecs
	featurelist :[
		{
			classname :'camera-img',
			description:'camera feature'
		},
		
		{
			classname :'battery-img',
			description:'battery feature'
		},
		{
			classname :'dualsim-img',
			description:'dual sim feature'
		},
		{
			classname :'fullhd-img',
			description:'full HD  feature'
		},
		{
			classname :'touchpanel-img',
			description:'Touch Panel feature'
		},
		{
			classname :'default-img',
			description:'Responsive Interface feature'
		},
		{
			classname :'default-img',
			description:'High Speed Processor feature'
		},
		{
			classname :'pixelmaster-img',
			description:'camera feature'
		},
		{
			classname :'default-img',
			description:'Android Latest feature'
		},
		{
			classname :'default-img',
			description:'Vibrant Color Option feature'
		},
		{
			classname :'default-img',
			description:'Rich multimedia and graphics feature'
		},
		{
			classname :'glovetouch-img',
			description:'glovetouch feature'
		},
		{
			classname :'microsd-img',
			description:'microsd feature'
		},
		{
			classname :'default-img',
			description:'INtel PROCESSOR feature'
		},
		{
			classname :'default-img',
			description:'EASY REMINDER feature'
		},
		{
			classname :'default-img',
			description:'Intutive Interface feature'
		}
		
	],
	dom : {//DIV NAMES
		'loading' : 'loading',
		'landing' : 'landing',
		'create-actual' : 'dreamfonecreation',
		'zoom' : 'dreamfonezoom',
		'signup' : 'dreamfonesignup',
		'restart': 'restart',
	},
	htmlentity : [''],
	appMode : 1, // 0 - xtreme debugging  mode OR 1 - dev mode OR 2 -live with no console
	screens : ["loading", "landing", "dreamfonecreation", "dreamfonezoom", "dreamfonesignup", "restart"]
}
