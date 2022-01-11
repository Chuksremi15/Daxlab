import { AuthFooter } from "../../../component/Footer/AuthFooter";
import { LoginForm } from "../../../component/Form/LoginForm";
import { AuthNav } from "../../../component/Navbar/SideNav";

const Login = () => {
  return (
    <div className="flex flex-col h-screen">
      <AuthNav />

      <div className="container mx-auto  max-w-screen-xl flex-grow">
        <div className="grid grid-cols-2 gap-x-24 lg:mt-32">
          <div>
            <img src="img/auth/Login.svg"></img>
          </div>
          <LoginForm />
        </div>
      </div>

      <AuthFooter />
    </div>
  );
};

export default Login;
