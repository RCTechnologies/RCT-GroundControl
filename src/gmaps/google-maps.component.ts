import { Component, OnInit } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral, PolyMouseEvent, MouseEvent, SebmGoogleMapPolyline, SebmGoogleMapPolylinePoint } from './../../node_modules/angular2-google-maps/core';

import { MapActionStack } from './util/map-action-stack';
import { MapAction } from './util/map-action';
import { MapActionType } from './util/map-action-type.enum';


@Component({
  selector: 'app-google-maps',
  styles:[`
   .sebm-google-map-container {
     height: 600px;
   }
  
  #button{
    width: 125px;
    height: 30px;
    border: none;
  }


   #bottom {
    position:fixed;
   left: 640px;
   top:0;
    width: 100%;
    min-height: 150px;
    background-color:rgba(0, 0, 0, 0.6);
    color: ghostwhite;
    text-align: left;
    font-family: arial;
}

#bottom p{
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 12px;
  margin-left:5px;
  font-weight: bold;
}

#top{
  position
}
`],
  template: 
  `

    <button id="button" (click)="togglePolygonMode()"><b>Polygon Mode</b> <b [ngStyle]="{color: (polygonMode)? 'green':'red'}">{{polygonMode}}</b></button>
    <button id="button" (click)="togglePointToPointMode()"><b>Point-to-Point Mode</b> <b [ngStyle]="{color: (pointToPointMode)? 'green':'red'}">{{pointToPointMode}}</b></button>
    <button id="button" (click)="deletePolygon()" [disabled]="paths2.length == 0"><b>Delete Polygon</b></button>
    <button id="button" (click)="undo()" [disabled]="mapActionStack.isEmpty()"><b>Undo</b></button>
    

    <sebm-google-map 
    [latitude]="lat" 
    [longitude]="lng" 
    [zoom]="zoom"
    [disableDoubleClickZoom]="true"
    (mapClick)="mapClicked($event)">

    <sebm-google-map-marker [latitude]="marker.lat" [longitude]="marker.lng" [label]="'M'">
     </sebm-google-map-marker>

      <sebm-map-polygon *ngIf="paths2.length%2==0" 
      [paths]="paths2"
      [fillColor]="'lime'"
      [fillOpacity]="0.4"
      [strokeColor]="'black'"
      [strokeWeight]="1.5"
      [polyDraggable]="true" 
      [editable]="true"
      (polyClick)="polyClick($event)"
      (polyDblClick)="polyDblClick($event)"
      (polyDrag)="polyDrag($event)"
      (polyDragEnd)="polyDragEnd($event)"
      (polyMouseDown)="polyMouseDown($event)"
      (polyMouseMove)="polyMouseMove($event)"
      (polyMouseOut)="polyMouseOut($event)"
      (polyMouseOver)="polyMouseOver($event)"
      (polyMouseUp)="polyMouseUp($event)"
      (polyRightClick)="polyRightClick($event)"
      (ngOnChanges)="ngOnChanges($event)"
      >
      </sebm-map-polygon>
      
      
      <sebm-map-polygon *ngIf="paths2.length%2==1" 
      [paths]="paths2"
      [fillColor]="'lime'"
      [fillOpacity]="0.4"
      [strokeColor]="'black'"
      [strokeWeight]="1.5"
      [polyDraggable]="true" 
      [editable]="true"
      (polyClick)="polyClick($event)"
      (polyDblClick)="polyDblClick($event)"
      (polyDrag)="polyDrag($event)"
      (polyDragEnd)="polyDragEnd($event)"
      (polyMouseDown)="polyMouseDown($event)"
      (polyMouseMove)="polyMouseMove($event)"
      (polyMouseOut)="polyMouseOut($event)"
      (polyMouseOver)="polyMouseOver($event)"
      (polyMouseUp)="polyMouseUp($event)"
      (polyRightClick)="polyRightClick($event)"
      (ngOnChanges)="ngOnChanges($event)"
      >
      </sebm-map-polygon> 

      <sebm-google-map-polyline>
         <sebm-google-map-polyline-point *ngFor="let item of points; let i = index" [latitude]="item.lat" [longitude]="item.lng">
         </sebm-google-map-polyline-point>
     </sebm-google-map-polyline>
      

    </sebm-google-map>

    <div id="bottom">
      
        <p *ngFor="let item of paths2; let i = index" [ngStyle]="{color: (latestVertex == i)? 'cyan':'white'}">lat: {{item.lat}}, lng: {{item.lng}}</p>
      
    </div>
  `
})
export class GoogleMapsComponent implements OnInit {
  lat: number = 55.6717155;
  lng: number = 12.6132054;

  latestVertex: number = -1;

  mapActionStack: MapActionStack;

  // Should be used to show the drone's current position
  marker = {
    lat: this.lat,
    lng: this.lng
  };

  zoom: number = 16;

  polygonMode: boolean = false;
  pointToPointMode: boolean = false;

  // For drawing the polygon
  paths2: Array<LatLngLiteral> = [];

  // For drawing the point-to-point
  points: Array<LatLngLiteral> = [];

  polyMouseDownCoord: LatLngLiteral;

  polyDragEndCoord: LatLngLiteral;

  // FUNCTIONS
  ngOnInit() {
    this.mapActionStack = new MapActionStack();
  }

  mapClicked($event: MouseEvent) {
    console.log($event);

    let clickedPoint: LatLngLiteral = $event.coords;

    if (this.polygonMode == true) {
      this.deployPolygonPoint(clickedPoint);
    }
    if (this.pointToPointMode == true){
      this.deployPoint(clickedPoint);
    }
  }

  // Happens when clicking the polygon
  polyClick($event: PolyMouseEvent) {
      console.log($event);
  }

  // Happens when doubleclicking the polygon
  polyDblClick($event: PolyMouseEvent) {
      console.log($event);
  }

  // Happens when dragging the polygon
  polyDrag($event: MouseEvent) {
      console.log($event);
  }

  // Happens once afte the polygon is not being dragged anymore
  polyDragEnd($event: PolyMouseEvent) {
      console.log('PolyDragEnd');
      console.log($event);
    // Push to MapActionStack
    this.mapActionStack.push(new MapAction(MapActionType.POLYGON_DRAGGED, this.paths2));

    this.polyDragEndCoord = { lat: $event.latLng.lat(), lng: $event.latLng.lng() };

    var differenceLat: number = this.polyDragEndCoord.lat - this.polyMouseDownCoord.lat;
    var differenceLng: number = this.polyDragEndCoord.lng - this.polyMouseDownCoord.lng;
    // alert('differenceLat: ' + differenceLat + ' differenceLng ' + differenceLng);

    console.log($event);

    this.paths2.forEach(function (vertex) {

      console.log('vertex.lat + differenceLat = ' + (vertex.lat + differenceLat));
      console.log('vertex.lat - differenceLat = ' + (vertex.lat - differenceLat));


      if(differenceLat > 0){
        // Going up
        //vertex.lat += differenceLat;
      }
      else if(differenceLat < 0){
        // Going down
        //vertex.lat -= differenceLat;
      }else{
        // Didn't change Latitude°
      }

      if(differenceLng > 0){
        // Going right
        //vertex.lng += differenceLng;
      }
      else if(differenceLng < 0 ){
        // Going left        
        //vertex.lng -= differenceLng;
      }else{
        // Didn't change Longitude°
      }

      

      vertex.lat += differenceLat;
      vertex.lng += differenceLng;
    });

    //alert('lat difference: ' + (differenceLat));
  }

  // Happens once when the mouse is pressed on when cursor is inside of polygon
  polyMouseDown($event: PolyMouseEvent) {
    this.polyMouseDownCoord = { lat: $event.latLng.lat(), lng: $event.latLng.lng() };
    this.checkForVertexDrag($event);
  }

  // Happens when cursor is moven across polygon
  polyMouseMove($event: PolyMouseEvent) {
    this.checkForVertexDrag($event);
  }

  // Happens once when cursor leaves the polygon
  polyMouseOut($event: PolyMouseEvent) {
    this.checkForVertexDrag($event);
  }

  // Happens once when cursor enter the polygon
  polyMouseOver($event: PolyMouseEvent) {
    this.checkForVertexDrag($event);
  }

  // Happens once when the mouse is released after it was being pressed down
  polyMouseUp($event: PolyMouseEvent) {
    this.checkForVertexDrag($event);
  }

  // Happens when right-clicking on the polygon
  polyRightClick($event: PolyMouseEvent) {
    console.log($event);
  }

// ======================== CUSTOM UTILITY FUNCTIONS ========================== //


  togglePolygonMode() {
    this.polygonMode = !this.polygonMode;
    this.pointToPointMode = false;
  }

  togglePointToPointMode(){
    this.pointToPointMode = !this.pointToPointMode;
    this.polygonMode = false;
  }

  deployPolygonPoint(clickedPoint: LatLngLiteral) {
    // Push to MapActionStack
    this.mapActionStack.push(new MapAction(MapActionType.VERTEX_ADDED, this.paths2));
    this.paths2.push({ lat: clickedPoint.lat, lng: clickedPoint.lng });
  }

  deletePolygon() {
    this.paths2 = [];
  }

  deployPoint(clickedPoint: LatLngLiteral){
    // Push to MapActionStack
    this.mapActionStack.push(new MapAction(MapActionType.POINT_ADDED, this.points));
    this.points.push({ lat: clickedPoint.lat, lng: clickedPoint.lng })
  }

  // UTILITY FUNCTIONS

  checkForVertexDrag($event: PolyMouseEvent) {
      // If $event.vertex == null, then the even doesn't occur on a vertex
      // therefore a vertex is not dragged.
    if ($event.vertex == null) {
    } else {
      this.latestVertex = $event.vertex;
      this.paths2[$event.vertex] = { lat: $event.latLng.lat(), lng: $event.latLng.lng() };
    }
  }

  undo() {
    
    if(!this.mapActionStack.isEmpty()){
      let poppedItem: MapAction = this.mapActionStack.pop();
        switch(poppedItem.getType()){
          case MapActionType.POLYGON_DRAGGED:
            break;
          case MapActionType.VERTEX_DRAGGED:
            break;
          case MapActionType.VERTEX_ADDED:
            this.paths2 = poppedItem.getPaths();
            break;
          case MapActionType.POINT_ADDED:
            this.points = poppedItem.getPaths();
            break;
        }
    }
  }

}
