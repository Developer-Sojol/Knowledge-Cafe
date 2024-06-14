import PropTypes from 'prop-types'; 
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark }) => {
    const {title, cover, author, author_img, reading_time, posted_date, hashtags  } = blog;
    return (
        <div className='mb-12'>
            <img className='w-full ' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between m-4'>
                <div className='flex'>
                    <img className='w-16 h-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div  className='text-2xl flex items-center' >
                    <span >{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmark(blog)}
                    ><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p className='space-x-4 py-4 '>
                {
                    hashtags.map ((hash, idx) => <span className='text-blue-800' key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button className='text-sky-500'><a className='border-b-1' href=""> <u>Mark as Read</u></a></button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired ,
    handleAddToBookmark: PropTypes.func
}
export default Blog;




