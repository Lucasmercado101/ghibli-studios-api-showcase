import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import ContentLoader from "react-content-loader";

const FilmContentDropdownSkeleton: React.FC = () => {
  const { primary, accent } = useContext(ThemeContext);
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={120}
      viewBox="0 0 400 120"
      backgroundColor={primary}
      foregroundColor={accent}
    >
      <rect x="0" y="13" width="20" height="5" />
      <rect x="30" y="10" rx="5" ry="5" width="200" height="10" />
      <rect x="0" y="43" width="20" height="5" />
      <rect x="30" y="40" rx="5" ry="5" width="200" height="10" />
      <rect x="0" y="73" width="20" height="5" />
      <rect x="30" y="70" rx="5" ry="5" width="200" height="10" />
      <rect x="0" y="103" width="20" height="5" />
      <rect x="30" y="100" rx="5" ry="5" width="200" height="10" />
    </ContentLoader>
  );
};

export default FilmContentDropdownSkeleton;
