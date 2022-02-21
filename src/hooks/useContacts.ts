import { Contact, CreateContactModel, normalizeContact } from '../entites';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { API } from '../api';

export function useContacts() {
  let [contacts, setContacts] = useState<Array<Contact>>();
  let [isLoading, setLoading] = useState(false);
  let [error, setError] = useState('');
  let [isRemovingLoading, setRemovingLoading] = useState(false);
  let [removingError, setRemovingError] = useState('');
  let [isUpdatingLoading, setUpdatingLoading] = useState(false);
  let [updatingError, setUpdatingError] = useState('');
  let [isCreatingLoading, setCreatingLoading] = useState(false);
  let [creatingError, setCreatingError] = useState('');

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
        setRemovingLoading(true);
        let response = await API.delete(`/${contactId}`);
        setContacts(
          contacts?.filter((contact: Contact) => contact.id !== contactId),
        );
        handleFetchContacts();
        return true;
      } catch (error) {
        setRemovingError(String(error));
        return false;
      } finally {
        setRemovingLoading(false);
      }
    },
    [handleFetchContacts],
  );

  let handleUpdate = useCallback(
    async (contact: Contact) => {
      try {
        setUpdatingLoading(true);
        let response = await API.put(`/${contact}`);
        handleFetchContacts();
      } catch (error) {
        setUpdatingError(String(error));
      } finally {
        setUpdatingLoading(false);
      }
    },
    [handleFetchContacts],
  );

  let handleCreate = useCallback(
    async (contact: CreateContactModel) => {
      try {
        setCreatingLoading(true);
        let response = await API.post(`/${contact}`);
        handleFetchContacts();
      } catch (error) {
        setCreatingError(String(error));
      } finally {
        setUpdatingLoading(false);
      }
    },
    [handleFetchContacts],
  );

  let globalError = useMemo(
    () => error || removingError || updatingError || creatingError,
    [error, removingError, updatingError, creatingError],
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
