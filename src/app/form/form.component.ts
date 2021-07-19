import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote = new Quotes("","","",0,0,new Date());
  @Output() add = new EventEmitter<Quotes>();

  addQuote(){
this.add.emit(this.newQuote);
this.newQuote = new Quotes("","","",0,0,new Date());
}

  constructor() { }

  ngOnInit(): void {
  }

}
