const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const controllingRouter = (app) => {
    const router = express.Router();
    app.use('/', router);

    router.get('/', AppController.getHomepage);
    router.get('/students', StudentsController.getAllStudents);
    router.get('/students/:major', StudentsController.getAllStudentsByMajor);
}

module.exports = controllingRouter;
