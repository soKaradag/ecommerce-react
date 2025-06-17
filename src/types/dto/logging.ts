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

export interface LogCategoryResponse {
  id: string;
  name: string;
}

export interface LogTypeResponse {
  id: string;
  name: string;
}

export interface LogResponse {
  id: string;
  message: string;
  timestamp: string;
  logTypeId: string;
  logCategoryId: string;
}
