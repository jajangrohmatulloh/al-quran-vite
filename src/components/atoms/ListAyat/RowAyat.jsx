import React from 'react';
import { useRef } from 'react';
import PlayButton from '../PlayButton/PlayButton';
import styles from './RowAyat.css';

const ListAyat = (props) => {
  const button = useRef();

  function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '٤', '۵', '٦', '۷', '۸', '۹'];

    return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
  }
  return (
    <>
      {props.ayat.number !== 1 &&
        props.ayat.number !== 1236 &&
        props.ayat.numberInSurah === 1 && (
          <div className="bismillah">
            <span>{props.ayat.text.substring(0, 38)}</span>
          </div>
        )}
      <div className="rows-ayat">
        <div className="numberAyat">
          <span>
            {toFarsiNumber(props.surah)}:
            {toFarsiNumber(props.ayat.numberInSurah)}
          </span>
        </div>
        {/* <div className="container-audio">
          <div className="circle" onClick={() => props.handlePlay(button)}>
            <div
              className="play"
              ref={button}
              data-number={props.ayat.number}
            ></div>
          </div>
        </div> */}
        <PlayButton
          handlePlay={props.handlePlay}
          number={props.ayat.number}
          currentNumber={props.number}
        />
        <span className="ayat">
          {props.ayat.number !== 1 &&
          props.ayat.number !== 1236 &&
          props.ayat.numberInSurah === 1
            ? props.ayat.text.substring(38)
            : props.ayat.text}
        </span>
        <div className="transliteration">
          {props.transliteration.text}
          {props.translation && (
            <>
              <br></br>
              <br></br>
              {props.translation.text}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ListAyat;
