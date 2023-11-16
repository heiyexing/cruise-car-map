import { GaodeMap, Marker, MarkerLayer, Scene } from '@antv/l7';
import { randomPoint } from '@turf/turf';
import { mean } from 'lodash-es';
import React, { useEffect, useState } from 'react';

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
        style: 'normal',
        token: '5ae4492ef912cbbc93034fea0e66ff2a',
      }),
    });
    setScene(scene);

    scene.on('loaded', () => {
      const markerLayer = new MarkerLayer({
        cluster: true,
        clusterOption: {
          // 返回展示元素的 DOM，cars 可能是聚合点数据，也有可能是原始数据
          element: (cars) => {
            const rotation =
              cars.properties.rotation ||
              // 为聚合点时，rotation 取平均值
              mean(
                cars.properties.clusterData?.map(
                  (item) => item.properties.rotation,
                ),
              ) ||
              0;
            const el = document.createElement('div');
            el.className = `markerDivClass`;
            el.innerHTML = `<div>
              <img 
                style="width: 20px; height:30px; transform: rotate(${rotation}deg);" 
                src="https://mdn.alipayobjects.com/huamei_k6sfo0/afts/img/A*lFnGQae3LtkAAAAAAAAAAAAADjWqAQ/original"
              />
            </div>`;
            return el;
          },
          // 触发聚合的范围
          radius: 40,
        },
      });
      const bounds = scene.getBounds();

      randomPoint(100, {
        bbox: [bounds[0][0], bounds[0][1], bounds[1][0], bounds[1][1]],
      }).features.forEach((point) => {
        const coordinates = point.geometry.coordinates;
        const marker = new Marker({}).setLnglat({
          lng: coordinates[0],
          lat: coordinates[1],
        });
        marker.setExtData({
          rotation: Math.round(Math.random() * 360),
        });
        markerLayer.addMarker(marker);
      });
      scene.addMarkerLayer(markerLayer);
      setMarkerLayer(markerLayer);
    });
  }, []);

  const onAddMarker = () => {
    const bounds = scene?.getBounds();
    if (bounds && markerLayer && scene) {
      const point = randomPoint(1, {
        bbox: [bounds[0][0], bounds[0][1], bounds[1][0], bounds[1][1]],
      });
      const coordinates = point.features[0].geometry.coordinates;
      const marker = new Marker({}).setLnglat({
        lng: coordinates[0],
        lat: coordinates[1],
      });
      markerLayer.addMarker(marker);
    }
  };

  const onRemoveMarker = () => {
    const markers = markerLayer?.getOriginMarkers();
    markerLayer?.removeMarker(markers[markers.length - 1]);
  };

  return (
    <div>
      <button type="button" onClick={onAddMarker}>
        车辆+1
      </button>
      <button type="button" onClick={onRemoveMarker}>
        车辆-1
      </button>
      <div id={'map'} style={{ height: 400, position: 'relative' }} />
    </div>
  );
};
