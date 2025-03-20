import Container from "./Container";

export async function Blog() {
  return (
    <div id="blog">
      <Container>
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Latest Articles
          </h2>
          <p className="text-gray-600 lg:mx-auto lg:w-6/12 dark:text-gray-300">
            Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum
            officia aliquid explicabo? Excepturi, voluptate?
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group bg-opacity-50 rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-gray-600/10 sm:p-8 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative mt-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                De fuga fugiat lorem ispum laboriosam expedita.
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
              </p>
              <a className="inline-block" href="#">
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
          <div className="group bg-opacity-50 rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-gray-600/10 sm:p-8 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative mt-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                De fuga fugiat lorem ispum laboriosam expedita.
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
              </p>
              <a className="inline-block" href="#">
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
          <div className="group bg-opacity-50 rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-gray-600/10 sm:p-8 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative mt-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                De fuga fugiat lorem ispum laboriosam expedita.
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
              </p>
              <a className="inline-block" href="#">
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
