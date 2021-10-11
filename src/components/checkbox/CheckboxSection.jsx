import React, { useState } from 'react';
import Checkbox from 'components/checkbox/Checkbox';

const citiesOptions = ['Minsk', 'Brest', 'Moscow', 'Kiev', 'Warsaw'];

const initialState = citiesOptions.reduce((result, city) => ({
  ...result,
  [city]: false,
}), {});

const CheckboxesSection = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(initialState);
  return (
    <div className="checkbox-section">
      {citiesOptions.map(city => (
        <Checkbox
          key={city}
          label={city}
          checked={selectedCheckboxes[city]}
          onChange={(checked) => setSelectedCheckboxes({ ...selectedCheckboxes, [city]: checked })}
        />
      ))}
    </div>
  )
};

export default CheckboxesSection;
