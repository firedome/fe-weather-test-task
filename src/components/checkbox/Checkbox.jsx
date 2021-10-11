import React from 'react';

import './checkbox.css';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div key={label} className="checkbox-wrapper">
      <span>{label}</span>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
    </div>
  )
}

export default Checkbox;
