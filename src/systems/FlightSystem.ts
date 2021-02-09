const TWOPI = 2 * Math.PI;

const RAD2DEG = 180 / Math.PI;

export default class FlightSystem implements ISystem {
  entity: Entity;
  omega: number; // angular velocity [rad/s]
  r: number; // radius of the circle [m]
  theta: number; // angular position [rad]
  p: Vector3; // cartesian position [m]

  constructor(entity: Entity, omega: number, radius: number) {
    this.entity = entity;
    this.omega = omega;
    this.r = radius;
    this.theta = 0;
    this.p = new Vector3(radius, 0, 0);
  }

  update(dt: number) {
    const dTheta = this.omega * dt;
    const theta = this.theta + dTheta;
    const x = this.r * Math.sin(theta);
    const y = this.r * Math.cos(theta);

    const p0 = this.entity.getComponent(Transform).position;
    const p1 = p0.add(new Vector3(x - this.p.x, 0, y - this.p.y));
    this.entity.getComponent(Transform).position = p1;

    this.entity
      .getComponent(Transform)
      .rotation.setEuler(-5, theta * RAD2DEG + 90, -30);

    this.theta = theta > TWOPI ? theta - TWOPI : theta;
    this.p.set(x, y, 0);
  }
}
