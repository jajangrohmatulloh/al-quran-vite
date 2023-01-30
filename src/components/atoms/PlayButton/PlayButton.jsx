import React, { useEffect, useRef, useState } from 'react';
import styles from './PlayButton.module.css';
import classNames from 'classnames';

const PlayButton = (props) => {
  const audioButtonRef = useRef();
  const [isMatch, setIsMatch] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!audioButtonRef.current.className.includes('false')) {
      setIsMatch(false);
      return;
    }
    const isSame = props.currentNumber == props.number;
    setIsMatch(isSame);
  }, [props.currentNumber, counter]);

  const handle = () => {
    setCounter(counter + 1);
  };
  return (
    <div className={styles['container-audio']}>
      <div
        className={styles['audio__circle']}
        onClick={() => props.handlePlay(audioButtonRef)}
      >
        <div
          className={
            styles['audio--play'] + ' ' + (isMatch && styles['audio--pause'])
          }
          onClick={handle}
          ref={audioButtonRef}
          data-number={props.number}
        ></div>
      </div>
    </div>
  );
};

export default PlayButton;
