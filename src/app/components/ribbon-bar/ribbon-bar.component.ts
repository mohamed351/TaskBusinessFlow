import { Component, OnInit } from '@angular/core';
import { BusinessFlowService } from 'src/app/services/business-flow.service';

@Component({
  selector: 'app-ribbon-bar',
  templateUrl: './ribbon-bar.component.html',
  styleUrls: ['./ribbon-bar.component.css']
})
export class RibbonBarComponent implements OnInit {

  constructor(private businessFlow:BusinessFlowService) { }

  ngOnInit(): void {
  }
  onConnectorClick(data:any){
  this.businessFlow.addConnector();
  }

}
