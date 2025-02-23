import { useGlobalContext } from "../../context";
import { useState } from "react";
import './search.scss'

const Search = () => {
    const { setQuery, error } = useGlobalContext();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(searchTerm); //The search is updated only when the button is clicked
    };

    return (
        <form className="search-form text-center" onSubmit={handleSubmit}>
            <h1>Receptų paieška</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-xl-6 d-flex justify-content-center align-items-center gap-2">
                        <input 
                            type="text" 
                            className="form-control"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className="btn btn-search">Ieškoti</button>
                    </div>    
                </div>
            </div>                    
            {error.show && <div className="error">{error.msg}</div>}
        </form>
    );
};

export default Search;
