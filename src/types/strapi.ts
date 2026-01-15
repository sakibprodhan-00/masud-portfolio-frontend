export interface GlobalSettings {
  id: number;
  documentId: string;
  primaryColor?: string | null;
  animationSpeed?: number | null;
  heroTitle?: string | null;
  heroSubtitle?: string | null;
  aboutTitle?: string | null;
  aboutContent?: string | null;
  workedWithTitle?: string | null;
  projectsTitle?: string | null;
  servicesTitle?: string | null;
  contactTitle?: string | null;
  testimonialsTitle?: string | null;
  showProjects?: boolean;
  showTestimonials?: boolean;
  showServices?: boolean;
  heroImage?: StrapiMedia | null;
  logo?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  contactLocation?: string | null;
  name?: string | null;
  tagline?: string | null;
  facebookUrl?: string | null;
  instagramUrl?: string | null;
  youtubeUrl?: string | null;
  linkedinUrl?: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface StrapiMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width: number;
  height: number;
  formats?: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: number;
  documentId: string;
  title: string;
  description?: string | null;
  category?: string | null;
  videoUrl?: string | null; // ADD THIS LINE TO MATCH STRAPI
  youtubeUrl?: string | null;
  vimeoUrl?: string | null;
  order?: number | null;
  thumbnail?: StrapiMedia | null;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface Service {
  id: number;
  documentId: string;
  title: string;
  description?: string | null;
  icon?: string | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface Testimonial {
  id: number;
  documentId: string;
  name: string;
  role?: string | null;
  company?: string | null;
  message?: string | null;
  rating?: number | null;
  avatar?: StrapiMedia | null;
  order?: number | null;
  linkedinUrl?: string | null;
  facebookUrl?: string | null;
  instagramUrl?: string | null;
  youtubeUrl?: string | null;
  featured?: boolean | null;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}



export interface WorkedWith {
  id: number;
  documentId: string;
  name: string;
  logo?: StrapiMedia | null;
  website?: string | null;
  order?: number | null;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}
