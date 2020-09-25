import React from 'react';
import './Footer.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function Footer({ channel, description, song }) {
  return (
    <div className='footer'>
      <div className='footer__text'>
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className='footer__ticker'>
          <MusicNoteIcon className='footer__icon' />
          <Ticker mode='smooth'>
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        src='https://cdn.onlinewebfonts.com/svg/img_41040.png'
        alt=''
        className='footer__record'
      />
    </div>
  );
}

export default Footer;
