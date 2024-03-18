import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import cn from 'classnames';
import { Button, Form } from 'react-bootstrap';
import { actions } from '../slices/Modals.js';
import { actions as actionMessage } from '../slices/Messages.js';

const OpenModal = ({ handleClose, show }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const modalClass = cn('fade modal-backdrop bg-info bg-opacity-50', {
    show,
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      message: '',
    },
    onSubmit: async (values) => {
      dispatch(actionMessage.sendMessage(values));
      dispatch(actions.closeModal());
    },
  });

  return (
    <>
      <div className={modalClass}>
        <div />
      </div>
      <div role="dialog" aria-modal="true" style={{ display: 'block' }} className="fade modal show" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-secondary bg-opacity-50">
            <div className="modal-body">
              <Form onSubmit={formik.handleSubmit} class="">
                <fieldset disabled={formik.isSubmitting}>
                  <div>
                    <label htmlFor="name">{t('modal.name')}</label>
                    {formik.errors.name && formik.touched.name && (
                      <div className="invalid-feedback">{formik.errors.name}</div>
                    )}
                    <Form.Control
                      className="mb-2 bg-opacity-50 bg-light"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      name="name"
                      id="name"
                      autoComplete="name"
                      isInvalid={formik.errors.name && formik.touched.name}
                      required
                    />
                    <label htmlFor="message">{t('modal.message')}</label>
                    {formik.errors.message && formik.touched.message && (
                      <div className="invalid-feedback">{formik.errors.message}</div>
                    )}
                    <Form.Control
                      className="mb-2 bg-opacity-50 bg-light"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      name="message"
                      id="message"
                      autoComplete="message"
                      isInvalid={formik.errors.message && formik.touched.message}
                      required
                    />
                    <div className="d-flex justify-content-end">
                      <Button onClick={handleClose} type="button" variant="outline-secondary me-2" disabled={formik.isSubmitting}>{t('modal.cancel')}</Button>
                      <Button type="submit" value="submit" variant="outline-dark" disabled={formik.isSubmitting}>{t('modal.send')}</Button>
                    </div>
                  </div>
                </fieldset>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ModalComponent = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(actions.closeModal());
  const modal = useSelector((state) => state.modal);
  const comments = useSelector((state) => state.messages);
  const { show, type } = modal;

  const setModal = {
    open: <OpenModal comments={comments} show={show} handleClose={handleClose} />,
    closed: null,
  };

  return (
    <div>
      {setModal[type]}
    </div>
  );
};

export default ModalComponent;
