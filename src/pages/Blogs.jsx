import React from "react";
import { Layout } from "../components";
import "../styles/blogs.css";
import { pagePaths } from "../utils/constants";

const listData = [
  {
    name: "Array",
    items: [
      {
        name: "Remove Duplicates",
        link: pagePaths.removeDuplicates,
      },
    ],
  },
];
const prepareDynamicList = (listItem = []) => {
  const dynamicMenu = (list = [], parentIndex = 0, level = 1) => (
    <ul className={`menu__level__${level}`}>
      {list.map((item, index) => {
        const key = `${index}__${parentIndex}__${item.name}`;
        return (
          <li key={key}>
            {item.link ? (
              <a href={item.link}>{item.name}</a>
            ) : (
              <span>{item.name}</span>
            )}
            {item.items && dynamicMenu(item.items, index, level + 1)}
          </li>
        );
      })}
    </ul>
  );
  return dynamicMenu(listItem);
};

const Blogs = () => {
  return (
    <Layout>
      <div className="header blogs section__padding">
        <h1>Blogs</h1>
        <br />
        {prepareDynamicList(listData)}
      </div>
    </Layout>
  );
};

export default Blogs;
