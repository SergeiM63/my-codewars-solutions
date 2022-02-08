const  euclideanDistance = (point1, point2) => Number(
  Math.hypot(...point1.map((v, i) => v - point2[i])).toFixed(2)
);