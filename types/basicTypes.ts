export type AppLayoutProps = Readonly<{ children: React.ReactNode }>;
export type AppPageProps<T = any, K = any> = { params?: T; searchParams?: K };

export type ActionResponse = {
  fieldErrors?: {
    [key: string]: string[] | undefined;
  };
  error?: string;
  success?: string;
  data?: any;
};

export type ApiResponse<T = any> = {
  statusCode: 201 | 200 | 404 | 400;
  msg: "Success" | "Failure";
  data: T;
};

export type AppPageError = {
  error: Error & { digest?: string };
  reset: () => void;
};

export type ActionApiResponse<T, K = null> = null | "error" | T | K;

export type Paginated<T = any> = {
  saved?: T[];
  existingRecords: T[];
  hasPreviousPage: boolean;
  previousPages: number;
  hasNextPage: boolean;
  nextPages: number;
  totalPages: number;
  totalDocuments: number;
  currentPage: number;
};
