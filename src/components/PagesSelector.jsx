import React from 'react';
import { useSelector } from 'react-redux';
import Gallery from './Gallery.jsx';
import Main from './Main.jsx';
import Story from './Story.jsx';
import Comments from './Comments.jsx';
import Build from './Build.jsx';

const Pages = () => {
  const page = useSelector((state) => state.pages);
  const { show, type } = page;

  const setPage = {
    1: <Main show={show} />,
    2: <Story show={show} />,
    3: <Gallery show={show} />,
    4: <Comments show={show} />,
    5: <Build show={show} />,
  };

  return (
    <div>
      {setPage[type]}
    </div>
  );
};

export default Pages;
