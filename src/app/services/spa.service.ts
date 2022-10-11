import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../app.constants';
import { ContentData } from '../models/content-data';
import { SpaFormData } from '../models/spa-form-data';

@Injectable({
  providedIn: 'root'
})
export class SpaService {

  constructor(private http: HttpClient) { }

  getContentData() {
    return this.http.get<ContentData>(`${BASE_URL}/spa/get-content-data`);
  }

  postForm(data: SpaFormData) {
    const headers = { 'Content-Type': 'application/json', 'accept': 'text/plain', 'Access-Control-Allow-Origin':'*' };
    return this.http.post<boolean>(`${BASE_URL}/spa/postForm`, data, { headers });
  }
}
