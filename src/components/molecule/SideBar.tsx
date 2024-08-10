import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const SideBar: FC = () => {
  return (
    <div className="flex flex-col items-center w-20 h-screen bg-darkGreen pt-8">
      <div className="mb-8 mt-10 cursor-pointer">
        <img src="/logo_half.svg" alt="Logo" className="w-10 h-10" />
      </div>
      <div className="mb-8 mt-10 text-white cursor-pointer">
        <FontAwesomeIcon icon={faHome} className='text-3xl' />
      </div>
      <div className="mb-8 mt-5 cursor-pointer">
      <img src="/Vectorplus.svg" alt="User Icon" className="w-8 h-8" />
      </div>
      <div className="mb-8 mt-5 cursor-pointer">
      <img src="/Vectorpen.svg" alt="User Icon" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default SideBar;