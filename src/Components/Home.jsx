import { useContext } from "react";
import { siteName } from "../App";

export const Home = () => {
const {name}= useContext(siteName);
  return (
    <div className="container">
      <h1 className="mt-5">Welcome to My React Bootstrap Homepage</h1>
      <div className="alert alert-primary" role="alert">
        Main Page .
        {name}
      </div>
    </div>
  );
};
