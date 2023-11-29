
import { useEffect, useState } from 'react';

export const useDeviceDetect = (defaultMobile = 768, defaultTablet = 1168): { isMobile: boolean, isTablet: boolean, isDesktop: boolean } => {

  const [dimensions, setDimensions] = useState({
    isMobile: window.innerWidth <= defaultMobile,
    isTablet: window.innerWidth > defaultMobile && window.innerWidth <= defaultTablet,
    isDesktop: window.innerWidth > defaultTablet,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= defaultMobile) {
        setDimensions({
          isMobile: true,
          isTablet: false,
          isDesktop: false,
        });

      } else if (window.innerWidth > defaultMobile && window.innerWidth <= defaultTablet) {
        setDimensions({
          isMobile: false,
          isTablet: true,
          isDesktop: false,
        });
      } else {
        setDimensions({
          isMobile: false,
          isTablet: false,
          isDesktop: true,
        });
      }


    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimensions;
};