import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-2 mt-4">
      <button className="btn btn-secondary">Latest</button>
      <Marquee pauseOnHover={true}>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default LatestNews;
