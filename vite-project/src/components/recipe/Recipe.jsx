import { Link, useParams } from "react-router-dom";
import getRecipe from "../../services/getRecipe";
import getIngredients from "../../services/getIngredients";
import "./recipe.scss";

const Recipe = () => {
    const { id } = useParams();
    const { isLoading, error, data: recipe } = getRecipe(id);

    if (isLoading) {
        return(
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (error.show) {
        return (
            <div className="page-error">
                <h1>{error.msg}</h1>
                <div className="btn-link">
                    <Link to="/" className="btn-back">Atgal</Link>
                </div>                
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
        <div className="container">
            <section className="single-recipe">
                <div>
                    <h2>{title}</h2>
                    <h3>{area} | {category}</h3>
                </div>           
                <div className="row">
                    <div className="col-12 col-md-6 block">
                        <h4>Ingredientai:</h4>
                        <ul>
                            {ingredients.map((item, index) => (
                                <li key={index}>{item.measure} {item.ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 block">
                        <img className="img-fluid" src={image} alt={title} />
                    </div>                               
                </div>
                <div>
                    <h4>Gaminimo eiga:</h4>
                    <p>{instructions}</p>
                </div>
                <div>
                    <a href={source} target="_blank" rel="noopener noreferrer">Originalus receptas</a>
                </div>                
                <div className="btn-link">
                    <Link to="/" className="btn-back">Atgal</Link>
                </div>            
            </section>
        </div>        
    );
};

export default Recipe;