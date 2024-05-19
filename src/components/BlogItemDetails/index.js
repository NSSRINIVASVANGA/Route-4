import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemData: {}, toLoad: true}

  componentDidMount() {
    this.getBlogItemDeatils()
  }

  getBlogItemDeatils = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updateData = {
      title: data.title,
      imageUrl: data.image_url,
      avaterUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogItemData: updateData, toLoad: false})
  }

  render() {
    const {blogItemData, toLoad} = this.state
    const {title, imageUrl, avaterUrl, author, content} = blogItemData
    return (
      <div>
        {toLoad ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#000000" width={50} height={50} />
          </div>
        ) : (
          <div className="item-details-con">
            <h1 className="title extra-title">{title}</h1>
            <div className="avatar-con">
              <img src={avaterUrl} className="avatar" alt="avatar" />
              <p className="author extra"> {author} </p>
            </div>
            <img src={imageUrl} className="extra-img" alt={title} />
            <p className="topic extra"> {content} </p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
