import React, {useState} from 'react';
import './Company.css'
import Functions from './Functions';

const Company = () => {

  const [temp, setTemp] = useState('g');

function clickHandler(event){

  setTemp(event.target.id);
  
}   

    return (

      <React.Fragment>
      <div className="header">
        <button className='new-b'>Add new</button>
        <button className="profile">Profile</button>
      </div>

      <div className='col-functions'>
        <div onClick={clickHandler} id="g">Graphics</div>
        <div onClick={clickHandler} id="a">Ad Copies</div>
        <div onClick={clickHandler} id="i">Interactions</div>
        <div onClick={clickHandler} id="p">Promotions</div>
        </div>
        
        <Functions show={temp} />

        </React.Fragment>
    );

}

export default Company;