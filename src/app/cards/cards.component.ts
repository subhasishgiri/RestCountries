import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
@Input('name') name=""
@Input('region') region=""
@Input('population') population=""
@Input('flag') flag=""

  constructor() { }

  ngOnInit(): void {
  }

}
