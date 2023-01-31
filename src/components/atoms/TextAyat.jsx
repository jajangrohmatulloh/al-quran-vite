import React, { Fragment } from 'react';

const TextAyat = (props) => {
  const withBismillah =
    props.isBismillah == false &&
    props.number !== 1 &&
    props.number !== 1236 &&
    props.numberInSurah === 1;
  return (
    <Fragment>
      {props.isBismillah == true && <span>{props.text}</span>}
      {withBismillah ? props.textAyat.substring(38) : props.textAyat}
    </Fragment>
  );
};

export default TextAyat;
