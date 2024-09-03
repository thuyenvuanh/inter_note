import { useColorScheme } from "@mui/joy/styles";
import { useEffect } from "react";
import Home from "./components/Home";

function App() {
  const { setMode } = useColorScheme();
  useEffect(() => {
    setMode("dark");
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
