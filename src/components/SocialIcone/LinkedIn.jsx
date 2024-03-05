

const LinkedIn = () => {
    return (
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6 hover:text-[#0077B5]">
        <div className="flex items-start">
          <div className="shrink-0">
            <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
              {/* Linkedin ===============*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#0077b5" }}
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </div>
          </div>
          <div className="ml-6 grow">
            <p className="mb-2 font-bold dark:text-white">
              Sales questions
            </p>
            <p className="text-neutral-500 dark:text-neutral-200">
              sales@example.com
            </p>
            {/* <p className="text-neutral-500 dark:text-neutral-200">
              +1 234-567-89
            </p> */}
          </div>
        </div>
      </div>
    );
};

export default LinkedIn;