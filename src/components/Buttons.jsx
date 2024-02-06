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
    <ButtonGroup className="justify-content-center">
      {radios.map((radio, idx) => (
        <ToggleButton
          key={`${radio.value}`}
          id={`radio-${idx}`}
          type="radio"
          name="radio"
          variant="transparent container-fluid mx-auto"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
          className={radioValue === radio.value ? 'text-danger' : 'text-white'}
          style={{ opacity: '1' }}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default ButtonsLink;
