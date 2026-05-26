export interface Product {
  id: string;
  name: string;
  badge: string;
  isPopular?: boolean;
  image: string;
  specs: {
    reach: string;
    payload: string;
    camera: string;
  };
  description: string;
  originalPriceText?: string;
  statusMessage: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
