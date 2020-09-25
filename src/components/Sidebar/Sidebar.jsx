import React, { useState } from 'react';
import './Sidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

function Sidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);
  const fontS = 'large';
  return (
    <div className='sidebar'>
      <div className='sidebar__button'>
        {liked ? (
          <FavoriteIcon fontSize={fontS} onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon fontSize={fontS} onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className='sidebar__button'>
        <MessageIcon fontSize={fontS} />
        <p>{messages}</p>
      </div>
      <div className='sidebar__button'>
        <ShareIcon fontSize={fontS} />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default Sidebar;
