import { Toaster } from "react-hot-toast";

export const Alert = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        success: {
          duration: 3000,
          theme: {
            primary: "green",
          },
        },
        error: {
          duration: 3000,
        },
      }}
    />
  );
};
