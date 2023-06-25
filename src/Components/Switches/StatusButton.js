import './StatusButton.css';
import React, { useState } from 'react';

const StatusButton = () => {
  let [changeText, setChangeText] = useState(true);
  const handleChange = () => {
    return setChangeText(!changeText);
  };

 return (
  <div>
<label class="switch">
<input type="checkbox" onClick={() => handleChange()} />
  <span class="slider round"></span>
</label>
<p>{changeText ? "WIP" : "Done"}</p>
</div>
      ); 
};

export default StatusButton;