import React from "react";

function Header() {
  return (
    <>
      <div className="sticky top-0" >
        <nav
          className="relative flex items-center justify-between w-full py-4 shadow-lg  flex-nowrap bg-neutral-100 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start"
          data-te-navbar-ref
        >
          <div className="flex flex-wrap items-center justify-between w-full px-6">
            <button
              className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
              type={"button"}
              data-te-collapse-init
              data-te-target="#navbarSupportedContent3"
              aria-controls="navbarSupportedContent3"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="[&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <div
              classNmae="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContent3"
              data-te-collapse-item
            >
              <a class="text-xl text-black" href="#">
                Navbar
              </a>

              <ul
                className="flex flex-col pl-0 mr-auto list-style-none lg:flex-row"
                data-te-navbar-nav-ref
              >
                <li className="lg:px-2" data-te-nav-item-ref>
                  <a
                    className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    aria-current="page"
                    href="#"
                    data-te-nav-link-ref
                  >
                    Home
                  </a>
                </li>
                <li className="lg:pr-2" data-te-nav-item-ref>
                  <a
                    className="p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#"
                    data-te-nav-link-ref
                  >
                    Features
                  </a>
                </li>
                <li className="lg:pr-2" data-te-nav-item-ref>
                  <a
                    className="p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#"
                    data-te-nav-link-ref
                  >
                    Pricing
                  </a>
                </li>
                <li className="lg:pr-2" data-te-nav-link-ref>
                  <a className="text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                    Disabled
                  </a>
                </li>
              </ul>
              {/* <!-- Left links --> */}
            </div>
            {/* <!-- Collapsible wrapper --> */}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
