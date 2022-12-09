import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import { environment } from '../../environments/environment'

const nodeBaseUrl = environment.nodeBaseUrl
const coreBaseUrl = environment.coreBaseUrl
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private apiConfig: ApiConfigService) { }

  getLatest = async (): Promise<any> => {
    const response = await this.apiConfig.get(nodeBaseUrl + 'get/latest')
    return response
  }

  get = async (payload: any): Promise<any> => {
    const response = await this.apiConfig.post(coreBaseUrl + 'home/get', payload)
    return response
  }

  setFilter = async (payload: any): Promise<any> => {
    const response = await this.apiConfig.post(nodeBaseUrl + 'filter',payload)
    return response
  }

  getWeather = async (): Promise<any> => {
    const response = await this.apiConfig.get(coreBaseUrl + 'WeatherForecast')
    return response
  }
}
