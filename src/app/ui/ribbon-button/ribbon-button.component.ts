import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ribbon-button',
  templateUrl: './ribbon-button.component.html',
  styleUrls: ['./ribbon-button.component.css']
})
export class RibbonButtonComponent implements OnInit {
  @Input("text") text ="";
  @Input("icon") icon ="";
  constructor() { }

  ngOnInit(): void {
  }
  buttonClicked(data:any){

  }

}
