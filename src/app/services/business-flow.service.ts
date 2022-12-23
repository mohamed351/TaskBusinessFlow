import { ElementRef, Injectable } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import { BehaviorSubject, Subject } from 'rxjs';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class BusinessFlowService {

  draggable = {
    // note that data is handled with JSON.stringify/JSON.parse
    // only set simple data or POJO's as methods will be lost
    data: "myDragData",
    effectAllowed: "all",
    disable: false,
    handle: false
  };

  DropSubject = new Subject<any|null>();
   targetID:string| null = null;
   sourceID:string| null = null;

 public nodes:any[] = [

  ]
 public links:any []= [

  ]

 public update$: Subject<any> = new Subject();
  constructor() { }


  onDragStart(event:DragEvent) {

    console.log("drag started", JSON.stringify(event, null, 2));
  }

  onDragEnd(event:DragEvent) {

    console.log("drag ended", JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event:DragEvent) {

    console.log("draggable copied", JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event:DragEvent) {

    console.log("draggable linked", JSON.stringify(event, null, 2));
  }

  onDraggableMoved(event:DragEvent) {

    console.log("draggable moved", JSON.stringify(event, null, 2));
  }

  onDragCanceled(event:DragEvent) {

    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }

  onDragover(event:DragEvent) {


    console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event:DndDropEvent) {
    this.DropSubject.next(event.data);
  }

  onTargetAnSourceSelect(data:any){
    if(this.sourceID === null){
      this.sourceID =data.id;
      return;
    }
    if(this.targetID ===null){
      this.targetID =data.id;
      return;
    }
    if(this.targetID !== null && this.sourceID !== null){
      this.sourceID = data.id;
      this.targetID =null;
      return;
    }




  }

  addConnector(){
    if(this.targetID != null && this.sourceID != null){
      this.links.push({
        id:uuid.v4(),
        source:this.sourceID,
        target: this.targetID,
      });
      this.sourceID == null;
      this.targetID = null;
      this.update$.next(true);
    }
    else{
      alert("please select soruce and distination");
    }
  }


}
