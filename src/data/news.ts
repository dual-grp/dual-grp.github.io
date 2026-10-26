export interface NewsItem {
  /** ISO month, e.g. '2026-06' */
  date: string;
  tag: 'paper' | 'project' | 'group';
  title: string;
  /** Internal or external link for the full story. */
  href?: string;
}

/** Newest first. Rendered on the homepage News section. */
export const NEWS: NewsItem[] = [
  {
    date: '2026-10',
    tag: 'paper',
    title:
      'Our paper FeDEQ was accepted to IEEE IoT Journal, on federated deep equilibrium learning for resource-constrained edge networks.',
    href: '/research/#le2026fedeq',
  },
  {
    date: '2026-10',
    tag: 'paper',
    title:
      'We published BRAVE in TMLR — block-wise structural regularization for reliable label aggregation under sparse crowdsourcing.',
    href: '/research/#niu2026brave',
  },
  {
    date: '2026-08',
    tag: 'paper',
    title:
      'Our paper FAVoR: Measuring and Mitigating Author-Style Homogenization in Federated Personalized Generation was accepted to the EMNLP 2026 main track.',
    href: '/research/#han2026favor',
  },
  {
    date: '2026-07',
    tag: 'paper',
    title:
      'Our paper NashPG: A Policy Gradient Method with Iteratively Refined Regularization for Finding Nash Equilibria was accepted to TMLR.',
    href: '/research/#yu2026nashpg',
  },
  {
    date: '2026-07',
    tag: 'paper',
    title:
      'We published our FedKO work in IEEE IoT Journal, on federated anomaly detection for multivariate time series.',
    href: '/research/#le2026fedko',
  },
  {
    date: '2026-06',
    tag: 'paper',
    title:
      'We published FORCE in IEEE Networking Letters — our orthogonality-aware LoRA for communication-efficient federated fine-tuning.',
    href: '/research/#la2026force',
  },
  {
    date: '2026-06',
    tag: 'paper',
    title: 'We presented FOUL, our communication-efficient federated unlearning method, at CVPR 2026.',
    href: '/research/#nguyen2026foul',
  },
  {
    date: '2026-05',
    tag: 'paper',
    title:
      'We presented GoodSpeed at INFOCOM 2026, on fair goodput for distributed edge LLM inference.',
    href: '/research/#goodspeed2025',
  },
  {
    date: '2026-01',
    tag: 'paper',
    title:
      'We published WaSeCom in IEEE JSAC, our work on distributionally robust semantic communication with large AI models.',
    href: '/research/#semcom2025',
  },
];
