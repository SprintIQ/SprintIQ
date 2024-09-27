import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { Routes } from '@src/utils/constants/constants';
import GameBoard from '../icons/GameBoard.icon';
import VectorPen from '../icons/VectorPen.icon';

const SideBar: FC = () => {
  const { asPath, query, pathname } = useRouter();
  console.log(query)
  return (
    <div className="hidden sm:flex flex-col items-center w-20  bg-secondary-500 pt-8  h-screen sticky top-0 ">
      <div className="mb-8 mt-10 cursor-pointer">
        <img src="/logo_half.svg" alt="Logo" className="w-10 h-10" />
      </div>
      <div className="mb-8 mt-10 text-white cursor-pointer data-true:text-secondary-150" data-true={query?.section === Routes.HOME}>
        <FontAwesomeIcon icon={faHome} className="text-3xl w-8 h-8" />
      </div>
      <div className="mb-8 mt-5 cursor-pointer text-white data-true:text-secondary-150" data-true={query?.section === Routes.CREATE}>
        <GameBoard className="w-8 h-8" />
      </div>
      <div className="mb-8 mt-5 cursor-pointer text-white data-true:text-secondary-150" data-true={[Routes.ADD_REWARD, Routes.ADD_REWARD_TOKEN, Routes.GENERATE_CODE, Routes.GET_CODE].includes(query?.section as Routes)}>
        <VectorPen className="w-8 h-8" />
      </div>
    </div>
  );
};

export default SideBar;