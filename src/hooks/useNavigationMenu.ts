import { useState } from "react";

const useNavigationMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompressed, setIsCompressed] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [shouldBeHidden, setShouldBeHidden] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => {
      const newState = !prevState;

      if (newState) {
          setShouldBeHidden(false);
      } else {
        setTimeout(() => {
          setShouldBeHidden(true);
        }, 150);
      }
      
      return newState;
    });

    setIsCompressed(prev => {
      if (prev) {
        setTimeout(() => {
          setIsCompressed(false);
        }, 150);
        setIsRotated(false);
      } else {
        setIsCompressed(true);
        setTimeout(() => {
          setIsRotated(true);
        }, 150);
      }
      return prev;
    });
  };

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return {
    isMobileMenuOpen,
    shouldBeHidden,
    isCompressed,
    isRotated,
    toggleMobileMenu,
    handleLinkClick
  };
};

export default useNavigationMenu;
