import React from 'react';

const ListSurah = (props) => {
  console.log(props);
  return (
    <div
      className="rows-surah"
      onClick={() => props.goDetail(props.data.number)}
    >
      {props.data.number}: {props.data.englishName}{' '}
      <span>{props.data.name}</span>
    </div>
  );
};
export default ListSurah;
