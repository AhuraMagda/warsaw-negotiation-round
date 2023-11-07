

import React from "react";
import { makePhotosArray } from "./helpers/makePhotosArr";

export default function DisplayedPhotos({ allPhotosData, showImg }) {

    const allPhotosToDisplay = makePhotosArray(allPhotosData, showImg);
// TODO different amout of photos when different screen size
    return (
        <>
            {allPhotosToDisplay.slice(0, 8)}
        </>
    )
}


