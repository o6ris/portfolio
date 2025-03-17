export function isValidDate(dateString: string) {
  const parsedDate = new Date(dateString);
  return !isNaN(parsedDate.getTime()) && dateString.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}\b/i);
}


export function isValidTime(timeString:string) {
  if (
    !(
      timeString.toLowerCase().includes('am') ||
      timeString.toLowerCase().includes('pm')
    )
  ) {
    return false;
  }

  const match = timeString.match(/(\d{1,2})(?::(\d{2}))?\s?(AM|PM)/i);

  if (!match) return false;

  const hour = parseInt(match[1], 10);
  const period = match[3].toUpperCase();

  if (
    (period === 'AM' && hour < 9) || 
    (period === 'PM' && hour >= 6)
  ) {
    return false;
  }

  return true;
}

export function isValidEmail(email:string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone:string) {
  return /^\+?\d{7,15}$/.test(phone);
}