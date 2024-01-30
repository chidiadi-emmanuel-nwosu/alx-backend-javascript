const router = require('express').Router();

const AppController = require('../controllers/AppController');

const StudentsController = require('../controllers/StudentsController');

const path = process.argv[2];

router.get('/', (req, res) => {
  AppController.getHomePage(req, res);
});

router.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res, path);
});

router.get('/students/:major', (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res, path);
});

module.exports = router;
