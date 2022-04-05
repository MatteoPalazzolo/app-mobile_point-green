// meters
export function prettifyDistance(distance: number): string {
  const space = ' ';
  if (distance < 100)
    return distance + space + 'm';   // 95 m
  else if (distance < 10000)
    return (Math.floor(distance / 100) / 10) + space + 'km';   // 0.9 km
  return Math.floor(distance / 1000) + space + 'km';    // 120 km
}

export function prettifyUnits(number: number, suffix: string | undefined = ""): string {
  const space = ' ';
  if (number < 1000)
    return number + space + suffix;   // 95 m
  else if (number < 10000)
    return (Math.floor(number / 100) / 10) + 'K' + space + suffix;   // 0.9 km
  return Math.floor(number / 1000) + 'K' + space + suffix;
}