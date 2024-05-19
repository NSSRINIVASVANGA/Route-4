import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {details} = props
  const {id, title, author, imageUrl, avatarUrl, topic} = details
  return (
    <Link to={`/blogs/${id}`} className="link">
      <div className="blog-item-con">
        <img src={imageUrl} className="image" alt={title} />
        <div className="text-container">
          <p className="topic"> {topic} </p>
          <h1 className="title"> {title} </h1>
          <div className="avatar-con">
            <img src={avatarUrl} className="avatar" alt="avatar" />
            <p className="author"> {author} </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
