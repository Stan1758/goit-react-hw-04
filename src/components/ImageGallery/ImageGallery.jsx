import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      <li>
        <div className={s.gallery}>
          {images.map((img) => (
            <img
              key={img.id}
              src={img.urls.thumb}
              alt={img.alt_description}
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
