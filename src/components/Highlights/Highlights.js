import "./highlights.css";
import { useRef, useEffect, useState } from "react";

const Highlights = () => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);

  const refs = [img1, img2, img3];

  const images = [
    "https://plantbasedandbroke.com/wp-content/uploads/2019/09/LRM_EXPORT_273713993199539_20190916_110156774-02.jpeg",
    "http://cdn.shopify.com/s/files/1/3002/1936/articles/vegan-nachos_1200x630.jpg?v=1614372751",
    "https://images.pexels.com/photos/9993709/pexels-photo-9993709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const [current, setCurrent] = useState(images.length - 1);

  useEffect(() => {
    const id = setTimeout(() => {
      if (current === 0) {
        setCurrent(images.length - 1);
      } else {
        setCurrent(current - 1);
      }
      refs.forEach((ref, i) => {
        let index = i + 1
        ref.current.style.opacity = 0;
        return current % index === 0
          ? (ref.current.style.opacity = "100%")
          : 0;
      });
      // console.log(current)
    }, 5000);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <div className="highlights">
      <div className="frame">
        {images.map((image, i) => (
          <img src={image} alt="" ref={refs[i]} />
        ))}
      </div>
      <h1 className="title">Menu</h1>
      <div className="ribbon" />
    </div>
  );
};

export default Highlights;
