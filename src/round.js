// Round a number to specified decimal places.
function round(n, d=2) {
  const p = Math.pow(10,d);
  return Math.floor((n*p)/p);
}

export default round;
