export const AFFILIATE_TAG = "YOURTAG-20";

export function buildAmazonUrl(asin: string): string {
  return `https://www.amazon.com/dp/${asin}/?tag=${encodeURIComponent(AFFILIATE_TAG)}`;
}