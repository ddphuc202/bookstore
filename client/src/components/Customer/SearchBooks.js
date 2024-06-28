import { useState } from "react"
import { getBooks } from "../../services/BooksServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const SearchBooks = (props) => {

    const [search, setSearch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(search);
    }


    return (
        <>
            <form className="input-group search-bar">
                <input type="text" aria-label="Tìm sản phẩm" value={search} onChange={(event) => setSearch(event.target.value)} name="query" placeholder="Tìm kiếm..." className="search-auto input-group-field auto-search" required="" />
                <button onClick={handleSubmit} className="btn search-button" aria-label="Justify">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
                </button>
            </form>

        </>
    )
}
export default SearchBooks