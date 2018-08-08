import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiConfig } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private url = apiConfig.apiUrl + "/login"

  constructor(private httpClient: HttpClient) { }

  signOut() {
    localStorage.removeItem('token');
  }

  login(credencial) {
    return this.httpClient.post(this.url, credencial);
  }

}
