//Notification responses and requests

export interface NotificationRequest {
  message: string;
  timestamp?: string;
  orderId: string;
  status: string;
  notificationTypeId: string;
  notificationStatusId: string;
}

export interface NotificationStatusRequest {
  name: string;
}

export interface NotificationTypeRequest {
  name: string;
}
