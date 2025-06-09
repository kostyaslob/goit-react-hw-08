import css from "./SearchBox.module.css";
import { FaSearch } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { useId } from "react";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice.js";

export const SearchBox = () => {
    const id = useId()
    const dispatch = useDispatch();
    const search = useSelector(selectNameFilter);
  
    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value))
        };    

    return (
        <div>
            <label className={css.searchLabel}><FaSearch /> Find contacts by name</label>
            <input
                className={css.searchInput}
                type="text"
                id={id}
                value={search}
                onChange={handleChange}
            />
        </div>
    )
}