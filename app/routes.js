var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
module.exports = router

// ************************
// GLOBAL VARIABLES
// ************************

var applicantMaster = require('./applicant.js');
var applicant = applicantMaster.createApplicant();

applicant.partner = null;
applicant.maintenancefor = null;
applicant.saveforlater = null;

var benificiary = {
  firstname : "Molly",
  lastname : "Smith",
  thirdParty : false,
  dobDay : "0",
  dobMonth : "0",
  dobYear : "0",
};

// ************************
// BEFORE YOU START
// ************************

router.get(/applyonline-handler/, function (req, res) {
  if (req.query.applyonline == 'yes') {
    res.redirect('/before-you-start/what-you-need');
  } else if (req.query.applyonline == 'no') {
    res.redirect('/before-you-start/kickout/apply-offline');
  }
});

router.get(/country-handler/, function (req, res) {
  if (req.query.country == 'Northern Ireland') {
    res.redirect('/before-you-start/kickout/ni-kickout');
  } else {
    res.redirect('/before-you-start/care-home');
  }
});

router.get(/carehome-handler/, function (req, res) {
  if (req.query.carehome == 'yes') {
    res.redirect('/before-you-start/council-help-pay');
  } else if (req.query.carehome == 'no') {
    res.redirect('/before-you-start/partner');
  }
});

router.get(/councilpay-handler/, function (req, res) {
  if (req.query.councilpay == 'yes') {
    res.redirect('/before-you-start/council-name');
  } else if (req.query.councilpay == 'no') {
    res.redirect('/before-you-start/kickout/council-kickout');
  }
});

router.get(/asylum-handler/, function (req, res) {
  if (req.query.asylum == 'yes') {
    res.redirect('/before-you-start/asylum-decision');
  } else if (req.query.asylum == 'no') {
    res.redirect('/before-you-start/education-or-training');
  }
});

router.get(/asylumdecision-handler/, function (req, res) {
  if (req.query.asylumdecision == 'ALLOWED') {
    res.redirect('/before-you-start/education-or-training');
  } else {
    res.redirect('/before-you-start/visa-support');
  }
});

router.get(/visasupport-handler/, function (req, res) {
  if (req.query.visasupport == 'yes') {
    res.redirect('/before-you-start/full-exemption-asylum-decision');
  } else {
    res.redirect('/before-you-start/education-or-training');
  }
});

router.get(/education-handler/, function (req, res) {
  if (req.query.educationtraining == 'yes') {
    res.redirect('/before-you-start/full-education');
  } else {
    res.redirect('/before-you-start/benefits');
  }
});

router.get(/financialsupport-handler/, function (req, res) {
  if (req.query.financialsupport == 'studentfinance') {
    res.redirect('/before-you-start/live-with');
  } else if (req.query.financialsupport == 'family') {
    res.redirect('/before-you-start/live-with'); 
  } else if (req.query.financialsupport == 'no') {
    res.redirect('/before-you-start/live-with'); 
  } else {
    res.redirect('/before-you-start/kickout/cant-yet');
  }
});

router.get(/livewith-handler/, function (req, res) {
  if (req.query.livewith == 'yes') {
    res.redirect('/before-you-start/benefits');
  } else {
    res.redirect('/before-you-start/kickout/cant-yet');
  }
});

router.get(/money-handler/, function (req, res) {
  if (req.query.benefits == 'pensions') {
    res.redirect('/before-you-start/more-than-6000');
  } else if (req.query.benefits == 'benefits') {
    res.redirect('/before-you-start/more-than-6000'); 
  } else if (req.query.benefits == 'wages') {
    res.redirect('/before-you-start/more-than-6000'); 
  } else if (req.query.benefits == 'no') {
    res.redirect('/before-you-start/more-than-6000'); 
  } else {
    res.redirect('/before-you-start/kickout/cant-yet');
  }
});

router.get(/6000handler/, function (req, res) {
  if (req.query.livewith == 'yes') {
    res.redirect('/before-you-start/cant-yet');
  } else {
    res.redirect('/before-you-start/check-your-answers');
  }
});

router.get(/terms-handler/, function (req, res) {
  if (req.query.academicTerms == 'yes') {
    res.redirect('/education-and-training/first-term-dates');
  } else {
    res.redirect('/education-and-training/course-start');
  }
});

router.get(/uc-handler/, function (req, res) {
  if (req.query.uc == 'yes') {
    res.redirect('/benefits/uc-credit-claim');
  } else {
    res.redirect('/benefits/somewhere-else');
  }
});

router.get(/uc-award/, function (req, res) {
  if (req.query.uccredit == 'yes') {
    res.redirect('/benefits/uc-935');
  } else {
    res.redirect('/benefits/uc-435');
  }
});