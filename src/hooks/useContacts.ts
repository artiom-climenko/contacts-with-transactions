import {
  Contact,
  ContactPaymentStatus,
  ContactStatus,
  CreateContactModel,
  normalizeContact,
} from '../entites';
import { useCallback, useEffect, useMemo, useState } from 'react';
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
  let [isRemovingLoading, setRemoveLoading] = useState(false);
  let [removeError, setRemoveError] = useState('');
  let [isUpdatingLoading, setUpdateLoading] = useState(false);
  let [updateError, setUpdateError] = useState('');
  let [isCreatingLoading, setCreateLoading] = useState(false);
  let [createError, setCreateError] = useState('');

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

  let handleRemove = useCallback(
    async (contactId: string) => {
      try {
        setRemoveLoading(true);
        let response = await API.delete(`/${contactId}`);
        handleFetchContacts();
      } catch (error) {
        setRemoveError(String(error));
      } finally {
        setRemoveLoading(false);
      }
    },
    [handleFetchContacts],
  );

  let handleUpdate = useCallback(
    async (contact: Contact) => {
      try {
        setUpdateLoading(true);
        let response = await API.put(`/${contact}`);
        handleFetchContacts();
      } catch (error) {
        setUpdateError(String(error));
      } finally {
        setUpdateLoading(false);
      }
    },
    [handleFetchContacts],
  );

  let handleCreate = useCallback(
    async (contact: CreateContactModel) => {
      try {
        setCreateLoading(true);
        let response = await API.post(`/${contact}`);
        handleFetchContacts();
      } catch (error) {
        setCreateError(String(error));
      } finally {
        setUpdateLoading(false);
      }
    },
    [handleFetchContacts],
  );

  let globalError = useMemo(
    () => error || removeError || updateError || createError,
    [error, removeError, updateError, createError],
  );

  return {
    handleRemove,
    handleUpdate,
    handleCreate,
    contacts,
    isLoading,
    isRemovingLoading,
    isUpdatingLoading,
    isCreatingLoading,
    globalError,
  };
}
