export  interface Iblog {
    title : string; 
    image: string;
    text: string;
    author: string;
}

export interface IPropsBlog {
    blogs : Iblog[]
}