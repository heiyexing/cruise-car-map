import { GaodeMap, LineLayer, PointLayer, PolygonLayer, Scene } from '@antv/l7';
import { featureCollection, polygon } from '@turf/turf';
import { cellToBoundary, latLngToCell } from 'h3-js';
import React, { useEffect } from 'react';
import { data } from './mock';

const id = String(Math.random());

export default () => {
  const JsonToHex = (json: any, hexId: string, lat: string, lon: string) => {
    const HexIdList = json.map((item: any) => {
      return {
        ...item,
        hexId: latLngToCell(+item[lat], +item[lon], +item[hexId]),
      };
    });

    const HexIdFilter = HexIdList.filter(
      (item: { hexId: string }, index: number, arr: any[]) => {
        return arr.findIndex((t) => t.hexId === item.hexId) === index;
      },
    );

    const HexBoundaryList = HexIdFilter.map((item: any) => {
      return { ...item, hexBoundary: cellToBoundary(item.hexId, true) };
    });

    const features = HexBoundaryList.map((item: any) => {
      return polygon([item.hexBoundary], { ...item });
    });

    return featureCollection(features);
  };

  useEffect(() => {
    const scene = new Scene({
      id,
      map: new GaodeMap({
        center: [121.438579, 31.246384],
        pitch: 0,
        zoom: 10,
        token: '5ae4492ef912cbbc93034fea0e66ff2a',
      }),
    });
    scene.on('loaded', () => {
      const hexLayer = new PolygonLayer({})
        .source(JsonToHex(data, 'odCnt', 'fLat', 'fLon'))
        .color('count', [
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
        .source(JsonToHex(data, 'odCnt', 'fLat', 'fLon'))
        .color('#fff')
        .size(0.8);

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

      scene.addLayer(hexLayer);
      scene.addLayer(lineLayer);
      scene.addLayer(pointLayer);
    });
  }, []);

  return (
    <div>
      <div id={id} style={{ height: 400, position: 'relative' }} />
    </div>
  );
};
