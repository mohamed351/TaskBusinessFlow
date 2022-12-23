import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BusinessFlowService } from 'src/app/services/business-flow.service';

@Component({
  selector: 'app-ribbon-button',
  templateUrl: './ribbon-button.component.html',
  styleUrls: ['./ribbon-button.component.css']
})
export class RibbonButtonComponent implements OnInit {
  @Input("text") text ="";
  @Input("icon") icon ="";
  @Output("click") onClick = new EventEmitter<any|null>();
  constructor(private busineessFlow:BusinessFlowService) { }

  ngOnInit(): void {
  }
  buttonClicked(data:any){


  }

}
