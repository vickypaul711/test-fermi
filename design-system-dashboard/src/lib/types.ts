export type ApiResponse<T> = {
  data: T;
  meta?: {
    page: number;
    totalPages: number;
    totalItems: number;
  };
  error?: string;
};