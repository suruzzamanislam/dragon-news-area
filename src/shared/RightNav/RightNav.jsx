import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import qzone1 from '../../assets/qZone1.png';
import qzone2 from '../../assets/qZone2.png';
import qzone3 from '../../assets/qZone3.png';

const RightNav = () => {
  return (
    <div className="p-2 space-y-5">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Login With</h1>
        <button className="flex items-center border w-full justify-center gap-x-3 py-2 rounded-lg border-blue-700 font-semibold">
          <FaGoogle></FaGoogle>Login With Google
        </button>
        <button className="flex items-center border w-full justify-center gap-x-3 py-2 rounded-lg border-blue-700 font-semibold">
          <FaGithub></FaGithub>Login With Github
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-5">Find Us On</h1>
        <button className="flex gap-x-3 border border-purple-600 rounded-t-xl px-4 py-2 w-full text-2xl items-center">
          <FaFacebook></FaFacebook>Facebook
        </button>
        <button className="flex gap-x-3 border-x border-purple-600 px-4 py-2 w-full text-2xl items-center">
          <FaTwitter></FaTwitter>Twitter
        </button>
        <button className="flex gap-x-3 border border-purple-600 rounded-b-xl px-4 py-2 w-full text-2xl items-center">
          <FaLinkedin></FaLinkedin>Linkedin
        </button>
      </div>
      <div className="space-y-3 bg-base-200 p-3">
        <h1 className="text-2xl font-semibold">Q-Zone</h1>
        <div>
          <img src={qzone1} />
        </div>
        <div>
          <img src={qzone2} />
        </div>
        <div>
          <img src={qzone3} />
        </div>
      </div>
      <div className="bg-bg bg-cover px-6 py-16 text-white text-center space-y-5">
        <h1 className=" text-2xl font-semibold">Create an Amazing Newspaper</h1>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="px-7 py-3 bg-red-500">Learn More</button>
      </div>
    </div>
  );
};

export default RightNav;
