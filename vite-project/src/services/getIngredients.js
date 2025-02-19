const getIngredients = (ingredientsData) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = ingredientsData[`strIngredient${i}`];
        const measure = ingredientsData[`strMeasure${i}`];
        if (ingredient && measure) {
            ingredients.push({ ingredient, measure });
        }
    }
    return ingredients;
};

export default getIngredients;
