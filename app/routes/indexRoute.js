/*
Author URI: https://www.kawami.io/
*/
module.exports = function(app, transporter) {
	var mailerhbs = require('nodemailer-express-handlebars');
	var multer = require('multer');
	var upload = multer();

		//PAGE HOME
		app.get('/',  function(req, res, next) {
			res.render('index');
		});

		//PAGE ABOUT US
		app.get('/about-us',  function(req, res, next) {
			res.render('about-us');
		}); 

		//PAGE Building & Civil Infrastructure Business Unit
		app.get('/building-and-civil-infrastructure-business-unit',  function(req, res, next) {
			res.render('infrastructure division');
		});

		//PAGE Oil & Gas Business Unit
		app.get('/oil-and-gas-business-unit',  function(req, res, next) {
			res.render('oil&gaz-division');
		});

		//PAGE MEP & Facility Management Business Unit
		app.get('/MEP-facility-management-business-unit',  function(req, res, next) {
			res.render('building division');
		});

		//PAGE ENVIRONMENT
		app.get('/environment',  function(req, res, next) {
			res.render('environment');
		});

		//PAGE CLIENTS
		app.get('/clients',  function(req, res, next) {
			res.render('clients');
		});

		//PAGE PROJECTS GALLERY
		app.get('/projects-gallery',  function(req, res, next) {
			res.render('projects');
		});

		//PAGE CAREERS
		app.get('/careers',  function(req, res, next) {
			res.render('careers');
		});

		//PAGE CONTACT US
		app.get('/contact-us',  function(req, res, next) {
			res.render('contact-us');
		});

		//PAGE EPIC PROJECTS
		app.get('/EPIC-projects',  function(req, res, next) {
			res.render('EPIC Projects');
		});

		//PAGE SHUTDOWN PROJECTS
		app.get('/Shutdown-projects',  function(req, res, next) {
			res.render('Shutdown Projects');
		});		

		//PAGE Fabrication & Erection capability
		app.get('/fabrication-and-erection-capability',  function(req, res, next) {
			res.render('Fabrication & Erection capability');
		});

		//PAGE Leak Detection and Repair services
		app.get('/leak-detection-and-repair-services',  function(req, res, next) {
			res.render('Leak Detection and Repair services');
		});

		//PAGE Project Sheet Seals NGL Plant
		app.get('/Sheet-Seals-NGL-Plant',  function(req, res, next) {
			res.render('Project Sheet Seals NGL Plant');
		});

		//PAGE Project Sheet Dukhan STP
		app.get('/Sheet-Dukhan-STP',  function(req, res, next) {
			res.render('Project Sheet Dukhan STP');
		});

		//PAGE Project Sheet Dukhan TSE
		app.get('/Sheet-Dukhan-TSE',  function(req, res, next) {
			res.render('Project Sheet Dukhan TSE');
		});

		//PAGE Project Sheet Ain Khalid Ground Water
		app.get('/Sheet-Ain-Khalid-Ground-Water',  function(req, res, next) {
			res.render('Project Sheet Ain Khalid Ground Water');
		});

		//PAGE Project Sheet Azizia Drainage
		app.get('/Sheet-Azizia-Drainage',  function(req, res, next) {
			res.render('Project Sheet Azizia Drainage');
		});

		//PAGE Project Sheet Burn Pits
		app.get('/Sheet-Burn-Pits',  function(req, res, next) {
			res.render('Project Sheet Burn Pits');
		});

		//PAGE Project Sheet Umm Slal
		app.get('/Sheet-Umm-Slal',  function(req, res, next) {
			res.render('Project Sheet Umm Slal');
		});

		//PAGE Project MM 6414 – PHCC HQ
		app.get('/MM-6414-PHCC-HQ',  function(req, res, next) {
			res.render('MM 6414 – PHCC HQ.ejs');
		});

		//PAGE Project CONSTRUCTION OF ADDITIONAL CAFETERIAS IN 8 SCHOOLS AROUND DOHA AND VILLAGES 07 Dec 2014
		app.get('/CONSTRUCTION-OF-ADDITIONAL-CAFETERIAS-07-DEC-2014',  function(req, res, next) {
			res.render('COAC-07-DEC-14.ejs');
		});

		//PAGE Project CONSTRUCTION OF ADDITIONAL CAFETERIAS IN 8 SCHOOLS AROUND DOHA AND VILLAGES 15 oct 2014
		app.get('/CONSTRUCTION-OF-ADDITIONAL-CAFETERIAS-15-OCT-2014',  function(req, res, next) {
			res.render('COAC-15-OCT-14.ejs');
		});

		//PAGE Project PHCC/GTC/30/2014
		app.get('/PHCC-GTC-30-2014',  function(req, res, next) {
			res.render('PHCC-GTC-30-2014.ejs');
		});		

		//PAGE Project WORK-CONSTRUCTION-OFFICE BUILDING-WWTP-FACILITY-HIA 
		app.get('/WORK-CONSTRUCTION-OFFICE-BUILDING-WWTP-FACILITY-HIA',  function(req, res, next) {
			res.render('WORK-CONSTRUCTION-OFFICE BUILDING-WWTP-FACILITY-HIA.ejs');
		});

		//PAGE Project DESIGN, INSTALL SHADE FOR HAZARDOUS MATERIAL STORAGE AREA AT QAFAC PLANT SITE, MESAIEED 
		app.get('/HAZARDOUS-MATERIAL',  function(req, res, next) {
			res.render('HAZARDOUS-MATERIAL.ejs');
		});

		//PAGE Project ISOLA DANA SEWERAGE NETWORK UPGRADE, CONSTRUCTION OF SEWERAGE PUMPING STATION 
		app.get('/ISOLA-DANA-SEWERAGE-NETWORK-UPGRADE',  function(req, res, next) {
			res.render('ISOLA-DANA-SEWERAGE-NETWORK-UPGRADE.ejs');
		});

		//PAGE Project DRAINAGE SYSTEM IN MEBAIREEK AREA
		app.get('/DRAINAGE-SYSTEM-IN-MEBAIREEK-AREA',  function(req, res, next) {
			res.render('DRAINAGE SYSTEM IN MEBAIREEK AREA.ejs');
		});

		//PAGE Project AL MURRAH PHASE II
		app.get('/AL-MURRAH-PHASE-II',  function(req, res, next) {
			res.render('AL MURRAH PHASE II.ejs');
		});	

		//PAGE Project AL RAYAN MUNICIPALITY
		app.get('/AL-RAYAN-MUNICIPALITY',  function(req, res, next) {
			res.render('AL RAYAN MUNICIPALITY.ejs');
		});

		//PAGE Project UMM SALAL ARAE
		app.get('/UMM-SALAL-ARAE',  function(req, res, next) {
			res.render('UMM SALAL ARAE.ejs');
		});

		//PAGE Project MUAITHER SOUTH AREA
		app.get('/MUAITHER-SOUTH-AREA',  function(req, res, next) {
			res.render('MUAITHER SOUTH AREA.ejs');
		});

		//PAGE Project FLOODING PREVENTION SCHEME AT SEVEN MAIN INTERSECTIONS
		app.get('/FLOODING-PREVENTION-SCHEME-AT-SEVEN-MAIN-INTERSECTIONS',  function(req, res, next) {
			res.render('FLOODING-PREVENTION-SCHEME-AT-SEVEN-MAIN-INTERSECTIONS.ejs');
		});		

		//PAGE Project FLOODING PREVENTION SCHEME AT SEVEN MAIN INTERSECTIONS
		app.get('/DOHA-MUNICIPALITY-AREA',  function(req, res, next) {
			res.render('DOHA MUNICIPALITY AREA.ejs');
		});

		//PAGE Project SPECIALIST CLINICAL CENTER FOR DENTISTRY, DERMATOLOGY & DIABETES SERVICES
		app.get('/SPECIALIST-CLINICAL-CENTER-FOR-DENTISTRY-DERMATOLOGY-AND-DIABETES-SERVICES',  function(req, res, next) {
			res.render('SPECIALIST-CLINICAL-CENTER.ejs');
		});
		
		//PAGE Project SURFACE WATER SCHEMES ABU HAMOUR AREA DRAINAGE PHASE 4 CP 566
		app.get('/ABU-HAMOUR-AREA-DRAINAGE',  function(req, res, next) {
			res.render('ABU-HAMOUR-AREA-DRAINAGE.ejs');
		});
		
		//PAGE Project CENTRAL TRAINING CAMP DEVELOPMENT AT SAILIYAH
		app.get('/CENTRAL-TRAINING-CAMP-DEVELOPMENT-AT-SAILIYAH',  function(req, res, next) {
			res.render('CENTRAL TRAINING CAMP DEVELOPMENT AT SAILIYAH.ejs');
		});

		//PAGE Project DOHA AND RAYYAN SEWERAGE SCHEMES AL AZIZIA AREA DRAINAGE & OUTFALL - CP 693
		app.get('/DOHA-AND-RAYYAN-SEWERAGE-SCHEMES-AL-AZIZIA-AREA',  function(req, res, next) {
			res.render('DOHA-AND-RAYYAN-SEWERAGE.ejs');
		});

		//PAGE Project Treated Sewage Effluent (TSE) Pipeline
		app.get('/Treated-Sewage-Effluent-Pipeline',  function(req, res, next) {
			res.render('Treated-Sewage-Effluent-Pipeline.ejs');
		});

		//PAGE Project WATER PIPELINE FROM KM METERING CHAMBER TO JABEL TANKS IN DUKHAN TOWNSHIP
		app.get('/WATER-PIPELINE-FROM-KM-METERING-CHAMBER-TO-JABEL-TANKS-IN-DUKHAN-TOWNSHIP',  function(req, res, next) {
			res.render('METERING-CHAMBER-TO-JABEL-TANKS.ejs');
		});

		//PAGE Project EXTENSION TO AIN KHALID AREA GROUNDWATER LOWERING SYSTEM CP 626/1B 
		app.get('/AIN-KHALID-AREA-GROUNDWATER',  function(req, res, next) {
			res.render('AIN KHALID AREA GROUNDWATER.ejs');
		});

		//PAGE Project REFURBISHMENT AND UPGRADING OF VARIOUS PUMPING STATIONS – PHASE 8 – CP 729/2
		app.get('/REFURBISHMENT-AND-UPGRADING-OF-VARIOUS-PUMPING-STATIONS',  function(req, res, next) {
			res.render('REFURBISHMENT AND UPGRADING OF VARIOUS PUMPING STATIONS.ejs');
		});

		//PAGE Project UPGRADING OF UMM SLAL WATER STATION
		app.get('/UPGRADING-OF-UMM-SLAL-WATER-STATION',  function(req, res, next) {
			res.render('UPGRADING OF UMM SLAL WATER STATION.ejs');
		});

		//PAGE Project SECOND PHASE EXPANSION OF INDUSTRIAL AREA SEWAGE TREATMENT FACILITY (STF) CP 737/1
		app.get('/INDUSTRIAL-AREA-SEWAGE-TREATMENT-FACILITY',  function(req, res, next) {
			res.render('INDUSTRIAL AREA SEWAGE TREATMENT FACILITY.ejs');
		});

		//PAGE Project DEVELOPMENT OF BARZAN CAMP  PHASE -II PACKAGE V - INFRASTRUCTURE
		app.get('/DEVELOPMENT-OF-BARZAN-CAMP',  function(req, res, next) {
			res.render('DEVELOPMENT OF BARZAN CAMP.ejs');
		});

		//PAGE Project AL KHOR SEWERAGE EXTENSION TO AL KHOR SEWAGE TREATMENT WORKS (STW) PHASE 2 – CP 517/1
		app.get('/AL-KHOR-SEWERAGE',  function(req, res, next) {
			res.render('AL KHOR SEWERAGE.ejs');
		});

		//PAGE Project MUAITHER AREA SEWAGE – CP773/1 (DW050-PACKAGE 1)
		app.get('/MUAITHER-AREA-SEWAGE',  function(req, res, next) {
			res.render('MUAITHER AREA SEWAGE.ejs');
		});	

		//PAGE Project PUMPING STATION NO. 2 AT SALWA INDUSTRIAL RPS
		app.get('/PUMPING-STATION',  function(req, res, next) {
			res.render('PUMPING STATION.ejs');
		});

		//PAGE Project DEMOLITION AND UTILITIES WORKS ALONG ‘A’ RING ROAD
		app.get('/DEMOLITION-AND-UTILITIES-WORKS',  function(req, res, next) {
			res.render('DEMOLITION AND UTILITIES WORKS.ejs');
		});

		//PAGE Project REFURBISHMENT & UPGRADE OF VARIOUS PUMPING STATION  - CP770
		app.get('/REFURBISHMENT-AND-UPGRADE-OF-VARIOUS-PUMPING-STATION',  function(req, res, next) {
			res.render('RAUOVPS.ejs');
		});	

		//PAGE Project QPMC CEMENT TERMINAL AT MESIAEED GABBRO BERTH EXTERNAL WORK
		app.get('/QPMC-CEMENT-TERMINAL-AT-MESIAEED-GABBRO-BERTH-EXTERNAL-WORK',  function(req, res, next) {
			res.render('QPMC.ejs');
		});

		//PAGE 404
		app.get('*',  function(req, res) {
			res.status(404).render('404page.ejs');
		});


		//WEB SERVICE FORMULATIRE CAREERS
		app.post('/ajax/careers', upload.single('cv'), function(req, res, next) {	
			transporter.use('compile', mailerhbs({
    viewPath: './views/template', //Path to email template folder
    extName: '.html' //extendtion of email template
}));
			if ((req.body) && (req.body.name)&&(req.body.email)&&(req.body.phone)
				&&(req.body.birth)&&(req.body.country)&&(req.body.jobcode)) {
				if(!req.body.website)
					req.body.website = "Null";
				transporter.sendMail({
					from: '"Careers" <info@Petroserv-limited.com>',
					to: 'info@Petroserv-limited.com',
					subject: "Careers",
					template: 'careers',
					context:{
						name: req.body.name,
						email: req.body.email,
						phone: req.body.phone,
						birth: req.body.birth,
						country: req.body.country,
						jobcode: req.body.jobcode,
						website: req.body.website
					},
					attachments: [
					{
						filename: req.file.originalname,
						content: req.file.buffer
					}
					]
				},function(err, done)
				{
					if(!err)
					{
						return res.json({
							error: false
						})
					}else
					{
						return res.json({
							error: true
						})
					}
				});
			}
			else
				return res.json({
					error: true
				})
		});

		//WEB SERVICE FORMULATIRE CONTACT US
		app.post('/ajax/contact-us',function(req, res, next) {
			transporter.use('compile', mailerhbs({
			    viewPath: './views/template', //Path to email template folder
			    extName: '.html' //extendtion of email template
			}));
			if ((req.body.data) && (req.body.data.name) && (req.body.data.email) &&
				(req.body.data.subject)) {
				if (!req.body.data.message){
					req.body.data.message = "Null";
				}
				transporter.sendMail({
					from: '"Contact us" <info@Petroserv-limited.com>',
					to: 'info@Petroserv-limited.com',
					subject: req.body.data.subject,
					template: 'contact-us',
					context:{
						subject: req.body.data.subject,
						name: req.body.data.name,
						email: req.body.data.email,
						message: req.body.data.message
					}
				},function(err, done)
				{
					if(!err)
					{
						return res.json({
							error: false
						})
					}else
					{
						return res.json({
							error: true
						})
					}
				});
			}
			else
				return res.json({
					error: true
				})
		});
	}