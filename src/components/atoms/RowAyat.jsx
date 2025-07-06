import React from 'react';
import PlayButton from './PlayButton';
import DetailAyat from './DetailAyat';
import TextAyat from './TextAyat';
import { isArabic } from '../../utils';

const RowAyat = (props) => {
  function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '٤', '۵', '٦', '۷', '۸', '۹'];
    z;
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
          </div>
        )}
      <div className="rows-ayat">
        <DetailAyat
          ayat={props.surah}
          numberInSurah={props.ayat.numberInSurah}
        />
        <PlayButton
          handlePlay={props.handlePlay}
          number={props.ayat.number}
          currentNumber={props.number}
        />
        <span className="ayat">
          <TextAyat
            isBismillah={false}
            number={props.ayat.number}
            textAyat={props.ayat.text}
            numberInSurah={props.ayat.numberInSurah}
          />
        </span>
        <div className="transliteration">
          {props.transliteration.text}
          {props.translation && (
            <>
              <br></br>
              <br></br>
              <span
                className={
                  isArabic(props.translation.text) ? 'arabic' : 'non-arabic'
                }
              >
                {props.translation.text}
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RowAyat;
