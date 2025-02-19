import { useEffect, useState } from "react";

const API_SEARCH_ENDPOINT = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const API_RANDOM_ENDPOINT = "https://www.themealdb.com/api/json/v1/1/random.php"; // For random recipes

const searchRecipes = (query) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: '' });
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            setIsLoading(true);
            try {
                let recipes = [];
                
                if (query) {
                    // If there is a search query, the API_SEARCH will be used
                    const response = await fetch(`${API_SEARCH_ENDPOINT}${query}`);
                    const result = await response.json();
                    if (result.meals) {
                        recipes = result.meals;
                    }
                } else {
                    // If the query is empty (initial page), several random requests will be made
                    for (let i = 0; i < 4; i++) {  // For example, 4 random recipes
                        const response = await fetch(API_RANDOM_ENDPOINT);
                        const result = await response.json();
                        if (result.meals) {
                            recipes = [...recipes, ...result.meals];
                        }
                    }
                }

                if (recipes.length > 0) {
                    setData(recipes);
                    setError({ show: false, msg: '' });
                } else {
                    setData(null);
                    setError({ show: true, msg: "Apgailestaujame, pagal jūsų paiešką nieko neradome" });
                }
            } catch (error) {
                setError({ show: true, msg: "Įvyko klaida gaunant duomenis" });
                console.error(error);
            }
            setIsLoading(false);
        };

        fetchRecipes();
    }, [query]);

    return { isLoading, error, data };
};

export default searchRecipes;
