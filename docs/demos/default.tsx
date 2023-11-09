import type {
  LarkMapProps,
  PointLayerProps,
  PolygonLayerProps,
} from '@antv/larkmap';
import { LarkMap, PointLayer, PolygonLayer } from '@antv/larkmap';
import { polygon } from '@turf/turf';
import { cellToBoundary, latLngToCell } from 'h3-js';
import React, { useEffect, useState } from 'react';
import { data } from './mock';

const layerOptions: Omit<PolygonLayerProps, 'source'> = {
  autoFit: true,
  shape: 'fill',
  color: {
    field: 'cont',
    value: [
      'rgb(253,204,138)',
      'rgb(252,141,89)',
      'rgb(227,74,51)',
      'rgb(179,0,0)',
    ],
  },
  state: {
    active: true,
  },
  style: {
    opacity: 0.6,
  },
};

const lineLayerOptions: Omit<PolygonLayerProps, 'source'> = {
  shape: 'line',
  color: '#fff',
  blend: 'normal',
  state: {
    active: false,
  },
};

const pointOptions: Omit<PointLayerProps, 'source'> = {
  shape: 'circle',
  size: 5,
  color: '#0f9960',
  style: {
    opacity: 0.8,
  },
};

const config: LarkMapProps = {
  mapType: 'Gaode',
  mapOptions: {
    style: 'light',
    center: [120.210792, 30.246026],
    zoom: 10,
    token: '5ae4492ef912cbbc93034fea0e66ff2a',
  },
};

export default () => {
  const [source, setSource] = useState({
    data: { type: 'FeatureCollection', features: [] },
    parser: { type: 'geojson' },
  });
  const [pointSource, setPointSource] = useState<any>({
    data: [],
    parser: { type: 'json', x: 'fLon', y: 'fLat' },
  });

  const jsontohex = (json: any, hexId: string) => {
    const h3IndexList = json.map((item: any) => {
      return {
        ...item,
        h3Index: latLngToCell(+item.fLat, +item.fLon, +item[hexId]),
      };
    });
    const h3IndexFilter = h3IndexList.filter(
      (item: { h3Index: string }, index: number, arr: any[]) => {
        return arr.findIndex((t) => t.h3Index === item.h3Index) === index;
      },
    );
    const h3BoundaryList = h3IndexFilter.map((item: any) => {
      return { ...item, h3Boundary: cellToBoundary(item.h3Index, true) };
    });
    const polygonList = h3BoundaryList.map((item: any) => {
      return polygon([item.h3Boundary], { ...item });
    });
    return polygonList;
  };

  useEffect(() => {
    setSource({
      data: { type: 'FeatureCollection', features: jsontohex(data, 'odCnt') },
      parser: { type: 'geojson' },
    });
    setPointSource((prevState) => ({ ...prevState, data }));
  }, []);

  return (
    <LarkMap {...config} style={{ height: '400px' }}>
      {/* 点数据图层 */}
      <PointLayer {...pointOptions} source={pointSource} />
      {/* 计算过后的Hex图层 */}
      <PolygonLayer {...layerOptions} source={source} />
      {/* 计算过后的Hex边界线图层 */}
      <PolygonLayer {...lineLayerOptions} source={source} />
    </LarkMap>
  );
};
