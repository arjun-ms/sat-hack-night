import "./App.css";
import NavBar from "./components/Navbar";
import MainSection from "./components/MainSection";
import { useState } from "react";

function App() {
    const [userData, setUserData] = useState(false);
    return (
        <>
            <NavBar setUserData={setUserData} />
            <MainSection userData={userData} />
        </>
    );
}

export default App;
