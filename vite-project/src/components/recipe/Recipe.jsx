import { Link, useParams } from "react-router-dom";
import getRecipe from "../../services/getRecipe";
import getIngredients from "../../services/getIngredients";

const Recipe = () => {
    const { id } = useParams();
    const { isLoading, error, data: recipe } = getRecipe(id);

    if (isLoading) {
        return <div className="loading"></div>;
    }

    if (error.show) {
        return (
            <div className="page-error">
                <h1>{error.msg}</h1>
                <Link to="/" className="btn">Atgal</Link>
            </div>
        );
    }

    if (!recipe) {
        return null;
    }

    const {
        strMeal: title,
        strMealThumb: image,
        strArea: area,
        strCategory: category,        
        strInstructions: instructions,
        strSource: source,
        ...ingredientsData
    } = recipe;

    const ingredients = getIngredients(ingredientsData);

    return (
        <section className="single-recipe">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <div>
                <h3>{area} | {category}</h3>
            </div>               
            <h4>Ingredientai:</h4>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>{item.measure} {item.ingredient}</li>
                ))}
            </ul>
            <h4>Gaminimo eiga:</h4>
            <p>{instructions}</p>
            <a href={source} target="_blank" rel="noopener noreferrer">Originalus receptas</a>    
            <div>
                <Link to="/" className="btn">Atgal</Link>
            </div>            
        </section>
    );
};

export default Recipe;