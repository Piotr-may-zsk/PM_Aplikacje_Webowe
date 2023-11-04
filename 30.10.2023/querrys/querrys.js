
const Querrys = {
     selectAllStudents:'Select * from students;',
     selectStudentById: (id) => {return `Select * from students where id=${id};`},
     selectAllSubjects : 'Select * from subjects;',
     selectSubjectById: (id) => {return `Select * from subjects where id=${id};`},
     saveContactData: (name, email, subject, content) => {return `Insert into form_data (name, email, subject, content) values ('${name}', '${email}', '${subject}', '${content}');`}
}
module.exports = Querrys;