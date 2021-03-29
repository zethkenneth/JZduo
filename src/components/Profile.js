import React from 'react';

function Profile(props) {
  return (
    <>
      <li className='cards__item'>
          <div className="ImageSection">
            <div className="img">
                <img src={props.src} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> {props.nickname}</span></h4>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    
                    </div>
                    <div className="right-section">
                        <p>{props.FullName}</p>
                        <p>{props.Birthday}</p>
                        <p>{props.Nationality}</p>
                        <p>{props.Languages}</p>
                        <p>{props.Address}</p>
                    </div>
                </div>
                
            </div>
        </div>
      </li>
    </>
  );
}

export default Profile;
