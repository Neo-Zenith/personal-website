import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Router>
        </>
    );
}
