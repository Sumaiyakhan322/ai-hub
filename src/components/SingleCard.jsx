import { useState } from "react";

const SingleCard = ({ project }) => {
  const { title, description } = project;
  console.log(description.split(" ").length);
  const githubLink = 'https://github.com/ahmedrafiq09/Image-Face-Detection-With-OpenCV-And-Python/blob/main/Image%20Face%20Detection.ipynb'

  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <div className="flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full h-80 max-w-[48rem] flex-row p-4 hover:scale-105 transition-transform hover:bg-stone-200">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h4>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            <p>
              {showMore ? description : `${description.slice(0, 100)}...`}
              <span className="hover:text-lime-600 text-lime-800 cursor-pointer  font-bold text-xs" onClick={toggleShowMore}>
                {showMore ? " Show Less" : " Show More"}
              </span>
            </p>
          </p>
          <div className="inline-block">
            <a href={githubLink}>
              <button
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
