import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import png1 from '../../assets/1.png';
import png2 from '../../assets/2.png';
import png3 from '../../assets/3.png';
import { MdDateRange } from 'react-icons/md';

const LeftNav = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategory(data));
  }, []);
  return (
    <div className="p-2">
      <div>
        <h1 className="text-2xl font-semibold">
          All Caterogy {category.length}
        </h1>
        <h2 className="bg-base-300 text-center py-2 mt-3">National News</h2>
        {category.map(category => (
          <Link
            key={category.id}
            className="block my-2 ml-10 text-[#9F9F9F] font-medium"
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className="mt-5 space-y-8">
        <div>
          <img src={png1} />
          <p className="mt-2 text-xl font-medium text-[#403F3F]">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div>
            <p className="flex items-center mt-2 gap-x-5">
              <span>Sports</span>
              <MdDateRange></MdDateRange>
              <span className="font-medium text-[#403F3F]">Jan 4, 2022</span>
            </p>
          </div>
        </div>
        <div>
          <img src={png2} />
          <p className="mt-2 text-xl font-medium text-[#403F3F]">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div>
            <p className="flex items-center mt-2 gap-x-5">
              <span>Sports</span>
              <MdDateRange></MdDateRange>
              <span className="font-medium text-[#403F3F]">Jan 4, 2022</span>
            </p>
          </div>
        </div>
        <div>
          <img src={png3} />
          <p className="mt-2 text-xl font-medium text-[#403F3F]">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div>
            <p className="flex items-center mt-2 gap-x-5">
              <span>Sports</span>
              <MdDateRange></MdDateRange>
              <span className="font-medium text-[#403F3F]">Jan 4, 2022</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
