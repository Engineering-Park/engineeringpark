export interface LayoutProperties {
  nodeWidth: number;
  nodeHeight: number;
  nodeOrientation: Orientation;
  horizontalSpacing: number;
  verticalSpacing: number;
  layoutOrientation?: Orientation;
  horizontalOffset?: number;
  verticalOffset?: number;
}

export interface Layout {
  shapes: Shape[];
  connectors: Connector[];
  width: number;
  height: number;
  orientation?: Orientation;
}

export interface Shape {
  name: string;
  width: number;
  height: number;
  position: Position;
  rotation: number;
}

export interface Connector {
  p1: Position;
  p2: Position;
}

export enum Orientation {
  horizontal = "horizontal",
  vertical = "vertical"
}

export interface Position {
  x: number;
  y: number;
}

export default function createStaticModelLayout() {
  return {
    shapes: shapes(),
    connectors: connectors(),
    width: 13.5,
    height: 11,
    orientation: Orientation.vertical
  };
}

const shapes = () => [
  {
    name: "Data",
    width: 3,
    height: 2,
    position: { x: 1.5, y: 10 },
    rotation: 0
  },
  {
    name: "Hardware",
    width: 3,
    height: 2,
    position: { x: 5, y: 10 },
    rotation: 0
  },
  {
    name: "Subsystem",
    width: 3,
    height: 2,
    position: { x: 5, y: 7 },
    rotation: 0
  },
  {
    name: "System",
    width: 3,
    height: 2,
    position: { x: 5, y: 4 },
    rotation: 0
  },
  {
    name: "Software",
    width: 3,
    height: 2,
    position: { x: 8.5, y: 10 },
    rotation: 0
  },
  {
    name: "Service",
    width: 3,
    height: 2,
    position: { x: 12, y: 7 },
    rotation: 0
  },
  {
    name: "System of Systems",
    width: 3,
    height: 2,
    position: { x: 12, y: 4 },
    rotation: 0
  },
  {
    name: "System of Interest",
    width: 3,
    height: 2,
    position: { x: 8.5, y: 1 },
    rotation: 0
  }
];

const connectors = () => [
  { p1: { x: 3, y: 9 }, p2: { x: 1, y: 12 } }, // element 3 to element 1
  { p1: { x: 3, y: 9 }, p2: { x: 5, y: 12 } }, // element 3 to element 2
  { p1: { x: 6, y: 5 }, p2: { x: 3, y: 9 } }, // element 5 to element 3
  { p1: { x: 6, y: 5 }, p2: { x: 9, y: 9 } }, // element 5 to element 4
  { p1: { x: 19, y: 9 }, p2: { x: 17, y: 12 } }, // element 9 to element 7
  { p1: { x: 19, y: 9 }, p2: { x: 21, y: 12 } }, // element 9 to element 8
  { p1: { x: 22, y: 5 }, p2: { x: 19, y: 9 } }, // element 11 to element 9
  { p1: { x: 22, y: 5 }, p2: { x: 25, y: 9 } }, // element 11 to element 10
  { p1: { x: 14, y: 1 }, p2: { x: 6, y: 5 } }, // element 12 to element 5
  { p1: { x: 14, y: 1 }, p2: { x: 12, y: 5 } }, // element 12 to element 6
  { p1: { x: 14, y: 1 }, p2: { x: 22, y: 5 } } // element 12 to element 11
];
