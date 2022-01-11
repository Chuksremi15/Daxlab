import { useHistory } from "react-router";
import { AuthFooter } from "../../../component/Footer/AuthFooter";
import { RegisterForm } from "../../../component/Form/RegisterForm";
import { AuthNav } from "../../../component/Navbar/SideNav";

const Register = () => {
  const { history } = useHistory();
  return (
    <div className="flex flex-col h-screen">
      <AuthNav />

      <div className="container mx-auto px-4  max-w-screen-xl flex-grow">
        <div className="grid grid-cols-2 gap-x-24 lg:mt-4">
          <div className="self-center">
            <img src="img/auth/register.svg"></img>
          </div>

          <RegisterForm />
        </div>
      </div>

      <AuthFooter />
    </div>
  );
};

export default Register;
