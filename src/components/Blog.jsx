import { useState, useEffect } from 'react';
import Article from './Article';
import ExpandedArticle from './ExpandedArticle';

export default function Blog({ client }) {
    const [blogs, setBlogs] = useState([]);
    const [isVisible, setIsVisible] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'blog' })
            .then((response) => {
                setBlogs(response.items);
                setIsVisible(new Array(response.items.length).fill(false));
            })
            .catch(console.error);
    }, [client]);
    const toggleFlag = (index) => {
        setIsVisible(prev =>
            prev.map((v, i) => i === index ? !v : v)
        );
    };
    return (
        <>
            <h1 className='content-title'>Blog</h1>
            <hr className='hr-content' />
            <div className='articles-container'>
                {
                    blogs.map((blog, index) => (
                        <>
                            <Article title={blog.fields.title} description={blog.fields.content} onClick={() => toggleFlag(index)} />
                            {isVisible[blogs.indexOf(blog)] && <ExpandedArticle title={blog.fields.title} description={blog.fields.content} onClick={() => toggleFlag(index)} />}
                        </>
                    ))
                }
            </div>
        </>
    )
}