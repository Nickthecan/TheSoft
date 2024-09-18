import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "/src/pages/Home.jsx";

function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;