import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className=" bg-primary text-primary shadow-top w-full overflow-hidden font-f">
        <div className=" flex ml-[15px] mt-[20px] w-full  sm:flex-row flex-col justify-between">
          <div className="grid grid-cols-3 lg:w-[50%] md:w-[50%] w-full  p-4  flex-2">
            <div className=" justify-start flex-col pl-[15px]">
              <h1 className=" text-custom-color  pb-4 text-lg">Sections</h1>
              <ul className=" flex flex-col space-y-2">
                <Link to="/" className="hover:text-lg hover:text-white"><li>Home</li></Link>
                <li className="cursor-pointer">About</li>
                <li>Features</li>
                <li>Servey</li>
                <li>Feedback</li>
              </ul>
            </div>

            <div className="flex justify-start flex-col">
              <h1 className=" text-custom-color  pb-4 text-lg">Social Media</h1>
              <ul className=" flex flex-col space-y-2">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Linkedln</li>
                <li>Gmail</li>
                <li>Github</li>
              </ul>
            </div>

            <div className="flex justify-start flex-col">
              <h1 className=" text-custom-color  pb-4 text-lg">Section</h1>
              <ul className=" flex flex-col space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>Servey</li>
                <li>Feedback</li>
              </ul>
            </div>
          </div>

          <div className="  flex-1 w-full md:w-[50%] w-[50%] p-4 ">
            <h2 className="text-custom-color text-lg">
              Subscribe to our newsletter
            </h2>
            <p>Monthly digest of what's new and exiting from us </p>

            <form className="flex items-center max-w-lg  mt-[15px]">
              <input
                type="text"
                id="voice-search"
                className="bg-primary border border-primary  text-primary text-base rounded-lg py-1.5 pl-[8px] w-[50%] "
                placeholder="Email address"
                required
              />

              <button
                type="submit"
                className="inline-flex items-center py-1.5 px-5 ms-2 text-base font-medium text-white bg-theme rounded-lg   hover:bg-theme focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="h-px mx-auto w-[90%] mt-[5px] bg-gray-600 border-0 dark:bg-gray-700 " />

        <div className="flex items-center justify-between p-6 mx-[15px] pb-6 flex-col sm:flex-row space-y-2 ">
          <p className="">© 2024 Your Company, Inc. All rights reserved.</p>

          <div className="flex items-center space-x-5 ">
            <a href="">
              <FaFacebook className="text-xl hover:text-2xl text-custom-color" />
            </a>

            <a href="">
              <FaInstagram className="text-xl hover:text-2xl  text-custom-color" />
            </a>
            <a href="">
              <FaTwitter className="text-xl hover:text-2xl  text-custom-color" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
