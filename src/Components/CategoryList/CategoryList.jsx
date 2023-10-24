import { useEffect, useState } from "react";
// import axios from "axios";
import "../../../public/categories.json";
import SetCategoryList from "./SetCategoryList/SetCategoryList";

const CategoryList = () => {
  const [lists, setList] = useState([]);

  // axios.get("categories.json").then((res) => console.log(res.data));
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);
  return (
    <div>
      <h2 className="text-5xl font-extrabold text-center">Job Category List</h2>
      <p className="text-center">
        Explore thousends of job opportunities with all the informaion you
        need.Its yours future
      </p>
      <div>
        {lists.map((list) => (
          <SetCategoryList key={list.id} list={list}></SetCategoryList>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
