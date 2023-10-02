import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import ErrorView from "./components/ErrorView";
import { Routes, Route } from "react-router-dom";

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        if (searchText) {
            fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=c860df0230a7626cf17a026be5a79a7c&query=${searchText}&include_adult=false&language=en-US&page=1`
            )
                .then((response) => response.json())
                .then((data) => {
                    setSearchResults(data.results);
                });
        }
    }, [searchText]);

    return (
        <div>
            <Navbar searchText={searchText} setSearchText={setSearchText} />
            <Routes>
                <Route path="/" element={<HomeView />}></Route>
                <Route path="/about" element={<AboutView />}></Route>
                <Route
                    path="/search"
                    element={
                        <SearchView
                            keyword={searchText}
                            searchResults={searchResults}
                        />
                    }
                ></Route>
                <Route path="/movies/:id" element={<MovieView />}></Route>
                <Route path="*" element={<ErrorView />}></Route>
            </Routes>
        </div>
    );
}

export default App;
