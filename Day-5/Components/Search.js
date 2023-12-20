import { useState } from "react";
import { MOCK_DATA } from "../constants";

const Search = ({allData,setData}) => {
    const [searchText,setSearchText] = useState('');
    const handleSearch=()=>{
        let searchResult = MOCK_DATA.filter((name)=>name.Restaurantname.match(searchText));
        setData(searchResult);
    }
    const clearSearch=()=>{
        setSearchText("");
        setData(allData);
    }
    return (
        <div className="serach-container">
            <div>
                <input className="search-box" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a restaurant....." />
            </div>
            <div>
                <button type="submit" className="clear-button"  onClick={clearSearch}>Clear X</button>
            </div>
            <div>
                <button type="submit" className="search-button"  onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}

export default Search;