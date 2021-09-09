import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }) => {
  return (
    <main className="container mx-auto px-6 lg:px-0">
      <article className="prose lg:prose-xl prose-indigo pb-20 mx-auto my-20">
        <div className="text-base font-medium mb-5">
          <Link className="text-teal-600 hover:text-teal-700 no-underline" to="/">Back to posts</Link>
        </div>
        <div>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base leading-6 font-medium text-gray-500">
            <time>
              {data.mdx.frontmatter.created}
            </time>
          </dd>
        </div>
        <h1>{data.mdx.frontmatter.title}</h1>
        <hr />
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
        <div className="font-medium mt-10">
          <Link className="text-teal-600 hover:text-teal-700 no-underline" to="/">Back to posts</Link>
        </div>
      </article>
    </main>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        created
      }
      body
    }
  }
`

export default BlogPost