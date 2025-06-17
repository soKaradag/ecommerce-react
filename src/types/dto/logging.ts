//Logging responses and requests

export interface LogCategoryRequest {
  name: string;
}

export interface LogTypeRequest {
  name: string;
}

export interface LogRequest {
  message: string;
  timestamp?: string;
  logTypeId: string;
  logCategoryId: string;
}
