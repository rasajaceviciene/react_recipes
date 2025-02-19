import { useGlobalContext } from "../../context"
import { Link } from "react-router-dom";

const url = 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=';

const Recipes = () =>{
    const {recipes, isLoading} = useGlobalContext();
    console.log(recipes) //Check if the recipes are received according to the query
    if (isLoading) {
        return <div className="loading"></div>;
    }
    return(
        <section className="recipes">
            {recipes?.map((recipe) => {
                const { idMeal: id, strMeal: title, strMealThumb: image } = recipe;
                return (
                    <Link to={`/recipes/${id}`} key={id} className="recipe">
                        <article>
                            <img src={image === 'N/A' ? url : image} alt={title} />
                            <div className="recipe-info">
                                <h4 className="title">{title}</h4>
                            </div>
                        </article>
                    </Link>
                );
            })}
        </section>
    )
}

export default Recipes
