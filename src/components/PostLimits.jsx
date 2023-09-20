const PostLimits = ({ setLimit }) => {
    const limitArr = [10, 20, 50]
    const changeLimit = (e) => {
        setLimit(Number(e.target.value))
    }
    return (
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="d-block btn-group me-2" role="group" aria-label="First group">
                <h5>Количество отображаемих постов </h5>
                {limitArr.map(count => <button
                    key={count}
                    onClick={(e) =>
                        changeLimit(e)}
                    type="button"
                    className="m-1 btn btn-outline-primary"
                    value={count}
                >
                    {count}
                </button>)}
            </div>
        </div >
    );
}

export default PostLimits;