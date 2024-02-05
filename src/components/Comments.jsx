/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const divEl = () => <div>dfsghthsgergsehtser</div>;

const Comments = () => {
  const [newDiv, setDiv] = useState('');

  const handleClick = () => {
    setDiv(divEl);
  };

  return (
    <div className="tab-pane acive">
      <p>
        <a className="btn btn-link text-white" href={handleClick} style={{ textDecoration: 'none', marginTop: '1rem' }}>
          <b className="text-dark">
            &#10133;
          </b>
          Добавить комментарий (честный и неподкупный)
        </a>
      </p>
      {newDiv}
    </div>
  );
};

export default Comments;
