import {
  Contact,
  ContactPaymentStatus,
  ContactStatus,
  CreateContactModel,
  normalizeContact,
} from '../entites';
import { useCallback, useEffect, useState } from 'react';
import { API } from '../api';

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
    currencySymbol: '$',
  },
];

export function useContacts() {
  let [contacts, setContacts] = useState<Array<Contact>>(CONTACTS);
  let [isLoading, setLoading] = useState(false);
  let [error, setError] = useState('');

  let handleFetchContacts = useCallback(async () => {
    try {
      setLoading(true);
      let response = await API.get('/');
      setContacts(
        response.data.map((contact: Contact) => normalizeContact(contact)),
      );
    } catch (error) {
      setError(String(error));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleFetchContacts();
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
    handleRemove,
    handleUpdate,
    handleCreate,

    contacts,
    isLoading,
    error,
  };
}
