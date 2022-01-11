import React from "react";
import { LoginForm } from "../../../component/Form/LoginForm";

const Home = () => {
  return (
    <div className="container mx-auto max-w-screen-sm">
      <div className="lg:mt-32">
        <LoginForm isAdmin={true} />
      </div>
    </div>
  );
};

export default Home;
