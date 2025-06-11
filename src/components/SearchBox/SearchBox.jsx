import css from "./SearchBox.module.css";
import { FaSearch } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { useId } from "react";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export const SearchBox = () => {
    const id = useId()
    const dispatch = useDispatch();
    const search = useSelector(selectNameFilter);
  
    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value))
        };    

    return (
        <div className={css.container}>
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