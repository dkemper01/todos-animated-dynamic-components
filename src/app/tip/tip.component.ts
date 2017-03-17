import { Component, Input, OnInit } from '@angular/core';
import { pageTransition } from '../animations';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss'],
  animations: [ pageTransition ]
})

export class TipComponent implements OnInit {

  @Input() data: any;
  state: string;
	
  constructor() { 
    this.state = 'in';
  }

  ngOnInit() {
		
  }

}
