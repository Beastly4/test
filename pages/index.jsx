import styles from "../styles/Home.module.scss";
import {
  sectionAboutUs,
  sectionVideo,
  sectionGroup,
  sectionEra,
  sectionOurValues,
  sectionMap,
  sectionPartners,
} from "../data/data";
import Title from "../components/Title";
import Icon from "../components/Icon";
import { useState, useRef, useEffect } from "react";
import Button from "../components/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Carousel from "../components/Carousel";
import BlogBlock from "../components/BlogBlock";
import LocationBlock from "../components/LocationBlock";
import Map from "../components/Map";
import ImagePartners from "../components/ImagePartners/ImagePartners";
import Partners from "../components/Partners/Partners";

const doSomething = () => {};

const renderVideoDescription = (item) => {
  return (
    <p className={styles.description} key={item?.id}>
      {item?.text}
    </p>
  );
};

export default function Home({
  sectionAboutUs,
  sectionVideo,
  sectionGroup,
  sectionEra,
  sectionOurValues,
  sectionMap,
  sectionPartners,
}) {
  const [isVideoPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isVideoPlaying) {
      videoRef?.current?.play();
      setTimeout(() => {
        setIsPlaying(false);
      }, (videoRef?.current?.duration + 0.3) * 1000);
    } else {
      videoRef?.current?.pause();
    }
  }, [isVideoPlaying]);

  return (
    <>
      <section className={styles.aboutUs}>
        <div className={styles.mainWrapper}>
          <div className={styles.imageFigure}>
            <img
              src={sectionAboutUs?.imageFigure}
              alt="Figure"
              width={1056}
              height={615}
            />
          </div>
          <div className={styles.imageGirl}>
            <img
              src={sectionAboutUs?.imageGirl}
              alt="Girl"
              width={969}
              height={600}
            />
          </div>
          <Title text={sectionAboutUs?.title} className={styles.title} />
        </div>
      </section>
      <div className={styles.wrapper}>
        <section className={styles.videoSection}>
          <div className={styles.mainWrapper}>
            <div className={styles.container}>
              <div className={styles.descriptionBlock}>
                <Title
                  text={sectionVideo?.blockTitle}
                  className={styles.blockTitle}
                />
                <p className={styles.blockDescription}>
                  {sectionVideo?.blockDescription}
                </p>
              </div>
              <Title text={sectionVideo?.mainTitle} className={styles.title} />
              <div className={styles.videoSectionWrapper}>
                <div className={styles.videoContainer}>
                  <div className={styles.videoWrapper}>
                    <video
                      poster={sectionVideo?.poster}
                      className={styles.video}
                      ref={videoRef}
                      controls={isVideoPlaying}
                    >
                      <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" />
                    </video>
                    <button
                      className={`${styles.playButton} ${
                        isVideoPlaying ? styles.hide : ""
                      }`}
                      onClick={() => {
                        setIsPlaying((prev) => !prev);
                      }}
                    >
                      <Icon.PlayButton />
                    </button>
                  </div>
                  <div className={styles.caption}>
                    {sectionVideo?.videoCaption}
                  </div>
                </div>
                <div className={styles.descriptionWrapper}>
                  <Title
                    text={sectionVideo?.title}
                    className={styles.descriptionTitle}
                  />
                  <div className={styles.descriptions}>
                    {sectionVideo?.description?.map((item) =>
                      renderVideoDescription(item)
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.group}>
          <div className={styles.mainWrapper}>
            <div className={styles.figureWrapper}>
              <img src={sectionGroup?.imageFigure} alt="Figure" />
            </div>
            <div className={styles.container}>
              <div className={styles.groupWrapper}>
                <img
                  src={sectionGroup?.imageCar}
                  alt="Car"
                  className={styles.imageCar}
                />
                <div className={styles.content}>
                  <Title text={sectionGroup?.title} className={styles.title} />
                  <p className={styles.description}>
                    {sectionGroup?.description}
                  </p>
                  <Button type="primary" onClick={doSomething}>
                    {sectionGroup?.buttonTitle}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.era}>
          <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
              <Title text={sectionEra?.title} className={styles.title} />
              <Carousel blocks={sectionEra?.blocks} />
            </div>
          </div>
        </section>
        <section className={styles.ourValues}>
          <div className={styles.mainWrapper}>
            <div className={styles.container}>
              <div className={styles.ourValuesWrapper}>
                {sectionOurValues?.map((item) => (
                  <BlogBlock key={item?.id} item={item} onClick={doSomething} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionMap}>
          <div className={styles.mainWrapper}>
            <div className={styles.mapWrapper}>
              <Title text={sectionMap?.title} className={styles.title} />
              <div className={styles.blocksWrapper}>
                {sectionMap?.blocks?.map((item) => (
                  <LocationBlock
                    key={item?.id}
                    title={item?.title}
                    icon={item?.image}
                  />
                ))}
              </div>
              <Map data={sectionMap?.mapDotsData} />
            </div>
          </div>
        </section>
        <section className={styles.partners}>
          <div className={styles.mainWrapper}>
            <div className={styles.parntersWrapper}>
              <Partners
                blocks={sectionPartners?.dealerGroups?.items}
                withSeparator
                title={sectionPartners?.dealerGroups?.title}
                titleStyles={styles.title}
              />
              <Partners
                blocks={sectionPartners?.manufactures?.items}
                title={sectionPartners?.manufactures?.title}
                titleStyles={styles.title}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      sectionAboutUs,
      sectionVideo,
      sectionGroup,
      sectionEra,
      sectionOurValues,
      sectionMap,
      sectionPartners,
    },
  };
};
