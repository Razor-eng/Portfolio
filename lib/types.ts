export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    challenge: string;
    solution: string;
    technicalDetails: string;
    category: CategoryOption;
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
export type CategoryOption = 'Featured' | 'Recent' | 'Landing Page' | 'Clone';