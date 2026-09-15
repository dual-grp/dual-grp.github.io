/**
 * Shared helpers for the people index and member detail pages.
 * Kept page-agnostic so PersonCard and members/[slug] stay in sync.
 */

import type { CollectionEntry } from 'astro:content';

export interface MemberLink {
  label: string;
  href: string;
  external: boolean;
}

interface LinkDef {
  label: string;
  external: boolean;
  /** Prepended when the raw value is not already an absolute URL. */
  prefix?: string;
}

const LINK_DEFS: Record<string, LinkDef> = {
  email: { label: 'Email', external: false, prefix: 'mailto:' },
  github: { label: 'GitHub', external: true, prefix: 'https://github.com/' },
  'home-page': { label: 'Homepage', external: true },
  website: { label: 'Website', external: true },
  linkedin: { label: 'LinkedIn', external: true },
  'google-scholar': {
    label: 'Scholar',
    external: true,
    prefix: 'https://scholar.google.com/citations?user=',
  },
};

/** Canonical display order for known link keys (lowercase). */
const LINK_ORDER = ['email', 'github', 'home-page', 'website', 'linkedin', 'google-scholar'];

function withPrefix(value: string, prefix?: string): string {
  if (!prefix) return value;
  if (value.startsWith(prefix)) return value;
  // Absolute URLs never get a prefix (e.g. a full GitHub URL stored as-is).
  if (prefix.startsWith('http') && value.includes('://')) return value;
  return `${prefix}${value}`;
}

/**
 * Turn the free-form `links` map from member frontmatter into an ordered,
 * display-ready list. Keys are matched case-insensitively. Known keys render
 * in LINK_ORDER with friendly labels; unknown keys are appended afterwards.
 */
export function resolveMemberLinks(links?: Record<string, string>): MemberLink[] {
  if (!links) return [];

  const byKey = new Map<string, string>();
  for (const [key, raw] of Object.entries(links)) {
    if (!raw) continue;
    byKey.set(key.toLowerCase(), raw);
  }

  const resolved: MemberLink[] = [];

  for (const key of LINK_ORDER) {
    const raw = byKey.get(key);
    if (!raw) continue;
    const def = LINK_DEFS[key];
    resolved.push({
      label: def.label,
      href: withPrefix(raw.trim(), def.prefix),
      external: def.external,
    });
  }

  for (const [key, raw] of byKey) {
    if (LINK_ORDER.includes(key)) continue;
    resolved.push({
      label: key,
      href: raw,
      external: /^https?:\/\//.test(raw),
    });
  }

  return resolved;
}

export function compareMembersByName(
  a: CollectionEntry<'members'>,
  b: CollectionEntry<'members'>,
): number {
  return a.data.name.localeCompare(b.data.name, 'en', { sensitivity: 'base' });
}

/**
 * Normalize a frontmatter image path to a site-absolute URL.
 * Accepts `assets/img/...`, `/assets/img/...`, or a full https URL.
 */
export function resolveMemberImage(image?: string): string | undefined {
  if (!image) return undefined;
  if (/^https?:\/\//.test(image)) return image;
  return image.startsWith('/') ? image : `/${image}`;
}
