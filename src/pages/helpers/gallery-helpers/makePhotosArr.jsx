import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export const makePhotosArray = (allPhotosData, showImg ) => {
   return allPhotosData.map(({ id, image, key }) => (
        <div
          onClick={() => {
            showImg(id);
          }}
          className="gallery__card"
          key={key}
        >
          <GatsbyImage image={image} alt="students" />
        </div>
      ));
}