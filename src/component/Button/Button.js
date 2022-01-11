import { CircularProgress } from "@material-ui/core";

export const RegisterButton = ({ loading, disable, action, text }) => {
  return (
    <button
      onClick={disable ? "" : action}
      type="submit"
      className={
        disable
          ? `
            w-full bg-green-50 py-4 text-gray-500
            font-bold text-base rounded-xl focus:outline-none
            `
          : `  w-full bg-green-500 py-4 text-gray-50 
            font-bold text-base rounded-xl focus:outline-none`
      }
    >
      {loading ? <CircularProgress color="white" size="20px" /> : `${text}`}
    </button>
  );
};
