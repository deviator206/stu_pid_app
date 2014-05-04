/**
 * @author developer-####
 */

AFM.AppConfiguration = {

    /*
     *
     * SPECIFYING THE SCREEN NAMES ADD YOUR SCREEN|PAGES NAMES and IDs here
     * key:value <tag_id> : <javascript_class_name>
     */
    screenName : {
        'login_page' : 'LoginScreen',
        'page_two' : 'SearchScreen',
        'page_three' : 'SearchResultScreen',
        'page_four' : 'JobDetailScreen',
        'page_five' : 'AppScreen'
    },

    /*
     * first Page which is to be loaded. We must supply id of the tag
     */
    triggerAppStart : 'login_page',
    /*
     * STATE THE DEBUG MODE 0 = use local DummyData 1 = fetch it from Server
     */
    appMode : 0,
    sdCardPath :'',
    previousTime : '',
    /* camera mode - 0 is getting crashed at our end But camera mode - 1 no crashing*/
	cameraMode : 0,
	image_path: ["file:///mnt/sdcard/afm_vhc/0AK8540549_001_1_1.jpg",
	              "file:///mnt/sdcard/afm_vhc/0AK8540549_001_1_2.jpg",
	              "file:///mnt/sdcard/afm_vhc/0AK8540549_001_1_3.jpg"],

    /*
     * REST CALL APIs
     */
    REST_CALLS : {
        'login_request' : {
            url : 'rest/cps/aboutPage/'
        }
    },

    /*
     * DUMMY DATA REQUIRED ONLY WHEN APPMODE IS 0
     */
    dummyData : {
        loginData : {
            username : 'test',
            password : 'test'
        }

    },

    /**AppData :[
     * 	<Key_jobCard_Id> :{GeneralInfo:{Search data},sections:[ questions,answers,sectionlist]}
     *  ]
     * **/
    AppData : {
        '0300028997' : {
            general_info : {
                year : "2006",
                make : "Toyota",
                model : "TYC1563 (CAMRY)",
                contact_number : '805 XXX 5559',
                customer_name : 'Ahsan Riaz',
                transmission : 'Automatic',
                type_of_vehicle : 'Sedan',
                year_of_mfg : '2006',
                model : 'Carolla',
                make_of_vehicle : 'Toyota',
                mileage : '1500Kms',
                plate : 'Dubai | 59341',
                date : '14-03-2013',
				division:'',
				start_time:'10:00 PM',
				service_advisor_name:'Ravi Dhanawade',
				chasis:'6T1BE42K68X477180'
            },
            sections : [
			{
                id : '10',
                label : ' HAND OVER VERIFICATION',
                extra_label : '',
                questionSet : [{
                    section_id : '001',
                    content : 'Battery check',
                    question_id : '1',
                    question_type : 'DATETIME'

                }, {
                    section_id : '10',
                    content : '  JOB DETAILS EXPLAINED',
                    question_id : '2',
                    question_type : 'FREETEXT',
					mandatory: 'x'

                }, {
                    section_id : '001',
                    content : ' Door Window and Sunroof Operation Door Window and Sunroof Operation',
                    question_id : '3',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '10',
                    content : ' Visible hoses',
                    question_id : '4',
                    question_type : 'DATETIME',
                    mandatory : 'x'

                }],
            }, 
			{
                id : '002',
                label : ' Under Hood Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '002',
                    content : '  Visible drive belts',
                    question_id : '1',
                    question_type : 'RADIOBUTTON',
                    mandatory : 'x'

                }, {
                    section_id : '002',
                    content : ' Visible hoses',
                    question_id : '2',
                    question_type : 'RADIOBUTTON',
                    mandatory : 'x'

                }, {
                    section_id : '002',
                    content : 'Battery check',
                    question_id : '3',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '002',
                    content : 'Brake fluid condition',
                    question_id : '4',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '002',
                    content : 'Engine Oil condition',
                    question_id : '5',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '002',
                    content : 'Coolant condition',
                    question_id : '6',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '002',
                    content : 'Windscreen washer fluid',
                    question_id : '7',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '002',
                    content : 'Power steering fluid',
                    question_id : '8',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '002',
                    content : 'Automatic/Manual Transmission Fluid',
                    question_id : '9',
                    question_type : 'RADIOBUTTON'

                }]
            }, 
			{
                id : '003',
                label : ' Under Carriage Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '003',
                    content : '  Wheel Cylinders - Wheels OFF',
                    question_id : '1',
                    question_type : 'DATETIME',
                    mandatory : 'x'

                }, {
                    section_id : '003',
                    content : ' Brake hoses',
                    question_id : '2',
                    question_type : 'DATETIME'

                }, {
                    section_id : '003',
                    content : ' Drive shaft boots',
                    question_id : '3',
                    question_type : 'DATETIME'

                }, {
                    section_id : '003',
                    content : ' Ball joints',
                    question_id : '4',
                    question_type : 'DATETIME'

                }, {
                    section_id : '003',
                    content : ' Suspension system',
                    question_id : '5',
                    question_type : 'DATETIME'

                }, {
                    section_id : '003',
                    content : ' Propeller shaft',
                    question_id : '6',
                    question_type : 'DATETIME'

                }, {
                    section_id : '003',
                    content : 'Fuel lines and tank',
                    question_id : '7',
                    question_type : 'DATETIME'

                }, {
                    section_id : '003',
                    content : 'Exhaust system',
                    question_id : '8',
                    question_type : 'DATETIME'

                }, {
                    section_id : '003',
                    content : ' Engine mounting',
                    question_id : '9',
                    question_type : 'DATETIME'

                }, {
                    section_id : '003',
                    content : 'PCV Valve and hoses',
                    question_id : '10',
                    question_type : 'DATETIME'
                }, {
                    section_id : '003',
                    content : 'Evaporative system for leaks',
                    question_id : '11',
                    question_type : 'DATETIME'
                }]
            }, 
			{
                id : '004',
                label : ' Tyre Report',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '004',
                    content : '  Wheel Balancing',
                    question_id : '1',
                    question_type : 'FREETEXT',
 					mandatory : 'x'
                }, {
                    section_id : '004',
                    content : ' Front Right',
                    question_id : '2',
                    question_type : 'FREETEXT'

                }, {
                    section_id : '004',
                    content : 'Front Left',
                    question_id : '3',
                    question_type : 'FREETEXT'

                }, {
                    section_id : '004',
                    content : 'Rear Right',
                    question_id : '4',
                    question_type : 'FREETEXT'

                }, {
                    section_id : '004',
                    content : 'Rear Left',
                    question_id : '5',
                    question_type : 'FREETEXT'

                }, {
                    section_id : '004',
                    content : 'Spare',
                    question_id : '6',
                    question_type : 'OPTIONLIST',
					question_data :['< 2mm' ,'2-4mm', '>4mm']

                }]
            }, 
			{
                id : '005',
                label : ' Brake/Disc Report',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '005',
                    content : ' Front Right',
                    question_id : '1',
                    question_type : 'CHECKBOX',
                    mandatory : 'x'

                }, {
                    section_id : '005',
                    content : ' Front Left',
                    question_id : '2',
                    question_type : 'CHECKBOX',
                    mandatory : 'x'

                }, {
                    section_id : '005',
                    content : 'Rear Right',
                    question_id : '3',
                    question_type : 'CHECKBOX'

                }, {
                    section_id : '005',
                    content : 'Rear Left',
                    question_id : '4',
                    question_type : 'CHECKBOX'

                }, {
                    section_id : '005',
                    content : 'Discs',
                    question_id : '5',
                    question_type : 'OPTIONLIST',
                    mandatory : 'x',
					question_data :['< 2mm' ,'2-4mm', '>4mm']

                }, {
                    section_id : '005',
                    content : 'Linings',
                    question_id : '6',
                    question_type : 'OPTIONLIST',
                    mandatory : 'x',
					question_data :['< 1mm' ,'1-4mm', '>4mm']

                }
				]
            }]	//end of sections
        }// end of jobcard content
       
        ,
        'AK3540548' : {
            general_info : {
                year : "2008",
                make : "Toyota",
                model : "Condor",
                contact_number : '805 XXX 5559',
                customer_name : 'Mr. C K',
                transmission : 'Automatic',
                type_of_vehicle : 'Sedan',
                year_of_mfg : '2008',
                model : 'Condor',
                make_of_vehicle : 'Toyota',
                mileage : '1500Kms',
                plate : 'Dubai | 59341',
                date : '14-03-2013',
				division:'',
				start_time:'10:00 PM',
				service_advisor_name:'Abdul Karim',
				chasis:'21ADS'
            },
            sections : [{
                id : '001',
                label : ' Condition Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '001',
                    content : '  Door Lock Operation by Key/Remote',
                    question_id : '1',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : ' Door Window and Sunroof Operation',
                    question_id : '2',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : ' Engine Start Condition',
                    question_id : '3',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : ' Horn Sound',
                    question_id : '4',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : ' Washer Jets and All Wiper Blade Operation',
                    question_id : '5',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : 'Clutch Operation',
                    question_id : '6',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : 'Parking Brake Operation',
                    question_id : '7',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : 'Brake Pedal Operation',
                    question_id : '8',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : 'All Mirrors Operation',
                    question_id : '9',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : 'Air Condition Operation',
                    question_id : '10',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : 'Radio, Satellite Navigation,Antenna Operation',
                    question_id : '11',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : 'All Cameras and Parking Sensor Operation',
                    question_id : '12',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : 'Dash Gauge / Warning Lamps Display',
                    question_id : '13',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : 'All Interior Lights Operation',
                    question_id : '14',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : 'Headlight and Fog Lamps Operation',
                    question_id : '15',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : 'Indicator and Hazard Light Operation',
                    question_id : '16',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : 'Brake, Tail and Back-up lamp Operation',
                    question_id : '17',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : 'Seat Belt Operation',
                    question_id : '18',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '001',
                    content : 'Idle Speed Operation',
                    question_id : '19',
                    question_type : 'RADIOBUTTON'

                }],
            }, {
                id : '002',
                label : ' Under Hood Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '002',
                    content : '  Visible drive belts',
                    question_id : '1',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '002',
                    content : ' Visible hoses',
                    question_id : '2',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '002',
                    content : 'Battery check',
                    question_id : '3',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '002',
                    content : 'Brake fluid condition',
                    question_id : '4',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '002',
                    content : 'Engine Oil condition',
                    question_id : '5',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '002',
                    content : 'Coolant condition',
                    question_id : '6',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '002',
                    content : 'Windscreen washer fluid',
                    question_id : '7',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '002',
                    content : 'Power steering fluid',
                    question_id : '8',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '002',
                    content : 'Automatic/Manual Transmission Fluid',
                    question_id : '9',
                    question_type : 'RADIOBUTTON'

                }]
            }, {
                id : '003',
                label : ' Under Carriage Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '003',
                    content : '  Wheel Cylinders - Wheels OFF',
                    question_id : '1',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '003',
                    content : ' Brake hoses',
                    question_id : '2',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '003',
                    content : ' Drive shaft boots',
                    question_id : '3',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '003',
                    content : ' Ball joints',
                    question_id : '4',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '003',
                    content : ' Suspension system',
                    question_id : '5',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '003',
                    content : ' Propeller shaft',
                    question_id : '6',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '003',
                    content : 'Fuel lines and tank',
                    question_id : '7',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '003',
                    content : 'Exhaust system',
                    question_id : '8',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '003',
                    content : ' Engine mounting',
                    question_id : '9',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '003',
                    content : 'PCV Valve and hoses',
                    question_id : '10',
                    question_type : 'RADIOBUTTON'
                }, {
                    section_id : '003',
                    content : 'Evaporative system for leaks',
                    question_id : '11',
                    question_type : 'RADIOBUTTON'
                }]
            }, {
                id : '004',
                label : ' Tyre Report',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '004',
                    content : '  Wheel Balancing',
                    question_id : '1',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '004',
                    content : ' Front Right',
                    question_id : '2',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '004',
                    content : 'Front Left',
                    question_id : '3',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '004',
                    content : 'Rear Right',
                    question_id : '4',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '004',
                    content : 'Rear Left',
                    question_id : '5',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '004',
                    content : 'Spare',
                    question_id : '6',
                    question_type : 'OPTIONLIST',
					question_data :['< 2mm' ,'2-4mm', '>4mm']

                }]
            }, {
                id : '005',
                label : ' Brake/Disc Report',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '005',
                    content : ' Front Right',
                    question_id : '1',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '005',
                    content : ' Front Left',
                    question_id : '2',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '005',
                    content : 'Rear Right',
                    question_id : '3',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '005',
                    content : 'Rear Left',
                    question_id : '4',
                    question_type : 'RADIOBUTTON'

                }, {
                    section_id : '005',
                    content : 'Discs',
                    question_id : '5',
                    question_type : 'OPTIONLIST',
					question_data :['< 2mm' ,'2-4mm', '>4mm']

                }, {
                    section_id : '005',
                    content : 'Linings',
                    question_id : '6',
                    question_type : 'OPTIONLIST',
					question_data :['< 1mm' ,'1-4mm', '>4mm']

                }]
            }]
        }// end of jobcard content

        ,
        'AK4540548' : {
            general_info : {
                year : "2007",
                make : "Toyota",
                model : "Cressida",
                contact_number : '805 XXX 5559',
                customer_name : 'Mr. D K',
                transmission : 'Automatic',
                type_of_vehicle : 'Sedan',
                year_of_mfg : '2007',
                model : 'Cressida',
                make_of_vehicle : 'Toyota',
                mileage : '1500Kms',
                plate : 'Dubai | 59341',
                date : '14-03-2013',
				division:'',
				start_time:'10:00 PM',
				service_advisor_name:'Abdul Karim',
				chasis:'MH2189'
            },
            sections : [{
                id : '001',
                label : ' Condition Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '001',
                    content : '  Door Lock Operation by Key/Remote',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Door Window and Sunroof Operation',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Engine Start Condition',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Horn Sound',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Washer Jets and All Wiper Blade Operation',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Clutch Operation',
                    question_id : '6',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Parking Brake Operation',
                    question_id : '7',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Brake Pedal Operation',
                    question_id : '8',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'All Mirrors Operation',
                    question_id : '9',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Air Condition Operation',
                    question_id : '10',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Radio, Satellite Navigation,Antenna Operation',
                    question_id : '11',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'All Cameras and Parking Sensor Operation',
                    question_id : '12',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Dash Gauge / Warning Lamps Display',
                    question_id : '13',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'All Interior Lights Operation',
                    question_id : '14',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Headlight and Fog Lamps Operation',
                    question_id : '15',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Indicator and Hazard Light Operation',
                    question_id : '16',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Brake, Tail and Back-up lamp Operation',
                    question_id : '17',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Seat Belt Operation',
                    question_id : '18',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Idle Speed Operation',
                    question_id : '19',
                    question_type : '1'

                }],
            }, {
                id : '002',
                label : ' Under Hood Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '002',
                    content : '  Visible drive belts',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : ' Visible hoses',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Battery check',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Brake fluid condition',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Engine Oil condition',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Coolant condition',
                    question_id : '6',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Windscreen washer fluid',
                    question_id : '7',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Power steering fluid',
                    question_id : '8',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Automatic/Manual Transmission Fluid',
                    question_id : '9',
                    question_type : '1'

                }]
            }, {
                id : '003',
                label : ' Under Carriage Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '003',
                    content : '  Wheel Cylinders - Wheels OFF',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Brake hoses',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Drive shaft boots',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Ball joints',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Suspension system',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Propeller shaft',
                    question_id : '6',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : 'Fuel lines and tank',
                    question_id : '7',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : 'Exhaust system',
                    question_id : '8',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Engine mounting',
                    question_id : '9',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : 'PCV Valve and hoses',
                    question_id : '10',
                    question_type : '1'
                }, {
                    section_id : '003',
                    content : 'Evaporative system for leaks',
                    question_id : '11',
                    question_type : '1'
                }]
            }, {
                id : '004',
                label : ' Tyre Report',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '004',
                    content : '  Wheel Balancing',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : ' Front Right',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Front Left',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Rear Right',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Rear Left',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Spare',
                    question_id : '6',
                    question_type : '2',
					question_data :['< 2mm' ,'2-4mm', '>4mm']

                }]
            }, {
                id : '005',
                label : ' Brake/Disc Report',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '005',
                    content : ' Front Right',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : ' Front Left',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : 'Rear Right',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : 'Rear Left',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : 'Discs',
                    question_id : '5',
                    question_type : '2',
					question_data :['< 2mm' ,'2-4mm', '>4mm']

                }, {
                    section_id : '005',
                    content : 'Linings',
                    question_id : '6',
                    question_type : '2',
					question_data :['< 1mm' ,'1-4mm', '>4mm']

                }]
            }]
        }// end of jobcard content

        ,
        'AB5540548' : {
            general_info : {
                year : "2008",
                make : "Toyota",
                model : "Fortuner",
                contact_number : '805 XXX 5559',
                customer_name : 'Mr. E K',
                transmission : 'Automatic',
                type_of_vehicle : 'Sedan',
                year_of_mfg : '2008',
                model : 'Fortuner',
                make_of_vehicle : 'Toyota',
                mileage : '1500Kms',
                plate : 'Dubai | 59341',
                date : '14-03-2013',
				division:'',
				start_time:'10:00 PM',
				service_advisor_name:'Abdul Karim',
				chasis:'M2536'
            },
            sections : [{
                id : '001',
                label : ' Condition Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '001',
                    content : '  Door Lock Operation by Key/Remote',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Door Window and Sunroof Operation',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Engine Start Condition',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Horn Sound',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Washer Jets and All Wiper Blade Operation',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Clutch Operation',
                    question_id : '6',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Parking Brake Operation',
                    question_id : '7',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Brake Pedal Operation',
                    question_id : '8',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'All Mirrors Operation',
                    question_id : '9',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Air Condition Operation',
                    question_id : '10',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Radio, Satellite Navigation,Antenna Operation',
                    question_id : '11',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'All Cameras and Parking Sensor Operation',
                    question_id : '12',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Dash Gauge / Warning Lamps Display',
                    question_id : '13',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'All Interior Lights Operation',
                    question_id : '14',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Headlight and Fog Lamps Operation',
                    question_id : '15',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Indicator and Hazard Light Operation',
                    question_id : '16',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Brake, Tail and Back-up lamp Operation',
                    question_id : '17',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Seat Belt Operation',
                    question_id : '18',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Idle Speed Operation',
                    question_id : '19',
                    question_type : '1'

                }],
            }, {
                id : '002',
                label : ' Under Hood Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '002',
                    content : '  Visible drive belts',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : ' Visible hoses',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Battery check',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Brake fluid condition',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Engine Oil condition',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Coolant condition',
                    question_id : '6',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Windscreen washer fluid',
                    question_id : '7',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Power steering fluid',
                    question_id : '8',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Automatic/Manual Transmission Fluid',
                    question_id : '9',
                    question_type : '1'

                }]
            }, {
                id : '003',
                label : ' Under Carriage Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '003',
                    content : '  Wheel Cylinders - Wheels OFF',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Brake hoses',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Drive shaft boots',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Ball joints',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Suspension system',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Propeller shaft',
                    question_id : '6',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : 'Fuel lines and tank',
                    question_id : '7',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : 'Exhaust system',
                    question_id : '8',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Engine mounting',
                    question_id : '9',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : 'PCV Valve and hoses',
                    question_id : '10',
                    question_type : '1'
                }, {
                    section_id : '003',
                    content : 'Evaporative system for leaks',
                    question_id : '11',
                    question_type : '1'
                }]
            }, {
                id : '004',
                label : ' Tyre Report',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '004',
                    content : '  Wheel Balancing',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : ' Front Right',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Front Left',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Rear Right',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Rear Left',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Spare',
                    question_id : '6',
                    question_type : '2',
					question_data :['< 2mm' ,'2-4mm', '>4mm']

                }]
            }, {
                id : '005',
                label : ' Brake/Disc Report',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '005',
                    content : ' Front Right',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : ' Front Left',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : 'Rear Right',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : 'Rear Left',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : 'Discs',
                    question_id : '5',
                    question_type : '2',
					question_data :['< 2mm' ,'2-4mm', '>4mm']

                }, {
                    section_id : '005',
                    content : 'Linings',
                    question_id : '6',
                    question_type : '2',
					question_data :['< 1mm' ,'1-4mm', '>4mm']

                }]
            }]
        }// end of jobcard content

        ,
        'AK6540548' : {
            general_info : {
                year : "2002",
                make : "Toyota",
                model : "Probox",
                contact_number : '805 XXX 5559',
                customer_name : 'Mr. G K',
                transmission : 'Automatic',
                type_of_vehicle : 'Sedan',
                year_of_mfg : '2002',
                model : 'Probox',
                make_of_vehicle : 'Toyota',
                mileage : '1500Kms',
                plate : 'Dubai | 59341',
                date : '14-03-2013',
				division:'',
				start_time:'10:00 PM',
				service_advisor_name:'Abdul Karim',
				chasis:'LKU6'
            },
            sections : [{
                id : '001',
                label : ' Condition Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '001',
                    content : '  Door Lock Operation by Key/Remote',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Door Window and Sunroof Operation',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Engine Start Condition',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Horn Sound',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Washer Jets and All Wiper Blade Operation',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Clutch Operation',
                    question_id : '6',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Parking Brake Operation',
                    question_id : '7',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Brake Pedal Operation',
                    question_id : '8',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'All Mirrors Operation',
                    question_id : '9',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Air Condition Operation',
                    question_id : '10',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Radio, Satellite Navigation,Antenna Operation',
                    question_id : '11',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'All Cameras and Parking Sensor Operation',
                    question_id : '12',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Dash Gauge / Warning Lamps Display',
                    question_id : '13',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'All Interior Lights Operation',
                    question_id : '14',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Headlight and Fog Lamps Operation',
                    question_id : '15',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Indicator and Hazard Light Operation',
                    question_id : '16',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Brake, Tail and Back-up lamp Operation',
                    question_id : '17',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Seat Belt Operation',
                    question_id : '18',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Idle Speed Operation',
                    question_id : '19',
                    question_type : '1'

                }],
            }, {
                id : '002',
                label : ' Under Hood Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '002',
                    content : '  Visible drive belts',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : ' Visible hoses',
                    question_id : '2',
                    question_type : ''

                }, {
                    section_id : '002',
                    content : 'Battery check',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Brake fluid condition',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Engine Oil condition',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Coolant condition',
                    question_id : '6',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Windscreen washer fluid',
                    question_id : '7',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Power steering fluid',
                    question_id : '8',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Automatic/Manual Transmission Fluid',
                    question_id : '9',
                    question_type : '1'

                }]
            }, {
                id : '003',
                label : ' Under Carriage Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '003',
                    content : '  Wheel Cylinders - Wheels OFF',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Brake hoses',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Drive shaft boots',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Ball joints',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Suspension system',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Propeller shaft',
                    question_id : '6',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : 'Fuel lines and tank',
                    question_id : '7',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : 'Exhaust system',
                    question_id : '8',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Engine mounting',
                    question_id : '9',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : 'PCV Valve and hoses',
                    question_id : '10',
                    question_type : '1'
                }, {
                    section_id : '003',
                    content : 'Evaporative system for leaks',
                    question_id : '11',
                    question_type : '1'
                }]
            }, {
                id : '004',
                label : ' Tyre Report',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '004',
                    content : '  Wheel Balancing',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : ' Front Right',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Front Left',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Rear Right',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Rear Left',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Spare',
                    question_id : '6',
                    question_type : '2',
					question_data :['< 2mm' ,'2-4mm', '>4mm']

                }]
            }, {
                id : '005',
                label : ' Brake/Disc Report',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '005',
                    content : ' Front Right',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : ' Front Left',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : 'Rear Right',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : 'Rear Left',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : 'Discs',
                    question_id : '5',
                    question_type : '2',
					question_data :['< 2mm' ,'2-4mm', '>4mm']

                }, {
                    section_id : '005',
                    content : 'Linings',
                    question_id : '6',
                    question_type : '2',
					question_data :['< 1mm' ,'1-4mm', '>4mm']

                }]
            }]
        }// end of jobcard content

		
		
		,
        'AK7540548' : {
            general_info : {
                year : "2008",
                make : "Toyota",
                model : "Condor",
                contact_number : '805 XXX 5559',
                customer_name : 'Mr. C K',
                transmission : 'Automatic',
                type_of_vehicle : 'Sedan',
                year_of_mfg : '2008',
                model : 'Condor',
                make_of_vehicle : 'Toyota',
                mileage : '1500Kms',
                plate : 'Dubai | 59341',
                date : '14-03-2013',
				division:'',
				start_time:'10:00 PM',
				service_advisor_name:'Abdul Karim',
				chasis:'2136'
            },
            sections : [{
                id : '001',
                label : ' Condition Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '001',
                    content : '  Door Lock Operation by Key/Remote',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Door Window and Sunroof Operation',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Engine Start Condition',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Horn Sound',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Washer Jets and All Wiper Blade Operation',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Clutch Operation',
                    question_id : '6',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Parking Brake Operation',
                    question_id : '7',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Brake Pedal Operation',
                    question_id : '8',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'All Mirrors Operation',
                    question_id : '9',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Air Condition Operation',
                    question_id : '10',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Radio, Satellite Navigation,Antenna Operation',
                    question_id : '11',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'All Cameras and Parking Sensor Operation',
                    question_id : '12',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Dash Gauge / Warning Lamps Display',
                    question_id : '13',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'All Interior Lights Operation',
                    question_id : '14',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Headlight and Fog Lamps Operation',
                    question_id : '15',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Indicator and Hazard Light Operation',
                    question_id : '16',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Brake, Tail and Back-up lamp Operation',
                    question_id : '17',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Seat Belt Operation',
                    question_id : '18',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Idle Speed Operation',
                    question_id : '19',
                    question_type : '1'

                }],
            }, {
                id : '002',
                label : ' Under Hood Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '002',
                    content : '  Visible drive belts',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : ' Visible hoses',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Battery check',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Brake fluid condition',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Engine Oil condition',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Coolant condition',
                    question_id : '6',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Windscreen washer fluid',
                    question_id : '7',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Power steering fluid',
                    question_id : '8',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Automatic/Manual Transmission Fluid',
                    question_id : '9',
                    question_type : '1'

                }]
            }, {
                id : '003',
                label : ' Under Carriage Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '003',
                    content : '  Wheel Cylinders - Wheels OFF',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Brake hoses',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Drive shaft boots',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Ball joints',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Suspension system',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Propeller shaft',
                    question_id : '6',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : 'Fuel lines and tank',
                    question_id : '7',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : 'Exhaust system',
                    question_id : '8',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Engine mounting',
                    question_id : '9',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : 'PCV Valve and hoses',
                    question_id : '10',
                    question_type : '1'
                }, {
                    section_id : '003',
                    content : 'Evaporative system for leaks',
                    question_id : '11',
                    question_type : '1'
                }]
            }, {
                id : '004',
                label : ' Tyre Report',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '004',
                    content : '  Wheel Balancing',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : ' Front Right',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Front Left',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Rear Right',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Rear Left',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Spare',
                    question_id : '6',
                    question_type : '2',
					question_data :['< 2mm' ,'2-4mm', '>4mm']

                }]
            }, {
                id : '005',
                label : ' Brake/Disc Report',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '005',
                    content : ' Front Right',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : ' Front Left',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : 'Rear Right',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : 'Rear Left',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : 'Discs',
                    question_id : '5',
                    question_type : '2',
					question_data :['< 2mm' ,'2-4mm', '>4mm']

                }, {
                    section_id : '005',
                    content : 'Linings',
                    question_id : '6',
                    question_type : '2',
					question_data :['< 1mm' ,'1-4mm', '>4mm']

                }]
            }]
        }// end of jobcard content

        ,
        'AK8540548' : {
            general_info : {
                year : "2007",
                make : "Toyota",
                model : "Cressida",
                contact_number : '805 XXX 5559',
                customer_name : 'Mr. D K',
                transmission : 'Automatic',
                type_of_vehicle : 'Sedan',
                year_of_mfg : '2007',
                model : 'Cressida',
                make_of_vehicle : 'Toyota',
                mileage : '1500Kms',
                plate : 'Dubai | 59341',
                date : '14-03-2013',
				division:'',
				start_time:'10:00 PM',
				service_advisor_name:'Abdul Karim',
				chasis:'1234#'
            },
            sections : [{
                id : '001',
                label : ' Condition Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '001',
                    content : '  Door Lock Operation by Key/Remote',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Door Window and Sunroof Operation',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Engine Start Condition',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Horn Sound',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : ' Washer Jets and All Wiper Blade Operation',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Clutch Operation',
                    question_id : '6',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Parking Brake Operation',
                    question_id : '7',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Brake Pedal Operation',
                    question_id : '8',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'All Mirrors Operation',
                    question_id : '9',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Air Condition Operation',
                    question_id : '10',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Radio, Satellite Navigation,Antenna Operation',
                    question_id : '11',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'All Cameras and Parking Sensor Operation',
                    question_id : '12',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Dash Gauge / Warning Lamps Display',
                    question_id : '13',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'All Interior Lights Operation',
                    question_id : '14',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Headlight and Fog Lamps Operation',
                    question_id : '15',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Indicator and Hazard Light Operation',
                    question_id : '16',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Brake, Tail and Back-up lamp Operation',
                    question_id : '17',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Seat Belt Operation',
                    question_id : '18',
                    question_type : '1'

                }, {
                    section_id : '001',
                    content : 'Idle Speed Operation',
                    question_id : '19',
                    question_type : '1'

                }],
            }, {
                id : '002',
                label : ' Under Hood Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '002',
                    content : '  Visible drive belts',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : ' Visible hoses',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Battery check',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Brake fluid condition',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Engine Oil condition',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Coolant condition',
                    question_id : '6',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Windscreen washer fluid',
                    question_id : '7',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Power steering fluid',
                    question_id : '8',
                    question_type : '1'

                }, {
                    section_id : '002',
                    content : 'Automatic/Manual Transmission Fluid',
                    question_id : '9',
                    question_type : '1'

                }]
            }, {
                id : '003',
                label : ' Under Carriage Inspection',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '003',
                    content : '  Wheel Cylinders - Wheels OFF',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Brake hoses',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Drive shaft boots',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Ball joints',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Suspension system',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Propeller shaft',
                    question_id : '6',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : 'Fuel lines and tank',
                    question_id : '7',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : 'Exhaust system',
                    question_id : '8',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : ' Engine mounting',
                    question_id : '9',
                    question_type : '1'

                }, {
                    section_id : '003',
                    content : 'PCV Valve and hoses',
                    question_id : '10',
                    question_type : '1'
                }, {
                    section_id : '003',
                    content : 'Evaporative system for leaks',
                    question_id : '11',
                    question_type : '1'
                }]
            }, {
                id : '004',
                label : ' Tyre Report',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '004',
                    content : '  Wheel Balancing',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : ' Front Right',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Front Left',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Rear Right',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Rear Left',
                    question_id : '5',
                    question_type : '1'

                }, {
                    section_id : '004',
                    content : 'Spare',
                    question_id : '6',
                    question_type : '2',
					question_data :['< 2mm' ,'2-4mm', '>4mm']

                }]
            }, {
                id : '005',
                label : ' Brake/Disc Report',
                extra_label : ' Content Xtra',
                questionSet : [{
                    section_id : '005',
                    content : ' Front Right',
                    question_id : '1',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : ' Front Left',
                    question_id : '2',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : 'Rear Right',
                    question_id : '3',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : 'Rear Left',
                    question_id : '4',
                    question_type : '1'

                }, {
                    section_id : '005',
                    content : 'Discs',
                    question_id : '5',
                    question_type : '2',
					question_data :['< 2mm' ,'2-4mm', '>4mm']

                }, {
                    section_id : '005',
                    content : 'Linings',
                    question_id : '6',
                    question_type : '2',
					question_data :['< 1mm' ,'1-4mm', '>4mm']

                }]
            }]
        }// end of jobcard content

       
    },	
    //end of JobCard -1
	getHelpScreenData :function(sKey){
		var mJSONData ={
			'page_two':[
				{
					sType : 'text',
					sContent : 'Enter Search order number here',
					className : 'search-order-help-text'
				}, {
					sType : 'ok-btn',
					sContent : '',
					className : ''
				}, {
					sType : 'right-round-anti-clockwise-arrow',
					sContent : '',
					className : 'search-order-arrow'
				},{
					sType : 'text',
					sContent : 'To search order click Search button',
					className : 'search-btn-help-text'
				}, {
					sType : 'straight-arrow',
					sContent : '',
					className : 'search-left-arrow-position'
					
				}, {
					sType : 'text',
					sContent : 'Click here to see pending job details',
					className : 'search-pending-job-text pending-help'
					
				}, {
					sType : 'right-round-anti-clockwise-arrow',
					sContent : '',
					className : 'pending-job-arrow pending-help'
				},
			],
			'page_three':[
				{
					sType : 'text',
					sContent : 'Click on any row to view details',
					className : 'search-order-help-text'
				}, {
					sType : 'ok-btn',
					sContent : '',
					className : ''
				}, {
					sType : 'right-round-anti-clockwise-arrow',
					sContent : '',
					className : 'search-order-arrow'
				}, {
					sType : 'text',
					sContent : 'Swipe up to see all the items when list is full',
					className : 'search-order-scroll-text'
				}, {
					sType : 'straight-arrow',
					sContent : '',
					className : 'search-list-up-arrow'
				}
			],
			'page_four':[
				{
					sType : 'text',
					sContent : 'Scroll vertically to view all details',
					className : 'search-order-help-text'
				}, {
					sType : 'ok-btn',
					sContent : '',
					className : ''
				}, {
					sType : 'straight-arrow',
					sContent : '',
					className : 'help-up-arrow-job-detail'
				}, {
					sType : 'text',
					sContent : 'Click here to see question list',
					className : 'order-detail-next-text'
				}, {
					sType : 'straight-arrow',
					sContent : '',
					className : 'next-left-arrow'
				}
			],
			'page_five':[
				{
					sType : 'text',
					sContent : 'Scroll vertically to view more questions',
					className : 'help-questionary-text'
				}, {
					sType : 'ok-btn',
					sContent : '',
					className : ''
				}, {
					sType : 'straight-arrow',
					sContent : '',
					className : 'help-up-arrow-question-center'
				},{
					sType : 'text',
					sContent : 'Swipe up/down to change section',
					className : 'help-side-section-text'
				}, {
					sType : 'straight-arrow',
					sContent : '',
					className : 'help-side-section-up-arrow'
				}, {
					sType : 'straight-arrow',
					sContent : '',
					className : 'help-side-section-down-arrow'
				},{
					sType : 'text',
					sContent : 'Click here to save and exit the current order',
					className : 'save-exit-text'
				}, {
					sType : 'straight-arrow',
					sContent : '',
					className : 'save-exit-arrow'
				}, {
					sType : 'right-round-anti-clockwise-arrow',
					sContent : '',
					className : 'submit-anti-clock-arrow'
				},{
					sType : 'text',
					sContent : 'Click here to submit current order',
					className : 'submit-text'
				}, {
					sType : 'right-round-anti-clockwise-arrow',
					sContent : '',
					className : 'bottom-anti-clock-arrow'
				},{
					sType : 'text',
					sContent : 'Click any button to filter question list',
					className : 'bottom-filter-text'
				}
			]					
		}		
		return mJSONData[sKey];
	},	
}

AFM.AppDataCenter = (function() {	
    var appKey = '11qsaddxscxc@';

    var appStorageData = window.localStorage.getItem(appKey);

    var that = {

        init : function() {
			 var AppConfiguration = AFM.AppConfiguration;
            if (appStorageData == undefined) {
                window.localStorage.clear();
                appStorageData = AppConfiguration.AppData;
            } 
			else {
                appStorageData = JSON.parse(appStorageData)
                AppConfiguration.AppData = appStorageData;
            }
        },

        process : function(requestId, data, onSuccess) {
            var AppConfiguration = AFM.AppConfiguration;
            var arrTemp
            switch (requestId) {
                case 'login_request':
                    if ((data.uname).toLowerCase() == AppConfiguration.dummyData.loginData.username && (data.passwd).toLowerCase() == AppConfiguration.dummyData.loginData.password)
                        AppConfiguration.dummyData.loginData.success = true;
                    else{
                        AppConfiguration.dummyData.loginData.success = false;
					}
                    onSuccess(AppConfiguration.dummyData.loginData);
                    break;
                case 'pending_jobs':
                    arrTemp = new Array();
                    for (var key in AppConfiguration.AppData) {
                        if (AppConfiguration.AppData.hasOwnProperty(key)) {
                            if (AppConfiguration.AppData[key].isPending == true) {
                                var objT = AppConfiguration.AppData[key].general_info;
                                objT.job_jd = key;
                                objT.id = key;
                                arrTemp.push(objT);
                            }
                        }
                    }
                    onSuccess(arrTemp);
                    break;
                case 'search_result':
                    arrTemp = new Array();
                    for (var key in AppConfiguration.AppData) {
                        if (AppConfiguration.AppData.hasOwnProperty(key)) {
                            if ((key.toLowerCase()).indexOf((data.serviceOrderId).toLowerCase()) != -1) {
                                var objT = AppConfiguration.AppData[key].general_info;
                                objT.job_jd = key;
                                objT.id = key;
                                objT.pending = AppConfiguration.AppData[key].isPending;
                                arrTemp.push(objT);
                            }
                        }
                    }
                    onSuccess(arrTemp);

                    break;
					
                case 'single_job':
                    if (data.serviceOrderId != undefined && AppConfiguration.AppData.hasOwnProperty([data.serviceOrderId])) {
                        onSuccess(AppConfiguration.AppData[data.serviceOrderId].general_info);
                    } 
					else {
                        onSuccess({});
                    }

                    break;
					
                case 'job_card_section_and_question':
                    if (data.serviceOrderId != undefined && AppConfiguration.AppData.hasOwnProperty([data.serviceOrderId])) {
                        onSuccess(AppConfiguration.AppData[data.serviceOrderId].sections);
                    } 
					else {
                        onSuccess([]);
                    }

                    break;
					
                case 'save_and_exit':
                    if (data.serviceOrderId != undefined && AppConfiguration.AppData.hasOwnProperty([data.serviceOrderId])) {
                        AppConfiguration.AppData[data.serviceOrderId].isPending = true;
                        appStorageData = AppConfiguration.AppData;

                        window.localStorage.removeItem(appKey);
                        window.localStorage.setItem(appKey, JSON.stringify(appStorageData));
                        onSuccess({
                            success : true
                        });
                    } else {
                        onSuccess({
                            success : false
                        });
                    }
                    break;
					
                case 'submit':
                    if (data.serviceOrderId != undefined && AppConfiguration.AppData.hasOwnProperty([data.serviceOrderId])) {
                        delete AppConfiguration.AppData[data.serviceOrderId];
                        appStorageData = AppConfiguration.AppData;
                        window.localStorage.removeItem(appKey);
                        window.localStorage.setItem(appKey, JSON.stringify(appStorageData));
                        AppConfiguration.AppData = appStorageData
                        onSuccess({
                            success : true
                        });
                    } else {
                        onSuccess({
                            success : false
                        });
                    }
                 break;    
            }

        }
    }
    return that;
})();


AFM.AppSessionData = function(mParent) {
    this.wrapperComponent = mParent;
    this.pendingJobArray = {};
    this.searchResultSet ={};
    this.currentJobCard = {};
    this.defaultQuestionList =null;
    
}

AFM.AppSessionData.prototype = {
		manipulatePendingJob :function()
		{
			var mTemp=[] , i=0,len = Object.keys(this.pendingJobArray).length;
			for(i in this.pendingJobArray)
			{
				mTemp.push(this.pendingJobArray[key]);
			}
			return mTemp;
		},
		setPendingJobs :function(data)
		{
			var key;
			for(key=0;key<data.length;key++)
				{
					if(this.pendingJobArray.hasOwnProperty(data[key].id))
					{
						var arrT1 = (this.pendingJobArray[data[key].id].screen_data !== undefined)?this.pendingJobArray[data[key].id].screen_data.slice(0):undefined;
						var arrT2 = (this.pendingJobArray[data[key].id].mandatory_question !== undefined)?this.pendingJobArray[data[key].id].mandatory_question.slice(0):undefined;
						var arrT3 = (this.pendingJobArray[data[key].id].content !== undefined)?this.pendingJobArray[data[key].id].content:undefined;
						
						this.pendingJobArray[data[key].id]= {}
						this.pendingJobArray[data[key].id] = data[key];
						this.pendingJobArray[data[key].id].screen_data = arrT1;
						this.pendingJobArray[data[key].id].content = arrT3;
						this.pendingJobArray[data[key].id].mandatory_question = arrT2;	
					}
					else
					{
						//fresh entry
						this.pendingJobArray[data[key].id]= {}
						this.pendingJobArray[data[key].id] = data[key];
					} 
					
				}
		},
		resetSearchResult :function()
		{
			this.searchResultSet ={};
		},
		addSearchResult :function(id,data,isPending)
		{
			this.searchResultSet[id] ={};
			this.searchResultSet[id] =data;
			this.searchResultSet[id].isPending = isPending;
			
		},
		getJobCardSummary :function(id)
		{
			var bReturn ={};
			 if (this.pendingJobArray.hasOwnProperty(id)) 
			{
				// in pending list
				bReturn =  JSON.parse(JSON.stringify(this.pendingJobArray[id]))
			}
			else if (this.searchResultSet.hasOwnProperty(id))
			{
				 //exist in search result
				bReturn = JSON.parse(JSON.stringify(this.searchResultSet[id]));// jQuery.extend(true, {}, this.searchResultSet[id]);
			}
			
			
			return bReturn;
			
		},
		updatePendingJob :function(id,data)
		{
			//storing the data locally
			if(this.pendingJobArray.hasOwnProperty(id))
				{
				 // if that value exist
				 	this.pendingJobArray[id].content = (this.pendingJobArray[id].content === undefined)?data:this.pendingJobArray[id].content.concat(data);
					this.updatePendingJobFromCurrentJob(id);
				}
			else 
				{
				 // new value so check for searchResult set now
				if (this.searchResultSet.hasOwnProperty(id))
					{
						this.pendingJobArray[id] = {};
						this.pendingJobArray[id] =  JSON.parse(JSON.stringify(this.searchResultSet[id])); //jQuery.extend(true, {}, this.searchResultSet[id]);
						this.pendingJobArray[id].content = data;
						this.updatePendingJobFromCurrentJob(id);
						
					}
				
				}
			
			
		},
		pendingJobQuestionAvailable :function(id)
		{
			var bReturn = false;
			if(this.isJobPending(id))
			{
				if(this.pendingJobArray[id].screen_data !== undefined && this.pendingJobArray[id].mandatory_question !== undefined)
			 	{
			 		bReturn = true;
			 	}
			 }
			
			return  bReturn;
		},
		updatePendingJobFromCurrentJob:function(id)
		{
			if(this.isJobPending(id))
			{
				this.pendingJobArray[id].screen_data = this.currentJobCard.screen_data;
				this.pendingJobArray[id].mandatory_question = this.currentJobCard.mandatory_question;
				
			}
			
		},
		updatePendingJobFromSavedOrder :function(id,mScreenData,mandatoryData,data)
		{
			if(this.isJobPending(id))
			{
				this.pendingJobArray[id].content = data;
				
				if(mScreenData.length > 0 && mandatoryData.length > 0)
				{
					
					this.pendingJobArray[id].screen_data = mScreenData.slice(0);; 
					this.pendingJobArray[id].mandatory_question = mandatoryData.slice(0); ;
				}
				else
				{
					// NO DATA RCVD FROM BACKEND SO SET DEFAULT VALUES TO IT
					if(this.isDefaultQuestionSetAvailable())
						{
							var obj = this.getDefaultQuestionSet();
							this.pendingJobArray[id].screen_data = obj.screen_data.slice(0);;
							this.pendingJobArray[id].mandatory_question = obj.mandatory_question.slice(0);;
						}
					else
						{
							this.pendingJobArray[id].screen_data =  undefined
							this.pendingJobArray[id].mandatory_question = undefined;
						}
				} 
				
				return this.pendingJobArray[id];
			}
		},
		getPendingJobQuestionList :function(id)
		{
			var bReturn = {}
			if(this.isJobPending(id))
			{
			 	bReturn = this.pendingJobArray[id];
			
			}
			return bReturn;
		},
		isJobPending :function(jobID)
		{
			var bReturn = false;
				if(this.pendingJobArray !== null && this.pendingJobArray.hasOwnProperty(jobID))
					bReturn = true;
				
			return bReturn;
		},
		//this.currentJobCard = {};
		saveCurrentJobCard :function(mScreenData,mandatoryData)
		{
			this.currentJobCard.screen_data = mScreenData;
			this.currentJobCard.mandatory_question = mandatoryData;
			
		},
		
		isDefaultQuestionSetAvailable :function()
		{
			var bReturn = false;
			if(this.defaultQuestionList !== null)
			{
				bReturn = true;
			}
			return bReturn;
		},
		updatedAnswersFromContent :function(id,mData)
		{
			//console.log(" updateAnswersCONTENT > "+this.pendingJobArray[id].content);
			//[sOrderId, sectionId, questionId, data.result, data.img_arr, data.comment];
			var i =0,arrT;
			
			
			if(this.pendingJobArray[id].content !== undefined)
			{
				for(i=0;i<this.pendingJobArray[id].content.length;i++)
				{
					arrT = this.pendingJobArray[id].content[i];
					var index = -1;
					var qId =(arrT[6] !== undefined) ?arrT[6]:-1;;
					var answer =arrT[3];
					var imgarr =arrT[4];
					var comment =arrT[5];
					 for(var k = 0;k<mData.length;k++)
				 		{
				 			console.log(mData[k].id +" v/s " +arrT[1])
				 			if(mData[k].id ==  arrT[1])
				 			{
				 				index = k;
				 				break;
				 			}
				 		}
				 		
				 		if(index !== -1)
				 		{
							mData[index].questionSet[qId].answer = answer;
							mData[index].questionSet[qId].imgArr = imgarr;
							mData[index].questionSet[qId].comment = comment;
						}
				}	
			}
			
			return mData;
		},
		getDefaultQuestionSet :function()
		{
			var newObject = JSON.parse(JSON.stringify(this.defaultQuestionList)); 
			return newObject;
		},
		setDefaultQuestionList :function(mScreenData,mandatoryData)
		{
			this.defaultQuestionList = {};
			this.defaultQuestionList.screen_data = [];
			var arrT = mScreenData.slice(0);
			for(var i=0;i<arrT.length;i++)
			{
				this.defaultQuestionList.screen_data.push(JSON.parse(JSON.stringify(arrT[i])))	
			}
			 
			this.defaultQuestionList.mandatory_question = mandatoryData.slice(0);
		}

}

var AFMLogger ={
    trace : "TRACE",//1,
	debug : "DEBUG",//2,
	info : "INFO",//3,
	warn : "WARN",//4,
	error : "ERROR",//5,
	fatal : "FATAL",//6,
	loggingIndication : 'H',
	debugFrequency : 2, // 1 - always send to native | 0 -only  send when commit is true | 2 - never send
	enableLogs : "ALL"//ALL |TRACE|DEBUG|FATAL|ERROR 
	//0 // 1  all logs , else value for an trace|debug|info|warn|error|fatal

}
