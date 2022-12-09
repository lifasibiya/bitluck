import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor(private http: HttpClient) { }

  get = async (url: any): Promise<any> => {
    const response = await this.http.get(url)
    .pipe(
      retry(3)
    )
    .toPromise()
    return response;
  }

  post = async (url: any, payload: any): Promise<any> => {
    const response = await this.http.post(url, payload)
    .pipe(
      retry(3)
    )
    .toPromise()
    return response;
  }
}
