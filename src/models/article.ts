export interface Article {
    id: string;
    description: string;
    tags: string[];
    date: string;
    dateParsed: Date;
    language: string;
    title: string;
    image: string;
    text?: string;
    show_starting_image: boolean;

  }