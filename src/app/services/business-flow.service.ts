import { ElementRef, Injectable } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import { BehaviorSubject, Subject } from 'rxjs';

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
  canvas: ElementRef<HTMLCanvasElement> | null = null;
  public ctx: CanvasRenderingContext2D | null |undefined = null;
  DropSubject = new Subject<any|null>();
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
    this.DropSubject.next(JSON.stringify(event, null, 2));
    console.log("dropped", JSON.stringify(event, null, 2));
  }
}
