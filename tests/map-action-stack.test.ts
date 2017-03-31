import test from 'ava';

import { MapAction } from './../src/gmaps/util/map-action';
import { MapActionType } from './../src/gmaps/util/map-action-type.enum';
import { MapActionStack } from './../src/gmaps/util/map-action-stack';
import { LatLngLiteral } from './../node_modules/angular2-google-maps/core';


test('Test of push()',t => {
    var mapActionStack = new MapActionStack();    
    
    // Verifying that the stack is empty
    t.true(mapActionStack.isEmpty());

    mapActionStack.push(new MapAction(MapActionType.POLYGON_DRAGGED, []));

    // Verifying that there has been pushed 'something' to the stack
    t.is(mapActionStack.getSize(), 1);
});


test('Test of pop()',t => {
    var mapActionStack = new MapActionStack();

    mapActionStack.push(new MapAction(MapActionType.POLYGON_DRAGGED, [{ lat: 1, lng: 1 }]));

    // Verifying that the data is consistent
    var tempMapAction = mapActionStack.pop();
    t.is(tempMapAction.getType(), MapActionType.POLYGON_DRAGGED);
    t.is(tempMapAction.getPaths()[0].lat, 1);
    t.is(tempMapAction.getPaths()[0].lng, 1);    
});

test('Test of pop()',t => {
    var mapActionStack = new MapActionStack();

    // Verifying that the data is consistent
    var tempMapAction = mapActionStack.pop();
    t.is(tempMapAction, undefined);

});

test('Test of getSize()',t => {
    var mapActionStack = new MapActionStack();

    t.is(mapActionStack.getSize(), 0);

    mapActionStack.push(new MapAction(MapActionType.POLYGON_DRAGGED, []));
    t.is(mapActionStack.getSize(), 1);

    mapActionStack.push(new MapAction(MapActionType.POLYGON_DRAGGED, []));
    t.is(mapActionStack.getSize(), 2);

    mapActionStack.push(new MapAction(MapActionType.POLYGON_DRAGGED, []));
    t.is(mapActionStack.getSize(), 3);

    mapActionStack.push(new MapAction(MapActionType.POLYGON_DRAGGED, []));
    t.is(mapActionStack.getSize(), 4);
});

test('Test of isEmpty()',t => {
    var mapActionStack = new MapActionStack();

    t.true(mapActionStack.isEmpty());

    mapActionStack.push(new MapAction(MapActionType.POLYGON_DRAGGED, []));
    t.false(mapActionStack.isEmpty());
});