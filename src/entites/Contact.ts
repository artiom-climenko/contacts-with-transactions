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

export function getRandomElementFromArray<T>(array: Array<T>): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function normalizeContact(contact: Contact) {
  return {
    ...contact,
    status: getRandomElementFromArray([
      ContactStatus.ACTIVE,
      ContactStatus.INACTIVE,
    ]),
    paymentStatus: getRandomElementFromArray([
      ContactPaymentStatus.PAID,
      ContactPaymentStatus.OVERDUE,
      ContactPaymentStatus.UNPAID,
    ]),
  } as Contact;
}
