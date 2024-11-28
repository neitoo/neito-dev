import { useState } from "react";

const useNavigationMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompressed, setIsCompressed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleMobileMenu = () => {
    if (isAnimating) return;
    setIsMobileMenuOpen((prevState) => !prevState);

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

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return {
    isMobileMenuOpen,
    isCompressed,
    isRotated,
    toggleMobileMenu,
    handleLinkClick
  };
};

export default useNavigationMenu;
