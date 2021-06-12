import { Component } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RestCountries';

  public card: any = [];
  constructor(private _countriesService: CountriesService){
  this. _countriesService.getCountries()
  .subscribe(data => this.card = data);
}
}