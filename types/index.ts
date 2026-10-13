export interface NavItem {
  label: string;
  href: string;
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface PolaroidItem {
  id: string;
  title: string;
  src: string;
  alt: string;
  rotation: string;
  tag?: string;
}

export interface DivisionItem {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  batchOrDate: string;
}
