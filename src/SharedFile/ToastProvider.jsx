import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        // Default styles
        style: {
          borderRadius: "12px",
          background: "#333",
          color: "#fff",
          padding: "12px 20px",
          fontSize: "15px",
        },
        // Success styles
        success: {
          style: {
            background: "#16a34a", // green-600
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#16a34a",
          },
        },
        // Error styles
        error: {
          style: {
            background: "#dc2626", // red-600
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#dc2626",
          },
        },
      }}
    />
  );
};

export default ToastProvider;
