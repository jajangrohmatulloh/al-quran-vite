import React from 'react';
import Text from './Text';

const RowSurah = (props) => {
  return (
    <div
      className="rows-surah"
      onClick={() => props.goDetail(props.data.number)}
    >
      <Text>
        {props.data.number}: {props.data.englishName}
      </Text>
      <span>
        <Text>{props.data.name}</Text>
      </span>
    </div>
  );
};
export default RowSurah;
