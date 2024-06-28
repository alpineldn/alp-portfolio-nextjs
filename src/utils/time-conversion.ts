export function getLondonTimeFormatted() {
  const londonFormatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  });
  const parts = londonFormatter.formatToParts(new Date());

  let hours, minutes, ampm;
  parts.forEach((part) => {
    if (part.type === 'hour') hours = part.value;
    if (part.type === 'minute') minutes = part.value;
    if (part.type === 'dayPeriod') ampm = part.value.toUpperCase();
  });

  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return formattedTime;
}
