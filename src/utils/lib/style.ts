/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function positionHelper(position: number) {
  switch (position) {
    case 1:
      return "First";
    case 2:
      return "Second";
    case 3:
      return "Third";
    case 4:
      return "Fourth";
    case 5:
      return "Fifth";
    case 6:
      return "Sixth";
    case 7:
      return "Seventh";
    case 8:
      return "Eighth";
    case 9:
      return "Ninth";
    case 10:
      return "Tenth";
    default:
      return position.toString() + "th";
  }
}
export function positionHelperShort(position: number) {
  switch (position) {
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    default:
      return position.toString() + "th";
  }
}
