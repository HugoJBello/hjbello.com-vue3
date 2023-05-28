export interface Article {
    id: string;
    summary: string;
    tags: string[];
    date: string;
    language: string;
    title: string;
    image: string;
    text?: string;
  }