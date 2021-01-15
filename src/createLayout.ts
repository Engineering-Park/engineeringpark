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

export default function createLayout() {
  return {
    shapes: shapes(),
    connectors: connectors(),
    width: 26,
    height: 14,
    orientation: Orientation.vertical
  };
}

const layoutProperties: LayoutProperties = {
  nodeWidth: 2,
  nodeHeight: 2,
  nodeOrientation: Orientation.horizontal,
  horizontalSpacing: 2,
  verticalSpacing: 2,
  layoutOrientation: Orientation.vertical
};

const shapes = () => [
  {
    name: "Element 1",
    width: 2,
    height: 2,
    position: { x: 1, y: 13 },
    rotation: 0
  },
  {
    name: "Element 2",
    width: 2,
    height: 2,
    position: { x: 5, y: 13 },
    rotation: 0
  },
  {
    name: "Element 3",
    width: 2,
    height: 2,
    position: { x: 3, y: 9 },
    rotation: 0
  },
  {
    name: "Element 4",
    width: 2,
    height: 2,
    position: { x: 9, y: 9 },
    rotation: 0
  },
  {
    name: "Element 5",
    width: 2,
    height: 2,
    position: { x: 6, y: 5 },
    rotation: 0
  },
  {
    name: "Element 6",
    width: 2,
    height: 2,
    position: { x: 13, y: 5 },
    rotation: 0
  },
  {
    name: "Element 7",
    width: 2,
    height: 2,
    position: { x: 17, y: 13 },
    rotation: 0
  },
  {
    name: "Element 8",
    width: 2,
    height: 2,
    position: { x: 21, y: 13 },
    rotation: 0
  },
  {
    name: "Element 9",
    width: 2,
    height: 2,
    position: { x: 19, y: 9 },
    rotation: 0
  },
  {
    name: "Element 10",
    width: 2,
    height: 2,
    position: { x: 25, y: 9 },
    rotation: 0
  },
  {
    name: "Element 11",
    width: 2,
    height: 2,
    position: { x: 22, y: 5 },
    rotation: 0
  },
  {
    name: "Element 12",
    width: 2,
    height: 2,
    position: { x: 14, y: 1 },
    rotation: 0
  }
];

const connectors = () => [
  { p1: { x: 3, y: 9 }, p2: { x: 1, y: 13 } }, // element 3 to element 1
  { p1: { x: 3, y: 9 }, p2: { x: 5, y: 13 } }, // element 3 to element 2
  { p1: { x: 6, y: 5 }, p2: { x: 3, y: 9 } }, // element 5 to element 3
  { p1: { x: 6, y: 5 }, p2: { x: 9, y: 9 } }, // element 5 to element 4
  { p1: { x: 19, y: 9 }, p2: { x: 17, y: 13 } }, // element 9 to element 7
  { p1: { x: 19, y: 9 }, p2: { x: 21, y: 13 } }, // element 9 to element 8
  { p1: { x: 22, y: 5 }, p2: { x: 19, y: 9 } }, // element 11 to element 9
  { p1: { x: 22, y: 5 }, p2: { x: 25, y: 9 } }, // element 11 to element 10
  { p1: { x: 14, y: 1 }, p2: { x: 6, y: 5 } }, // element 12 to element 5
  { p1: { x: 14, y: 1 }, p2: { x: 13, y: 5 } }, // element 12 to element 6
  { p1: { x: 14, y: 1 }, p2: { x: 22, y: 5 } } // element 12 to element 11
];
