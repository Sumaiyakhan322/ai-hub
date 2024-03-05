const Modal = ({ description, title, handleModelClose }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-transparent backdrop-blur-[1px]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
          <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl  overflow-hidden border border-cyan-200">
            <div className="p-5 lg:p-11 ">
              <div className="">
                <h2 className="text-3xl lg:text-[40px]  m-4 font-bold">
                  {title}
                </h2>
                
              </div>
              <p className="text-sm lg:text-base mb-8 lg:mb-16">
                {description}
              </p>
              <div className="flex justify-end">
                <a
                  className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                  href="#"
                  onClick={handleModelClose}
                >
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
