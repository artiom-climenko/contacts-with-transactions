import React from 'react';
import { IModalProps, InputField, Modal, SelectField } from '../../components';
import { ModalBody } from './index.styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import * as dayjs from 'dayjs';
import { useTouchableError } from '../../hooks/useTouchableError';
import { useTranslation } from 'react-i18next';

export interface ICreateContactModalProps extends IModalProps {}

export function CreateContactModal(props: ICreateContactModalProps) {
  const { t } = useTranslation();
  let todayInUnix = dayjs().startOf('day').unix();
  let endOfTheWeekInUnix = dayjs().endOf('week').unix() + 1;
  const validationSchema = yup.object().shape({
    contactName: yup
      .string()
      .min(8, t('validation.contactName.min'))
      .max(56, t('validation.contactName.max'))
      .required(t('validation.required')),
    amount: yup
      .number()
      .typeError(t('validation.amount.typeError'))
      .min(0, t('validation.amount.min'))
      .test('Great!', t('validation.amount.test'), (value) => value! % 50 === 0)
      .required(t('validation.required')),
    paymentDate: yup
      .string()
      .test(
        'Great!',
        t('validation.paymentDate.test'),
        (value) =>
          dayjs(value).unix() >= todayInUnix &&
          dayjs(value).unix() <= endOfTheWeekInUnix,
      ),
    paymentStatus: yup.string().required(t('validation.required')),
    email: yup
      .string()
      .email(t('validation.email'))
      .required(t('validation.required')),
  });

  let formik = useFormik({
    initialValues: {
      contactName: '',
      email: '',
      amount: '',
      paymentStatus: '',
      paymentDate: '',
    },
    onSubmit: (values) => {},
    validationSchema,
  });
  let { touchableError: touchedContactNameError } = useTouchableError(
    formik,
    'contactName',
  );
  let { touchableError: touchedEmailError } = useTouchableError(
    formik,
    'email',
  );
  let { touchableError: touchedAmountError } = useTouchableError(
    formik,
    'amount',
  );
  let { touchableError: touchedPaymentStatusError } = useTouchableError(
    formik,
    'paymentStatus',
  );
  let { touchableError: touchedPaymentDateError } = useTouchableError(
    formik,
    'paymentDate',
  );
  return (
    <Modal {...props}>
      <ModalBody>
        <InputField
          type="text"
          id="contactName"
          name="contactName"
          placeholder={t('modals.createContact.form.placeholders.name')}
          value={formik.values.contactName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          title={t('modals.createContact.form.name')}
          error={touchedContactNameError}
        />
        <InputField
          type="email"
          id="email"
          name="email"
          placeholder={t('modals.createContact.form.placeholders.email')}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          title={t('modals.createContact.form.email')}
          error={touchedEmailError}
        />
        <InputField
          type="text"
          id="amount"
          name="amount"
          placeholder={t('modals.createContact.form.placeholders.amount')}
          value={formik.values.amount}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          title={t('modals.createContact.form.amount')}
          error={touchedAmountError}
        />
        <SelectField
          id="paymentStatus"
          name="paymentStatus"
          value={formik.values.paymentStatus}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          title={t('modals.createContact.form.paymentStatus')}
          error={touchedPaymentStatusError}
        />
        <InputField
          type="date"
          id="paymentDate"
          name="paymentDate"
          value={formik.values.paymentDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          title={t('modals.createContact.form.paymentDate')}
          error={touchedPaymentDateError}
        />
      </ModalBody>
    </Modal>
  );
}
