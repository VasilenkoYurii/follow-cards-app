import { useState, useEffect } from 'react';
import ReactSwitch from 'react-switch';
import { useDispatch } from 'react-redux';
import { checkAlternativeChose } from 'redux/operations';
import { OptionPrg, OptionContainer } from './AlternativeTogle.styled';

export const AlternativeTogle = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(
    localStorage.getItem('alternative') === 'true'
  );

  const handleChange = val => {
    setChecked(val);
  };

  useEffect(() => {
    localStorage.setItem('alternative', checked);
    dispatch(checkAlternativeChose(checked));
  }, [checked, dispatch]);

  return (
    <OptionContainer>
      <OptionPrg>Alternative</OptionPrg>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
        onColor="#888888"
      />
    </OptionContainer>
  );
};
