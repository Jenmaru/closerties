/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { actions as modalAction } from '../slices/Modals.js';
import { useDispatch, useSelector } from 'react-redux';

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.messages);
  const { messages } = comments;
  console.log(comments);

  const openChannel = () => {
    dispatch(modalAction.openModal({ type: 'open' }));
  };

  return (
    <>
    <div className="tab-pane acive container">
      <p>
        <a className="btn btn-link text-white" onClick={openChannel} style={{ textDecoration: 'none', marginTop: '1rem' }}>
          <b className="text-dark">
            &#10133;
          </b>
          Добавить комментарий (честный и неподкупный)
        </a>
      </p>
    </div>
      {messages.length > 0 ? messages.map((el) => <div key={el.name} className="d-flex container flex-column bg-dark bg-opacity-50 justify-content-center">
        <div className="d-flex container p-3 justify-content-start">Имя: {el.name}</div>
        <div className="d-flex container p-2 justify-content-start">Комментарий: {el.message}</div></div>) : false}
    </>
  );
};

export default Comments;
