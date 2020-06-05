/* eslint-disable no-console */
import 'shifty';
import 'hammerjs';
import 'imagesloaded';
import 'screenfull';
import 'nanogallery2/src/jquery.nanogallery2.core.js';

export const initImageGalleries = () => {
    $(".image-gallery").each(async (index, imageGallery) => {
        imageGallery.nanogallery2({})
    })
}
