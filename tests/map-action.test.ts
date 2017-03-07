import test from 'ava';

import { MapAction } from './../src/gmaps/util/map-action';
import { MapActionType } from './../src/gmaps/util/map-action-type.enum';
import {LatLngLiteral} from 'angular2-google-maps/core';

test('Test of getType()',t => {
    var mapAction = new MapAction(MapActionType.POLYGON_DRAGGED, []);
    var expectedResult = MapActionType.POLYGON_DRAGGED;
    t.is(mapAction.getType(), expectedResult);
});

test('Test of getPaths()',t => {
    var paths: Array<LatLngLiteral> = [
        { lat: 1, lng: 1 }, 
        { lat: 2, lng: 2 },
        { lat: 3, lng: 3 },
        { lat: 4, lng: 4 }
    ];
    var mapAction = new MapAction(MapActionType.POLYGON_DRAGGED, paths);
    var expectedResult: Array<LatLngLiteral> = [
        { lat: 1, lng: 1 }, 
        { lat: 2, lng: 2 },
        { lat: 3, lng: 3 },
        { lat: 4, lng: 4 }
    ];
    t.is(mapAction.getPaths()[0].lat, expectedResult[0].lat);
    t.is(mapAction.getPaths()[0].lng, expectedResult[0].lng);
    
    t.is(mapAction.getPaths()[1].lat, expectedResult[1].lat);
    t.is(mapAction.getPaths()[1].lng, expectedResult[1].lng);

    t.is(mapAction.getPaths()[2].lat, expectedResult[2].lat);
    t.is(mapAction.getPaths()[2].lng, expectedResult[2].lng);

    t.is(mapAction.getPaths()[3].lat, expectedResult[3].lat);
    t.is(mapAction.getPaths()[3].lng, expectedResult[3].lng);
});