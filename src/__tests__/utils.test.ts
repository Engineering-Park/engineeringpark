import { parcelDisplacement, Vector2 } from '../utils';

describe('parcelDisplacement', () => {
  it('should calculate the displacement from parcel 69,49 to 72,49', () => {
    const expectedResult: Vector2 = {
      x:30,
      z:0
    }
    expect(parcelDisplacement({x:69, z:49}, {x:72, z:49})).toEqual(expectedResult);
  })

  it('should calculate the displacement from parcel 69,49 to 65,49', () => {
    const expectedResult: Vector2 = {
      x:-40,
      z:0
    }
    expect(parcelDisplacement({x:69, z:49}, {x:65, z:49})).toEqual(expectedResult);
  })

  it('should calculate the displacement from parcel 69,49 to 69,48', () => {
    const expectedResult: Vector2 = {
      x:0,
      z:-10
    }
    expect(parcelDisplacement({x:69, z:49}, {x:69, z:48})).toEqual(expectedResult);
  })

  it('should calculate the displacement from parcel 69,49 to 69,38', () => {
    const expectedResult: Vector2 = {
      x:0,
      z:-110
    }
    expect(parcelDisplacement({x:69, z:49}, {x:69, z:38})).toEqual(expectedResult);
  })
})
