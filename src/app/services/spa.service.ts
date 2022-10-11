import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../app.constants';
import { ContentData } from '../models/content-data';

@Injectable({
  providedIn: 'root'
})
export class SpaService {

  constructor(private http: HttpClient) { }

  getContentData() {
    return this.http.get<ContentData>(`${BASE_URL}/spa/get-content-data`);
  }
}
