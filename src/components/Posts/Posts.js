import React from "react";
//import PostsList from "../PostsList/PostsList";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Users from "../Users/Users";

export default function Posts() {
  return (
    <div className="Posts">
      <Header title="Posts" />
      {/*<PostsList />*/}
      <Users />
      <Link to="/counter">Counter</Link>
    </div>
  );
}
