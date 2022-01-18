import {
  Contact,
  ContactPaymentStatus,
  ContactStatus,
  CreateContactModel,
} from '../entites';
import { useCallback, useState } from 'react';

const CONTACTS: Array<Contact> = [
  {
    id: '0',
    displayName: 'First',
    email: 'f@f.f',
    status: ContactStatus.ACTIVE,
    lastLogin: 1642522185,
    paymentStatus: ContactPaymentStatus.PAID,
    paymentOn: 1642322185,
    amount: 0,
    currency: 'USD',
  },
];

export function useContacts() {
  let [contacts, setContacts] = useState<Array<Contact>>(CONTACTS);
  // let [isLoading, setLoading] = useState(false);
  // let [error, setError] = useState('');

  let handleFetchContacts = useCallback(async () => {
    // TODO add error handling
    // TODO add isLoading
    // try {
    //   setLoading(true);
    //
    //   let res = await someting();
    //   setContacts(res);
    // } catch (e) {
    //   setError(String(e));
    // } finally {
    //   setLoading(false);
    // }
  }, []);

  let handleRemove = useCallback(async (contactId: string) => {
    // TODO add error handling
    // TODO add isLoading
    // TODO add sync after deletion
  }, []);

  let handleUpdate = useCallback(async (contact: Contact) => {
    // TODO add error handling
    // TODO add isLoading
    // TODO add sync after update
  }, []);

  let handleCreate = useCallback(async (contact: CreateContactModel) => {
    // TODO add error handling
    // TODO add isLoading
    // TODO add sync after update
  }, []);

  return {
    contacts,
    handleFetchContacts,
    handleRemove,
    handleUpdate,
    handleCreate,
  };
}
