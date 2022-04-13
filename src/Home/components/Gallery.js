import { Card } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const items = [
  {
    original: "/gallery/photo_2021-11-09_22-00-33.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-00-41.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-00-57.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-01-07.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-01-17.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-01-41.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-02-17.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-02-25.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-02-28.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-02-31.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-02-33.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-02-40.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-02-44.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-02-49.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-02-52.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-02-56.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-02-59.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-03-01.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-03-04.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-03-08.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-03-11.jpg",
  },
  {
    original: "/gallery/photo_2021-11-09_22-03-13.jpg",
  },
];

export default function Gallery() {
  return (
    <Card
      style={{
        marginBottom: 24,
        marginLeft: -24,
        marginRight: -24,
        borderRadius: 0,
      }}
    >
      <ImageGallery
        items={items}
        showBullets
        showPlayButton={false}
        showThumbnails={false}
        showNav={false}
        showFullscreenButton={false}
        autoPlay={true}
        lazyLoad={true}
      />
    </Card>
  );
}
