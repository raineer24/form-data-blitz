import { Posts } from "./../models/posts";
import { Injectable } from "@angular/core";
import { pipe } from 'rxjs';
import { Subject, Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpEventType,
  HttpProgressEvent
} from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map, tap, catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class PostsService {
  private baseUrl = environment.apiUrl;
  private heroku = "https://nerblog-app.herokuapp.com";

  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) {}

  getPosts() {
    const url = `${this.baseUrl}/api/v2/blogs`;
    //const url = `api/v2/blogs`;
    console.log(url);
    return this.http.get<Posts[]>(url, { headers: this.headers }).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }

  upload(toFormData) {
    const url = `${this.baseUrl}/api/v2/blogs`;
    return this.http.post<any>(url, toFormData, {
      reportProgress: true,
      observe: "events"
    });
  }

  basicUpload(files: FileList) {
    const url = `${this.baseUrl}/api/v2/blogs`;
    const formData = new FormData();
    Array.from(files).forEach(f => {
      formData.append("file", f);
    });
    return this.http.post<any>(url, formData);
  }

  uploadAndProgress(files: FileList) {
    const url = `${this.baseUrl}/api/v2/blogs`;
    const formData = new FormData();
    Array.from(files).forEach(f => {
      formData.append("file", f);
    });
    return this.http.post(url, formData, {
      reportProgress: true,
      observe: "events"
    });
  }

  calcProgressPercent(event: HttpProgressEvent) {
    return Math.round((1000 * event.loaded) / event.total);
  }
}

export function toFormData<T>(formValue: T) {
  const formData = new FormData();

  for (const key of Object.keys(formValue)) {
    const value = formValue[key];
    formData.append(key, value);
  }
}
