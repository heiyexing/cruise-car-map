import { GaodeMap, PointLayer, Scene } from '@antv/l7';
import { featureCollection, point } from '@turf/turf';
import React, { useEffect } from 'react';
import { newData } from './newMock';

const jsonToPoint = (json: any) => {
  const geoJsonFeatures = json.heatmap_data.fences.map((fence) => {
    // 通过his_order创建点特征
    const pointFeatures = fence.his_order.map((order) => {
      // 创建GeoJSON点特征
      const pointFeature = point(
        [parseFloat(order.longitude), parseFloat(order.latitude)],
        {
          hex_id: fence.hex_id,
          order_count: fence.order_count,
          rank: fence.rank,
          // 添加更多属性...
        },
      );
      return pointFeature;
    });

    // 将所有点特征合并为一个特征集
    return pointFeatures;
  });

  return featureCollection(geoJsonFeatures.flat());
};

export default () => {
  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        center: [113.2493444306987, 23.13099578261949],
        pitch: 0,
        zoom: 10,
        token: '5ae4492ef912cbbc93034fea0e66ff2a',
      }),
    });
    scene.on('loaded', () => {
      const pointLayer = new PointLayer({})
        .source(jsonToPoint(newData))
        .shape('circle')
        .size(5)
        .color('#0f9960');
      scene.addLayer(pointLayer);
    });
  }, []);

  return (
    <div>
      <div id={'map'} style={{ height: 400, position: 'relative' }} />
    </div>
  );
};
