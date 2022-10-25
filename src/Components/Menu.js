import React from 'react';
/* Add any imports you think you might need here! */
import Color from './Color';

const Menu = (props) => { 
  return (
    <div className="colorOptions">
      <Color color="red" handleClick={props.createPosts}/>
      <Color color="yellow" handleClick={props.createPosts}/>
      <Color color="orange" handleClick={props.createPosts}/>
    </div>
  );
}

export default Menu;