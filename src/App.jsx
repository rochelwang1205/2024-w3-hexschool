import { useState } from "react";
import Login from "./pages/Login";
import Products from "./pages/Products";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      {isAuth ? (
        <Products setIsAuth={setIsAuth}/>
      ) : <Login setIsAuth={setIsAuth}/>}
    </>
  );
}

export default App;