(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

var abstracts = {

    backgroundcolor: 0xfefefe,
    accentColor: 0x5588ff,
    skyColor: 0x87CEFA,
    groudColor: 0x3CB371,
    warmColor: 0xe5a665,

    themeMonoColor1: 0xF6FAFB,
    themeMonoColor2: 0xC3CACD,
    themeMonoColor3: 0x97A1A4,
    themeMonoColor4: 0x717C80,
    themeMonoColor5: 0x49565A,
    themeMonoColor6: 0x1F282C,

    particles: {
        FLOOR_LEVEL: -10
    }
};

module.exports = abstracts;

},{}],2:[function(require,module,exports){
'use strict';

//import './components/background';
//import './components/birds';

var abstracts = require('./abstracts');

var sceneEl = document.querySelector('a-scene');
var scene = sceneEl.object3D;

// let floorEl = document.createElement('a-plane');
// floorEl.setAttribute('height', 100);
// floorEl.setAttribute('width', 100);
// floorEl.setAttribute('rotation', "-90 0 0");
// floorEl.setAttribute('color', '#FFF');
// floorEl.setAttribute('shadow', 'receive: true');
// floorEl.setAttribute('metalness', '0');

// sceneEl.appendChild(floorEl);

// // Floor
// let floorG = new THREE.BoxGeometry( 1000, 0.001, 1000 );
// let floorM = new THREE.MeshBasicMaterial( { 
//     color: 0xFFFFFF,
//     side: THREE.DoubleSide,

// });

// let floorMesh = new THREE.Mesh( floorG, floorM );
// floorMesh.translateY(-1);
// floorMesh.receiveShadow = true;
// scene.add( floorMesh );


// let floorG2 = new THREE.BoxGeometry( 10, 0.001, 10 );
// let floorM2 = new THREE.MeshStandardMaterial( { 
//     color: abstracts.themeMonoColor1,
//     side: THREE.DoubleSide,

// });

// let floorMesh2 = new THREE.Mesh( floorG2, floorM2 );
// floorMesh2.translateZ(1);
// floorMesh2.receiveShadow = true;
// scene.add( floorMesh2 );


// // Panels
var HomeG = new THREE.BoxGeometry(2, 3, 0.1);
var HomeM = new THREE.MeshBasicMaterial({
    color: abstracts.themeMonoColor1,
    side: THREE.DoubleSide

});

var HomeMesh = new THREE.Mesh(HomeG, HomeM);
HomeMesh.position.set(0, 1, -2);
HomeMesh.castShadow = true;

//HomeMesh.translateY(abstracts.particles.FLOOR_LEVEL);
scene.add(HomeMesh);

console.log(sceneEl.object3D);

},{"./abstracts":1}]},{},[2])

//# sourceMappingURL=main.js.map
