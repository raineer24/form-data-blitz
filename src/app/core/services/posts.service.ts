import { Posts } from "./../models/posts";
import { Injectable } from "@angular/core";
import { Subject, Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpEventType
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

  upload(form) {
    const url = `${this.baseUrl}/api/v2/blogs`;
    return this.http.post<any>(url, form, {
      reportProgress: true,
      observe: "events"
    });
  }
}
