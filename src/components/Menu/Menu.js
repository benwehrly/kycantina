import { useEffect, useState, useRef } from "react";
import "./menu.css";

const Menu = ({ menu }) => {
  const [selected, setSelected] = useState("");

  const getCategory = (type) => {
    const category = menu.filter((item) => item.category === type);
    return category;
  };

  const entrees = getCategory("entrees");
  const appetizers = getCategory("appetizers");
  const sides = getCategory("sides");
  const desserts = getCategory("desserts");
  const filteredMenu = [appetizers, entrees, sides, desserts];

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="container">
      <div className="menu">
        <select onChange={handleChange}>
          <option>Select a category</option>
          <option value={0}>Appetizers</option>
          <option value={1}>Entrees</option>
          <option value={2}>Sides</option>
          <option value={3}>Desserts</option>
        </select>
        {filteredMenu.map((category, i) => (
          <div>
            <h1 className="category-name">{category[0].category}</h1>
            <Category
              i={i}
              category={category}
              selected={selected}
              key={Math.random() * 1000}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

const Category = ({ category, i, selected }) => {

  const catRef = useRef(null)
  
  useEffect(() => {
    catRef.current.scrollIntoView({ behavior: "smooth"})
  }, [selected]);

  return (
    <div className="category" ref={catRef}>
      {category.map((food, i) => (
        <Food food={food} i={i} />
      ))}
    </div>
  );
};

const Food = ({ food, i }) => {
  const { name, description: details, heat, price, url } = food;

  //   useEffect(() => {
  //     console.log(food);
  //   }, []);
  // const fire =
  //   "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/fire_1f525.png";
  const fire = 'https://images.emojiterra.com/google/android-nougat/512px/1f336.png'

  return (
    <div
      className="food-card"
      style={{ borderTop: i > 1 && "1px solid rgb(0,0,0,.2)" }}
    >
      <img src={url} alt="" className="foodpic" />
      <div className="foodtext">
        <h3>{name}</h3>
        <p>{details}</p>
        <p>
          heat:
          {Array(heat)
            .fill(0)
            .map((val) => (
              <img src={fire} alt="" className="heat" />
            ))}
        </p>
        <h2>${price}</h2>
      </div>
    </div>
  );
};
