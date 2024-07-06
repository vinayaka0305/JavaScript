import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import "./SearchBar.css";

const SearchBar = () => {
    return (
        <section className='search_section'>
            <div className='search_input_div'>
                <input
                    type='text'
                    className='search_input'
                    placeholder='Search...'
                    autoComplete='off'
                />
                <div className='search_icon'>
                    <SearchIcon />
                    {/* <CloseIcon /> */}
                </div>
            </div>
            <div className='search_result'>
                <a href='#' target='_blank' className='search_suggestion_line'>
                    This is suggestion line.
                </a>
            </div>
        </section>
    );
};

export default SearchBar;
