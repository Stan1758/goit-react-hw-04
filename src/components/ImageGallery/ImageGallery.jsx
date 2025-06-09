import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul>
      <li>
        <div className={s.gallery}>
          {images.map((img) => (
            <img
              key={img.id}
              src={img.urls.thumb}
              alt={
                img.alt_description.length <= 28
                  ? img.alt_description
                  : img.alt_description.slice(0, 25) + "..."
              }
              className={s.image}
              onClick={() => onImageClick(img)}
            />
          ))}
        </div>
      </li>
    </ul>
  );
};

export default ImageGallery;
