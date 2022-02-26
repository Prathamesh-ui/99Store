// import "./App.css";
// import Chat from "./components/Chat";
// import SignIn from "./components/SignIn";
// import { auth } from "./firebase.js";
// import { useAuthState } from "react-firebase-hooks/auth";
// // import kommunicate from "./chat2";
// function App() {
//   const [user] = useAuthState(auth);
//   return (
//     <>
//       {user ? <Chat /> : <SignIn />}
//       {/* <kommunicate /> */}
//     </>
//   );
// }

// export default App;
import "./App.css";
import Cards from "../src/components/Cards";
import SignIn2 from "../src/components/SignIn2";
import { auth } from "../src/components/firebase1";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../src/components/Header";

function App() {
  // const [user] = useAuthState(auth);
  return (
    <div className="App">
      {/* {user ? (
        <div>
          <Header/>
          <Cards />
        </div>
      ) : (
        <SignIn2 />
      )} */}

      <Header/>
      <Cards/>
    </div>
  );
}

export default App;
