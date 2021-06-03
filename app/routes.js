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
    res.redirect('/before-you-start/kickout/not-yet');
  }
});