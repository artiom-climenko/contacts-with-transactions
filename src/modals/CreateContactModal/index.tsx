import React from 'react';
import { IModalProps, Modal } from '../../components';
import {
  ModalBody,
  ModalFormInput,
  ModalFormInputWarning,
  ModalFormLabel,
  ModalFormSelect,
} from './index.styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import * as dayjs from 'dayjs';

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
  return (
    <Modal {...props}>
      <ModalBody>
        <form name="addContact" onSubmit={() => formik.handleSubmit()}>
          <ModalFormLabel htmlFor="contactName">Name</ModalFormLabel>
          <ModalFormInput
            type="text"
            id="contactName"
            name="contactName"
            placeholder="Enter a name"
            value={formik.values.contactName}
            onChange={formik.handleChange}
            required
          />
          <ModalFormInputWarning>
            {formik.errors.contactName && formik.touched.contactName
              ? formik.errors.contactName
              : null}
          </ModalFormInputWarning>
          <ModalFormLabel htmlFor="email">Email</ModalFormLabel>
          <ModalFormInput
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
          />
          <ModalFormInputWarning>
            {formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null}
          </ModalFormInputWarning>
          <ModalFormLabel htmlFor="amount">Amount</ModalFormLabel>
          <ModalFormInput
            type="text"
            id="amount"
            name="amount"
            placeholder="Enter the amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            required
          />
          <ModalFormInputWarning>
            {formik.errors.amount && formik.touched.amount
              ? formik.errors.amount
              : null}
          </ModalFormInputWarning>
          <ModalFormLabel htmlFor="paymentStatus">
            Payment status
          </ModalFormLabel>
          <ModalFormSelect
            id="paymentStatus"
            name="paymentStatus"
            value={formik.values.paymentStatus}
            onChange={formik.handleChange}
            required
          >
            <option selected>Select the status</option>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
            <option value="Overdue">Overdue</option>
          </ModalFormSelect>
          <ModalFormInputWarning>
            {formik.errors.paymentStatus && formik.touched.paymentStatus
              ? formik.errors.paymentStatus
              : null}
          </ModalFormInputWarning>
          <ModalFormLabel htmlFor="paymentDate">Payment date</ModalFormLabel>
          <ModalFormInput
            type="date"
            id="paymentDate"
            value={formik.values.paymentDate}
            onChange={formik.handleChange}
            min="2020-01-01"
            max="2022-12-31"
            required
          />
          <ModalFormInputWarning>
            {formik.errors.paymentDate && formik.touched.paymentDate
              ? formik.errors.paymentDate
              : null}
          </ModalFormInputWarning>
        </form>
      </ModalBody>
    </Modal>
  );
}
