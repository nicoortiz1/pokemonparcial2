export interface RootObject {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}

export interface Result {
  id: number;
  name: string;
  url: string;
  imageUrl: string;
}