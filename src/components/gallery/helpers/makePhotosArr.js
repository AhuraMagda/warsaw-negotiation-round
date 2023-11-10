import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { handleEnter } from "../../helpers/handleEnter";

export const makePhotosArray = (allPhotosData, showImg ) => {
   return allPhotosData.map(({ id, image, key }) => (
        <div
          onClick={() => {
            showImg(id);
          }}
          className="gallery__wrapper__card"
          key={key}
          tabIndex="0"
          onKeyDown={(event)=> handleEnter(event, showImg)}
        >
          <GatsbyImage image={image} alt="students" />
        </div>
      ));
}