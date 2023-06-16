const readDatabase = require('..utils')

class StudentsController {
    static getAllStudents(request, response, DATABASE) {
    readDatabase(DATABASE)
        .then((fields) => {
        const studentList = [];
        let message;
        studentList.push('This is the list of our students');

        for (const key of Object.keys(fields)) {
            message = `Number of students in ${key}: ${fields[key].length
            }. List: ${fields[key].join(', ')}`;

            studentList.push(message);
        }
        response.send(200, `${studentList.join('\n')}`);
        })
        .catch(() => {
        response.send(500, 'Cannot load the database');
        });
}

    static getAllStudentsByMajor(request, response, DATABASE) {
        const { major } = request.params;

        if (major !== 'CS' && major !== 'SWE') {
        response.send(500, 'Major parameter must be CS or SWE');
        } else {
        readDatabase(DATABASE)
            .then((fields) => {
            const studentList = fields[major];

            response.send(200, `List: ${studentList.join(', ')}`);
            })
            .catch(() => response.send(500, 'Cannot load the database'));
        }
    }
}

module.exports = StudentsController;
