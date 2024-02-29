import { useState, useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useDispatch } from 'react-redux';
import { actions as pagesAction } from '../slices/pagesSlice.js';

const radios = [
  { name: 'Главная', value: '1' },
  { name: 'История мира', value: '2' },
  { name: 'Галерея', value: '3' },
  { name: 'Комментарии', value: '4' },
  { name: 'Скачать билд', value: '5' },
  { name: 'Помощь проекту', value: '6' },
];

const ButtonGroupFunc = ({ radios, pageValue, setPageValue }) => (
<ButtonGroup className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      {radios.map((radio, idx) => (
        <li className="nav-item">
        <ToggleButton
          key={`${radio.value}`}
          id={`radio-${idx}`}
          type="radio"
          name="radio"
          variant="transparent"
          value={radio.value}
          checked={pageValue === radio.value}
          onChange={(e) => setPageValue(e.currentTarget.value)}
          className={pageValue === radio.value ? 'text-danger nav-link' : 'text-white nav-link'}
          style={{ opacity: '1' }}
        >
          {radio.name} 
        </ToggleButton>
        </li>
      ))}
      </ul>
    </ButtonGroup>
)

const ButtonsLink = () => {
  const dispatch = useDispatch();
  const [pageValue, setPageValue] = useState('1');

  useEffect(() => {
    dispatch(pagesAction.openPage({ type: pageValue }));
  }, [dispatch, pageValue]);

  return (
    <ButtonGroupFunc radios={radios} pageValue={pageValue} setPageValue={setPageValue} />
  );
};

export default ButtonsLink;
