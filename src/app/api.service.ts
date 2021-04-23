import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client: HttpClient) { }

  login(){
    const url = "https://marketclick.azure-api.net/api/administrativo/cuentas/Login";
    const body = {
      email: "cmruizg1993@gmail.com",
      password: "%Karb2016"
    };
    const headers = new HttpHeaders(
      {
        'Content-Type':'application/json-patch+json',
        'Ocp-Apim-Subscription-Key': '9227a81f8bdf449a93380a07f9c30145',
        'Ocp-Apim-Trace': 'true',
        'Access-Control-Allow-Credentials': 'true'
      }
    );
    return this.client.post(url,body,{
      headers: headers
    })
  }
}
