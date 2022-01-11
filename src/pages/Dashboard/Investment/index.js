import { SideNav, TopNav } from "../../../component/Navbar/SideNav";
import { UserInvestmentTableBody } from "../../../component/Table/UserInvestmentTableBody";
import { UserInvestmentTableHead } from "../../../component/Table/UserInvestmentTableHead";
import { CircularProgress } from "@material-ui/core";
import { BreadCrumbs } from "../../../component/BreadCrumb";

const investment = () => {
  return (
    <>
      <SideNav />
      <TopNav />
      <div className="container mx-auto max-w-screen-xl px-5">
        <BreadCrumbs
          title="Dashboard"
          subTitle="Investments"
          href="/dashboard"
        />

        {true ? (
          <div class="flex flex-col mt-6">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <UserInvestmentTableHead />
                    <UserInvestmentTableBody />
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center col-span-3 justify-self-center align-self-center mt-36">
            {" "}
            <CircularProgress color="black" size="20px" />
          </div>
        )}
      </div>
    </>
  );
};

export default investment;
