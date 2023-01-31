import React from 'react';

const DetailAyat = (props) => {
  const toFarsiNumber = (n) => {
    const farsiDigits = ['۰', '۱', '۲', '۳', '٤', '۵', '٦', '۷', '۸', '۹'];

    return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
  };
  return (
    <div className="numberAyat">
      <span>
        {toFarsiNumber(props.ayat)}:{toFarsiNumber(props.numberInSurah)}
      </span>
    </div>
  );
};

export default DetailAyat;
