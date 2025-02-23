import Search from "../search/Search"
import Recipes from "../recipes/Recipes"
import "./home.scss"

const Home = ()=>{
    return(
        <div className="container min-vh-100 d-flex flex-column">
            <main className="flex-grow-1">
            <Search/>
            <Recipes/>
            </main>
        </div>    
    )
}

export default Home