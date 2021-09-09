import * as React from "react"
import { Link } from "gatsby"

// markup
const NotFoundPage = () => {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="inline-block mb-5">😮</span>
          <br/>
          Ooops! Page not found.
        </h1>
        {process.env.NODE_ENV === "development" &&
        (
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Try creating a page in <code>src/pages/</code>
          </p>
        )
      }
      </div>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <Link
            to="/"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >Go home</Link>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
