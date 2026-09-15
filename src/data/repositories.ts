// Repository catalog — kept as a source list of the group's public repos.
// The Research page no longer renders this grid; it links to the GitHub org.

export interface Repo {
  /** Repo name without the org prefix, e.g. "pFedMe". */
  name: string;
  /** Full GitHub name, e.g. "dual-grp/pFedMe". */
  fullName: string;
}

const ORG = 'dual-grp';

const NAMES = [
  'FedPCA_AnomalyDetection',
  'FedPCA_Abnormal_Detection',
  'FeDEQ',
  'FedU_FMTL',
  'pFedMe',
  'FedKO',
];

export const REPOS: Repo[] = NAMES.map((name) => ({
  name,
  fullName: `${ORG}/${name}`,
}));
