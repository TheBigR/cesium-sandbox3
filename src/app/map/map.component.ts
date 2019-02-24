import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private el: ElementRef) { }

  transparentBaseLayer = new Cesium.SingleTileImageryProvider({
    url : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII='
  });

  viewer = new Cesium.Viewer('cesiumContainer', {
    skyBox : false,
    skyAtmosphere : false,
    baseLayerPicker : false,
    imageryProvider : this.transparentBaseLayer,
    contextOptions : {
      webgl: {
        alpha: true
      }
    }
  });


  ngOnInit() {
    const viewer = new Cesium.Viewer(this.el.nativeElement);
    this.initMap();
  }

  initMap() {
    this.viewer.scene.backgroundColor = Cesium.Color.TRANSPARENT;
    this.viewer.scene.globe.baseColor = Cesium.Color.TRANSPARENT;


  }

}
