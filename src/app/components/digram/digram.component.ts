import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { BusinessFlowService } from 'src/app/services/business-flow.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-digram',
  templateUrl: './digram.component.html',
  styleUrls: ['./digram.component.css']
})
export class DigramComponent implements OnInit {


  // @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement> | null = null;
  // private ctx: CanvasRenderingContext2D | null = null;

  constructor(public businessFlow:BusinessFlowService) { }


  ngOnInit(): void {
    this.businessFlow.DropSubject.subscribe(a=>{
       this.businessFlow.nodes.push({id: uuid.v4(), label:a});
       this.businessFlow.update$.next(true);

    })




  }

  onNodeSelect(data:any){
    this.businessFlow.onTargetAnSourceSelect(data);
    // this.businessFlow.nodes.find(a=> a.id == data)
  }
  clickedOnSvg(){

  }


}
