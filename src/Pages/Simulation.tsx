import React from "react"
import { Coordinates, Transform, Theme, useMovablePoint, Mafs, useTransformContext, vec, Vector } from "mafs";

function PointCloud() {
  const { userTransform, viewTransform } = useTransformContext();

  const xStart = -5;
  const yStart = -5;
  const xEnd = 5;
  const yEnd = 5;
  const step = 1;

  const points: { at: vec.Vector2; color: string }[] = [];
  for (let i = xStart; i <= xEnd; i += step) {
    for (let j = yStart; j <= yEnd; j += step) {
      const userTransformedPoint = vec.transform([i, j], userTransform);
      const viewTransformedPoint = vec.transform(
        userTransformedPoint,
        viewTransform
      );

      points.push({
        at: viewTransformedPoint,
        color: Theme.foreground,
      });
    }
  }

  return (
    <>
      {points.map(({ at: [x, y], color }) => {
        return (
          <circle
            key={`${x},${y}`}
            cx={x}
            cy={y}
            r={3}
            fill={color}
            className="mafs-shadow"
          />
        );
      })}
    </>
  );
}

const Simulation = () =>{
  const iHat = useMovablePoint([1, 0], { color: Theme.red });
  const jHat = useMovablePoint([0, 1], { color: Theme.blue });
  return (
    <React.Fragment>
      <Mafs>
        <Coordinates.Cartesian  subdivisions={2}/>
          <Transform matrix={[iHat.point[0], jHat.point[0], 0, iHat.point[1], jHat.point[1], 0]}>
              <PointCloud />
          </Transform> 
        {iHat.element}
        {jHat.element}
        <Vector tip={iHat.point} color={Theme.red}/>
        <Vector tip={jHat.point} color={Theme.blue}/>
          
      </Mafs>
      <div className="inputMatrix">
        <div className="inputMatrix__row">
          <input type="number" ></input>
          <input type="number" ></input>
        </div>
        <div className="inputMatrix__row">
          <input type="number" ></input>
          <input type="number" ></input>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Simulation
