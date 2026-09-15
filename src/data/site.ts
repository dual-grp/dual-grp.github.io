export const SITE = {
  name: 'DUAL Group',
  email: 'dual.group@sydney.edu.au',
  contactEmail: 'nguyen.tran@sydney.edu.au',
  githubOrg: 'dual-grp',
  school: 'School of Computer Science · University of Sydney',
  fullName: 'Distributed compUting, optimizAtion, and Learning Group',
};

export const NAV = [
  { href: '/research/', label: 'Research' },
  { href: '/people/', label: 'People' },
  { href: '/contact/', label: 'Contact' },
];

export const ROLE_ORDER = ['professor', 'phd', 'mphil', 'research-pathway', 'honours', 'alumni'];

/** Section headings on /people/ and the kicker on member pages. */
export const ROLE_LABELS: Record<string, string> = {
  professor: 'Principal investigator',
  phd: 'PhD',
  mphil: 'MPhil',
  'research-pathway': 'Research pathway',
  honours: 'Honours',
  alumni: 'Alumni',
};

export const FOCUS_AREAS = [
  'distributed intelligence',
  'efficient LLM inference',
  'federated & edge learning',
  'semantic communication',
  'distributed optimization',
];
