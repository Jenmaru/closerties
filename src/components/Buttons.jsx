import { useState, useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useDispatch } from 'react-redux';
import { actions as pagesAction } from '../slices/pagesSlice.js';

const ButtonsLink = () => {
  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Главная', value: '1' },
    { name: 'История мира', value: '2' },
    { name: 'Галерея', value: '3' },
    { name: 'Комментарии', value: '4' },
    { name: 'Скачать билд', value: '5' },
    { name: 'Помощь проекту', value: '6' },
  ];

  useEffect(() => {
    dispatch(pagesAction.openPage({ type: radioValue }));
  }, [dispatch, radioValue]);

  return (
    <>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Переключатель навигации">
      <span className="navbar-toggler-icon"></span>
    </button>
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
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
          className={radioValue === radio.value ? 'text-danger nav-link' : 'text-white nav-link'}
          style={{ opacity: '1' }}
        >
          {radio.name} 
        </ToggleButton>
        </li>
      ))}
      </ul>
    </ButtonGroup>
    </>
  );
};

export default ButtonsLink;
