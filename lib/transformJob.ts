import type { Job, JobSection } from '@/data/jobs';

// Database row shape from Supabase
export interface DbJob {
  id: string;
  title: string;
  slug: string;
  status: string;
  location: string;
  job_type: string;
  compensation: string | null;
  short_description: string | null;
  full_description: string | null;
  what_youll_do: { bold: string; text: string }[] | null;
  requirements: { bold: string; text: string }[] | null;
  nice_to_have: { bold: string; text: string }[] | null;
  typeform_url: string | null;
}

const WHO_WE_ARE_TEXT = `We Scale Creators is a performance marketing agency that partners with top influencers and info-product creators to build, launch, and scale high-performing offers.

We operate on a profit-share model. We front all capital and ad spend, build funnels, run paid traffic, and scale aggressively. Our partners pay nothing upfront. We only win when they win.

Our portfolio includes creators like Cheryl Porter (38M+ followers) alongside established info-product businesses across fitness, finance, career coaching, health, and business education. We have generated over $50M in revenue for our partners and currently manage multiple seven-figure monthly offers across a growing portfolio of 10 to 15 active creator partnerships.`;

function shortenCompensation(comp: string): string {
  // Try to create a compact version
  return comp
    .replace(/\$(\d+),(\d+)/g, (_, a, b) => `$${a}${b.startsWith('0') ? '' : `.${b.charAt(0)}`}K`)
    .replace(/\/month/g, '/mo')
    .replace(/\/year/g, '/yr')
    .replace(/per month/gi, '/mo')
    .replace(/per year/gi, '/yr');
}

function shortenTitle(title: string): string {
  if (title.length <= 22) return title;
  // Abbreviate common patterns
  return title
    .replace('Performance Marketing', 'Perf. Marketing')
    .replace('Senior ', 'Sr. ')
    .replace('Junior ', 'Jr. ');
}

export function transformJobToSections(dbJob: DbJob): Job {
  const sections: JobSection[] = [];

  // Who We Are (shared)
  sections.push({
    title: 'Who We Are',
    content: WHO_WE_ARE_TEXT,
  });

  // The Role
  if (dbJob.full_description) {
    sections.push({
      title: 'The Role',
      content: dbJob.full_description,
    });
  }

  // What You'll Do
  if (dbJob.what_youll_do && dbJob.what_youll_do.length > 0) {
    sections.push({
      title: "What You'll Do",
      listItems: dbJob.what_youll_do,
    });
  }

  // Requirements
  if (dbJob.requirements && dbJob.requirements.length > 0) {
    sections.push({
      title: 'Requirements',
      listItems: dbJob.requirements,
    });
  }

  // Nice to Have
  if (dbJob.nice_to_have && dbJob.nice_to_have.length > 0) {
    sections.push({
      title: 'Nice to Have',
      listItems: dbJob.nice_to_have,
    });
  }

  // Compensation & Benefits
  if (dbJob.compensation) {
    sections.push({
      title: 'Compensation & Benefits',
      content: dbJob.compensation,
    });
  }

  // Apply CTA
  sections.push({
    title: 'Apply',
    content:
      "Ready to join a team that moves fast, thinks big, and builds with the best creators in the world? Apply now and let's talk.",
  });

  return {
    id: dbJob.slug,
    slug: dbJob.slug,
    title: dbJob.title,
    shortTitle: shortenTitle(dbJob.title),
    location: dbJob.location,
    type: dbJob.job_type,
    compensation: dbJob.compensation || '',
    compensationShort: dbJob.compensation
      ? shortenCompensation(dbJob.compensation)
      : '',
    summary: dbJob.short_description || '',
    sections,
  };
}
