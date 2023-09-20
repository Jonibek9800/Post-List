import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Post from "./Post";
import { pagination } from "../utils/pagination";
import Pagination from "../UI/pagination/Pagination";
import PostLimits from "./PostLimits";
import SearchForm from "../UI/search/searchForm";
import MySelect from "../UI/select/MySelect";

const PostLists = () => {
    const [posts, setPosts] = useState([]);
    const [totalCountPost, setTotalCountPost] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('')
    const [isError, setIsError] = useState('')
    const [sortedValue, setSortedValue] = useState('')

    const getPosts = async (limit, page) => {
        try {
            setIsLoading(true);
            const respons = await axios.get(
                'https://jsonplaceholder.typicode.com/posts',
                { params: { _limit: limit, _page: page } }
            );
            setPosts(respons.data);
            setIsLoading(false);
            const total = respons.headers['x-total-count']
            setTotalCountPost(pagination(Number(total), limit));
        } catch (error) {
            setIsError(error.message)
        }
    };
    // const selectedSortPost = useMemo((sort) => {

    // }, [])
    const searchSortedPosts = useMemo(() => {
        return search !== "" ? posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase())) : posts
    }, [search, posts])

    useEffect(() => {
        getPosts(limit, page);
    }, [limit, page])

    const changePage = (p) => {
        setPage(p)
        getPosts(limit, p)
    }
    const selectSortChange = (sort) => {
        setSortedValue(sort)
        if (sortedValue) {
            return setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
        } else {
            return posts
        }
    }
    return (<>
        {isError === "" ? <><SearchForm value={search} setInputValue={setSearch} />
            <MySelect
                options={[
                    { value: "title", name: "По имени" },
                    { value: "body", name: "По описанию" }
                ]}
                onChange={selectSortChange}
                value={sortedValue}
            />
            <br />
            <PostLimits setLimit={setLimit} />
            <h1 className="m-auto p-2 text-danger-subtle">Список постов</h1>
            {
                !isLoading
                    ? searchSortedPosts.map((post) => {
                        return <Post post={post} key={post.id} />;
                    })
                    : 'Loading...'
            }
            <Pagination tottalPage={totalCountPost} page={page} changePage={changePage} /> </> : <h3>Произашло ошибка сервера</h3>}
    </>)

}

export default PostLists;