import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BusinessFlowService } from 'src/app/services/business-flow.service';

@Component({
  selector: 'app-digram',
  templateUrl: './digram.component.html',
  styleUrls: ['./digram.component.css']
})
export class DigramComponent implements OnInit {



  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement> | null = null;
  private ctx: CanvasRenderingContext2D | null = null;

  constructor(public businessFlow:BusinessFlowService) { }

  ngOnInit(): void {
    this.ctx = this.canvas!.nativeElement.getContext('2d');
    this.businessFlow.DropSubject.subscribe(a=>{
      this.ctx!.fillStyle = 'red';
      this.ctx!.fillRect(10, 10, 10, 10);
    })
    console.log(this.ctx);



  }

}
