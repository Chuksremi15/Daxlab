import React from "react";
import {
  PhoneIcon,
  HomeIcon,
  ShoppingBagIcon,
  ArchiveIcon,
  CogIcon,
  PlayIcon,
  LogoutIcon,
  UserAddIcon,
  FolderAddIcon,
} from "@heroicons/react/outline";
import { logout } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const AdminNavLinks = () => {
  const dispatch = useDispatch();

  const navLinks = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      Icon: HomeIcon,
    },
    {
      name: "Plans",
      href: "/admin/plans",
      Icon: ShoppingBagIcon,
    },
    {
      name: "Create Plan",
      href: "/admin/createplan",
      Icon: FolderAddIcon,
    },
    {
      name: "Investment",
      href: "/investment",
      Icon: PlayIcon,
    },
    {
      name: "Withdraw",
      href: "/createplan",
      Icon: ArchiveIcon,
    },
  ];

  return (
    <div className="mt-16">
      {navLinks.map(({ name, Icon, href }) => (
        <Link to={href}>
          <div
            className="
          flex items-center px-3 py-4 
          cursor-pointer hover:bg-hover rounded-lg
          "
          >
            <Icon className="h-6 mr-4 text-white" />
            <h1 className="font-headline text-xl text-base font-semibold text-white">
              {name}
            </h1>
          </div>
        </Link>
      ))}
      <div
        className="
          flex items-center px-3 py-4 
          cursor-pointer hover:bg-hover rounded-lg
          "
        onClick={() => dispatch(logout())}
      >
        <LogoutIcon className="h-6 mr-4 text-white" />
        <h1 className="font-headline text-xl text-base font-semibold text-white">
          Log out
        </h1>
      </div>
    </div>
  );
};
