interface ImageClipBoxProps {
  src: string;
  clipClass: string;
}

const ImageClipBox = (props: ImageClipBoxProps) => {
  return (
    <div className={props.clipClass}>
      <img src={props.src} alt="" />
    </div>
  );
};

export default ImageClipBox;
