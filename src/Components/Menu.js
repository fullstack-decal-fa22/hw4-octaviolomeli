import React from 'react';
/* Add any imports you think you might need here! */
import Color from './Color';

const Menu = (props) => { 
    return (
      <div className="colorOptions">
          <Color color="red" handleClick={props.hc}/>
          <Color color="yellow" handleClick={props.hc}/>
          <Color color="orange" handleClick={props.hc}/>
      </div>
    );
}

export default Menu;