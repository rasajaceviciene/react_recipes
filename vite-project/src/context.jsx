import { useContext, useState } from "react";
import React from "react";
import searchRecipes from "./services/searchRecipes";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    const { isLoading, error, data: recipes } = searchRecipes(query);
    console.log(query) //Check if the query is passed correctly
    return (
        <AppContext.Provider value={{ isLoading, error, recipes, query, setQuery }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
