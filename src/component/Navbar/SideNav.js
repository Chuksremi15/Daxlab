import React from "react";
import { SwipeableDrawer } from "@material-ui/core";
import { useSideNavState } from "../../zust";
import { XIcon } from "@heroicons/react/outline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { MenuIcon } from "@heroicons/react/solid";
import { NavLinks } from "./NavLinks";
import { AdminNavLinks } from "./AdminNavLinks";

export const SideNav = () => {
  const { sideNavState, setSideNavState } = useSideNavState();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      anchor={"left"}
      open={sideNavState}
      onClose={() => setSideNavState(false)}
      onOpen={() => setSideNavState(true)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      className=""
    >
      <div className=" w-65 xl:w-72 2xl:w-96 text h-full bg-green-500 text-gray-50 p-4 font-headline">
        <div className=" flex items-center cursor-pointer p-2  rounded-lg ">
          <XIcon
            onClick={() => setSideNavState(!sideNavState)}
            className="h-6 text-white mr-2"
          />
          <div className="text-2xl font-bold">DexLabScrap</div>
        </div>

        <NavLinks />
      </div>
    </SwipeableDrawer>
  );
};
export const AdminSideNav = () => {
  const { sideNavState, setSideNavState } = useSideNavState();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      anchor={"left"}
      open={sideNavState}
      onClose={() => setSideNavState(false)}
      onOpen={() => setSideNavState(true)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      className=""
    >
      <div className=" w-65 xl:w-72 2xl:w-96 text h-full bg-green-500 text-gray-50 p-4 font-headline">
        <div className=" flex items-center cursor-pointer p-2  rounded-lg ">
          <XIcon
            onClick={() => setSideNavState(!sideNavState)}
            className="h-6 text-white mr-2"
          />
          <div className="text-2xl font-bold">DexLabScrap</div>
        </div>

        <AdminNavLinks />
      </div>
    </SwipeableDrawer>
  );
};

export const TopNav = () => {
  const { sideNavState, setSideNavState } = useSideNavState();
  return (
    <div
      className="
    w-full sticky top-0 z-50 bg-gray-50 py-6
    border-b border-gray-200 flex items-center font-headline
"
    >
      <div
        className="
    flex flex-row max-w-screen-xl 
    px-2  items-center
    m-auto w-full overflow-y-visible justify-between
 "
      >
        <div className="flex items-center">
          <MenuIcon
            onClick={() => setSideNavState(!sideNavState)}
            className="h-8 cursor-pointer text-green-500 lg:mr-6 "
          />
          <div className="text-3xl font-medium">Welcome to DexLabScrap!!!</div>
        </div>
        <div>
          <AccountCircleIcon
            className="align-end"
            color="success"
            style={{ fontSize: "50" }}
          />
        </div>
      </div>
    </div>
  );
};
export const AuthNav = () => {
  return (
    <div
      className="
    w-full sticky top-0 z-50 bg-gray-50 py-6
    border-b border-gray-200  font-headline
"
    >
      <div className="container px-4  mx-auto max-w-screen-xl">
        <div className="text-3xl font-medium">DexLabScrap</div>
      </div>
    </div>
  );
};
