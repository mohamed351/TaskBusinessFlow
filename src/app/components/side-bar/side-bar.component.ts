import { Component, OnInit } from '@angular/core';
import { BusinessFlowService } from 'src/app/services/business-flow.service';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {



  constructor(public businesssFlow:BusinessFlowService) { }

  ngOnInit(): void {
  }



}
