import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Studentservice } from './studentservice';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected readonly title = signal('student-management');

  showForm = false;
  editing = false;

  students: any[] = [];

  totalStudents = 0;
  totalCourses = 0;

  student = {
    id: null as number | null,
    name: '',
    age: null as number | null,
    course: '',
    marks: null as number | null
  };

  constructor(private studentservice: Studentservice) {
  }

  ngOnInit() {

    this.getStudents();
    this.getTotalStudents();
    this.getTotalCourses();

  }

  // Get all students
  getStudents() {

    this.studentservice.getallstudent().subscribe({

      next: (data) => {

        this.students = data;

      },

      error: (error) => {

        console.error('Error loading students:', error);

      }

    });

  }

  // Get total students
  getTotalStudents() {

    this.studentservice.gettotalstudents().subscribe({

      next: (data) => {

        this.totalStudents = data;

      },

      error: (error) => {

        console.error('Error loading total students:', error);

      }

    });

  }

  // Get total courses
  getTotalCourses() {

    this.studentservice.gettotalcourses().subscribe({

      next: (data) => {

        this.totalCourses = data;

      },

      error: (error) => {

        console.error('Error loading total courses:', error);

      }

    });

  }

  // Open Add Student form
  openForm() {

    this.showForm = true;
    this.editing = false;

    this.student = {
      id: null,
      name: '',
      age: null,
      course: '',
      marks: null
    };

  }

  // Validate student details
  validateStudent(): boolean {

    if (!this.student.name.trim()) {

      alert('Please enter student name.');
      return false;

    }

    if (this.student.age === null ||
        this.student.age < 1 ||
        this.student.age > 100) {

      alert('Please enter a valid age between 1 and 100.');
      return false;

    }

    if (!this.student.course.trim()) {

      alert('Please enter course name.');
      return false;

    }

    if (this.student.marks === null ||
        this.student.marks < 0 ||
        this.student.marks > 100) {

      alert('Please enter valid marks between 0 and 100.');
      return false;

    }

    return true;
  }

  // Add Student
  addStudent() {

    if (!this.validateStudent()) {
      return;
    }

    const newStudent = {

      name: this.student.name.trim(),
      age: this.student.age,
      course: this.student.course.trim(),
      marks: this.student.marks

    };

    this.studentservice.addstudent(newStudent).subscribe({

      next: () => {

        alert('Student added successfully');

        this.getStudents();
        this.getTotalStudents();
        this.getTotalCourses();

        this.resetForm();

      },

      error: (error) => {

        console.error('Error adding student:', error);

        alert('Error adding student');

      }

    });

  }

  // Edit Student
  editStudent(student: any) {

    this.student = {

      id: student.id,
      name: student.name,
      age: student.age,
      course: student.course,
      marks: student.marks

    };

    this.editing = true;
    this.showForm = true;

  }

  // Update Student
  updateStudent() {

    if (this.student.id === null) {
      return;
    }

    if (!this.validateStudent()) {
      return;
    }

    const updatedStudent = {

      name: this.student.name.trim(),
      age: this.student.age,
      course: this.student.course.trim(),
      marks: this.student.marks

    };

    this.studentservice
      .updatestudent(this.student.id, updatedStudent)
      .subscribe({

        next: () => {

          alert('Student updated successfully');

          this.getStudents();
          this.getTotalStudents();
          this.getTotalCourses();

          this.resetForm();

        },

        error: (error) => {

          console.error('Error updating student:', error);

          alert('Error updating student');

        }

      });

  }

  // Delete Student
  deleteStudent(id: number) {

    if (confirm('Are you sure you want to delete this student?')) {

      this.studentservice.deletestudent(id).subscribe({

        next: () => {

          alert('Student deleted successfully');

          this.getStudents();
          this.getTotalStudents();
          this.getTotalCourses();

        },

        error: (error) => {

          console.error('Error deleting student:', error);

          alert('Error deleting student');

        }

      });

    }

  }

  // Reset form
  resetForm() {

    this.student = {

      id: null,
      name: '',
      age: null,
      course: '',
      marks: null

    };

    this.showForm = false;
    this.editing = false;

  }

}