export  interface Iblog {
    title : string; 
    image: string;
    text: string;
    author: string;
}

export interface IPropsBlog {
    blogs : Iblog[] , 
    blog : Iblog , 
    key : number
}

export type propBlog = Omit<IPropsBlog , "blogs">
export type PropsBlogs = Omit<IPropsBlog , "blog" | "key">
