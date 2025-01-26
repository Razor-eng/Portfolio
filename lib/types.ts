export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    challenge: string;
    solution: string;
    technicalDetails: string;
    category?: 'Featured' | 'Recent' | 'Landing Page';
    technologies: string[];
    images: string[];
    tags: string[];
    year: number;
    complexity: 'Beginner' | 'Intermediate' | 'Advanced';
    demoUrl?: string;
    repoUrl?: string;
    features?: string[];
}

export type SortOption = 'latest' | 'alphabetical' | 'complexity';
export type GroupByOption = 'category' | 'techStack' | 'year';