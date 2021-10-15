export function formatDate(date: any | string): {
  time: string;
  string: string;
} {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  date.setUTCHours(12);
  return {
    time: date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };
}

export function truncateDesc(text: string): string {
  if (text.length < 200) return text;
  return `${text.substring(0, 200)}...`;
}
