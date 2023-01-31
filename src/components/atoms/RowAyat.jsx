import React from 'react';
import PlayButton from './PlayButton';
import DetailAyat from './DetailAyat';
import TextAyat from './TextAyat';
import Text from './Text';

const RowAyat = (props) => {
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
            <TextAyat
              isBismillah={true}
              text={props.ayat.text.substring(0, 38)}
            />
            {/* <span>{props.ayat.text.substring(0, 38)}</span> */}
          </div>
        )}
      <div className="rows-ayat">
        {/* <div className="numberAyat">
          <span>
            {toFarsiNumber(props.surah)}:
            {toFarsiNumber(props.ayat.numberInSurah)}
          </span> */}
        <DetailAyat
          ayat={props.surah}
          numberInSurah={props.ayat.numberInSurah}
        />
        {/* </div> */}
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
        {/* <span className="ayat">
          {props.ayat.number !== 1 &&
          props.ayat.number !== 1236 &&
          props.ayat.numberInSurah === 1
            ? props.ayat.text.substring(38)
            : props.ayat.text}
        </span> */}
        <span className="ayat">
          <TextAyat
            isBismillah={false}
            number={props.ayat.number}
            textAyat={props.ayat.text}
            numberInSurah={props.ayat.numberInSurah}
          />
        </span>
        <div className="transliteration">
          <Text>{props.transliteration.text}</Text>
          {props.transliteration.text}
          {props.translation && (
            <>
              <br></br>
              <br></br>
              {props.translation.text}
              <Text>{props.translation.text}</Text>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RowAyat;
