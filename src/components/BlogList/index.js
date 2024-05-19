import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoad: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const list = await response.json()
    console.log(list)
    const updatedList = list.map(eachItem => ({
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      title: eachItem.title,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogList: updatedList, isLoad: false})
  }

  render() {
    const {blogList, isLoad} = this.state
    return (
      <div className="blog-list-con">
        {isLoad ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#000000" width={50} height={50} />
          </div>
        ) : (
          blogList.map(eachItem => (
            <BlogItem details={eachItem} key={eachItem.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
