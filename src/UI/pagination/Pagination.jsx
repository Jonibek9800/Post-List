import { pageArray } from "../../utils/pageArray";

const Pagination = ({ tottalPage, page, changePage }) => {
    const pagesArr = pageArray(tottalPage)
    const changeHandler = (p) => {
        changePage(p)
    }
    return (
        <nav className="" aria-label="...">
            <ul className="pagination justify-content-center">
                {pagesArr.map(p => {
                    return (
                        <li type="button" key={p} onClick={() => changeHandler(p)} className={page === p ? "page-item active" : "page-item"} aria-current="page">
                            <span className="page-link">{p}</span>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Pagination;