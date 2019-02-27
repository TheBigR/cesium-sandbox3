import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  viewer;
  options = {
    skyBox: false,
    skyAtmosphere: false,
    contextOptions: {
      webgl: {
        alpha: true
      }
    }
  };
  constructor(private el: ElementRef) { }

  transparentBaseLayer = new Cesium.SingleTileImageryProvider({
    url : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII='
  });

  // viewer = new Cesium.Viewer('cesiumContainer', {
  //   skyBox : false,
  //   skyAtmosphere : false,
  //   baseLayerPicker : false,
  //   imageryProvider : this.transparentBaseLayer,
  //   contextOptions : {
  //     webgl: {
  //       alpha: true
  //     }
  //   }
  // });


  ngOnInit() {
    this.viewer = new Cesium.Viewer(this.el.nativeElement, this.options);
    this.initMap();
  }

  initMap() {
     this.viewer.scene.globe.show = false;
     this.viewer.timeline.destroy();
     this.viewer.homeButton.destroy();
     this.viewer.sceneModePicker.destroy();
     this.viewer.fullscreenButton.destroy();
     this.viewer.navigationHelpButton.destroy();
     this.viewer.animation.destroy();
     this.viewer.scene.frameState.creditDisplay.destroy();
     this.viewer.fullscreenButton.destroy();
     this.viewer.scene.globe.baseColor = Cesium.Color.TRANSPARENT;
    // this.viewer.scene.skyAtmosphere.destroy();
    // this.viewer.scene.skyBox.destroy();
    // // vieww.scene.skyBox = undefined;
    // // vieww.contextOptions
    // this.viewer.scene.moon.destroy();
    // this.viewer.scene.sun.destroy();
    // this.viewer.scene.fxaa = false;
    // this.viewer.scene.backgroundColor = new Cesium.Color(1, 1, 1, 1);
    this.viewer.scene.backgroundColor = Cesium.Color.TRANSPARENT;
    this.viewer.scene.highDynamicRange = false;



  }

}
