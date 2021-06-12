import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ICountry } from './country'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _url: string="/assets/data/countries.json";
  constructor(private http: HttpClient) { }

  getCountries(): Observable<ICountry[]>{
    return this.http.get<ICountry[]>(this._url);
  }
}
