import React from 'react';
import { IModalProps, InputField, Modal, SelectField } from '../../components';
import { ModalBody } from './index.styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import * as dayjs from 'dayjs';
import { useTouchableError } from '../../hooks/useTouchableError';

let todayInUnix = dayjs().startOf('day').unix();
let endOfTheWeekInUnix = dayjs().endOf('week').unix() + 1;

const validationSchema = yup.object().shape({
  contactName: yup
    .string()
    .min(8, 'Too Short!')
    .max(56, 'Too Long!')
    .required('Required field!'),
  amount: yup
    .number()
    .min(0, 'The amount should not be negative!')
    .test(
      'Great!',
      'The number must be a multiple of 50!',
      (value) => value % 50 === 0,
    )
    .required('Required field!'),
  paymentDate: yup
    .string()
    .test(
      'Great!',
      'Choose a date before the end of the week!',
      (value) =>
        dayjs(value).unix() >= todayInUnix &&
        dayjs(value).unix() <= endOfTheWeekInUnix,
    ),
  email: yup.string().email('Invalid email').required('Required field!'),
});

export interface ICreateContactModalProps extends IModalProps {}

export function CreateContactModal(props: ICreateContactModalProps) {
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
  let { touchableError: touchedPaymentDateError } = useTouchableError(
    formik,
    'amount',
  );
  return (
    <Modal {...props}>
      <ModalBody>
        <InputField
          type="text"
          id="contactName"
          name="contactName"
          placeholder="Enter a name"
          value={formik.values.contactName}
          onChange={formik.handleChange}
          required
          title="Name"
          error={touchedContactNameError}
        />
        <InputField
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
          title="Email"
          error={touchedEmailError}
        />
        <InputField
          type="text"
          id="amount"
          name="amount"
          placeholder="Enter the amount"
          value={formik.values.amount}
          onChange={formik.handleChange}
          required
          title="Amount"
          error={touchedAmountError}
        />
        <SelectField
          id="paymentStatus"
          name="paymentStatus"
          value={formik.values.paymentStatus}
          onChange={formik.handleChange}
          title="Payment status"
        />
        <InputField
          type="date"
          id="paymentDate"
          name="paymentDate"
          value={formik.values.paymentDate}
          onChange={formik.handleChange}
          required
          title="Payment date"
          error={touchedPaymentDateError}
        />
      </ModalBody>
    </Modal>
  );
}
