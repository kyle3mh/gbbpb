// Helper function to convert a string to a URL-friendly slug.
export const slugify = (str: string): string =>
  str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^a-z0-9-]/g, ""); // Remove non-alphanumeric characters except -

// Helper function to format large numbers with commas (e.g., 1000000 -> 1,000,000)
export const formatNumber = (num: number): string =>
  num.toLocaleString("en-GB");

// Helper function to format currency (e.g., 500000000 -> £500m or £0 if null)
export const formatCurrency = (num: number | null | undefined): string => {
  if (!num || num === 0) return "£0";
  if (num >= 1_000_000_000) return `£${(num / 1_000_000_000).toFixed(1)}bn`;
  if (num >= 1_000_000) return `£${(num / 1_000_000).toFixed(1)}m`;
  return `£${num}`;
};

// Helper function to extract the last name for sorting founders alphabetically by surname
export const getLastName = (fullName: string): string => {
  const nameParts = fullName.trim().split(" ");
  return nameParts.length > 1 ? nameParts[nameParts.length - 1] : fullName;
};

// Helper function to truncate text with ellipsis (e.g., "This is a long text..." if too long)
export const truncateText = (text: string, maxLength: number = 100): string =>
  text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
