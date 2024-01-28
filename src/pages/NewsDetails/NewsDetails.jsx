import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../../shared/Header/Header';
import Navbar from '../../shared/Navbar/Navbar';
import RightNav from '../../shared/RightNav/RightNav';

const NewsDetails = () => {
  const news = useLoaderData();
  const { id } = useParams();
  const detailsNews = news.find(anew => anew._id === id);
  const { total_view, rating, title, image_url, details, _id } = detailsNews;
  console.log(total_view, rating, title, image_url, details, _id);
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 mt-5">
        <div className="col-span-3">
          <img src={image_url} alt="" />
          <h1 className="my-3 text-[#403F3F] text-xl font-bold">{title}</h1>
          <p className="mt-4 text-[#706F6F] border-b-2 pb-4">{details}</p>
          <button className="btn btn-secondary mt-4 mb-4">
            All news in this category
          </button>
        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
