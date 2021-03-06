import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchserviceService {
  url = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get(this.url);
  }
}
