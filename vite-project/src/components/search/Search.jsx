import { useGlobalContext } from "../../context"

const Search = () =>{
    const {query, setQuery, error} = useGlobalContext();
    return(
        <form className="search-form" onsubmit={(e)=>{e.preventDefault()}}>
            <h2>Receptų paieška</h2>
            <input 
            type="text" 
            className="form-input"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            />
            {error.show && <div className="error">{error.msg}</div>}

        </form>
    )
}

export default Search