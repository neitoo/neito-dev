import { Link, useLocation } from "react-router-dom";
import logo from "@images/logo.svg";
import useNavigationMenu from "@hooks/useNavigationMenu";

const Header = () => {
  const location = useLocation();

  const {
    isMobileMenuOpen,
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
    <header className={`header__container z-50 sticky top-0 transition-colors duration-150`}>
      <div className="content__container flex-col lg:flex-row justify-between px-6 py-3 rounded-md bg-zinc-900/50 backdrop-blur-sm">
        <div className="flex flex-row items-center justify-between w-full lg:w-fit">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Логотип neito" className="size-8 animate-spin360twice" />
            <strong className="text-lg">neito.dev</strong>
          </div>
          <button
            onClick={toggleMobileMenu}
            className={`transition-colors duration-150 rounded-md size-8 flex items-center justify-center ${isMobileMenuOpen ? 'bg-red-700/50' : ''} lg:hidden`}
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

        <nav className={`flex flex-col lg:flex-row items-center gap-2 uppercase w-full lg:max-h-none lg:pt-0 overflow-hidden transition-all duration-300 justify-center lg:justify-end ${isMobileMenuOpen ? "max-h-[500px] pt-6" : "max-h-0"}`}>
          {links.map(link => (
              <Link 
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className={`${location.pathname == link.to ? 'text-red-600 before:content-["●"] before:mr-2 pointer-events-none cursor-default' : ' before:content-["/"] text-white before:invisible'}  before:mr-2 select-none  hover:before:visible hover:bg-white hover:text-black py-1 px-2`}
                >
                  {link.label}
              </Link>
          ))}
          <a 
            href="https://tyumen.hh.ru/"
            target="_blank"
            className="relative text-white select-none before:content-['/'] before:invisible hover:before:visible before:mr-2 hover:bg-white hover:text-black py-1 px-2"
            >
              CV
          </a>
          <a 
            href="https://github.com/neitoo"
            target="_blank"
            className="relative text-white select-none before:content-['/'] before:invisible hover:before:visible before:mr-2 hover:bg-white hover:text-black py-1 px-2"
            >
              GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
