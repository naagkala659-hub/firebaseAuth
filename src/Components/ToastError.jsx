import React from "react";

const ToastError = () => {
  return (
    <div>
      {toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })}
    </div>
  );
};

export default ToastError;
