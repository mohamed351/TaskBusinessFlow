import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-bar',
  templateUrl: './nav-bar-button.component.html',
  styleUrls: ['./nav-bar-button.component.css']
})
export class NavBarButtonComponent implements OnInit {

  @Input("text") text ="";
  @Input("icon") icon ="";
  constructor() { }

  ngOnInit(): void {
  }
  buttonClicked(data:any){
    console.log(data);
    }
}
