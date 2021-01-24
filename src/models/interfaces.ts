export interface MessageDto {
  _id: string;
  to: string;
  from: string;
  body: string;
  received: string;
}

export interface SubscriptionDto {
  _id: string;
  number: string;
  expires: string;
}
