import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import BlogTableComponent from "../components/BlogTables";
import { useApiGet } from "../components/functions/FetchApi";
import { Iblog } from "../types/blog.types";

export default function AdminPage() {
    const { data, getAPIData, status } = useApiGet();
    const [cookies] = useCookies(['accessToken'])
    const token = cookies.accessToken
    const [blogs, setBlogs] = useState<Iblog[]>([]);
    useEffect(() => {
        getAPIData("/blog", {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        setBlogs(data?.data?.blogs || [])
    }, [status])
    return (
        <>
            {token ? <BlogTableComponent blogs={blogs} /> : <h1 className="text-center p-3">unAuthorization</h1>}
        </>
    )
}