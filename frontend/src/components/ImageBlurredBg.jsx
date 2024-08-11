const ImageBlurredBg = ({ imgUrl }) => {
  return (
    <div className="border-solid border-[1px] border-black">
      <span
        style={{backgroundImage: `url(${imgUrl})`}}
        className="h-full w-full flex items-center justify-center bg-center bg-no-repeat bg-cover"
      >
        <span className="flex justify-center items-center w-full bg-black/30 backdrop-blur-lg">
          <img
            src={imgUrl}
            alt="Image"
            className="object-contain w-full max-w-xl"
            loading="lazy"
          />
        </span>
      </span>
    </div>
  );
};

export default ImageBlurredBg;
