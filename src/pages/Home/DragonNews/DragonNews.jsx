import PropTypes from 'prop-types';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DragonNews = ({ data }) => {
  const { author, total_view, rating, title, image_url, details, _id } = data;
  const { name, published_date, img } = author;
  return (
    <div className=" shadow-md p-2">
      {/* author */}
      <div className="flex justify-between items-center bg-base-200 px-4 py-2">
        <div className="flex gap-x-2">
          <img
            className="w-10 h-10 rounded-full border border-blue-700"
            src={img}
            alt=""
          />
          <div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-sm text-[#706F6F]">{published_date}</p>
          </div>
        </div>
        <div className="flex gap-x-4 text-xl font-semibold cursor-pointer">
          <CiBookmark></CiBookmark>
          <CiShare2></CiShare2>
        </div>
      </div>
      {/* details */}
      <div>
        <h1 className="my-3 text-[#403F3F] text-xl font-bold">{title}</h1>
        <img src={image_url} alt="" />
        {details.length < 250 ? (
          <p className="mt-4 text-[#706F6F] border-b-2 pb-4">{details}</p>
        ) : (
          <>
            <p className="mt-4 text-[#706F6F] border-b-2 pb-4">
              {details.slice(0, 250)}
              <Link to={`/news/${_id}`}>
                {' '}
                <span className="ml-3 font-bold text-blue-600">
                  Read More...
                </span>
              </Link>
            </p>
          </>
        )}
        <div className="mt-3 flex justify-between items-center">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <span className="ml-2 text-gray-400 font-medium">
              {rating.number}
            </span>
          </div>
          <div className="flex items-center gap-x-3">
            <FaEye></FaEye>
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragonNews;

DragonNews.propTypes = {
  datas: PropTypes.array,
  data: PropTypes.object,
};
