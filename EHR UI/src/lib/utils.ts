import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const day = date.getDate(); // Day of the month
  const monthIndex = date.getMonth(); // Month index (0-based)
  const year = date.getFullYear(); // Year

  // Array of month names
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Construct the formatted date string
  const formattedDate = `${day} ${months[monthIndex]} ${year}`;

  return formattedDate;
}