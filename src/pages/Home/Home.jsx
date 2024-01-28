import { useLoaderData } from 'react-router-dom';
import Header from '../../shared/Header/Header';
import LeftNav from '../../shared/LeftNav/LeftNav';
import Navbar from '../../shared/Navbar/Navbar';
import RightNav from '../../shared/RightNav/RightNav';
import DragonNews from './DragonNews/DragonNews';
import LatestNews from './LatestNews/LatestNews';

const Home = () => {
  const datas = useLoaderData();
  return (
    <div>
      <Header></Header>
      <LatestNews></LatestNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-5 gap-3">
        <div>
          <LeftNav></LeftNav>
        </div>
        <div className="col-span-2 space-y-4">
          <h1 className="text-2xl font-semibold">Dragon News Home</h1>
          <div className="space-y-8">
            {datas.map(data => (
              <DragonNews data={data} key={data._id}></DragonNews>
            ))}
          </div>
        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
