const MySelect = ({ options, onChange, value }) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)} className=" w-25 m-2 form-select" aria-label="Default select example">
            <option value="" disabled>Сортировка постов</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
}

export default MySelect;