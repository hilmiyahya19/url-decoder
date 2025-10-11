export function safeDecode(s: string): string {
  try {
    return decodeURIComponent(s);
  } catch {
    try {
      return decodeURIComponent(s.replace(/\+/g, " "));
    } catch {
      return s;
    }
  }
}

export function extractSingleLink(input: string): string | null {
  const match = input.match(/[?&]s=([^&]+)/i);
  if (!match) return null;

  const decoded = safeDecode(safeDecode(match[1]));

  try {
    const url = new URL(decoded);

    const shortDomains = ["ouo.io", "bit.ly", "adf.ly", "tinyurl.com", "shorte.st"];
    if (shortDomains.some((d) => url.hostname.includes(d))) {
      return null; 
    }

    return url.href;
  } catch {
    return null;
  }
}
