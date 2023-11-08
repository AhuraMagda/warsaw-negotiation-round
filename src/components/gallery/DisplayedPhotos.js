import React from "react";
import { useMediaQuery } from "react-responsive";
import { makePhotosArray } from "./helpers/makePhotosArr";
import { useState, useEffect } from "react";

export default function DisplayedPhotos({ allPhotosData, showImg }) {
  const allPhotosToDisplay = makePhotosArray(allPhotosData, showImg);

  const isBigScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 600px) and (max-width: 799px)",
  });
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 599px)",
  });

  let photos;

  return (
    <>
      {isBigScreen && allPhotosToDisplay}
      {isMediumScreen && allPhotosToDisplay.slice(0, 9)}
      {isSmallScreen && allPhotosToDisplay.slice(0, 8)}
    </>
  );
}
