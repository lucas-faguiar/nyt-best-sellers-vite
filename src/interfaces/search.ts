export interface SearchFields {
  page?: number;
  title?: string;
  author?: string;
  publisher?: string;
  isbn?: string;
}

export interface SearchError {
  fault: {
    faultstring: string;
    detail: {
      errorcode: string;
    };
  };
}

export interface SearchResults<T> {
  items: T[];
  total: number;
  error?: SearchError;
}
