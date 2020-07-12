# studen_registration

This project is part of my CPE213: Database systems. This project is about design and create student registration system. This system design for 4 users role:

1st role: Student — user student can register to the system by create account and fill the form that about the student information. After student is in the database, user can access his/her information such as basic information, grade, the classes enrolled, or teacher for each class that the student enrolled, or enroll classes. Moreover, student can edit some of information such as his/her basic information.

2nd role: Teacher —  teacher in the system can access information about student in each class he/she teach including name, surname, student ID, or grade and also the teacher assistant as well. Moreover, teacher can edit some his/her information and student grade in his/her classes.

3rd role: Teacher assistant: teacher assistant can access name,  student ID, and grade of students in the classes. Also can edit his/her basic information.

4th role: Administrator: this role access and edit many important information such as the university's information, the student enrolled class, the class of teacher, the class of teacher assistant and the student payment.

**Tools and programing languages used in this project:**
Node.js —  we use node.js as a backend for this project. This project designed to be MVC pattern using *Express.js* for RESTful backed associate with Ejs(Embedded JavaScript templates) for communicate to the frontend.
SQL —  this project use SQL (Structured Query Language) as a database system.  The reason we use RDBMS in this system because the data expand in vertical and we want the system to have ACID properties. The system communicate between backend and database by using library *express-mysql-session*.
