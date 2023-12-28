import { GaodeMap, LineLayer, PointLayer, PolygonLayer, Scene } from '@antv/l7';
import { featureCollection, point, polygon } from '@turf/turf';
import React, { useEffect } from 'react';
import { newData } from './newMock';

const jsonToPolygon = (json: any) => {
  const data = json.heatmap_data.fences.map((item) => {
    const newPoints = item.points.map((point) => {
      return [+point.longitude, +point.latitude];
    });
    const polygonData = polygon([[...newPoints, [...newPoints[0]]]], {
      ...item,
    });
    return polygonData;
  });
  return featureCollection(data);
};

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
    console.log();
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
      const hexLayer = new PolygonLayer({})
        .source(jsonToPolygon(newData))
        .color('order_count', [
          'rgb(253,204,138)',
          'rgb(252,141,89)',
          'rgb(227,74,51)',
          'rgb(179,0,0)',
        ])
        .shape('fill')
        .active(true)
        .style({
          opacity: 0.6,
        });

      const lineLayer = new LineLayer({
        zIndex: 2,
      })
        .source(jsonToPolygon(newData))
        .color('#fff')
        .size(0.8);

      const pointLayer = new PointLayer({})
        .source(jsonToPoint(newData))
        .shape('circle')
        .size(5)
        .color('#0f9960');

      scene.addLayer(hexLayer);
      scene.addLayer(lineLayer);
      scene.addLayer(pointLayer);
    });
  }, []);

  return (
    <div>
      <div id={'map'} style={{ height: 400, position: 'relative' }} />
    </div>
  );
};
