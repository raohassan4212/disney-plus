import "./App.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebaseConfig";
import Login from "./pages/Login";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
