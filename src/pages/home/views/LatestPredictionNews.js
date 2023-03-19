import React, { useEffect, useRef, useState } from "react";
import makeItIcon from "../../../assets/Home/make-it.png";
import sllider1 from "../../../assets/Home/slider pic 1.png";
import leftArrowWithCircle from "../../../assets/leftArrowWithCircle.png";
import rightarrowWithCircle from "../../../assets/rightarrowWithCircle.png";
import styles from "../Home.module.scss";

const NewsItem = () => {
  return (
    <div className={styles.newsItem}>
      <img src={sllider1} alt="predictancy" className={styles.newsImg} />
      <div className={styles.newsBody}>
        <img src={makeItIcon} />
        <div className={styles.newsContent}>
          <p className={styles.title}>
            I’m 66, we have more than $2 million, I just want to golf – can I
            retire?
          </p>
          <p className={styles.subtitle}>
            My Social Security payments start next month at $3,300 a month. I’m
            currently working part-time, three days per week, as a professional
            engineer for $95/hour for my long-time regular full-time employer of
            28 years.
          </p>
          <a className={styles.readMore}>Read More...</a>
        </div>
      </div>
      <p className={styles.publishedText}>Published Fri, Mar 3 2023</p>
    </div>
  );
};

const LatestPredictionNews = () => {
  const sliderRef = useRef();
  const isSlideItemHovered = useRef();
  const [maxSliderHeight, setMaxSliderHeight] = useState();
  const [currentElement, setCurrentElement] = useState();
  const [sliderArray, setSliderArtray] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isSlideItemHovered.current) {
        setCurrentElement(
          currentElement === sliderArray.length - 1 ? 0 : currentElement + 1
        );
      }
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    setCurrentElement(Math.ceil((sliderArray.length - 1) / 2));
    if (sliderArray.length < 7) {
      const _sliderArray = [...sliderArray];
      _sliderArray.unshift(
        sliderArray[sliderArray.length - 1],
        sliderArray[sliderArray.length - 2]
      );
      _sliderArray.push(sliderArray[0], sliderArray[1]);
      setSliderArtray([..._sliderArray]);
    }
  }, [sliderArray.length]);

  useEffect(() => {
    if (sliderRef.current) {
      console.log(sliderRef.current);
      const heights = [];
      for (const node of sliderRef.current.childNodes) {
        heights.push(node.clientHeight);
      }
      const maxHeight = Math.max(...heights);
      setMaxSliderHeight(maxHeight + 100);
    }
  }, [sliderRef]);

  const calcPosition = (index) => {
    if (index === currentElement) {
      return 50;
    }
    if (
      index === currentElement - 1 ||
      (currentElement === 0 && index === sliderArray.length - 1)
    ) {
      return 15;
    }
    if (
      index === currentElement + 1 ||
      (currentElement === sliderArray.length - 1 && index === 0)
    ) {
      return 85;
    }
    if (index - currentElement >= sliderArray.length - 2) {
      return -15;
    }
    if (currentElement - index >= sliderArray.length - 2) {
      return 115;
    }
    if (index < currentElement) {
      return -15;
    }
    if (index > currentElement) {
      return 115;
    }
  };

  return (
    <div className={styles.latestPredictionNewsConatiner}>
      <h1>Latest Prediction News</h1>
      <div
        className={styles.slider}
        style={{
          visibility: maxSliderHeight ? "visible" : "hidden",
          height: `${maxSliderHeight}px`,
        }}
        onMouseEnter={() => (isSlideItemHovered.current = true)}
        onMouseLeave={() => (isSlideItemHovered.current = false)}
      >
        <img
          src={leftArrowWithCircle}
          className={styles.leftArrow}
          onClick={() =>
            setCurrentElement(
              currentElement === 0 ? sliderArray.length - 1 : currentElement - 1
            )
          }
        />
        <div
          ref={sliderRef}
          style={{
            position: "relative",
            width: "100%",
            height: `${maxSliderHeight}px`,
            overflow: "hidden",
          }}
        >
          {sliderArray.map((item, index) => (
            <div
              className={styles.sliderItem}
              style={{
                left: `${calcPosition(index)}%`,
                transform: `translate(-50%, -50%) scale(${
                  index === currentElement ? 1 : 0.8
                })`,
                opacity:
                  calcPosition(index) > 0 && calcPosition(index) < 100 ? 1 : 0,
              }}
              key={index}
            >
              <NewsItem />
            </div>
          ))}
        </div>
        <img
          src={rightarrowWithCircle}
          className={styles.rightArrow}
          onClick={() =>
            setCurrentElement(
              currentElement === sliderArray.length - 1 ? 0 : currentElement + 1
            )
          }
        />
      </div>
    </div>
  );
};

export default LatestPredictionNews;
