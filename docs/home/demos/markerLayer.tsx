import { GaodeMap, Marker, MarkerLayer, Scene } from '@antv/l7';
import { randomPoint } from '@turf/turf';
import React, { useEffect, useState } from 'react';
import { markerData } from './mock';

export default () => {
  const [scene, setScene] = useState<Scene | undefined>(undefined);
  const [markerLayer, setMarkerLayer] = useState<MarkerLayer | undefined>(
    undefined,
  );
  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        center: [121.438579, 31.246384],
        pitch: 0,
        zoom: 10,
        token: '5ae4492ef912cbbc93034fea0e66ff2a',
      }),
    });
    setScene(scene);
    function addMarkers() {
      const markerLayer = new MarkerLayer({
        // cluster: true,
        clusterOption: {
          element: (e) => {
            const el = document.createElement('div');
            el.className = `markerDivClass`;
            el.innerHTML = `<div><img style="width: 20px;height:30px; transform: rotate(${
              e.properties.rotation ?? 0
            }deg); )" src='https://mdn.alipayobjects.com/huamei_k6sfo0/afts/img/A*lFnGQae3LtkAAAAAAAAAAAAADjWqAQ/original'/></div>`;
            return el;
          },
        },
      });
      setMarkerLayer(markerLayer);
      for (let i = 0; i < markerData.length; i++) {
        const marker = new Marker({}).setLnglat({
          lng: markerData[i].fLon,
          lat: markerData[i].fLat,
        });
        marker.setExtData(markerData[i]);
        markerLayer.addMarker(marker);
      }
      scene.addMarkerLayer(markerLayer);
    }
    scene.on('loaded', () => {
      addMarkers();
      scene.render();
    });
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          const bounds = scene?.getBounds();
          if (bounds && markerLayer && scene) {
            const point = randomPoint(1, {
              bbox: [bounds[0][0], bounds[0][1], bounds[1][0], bounds[1][1]],
            });
            const coordinates = point.features[0].geometry.coordinates;
            const marker = new Marker({}).setLnglat({
              lng: coordinates[1],
              lat: coordinates[0],
            });
            markerLayer.addMarker(marker);
            scene.addMarkerLayer(markerLayer);
          }
        }}
      >
        车辆+1
      </button>
      <button
        type="button"
        onClick={() => {
          const markers = markerLayer?.markers;
          markerLayer?.removeMarker(markers[markers.length - 1]);
          scene.addMarkerLayer(markerLayer);
          console.log(markerLayer);
        }}
      >
        车辆-1
      </button>
      <div id={'map'} style={{ height: 400, position: 'relative' }} />
    </div>
  );
};
