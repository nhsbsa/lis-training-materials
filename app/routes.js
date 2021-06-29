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
  } else if (req.query.uc == 'no') {
    res.redirect('/benefits/tax-credits'); 
  } else  {
    res.redirect('/benefits/waiting-uc');
  }
});

router.get(/uc-award/, function (req, res) {
  if (req.query.ucextra == 'yes') {
    res.redirect('/benefits/uc-935');
  } else {
    res.redirect('/benefits/uc-435');
  }
});

router.get(/uc-nine/, function (req, res) {
  if (req.query.ucnine == 'yes') {
    res.redirect('/benefits/done');
  } else {
    res.redirect('/benefits/benefit-income');
  }
});

router.get(/uc-four/, function (req, res) {
  if (req.query.ucfour == 'yes') {
    res.redirect('/benefits/done');
  } else {
    res.redirect('/benefits/benefit-income');
  }
});

router.get(/tc-handler/, function (req, res) {
  if (req.query.tc == 'yes') {
    res.redirect('/benefits/tax-credits-type');
  } else {
    res.redirect('/benefits/income-support');
  }
});

router.get(/is-handler/, function (req, res) {
  if (req.query.is == 'yes') {
    res.redirect('/benefits/done');
  } else {
    res.redirect('/benefits/benefit-income');
  }
});

router.get(/tctype-handler/, function (req, res) {
  if (req.query.tctype == 'own') {
    res.redirect('/benefits/income-support');
  } else {
    res.redirect('hi-15');
  }
});

router.get(/jobdwp-handler/, function (req, res) {
  if (req.query.jobdwp == 'yes') {
    res.redirect('/benefits/other-income/dwp-fitness');
  } else {
    res.redirect('/benefits/other-income/cya');
  }
});

router.get(/fitnote-handler/, function (req, res) {
  if (req.query.fitnote == 'yes') {
    res.redirect('/benefits/other-income/fit-notes-year');
  } else {
    res.redirect('/benefits/other-income/fit-notes-stop');
  }
});

router.get(/fitnotestop-handler/, function (req, res) {
  if (req.query.fitnotestop == 'yes') {
    res.redirect('/benefits/other-income/fit-note-stop-date');
  } else {
    res.redirect('/benefits/other-income/cya');
  }
});

router.get(/fitnoteyear-handler/, function (req, res) {
  if (req.query.fitnoteyear == 'yes') {
    res.redirect('/benefits/other-income/cya');
  } else {
    res.redirect('/benefits/other-income/fit-note-start');
  }
});

router.get(/wagesstart-handler/, function (req, res) {
  if (req.query.jobtime == 'yes') {
    res.redirect('/wages/job-start');
  } else {
    res.redirect('/wages/zero-hour');
  }
});

router.get(/zerohour-handler/, function (req, res) {
  if (req.query.zhour == 'yes') {
    res.redirect('/wages/often-paid');
  } else {
    res.redirect('/wages/how-many-hours');
  }
});

router.get(/oftenpaid-handler/, function (req, res) {
  if (req.query.payreg == 'varies') {
    res.redirect('/wages/job-date-last-work');
  } else {
    res.redirect('/wages/fit-note-employer');
  }
});

router.get(/fitnoteemployer-handler/, function (req, res) {
  if (req.query.fitnoteemploy == 'yes') {
    res.redirect('/wages/job-fit-notes-start');
  } else {
    res.redirect('/wages/another-job');
  }
});

router.get(/anotherjob-handler/, function (req, res) {
  if (req.query.anotherjob == 'yes') {
    res.redirect('/wages/job-title');
  } else {
    res.redirect('/pensions/private-pension');
  }
});

router.get(/ppension-handler/, function (req, res) {
  if (req.query.ppension == 'yes') {
    res.redirect('/private-pension/pension-name');
  } else {
    res.redirect('/private-pension/cya');
  }
});

router.get(/anotherpension-handler/, function (req, res) {
  if (req.query.anotherpension == 'yes') {
    res.redirect('/private-pension/pension-name');
  } else {
    res.redirect('/private-pension/cya');
  }
});
