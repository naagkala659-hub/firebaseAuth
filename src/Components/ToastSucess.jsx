import React from "react";

const ToastSucess = () => {
  return (
    <div>
      {toast.success("🦄 Successfully SignIN", {
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

export default ToastSucess;
