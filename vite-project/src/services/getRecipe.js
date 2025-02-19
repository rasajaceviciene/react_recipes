import { useEffect, useState } from "react";

const API_ENDPOINT = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const getRecipe = (id) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: '' });
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${API_ENDPOINT}${id}`);
                const result = await response.json();
                if (result.meals) {
                    setData(result.meals[0]); // Returns one recipe
                    setError({ show: false, msg: '' });
                } else {
                    setData(null);
                    setError({ show: true, msg: "Apgailestaujame, pasirinktas receptas nerastas" });
                }
            } catch (error) {
                setError({ show: true, msg: "Įvyko klaida gaunant duomenis" });
                console.error(error);
            }
            setIsLoading(false);
        };

        if (id) {
            fetchRecipe();
        }
    }, [id]);

    return { isLoading, error, data };
};

export default getRecipe;
