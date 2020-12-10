import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import ContentLoader from "react-content-loader";

const FilmSkeletonLoader: React.FC = () => {
  const { secondaryDark, primary } = useContext(ThemeContext);
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={386}
      viewBox="0 0 430 386"
      backgroundColor={secondaryDark}
      foregroundColor={primary}
    >
      <rect x="0" y="0" rx="8" ry="8" width="430" height="10" />
      <rect x="0" y="376" rx="8" ry="8" width="430" height="10" />
      <rect x="0" y="0" rx="8" ry="8" width="10" height="386" />
      <rect x="420" y="0" rx="8" ry="8" width="10" height="386" />
      <rect x="30" y="30" rx="8" ry="8" width="218" height="31" />
      <rect x="255" y="38" rx="8" ry="8" width="76" height="22" />
      <rect x="30" y="326" rx="8" ry="8" width="376" height="30" />
      <rect x="30" y="280" rx="8" ry="8" width="376" height="30" />
      <rect x="30" y="70" rx="8" ry="8" width="140" height="15" />
      <rect x="30" y="115" rx="16" ry="16" width="306" height="29" />
      <rect x="30" y="155" rx="16" ry="16" width="376" height="29" />
      <rect x="30" y="195" rx="16" ry="16" width="226" height="29" />
    </ContentLoader>
  );
};

export default FilmSkeletonLoader;
