import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiConfig } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class CredencialService {

  private url = apiConfig.apiUrl + "/credenciais"

  constructor(
    private httpClient: HttpClient
  ) { }

  getRole(id) {
    return this.httpClient.get(this.url + "/" + id);
  }
}
