const SearchForm = ({ value, setInputValue }) => {
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <form className="search">
            <input
                className="m-2 form-control"
                list="datalistOptions"
                value={value}
                onChange={(e) => handleChange(e)}
                id="exampleDataList"
                placeholder="Search..." />
        </form>
    );

}

export default SearchForm;