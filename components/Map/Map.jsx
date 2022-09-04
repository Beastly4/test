import { useCallback, useState } from "react";
import MapModal from "../Modal";
import Icon from "../Icon";
import styles from "./styles.module.scss";

const Map = ({ data }) => {
  const [isShown, setIsShown] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [willClose, setWillClose] = useState(false);

  const renderDots = useCallback((item) => {
    return (
      <circle
        key={item?.id}
        className={`${styles.circle} ${styles.circleMiddle}`}
        cx={item?.cx}
        cy={item?.cy}
        r={item?.r}
        onMouseEnter={(e) => {
          setWillClose(false);
          setIsShown(true);
          setModalData({
            x: e?.pageX,
            y: e?.pageY,
            country: item?.country,
            description: item?.description,
          });
        }}
        onMouseLeave={() => {
          setWillClose(true);
          setTimeout(() => {
            setIsShown(false);
            setModalData(false);
          }, 450);
        }}
      />
    );
  }, []);
  return (
    <>
      <Icon.Map>{data?.map((item) => renderDots(item))}</Icon.Map>
      <MapModal willClose={willClose} isOpen={isShown} modalData={modalData} />
    </>
  );
};

export default Map;
