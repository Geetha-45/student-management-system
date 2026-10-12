import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Studentservice {

  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {
  }

  getallstudent(): Observable<any[]> {

    return this.http.get<any[]>(
      this.apiUrl + '/getallstudent'
    );
  }

  addstudent(student: any): Observable<string> {

    return this.http.post(
      this.apiUrl + '/addstudent',
      student,
      { responseType: 'text' }
    );
  }

  getstudentbyid(id: number): Observable<any> {

    return this.http.get(
      this.apiUrl + '/getstudent/' + id
    );
  }

  updatestudent(id: number, student: any): Observable<string> {

    return this.http.put(
      this.apiUrl + '/updatestudent/' + id,
      student,
      { responseType: 'text' }
    );
  }

  deletestudent(id: number): Observable<string> {

    return this.http.delete(
      this.apiUrl + '/deletestudent/' + id,
      { responseType: 'text' }
    );
  }

  gettotalstudents(): Observable<number> {

    return this.http.get<number>(
      this.apiUrl + '/totalstudents'
    );
  }

  gettotalcourses(): Observable<number> {

    return this.http.get<number>(
      this.apiUrl + '/totalcourses'
    );
  }
}