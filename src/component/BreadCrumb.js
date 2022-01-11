import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
}

export const BreadCrumbs = ({ title, subTitle, href }) => {
  return (
    <div
      className="
      font-headline  mt-4
      "
    >
      <Breadcrumbs
        separator={<ChevronRightIcon className="h-6" />}
        aria-label="breadcrumb"
      >
        <Link to={href}>
          <h1
            className="
           text-gray-500 font-headline text-lg lg:text-base font-medium
          cursor-pointer
          "
          >
            {title}
          </h1>
        </Link>
        <div
          className="
        flex item center space-x-2
        "
        >
          <h1
            className="
           text-gray-600 text-lg lg:text-base font-medium font-headline
          "
          >
            {subTitle}
          </h1>
          <ChevronRightIcon className="h-6 text-gray-700" />
        </div>
      </Breadcrumbs>
    </div>
  );
};
