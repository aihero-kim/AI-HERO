
export interface NavItem {
  label: string;
  path: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  details: string[]; // Key learning points
  tools?: string[]; // List of AI tools/Tech (e.g., Gemini, Cursor, Arduino)
  schedule?: {
    expert: string;
    hobby: string;
    duration: string;
  };
  pricing?: {
    expert: string;
    hobby: string;
  };
  iconName: 'Cpu' | 'Bot' | 'Languages';
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: 'Award' | 'Users' | 'TrendingUp' | 'Zap' | 'Brain' | 'Rocket';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  specialty?: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}
