import { GaodeMap, LineLayer, PolygonLayer, Scene } from '@antv/l7';
import { featureCollection, polygon } from '@turf/turf';
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

      scene.addLayer(hexLayer);
      scene.addLayer(lineLayer);
    });
  }, []);

  return (
    <div>
      <div id={'map'} style={{ height: 400, position: 'relative' }} />
    </div>
  );
};
