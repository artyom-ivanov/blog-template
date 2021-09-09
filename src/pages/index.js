import * as React from "react"
import { Link, graphql } from 'gatsby'

// markup
const IndexPage = ({ data }) => {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="inline-block mb-5">👋</span>
          <br/>
          Hello! I'm Artyom Ivanov.
          <br/>
          And it's <span className="text-indigo-600">my blog</span>.
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </p>
      </div>
      <hr className="mt-20"/>
      <ul className="divide-y divide-gray-200">
        {data.allMdx.nodes.map(node => {
          console.log(node)
          return (
            <li className="py-12" key={node.id}>
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium text-gray-500">
                    <time>{node.frontmatter.created}</time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight">
                      <Link className="text-gray-900" to={`/${node.slug}`}>{node.frontmatter.title}</Link>
                    </h2>
                    <div className="prose max-w-none text-gray-500">
                      <div className="prose max-w-none">
                        <p>{node.frontmatter.teaser}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-base font-medium">
                    <Link className="text-teal-600 hover:text-teal-700" to={`/${node.slug}`}>Read more →</Link>
                  </div>
                </div>
              </article>
            </li>

          )
        })}
      </ul>

    </main>
  )
}

export const query = graphql`
  {
    allMdx(sort: {fields: [frontmatter___sort], order: DESC}) {
      nodes {
        frontmatter {
          title
          teaser
          created
          sort
        }
        id
        slug
      }
    }
  }
`

export default IndexPage
