import { Component, OnInit } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral, PolyMouseEvent, MouseEvent, SebmGoogleMapPolyline, SebmGoogleMapPolylinePoint } from './../../node_modules/angular2-google-maps/core';

import { MapActionStack } from './util/map-action-stack';
import { MapAction } from './util/map-action';
import { MapActionType } from './util/map-action-type.enum';

var PythonShell = require('./../../node_modules/python-shell');


@Component({
  selector: 'app-google-maps',
  moduleId: module.id,
  styleUrls:['google-maps.component.css'],
  templateUrl: 'google-maps.component.html'
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

  deletePolyline(){
    this.points = [];
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
