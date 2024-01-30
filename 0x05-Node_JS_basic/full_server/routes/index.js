import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();

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

export default router;
