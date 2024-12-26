import React from 'react';
import '../Style.css'
const Signupbtns = (props) => {
  return (
    <div>
      <div className="btns">
        <button >{props.btnsname}</button>
      </div>
    </div>
  );
}

export default Signupbtns;
