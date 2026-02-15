export enum ViewState {
  HOME = 'HOME',
  PORTFOLIO = 'PORTFOLIO',
  EXPERIENCE = 'EXPERIENCE',
  RECOGNITION = 'RECOGNITION'
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

export interface Role {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export interface Certification {
  id: string;
  imageUrl: string;
  title: string;
}