import React from 'react';
import Text from './Text';

const RowSurah = (props) => {
  return (
    <div
      className="rows-surah"
      onClick={() => props.goDetail(props.data.number)}
    >
      <div>
        {/* <Text> */}
        {props.data.number}: {props.data.englishName}
        {/* </Text> */}
      </div>
      <div>
        {/* <Text> */}
        {props.data.name}
        {/* </Text> */}
      </div>
    </div>
  );
};
export default RowSurah;
