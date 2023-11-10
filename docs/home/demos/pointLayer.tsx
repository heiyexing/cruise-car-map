import { GaodeMap, PointLayer, Scene } from '@antv/l7';
import React, { useEffect } from 'react';
import { data } from './mock';

export default () => {
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
    scene.on('loaded', () => {
      const pointLayer = new PointLayer({})
        .source(data, {
          parser: {
            type: 'json',
            x: 'fLon',
            y: 'fLat',
          },
        })
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
