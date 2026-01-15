export interface GlobalSettings {
  id: number;
  documentId: string;
  siteName: string;
  siteDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutDescription: string;
  projectsTitle: string;
  projectsSubtitle?: string;
  servicesTitle?: string;
  servicesSubtitle?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface WorkedWith {
  id: number;
  documentId: string;
  name: string;
  logo?: {
    url: string;
    alternativeText?: string;
  };
  order?: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Project {
  id: number;
  documentId: string;
  title: string;
  slug?: string;
  description: string;
  category?: string;
  coverImage?: {
    url: string;
    alternativeText?: string;
  };
  span?: string;
  videoUrl?: string;
  featured?: boolean;
  order?: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Service {
  id: number;
  documentId: string;
  title: string;
  description: string;
  icon?: string;
  order?: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
