const Facebook = () => {
  return (
    <div className="mb-12 w-full  md:w-6/12 md:px-2 lg:px-4 cursor-pointer hover:text-[#1877F2]">
      <a href="https://www.facebook.com/BizNestAI">
        <div className="flex items-start ">
          <div className="shrink-0">
            <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
              {/* Facebook icon------------------ */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#1877f2" }}
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </div>
          </div>
          <div className="ml-6  ">
            <p className="mb-2  font-bold dark:text-white ">
              Connect with facebook .
            </p>
            <p className="text-neutral-500 hover:text-[#1877F2] dark:text-neutral-200">
            www.facebook.com/BizNestAI
            </p>
            {/* <p className="text-neutral-500 hover:text-[#1877F2] dark:text-neutral-200">
              
            </p> */}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Facebook;
