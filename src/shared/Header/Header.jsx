import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
  return (
    <div className="text-center space-y-3 py-3">
      <img className="mx-auto" src={logo} />
      <p className="text-[#706F6F]">Journalism Without Fear or Favour</p>
      <p className="font-medium text-xl">
        {moment().format('dddd, MMMM D, YYYY')}
      </p>
    </div>
  );
};

export default Header;
