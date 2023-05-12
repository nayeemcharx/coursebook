import React from "react"
import { 
  Coordinates, 
  Transform, 
  Theme, 
  useMovablePoint, 
  Mafs, 
  useTransformContext, 
  vec, 
  Vector,
  Polyline,
  useStopwatch,
} from "mafs";

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
  const identity = [1, 0, 0,
                    0, 1, 0]

  const iHat = useMovablePoint([1, 0], { color: Theme.red });
  const jHat = useMovablePoint([0, 1], { color: Theme.blue });

  function matrixAtTime(t: number): [number, number, number, number, number, number] {
    let result: [number, number, number, number, number, number] = [0, 0, 0, 0, 0, 0]
    let matrix = [iHat.point[0], jHat.point[0], 0,
                  iHat.point[1], jHat.point[1], 0]
    for (let i = 0; i < 6; i++) {
      result[i] = matrix[i] * t + identity[i] * (1 - t)
    }
    return result
  }

  const {
    time: t,
    start,
    stop,
  } = useStopwatch({
    endTime: 1,
  });

  const firstRender = React.useRef(true);

  React.useEffect(() => {
    stop();
  }, [stop]);

  React.useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    start();
  }, [start]);

  return (
    <React.Fragment>
      <div style={{
        display: 'flex',
        flexDirection: 'row'}}>
      <Mafs height={600}>
        <Coordinates.Cartesian  subdivisions={2}/>
        <Transform matrix={matrixAtTime(t)}>
            <PointCloud />
        </Transform> 
        {iHat.element}
        {jHat.element}
        <Vector tip={iHat.point} color={Theme.red}/>
        <Vector tip={jHat.point} color={Theme.blue}/>
      </Mafs>
      <Mafs viewBox={{x: [-.5, 1.5], y: [-2, 2]}} width={250}>
        <Polyline points={[[0, .90], [-.15, .90], [-.15, -.20], [0, -.20]]}/>
        <text x={0} y={-32} fontSize={20}>{Number(iHat.point[0]).toFixed(2)} {Number(jHat.point[0]).toFixed(2)}</text>
        <text x={0} y={-4} fontSize={20}>{Number(iHat.point[1]).toFixed(2)} {Number(jHat.point[1]).toFixed(2)}</text>
        <Polyline points={[[1.20, .90], [1.35, .90], [1.35, -.20], [1.20, -.20]]}/>
      </Mafs>
      </div>
      
      <div className="p-4 bg-black border-t border-gray-900 space-x-4">
        <button
          className="bg-gray-200 text-black font-bold px-4 py-1 rounded-sm"
          onClick={start}
        >
          Start
        </button>
        <button
          className="bg-gray-200 text-black font-bold px-4 py-1 rounded-sm"
          onClick={stop}
        >
          Reset
        </button>
      </div>
    </React.Fragment>
  )
}

export default Simulation
