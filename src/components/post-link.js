import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article className="card ">
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <h2 className="post-title">
       
          {post.frontmatter.title}
 
      </h2>
      
      <p>{post.frontmatter.metaDescription}</p>
      
    </header>
  </article>
)
export default PostLink
