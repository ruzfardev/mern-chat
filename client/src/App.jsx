import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.jsx";
import { useEffect } from "react";
import useChatListStore from "./zustand/index.js";
function App() {
  const { setSelectedChat } = useChatListStore();
  // add eventListener to Esc key to close the modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setSelectedChat(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
