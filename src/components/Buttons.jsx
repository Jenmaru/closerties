import { useState, useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useDispatch, useSelector } from 'react-redux';
import { actions as pagesAction } from '../slices/pagesSlice.js';

const radios = [
  { name: 'Главная', value: '1' },
  { name: 'История мира', value: '2' },
  { name: 'Галерея', value: '3' },
  { name: 'Комментарии', value: '4' },
  { name: 'Скачать билд', value: '5' },
  { name: 'Помощь проекту', value: '6' },
];

const ButtonGroupFunc = ({
  pageValue, setPageValue, nameButton, nameId, varik,
}) => (
  <ButtonGroup className={`${nameButton} justify-content-center`} id={`${nameId}`}>
    <ul className="navbar-nav">
      {radios.map((radio, idx) => (
        <li key={`${radio.value}`} className="nav-item">
          <ToggleButton
            key={`${radio.value}`}
            id={`radio-${idx}`}
            type="radio"
            name="radio"
            variant={varik}
            value={radio.value}
            checked={pageValue === radio.value}
            onChange={(e) => setPageValue(e.currentTarget.value)}
            className={pageValue === radio.value ? 'text-danger nav-link navButton' : 'text-white nav-link navButton'}
          >
            {radio.name}
          </ToggleButton>
        </li>
      ))}
    </ul>
  </ButtonGroup>
);

const ButtonsLink = ({ nameButton, nameId, varik }) => {
  const dispatch = useDispatch();
  const [pageValue, setPageValue] = useState('1');
  const page = useSelector((state) => state.pages);
  const { type } = page;

  useEffect(() => {
    dispatch(pagesAction.openPage({ type: pageValue }));
  }, [dispatch, pageValue]);

  return (
    <ButtonGroupFunc
      pageValue={type}
      setPageValue={setPageValue}
      nameButton={nameButton}
      nameId={nameId}
      varik={varik}
    />
  );
};

export default ButtonsLink;
