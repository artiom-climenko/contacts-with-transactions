export enum ContactStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export enum ContactPaymentStatus {
  PAID = 'paid',
  OVERDUE = 'overdue',
  UNPAID = 'unpaid',
}

export interface Contact {
  id: string;
  displayName: string;
  email: string;
  status: ContactStatus;
  lastLogin: number;
  paymentStatus: ContactPaymentStatus;
  paymentOn: number;
  amount: number;
  currency: string;
}

export type CreateContactModel = Omit<Contact, 'id'>;
