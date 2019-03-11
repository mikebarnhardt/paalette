function clamp(number) {
  return Math.max(Math.min(number, 100), 0) / 100;
}

export default clamp;
