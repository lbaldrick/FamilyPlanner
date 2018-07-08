import React from 'react';

const DateTile = ({date, children}) => {
  return <div className='date-tile'>
      <span className='date-tile_date-label'>{date}</span>
      {children}
  </div>
};
