import { Link, useLocation } from "react-router-dom";
import logo from "@images/logo.svg";
import useNavigationMenu from "@hooks/useNavigationMenu";

const Header = () => {
  const location = useLocation();

  const {
    isMobileMenuOpen,
    shouldBeHidden,
    isCompressed,
    isRotated,
    toggleMobileMenu,
    handleLinkClick
  } = useNavigationMenu();

  const links = [
    { to: '/', label: 'Главная'},
    { to: '/projects', label: 'Проекты'}
  ]


  return (
    <header className={`flex w-full flex-col z-50 fixed transition-colors duration-150 ${isMobileMenuOpen ? 'bg-zinc-950' : ''} 2xl:w-52 2xl:h-full`}>
      <div className="flex justify-between py-3 px-6 z-50 2xl:justify-start">
        <img src={logo} alt="Логотип neito" className="size-12 animate-spin360twice" />

        <button
          onClick={toggleMobileMenu}
          className={`transition-colors duration-150 border border-white border-dashed size-12 flex items-center justify-center ${isMobileMenuOpen ? 'bg-red-700/50' : 'bg-black '} 2xl:hidden`}
          aria-label="Навигация"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white size-5"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 50 50"
          >
            <path
              className={`transition-transform transition-rotate  duration-150 ${isCompressed && !isRotated ? 'translate-y-[15px]' : ''} ${isRotated ? 'translate-y-0 translate-x-[15px] rotate-45' : ''}`}
              d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z"
            ></path>
            <path 
              className={`transition-opacity duration-150 ${isCompressed ? 'opacity-0' : ''}`}
              d="M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z"
            ></path>
            <path
              className={`transition-transform transition-rotate duration-150 ${isCompressed && !isRotated ? '-translate-y-[15px]' : ''} ${isRotated ? 'translate-y-[15px] -translate-x-[20px] -rotate-45' : ''}`}
              d="M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
            ></path>
          </svg>
        </button>
      </div>
      <nav className={`flex flex-col items-center gap-2 uppercase w-full transition-transform duration-150 justify-center bg-zinc-950 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} ${shouldBeHidden ? 'collapse' : 'visible'} 2xl:w-fit 2xl:items-start 2xl:p-6 2xl:visible 2xl:translate-y-0 2xl:bg-transparent`}>
          {links.map(link => (
              <Link 
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className={`${location.pathname == link.to ? 'text-red-600 before:content-["●"] before:mr-2 pointer-events-none cursor-default' : 'text-white'} select-none  hover:before:content-["/"] hover:before:mr-2 hover:bg-white hover:text-black py-1 px-2`}
                >
                  {link.label}
              </Link>
          ))}
      </nav>
    </header>
  );
};

export default Header;
