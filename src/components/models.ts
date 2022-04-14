export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Experience {
  title: string;
  subtitle: string;
  icon: string;
  body: string;
}

export interface ExperienceArray {
  experiences: Experience[];
}
