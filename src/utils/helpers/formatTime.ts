export function formatTime(dateString: string): string {
  const createdAt: Date = new Date(dateString);
  const now: Date = new Date();

  const offsetMs: number = 8 * 60 * 60 * 1000;
  const createdPH: Date = new Date(createdAt.getTime() + offsetMs);
  const nowPH: Date = new Date(now.getTime() + offsetMs);

  const diffMs: number = nowPH.getTime() - createdPH.getTime();
  const diffSec: number = Math.floor(diffMs / 1000);
  const diffMin: number = Math.floor(diffSec / 60);
  const diffHrs: number = Math.floor(diffMin / 60);
  const diffDays: number = Math.floor(diffHrs / 24);
  const diffWeeks: number = Math.floor(diffDays / 7);

  if (diffSec < 60) return "Now";
  if (diffMin === 1) return "1 min ago";
  if (diffMin < 60) return `${diffMin} minutes ago`;
  if (diffHrs === 1) return "1 hour ago";
  if (diffHrs < 24) return `${diffHrs} hours ago`;
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffWeeks === 1) return "1 week ago";

  return createdPH.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
