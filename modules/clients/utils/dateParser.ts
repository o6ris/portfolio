import { parseDate } from "chrono-node";

export function parseUserInputToDate(text: string): Date | null {
  return parseDate(text) || null;
}
