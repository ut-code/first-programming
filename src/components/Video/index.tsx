export function Video(props: {
  src: string;
  width?: string | number;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}) {
  const {
    src,
    width = "80%",
    muted = true,
    autoPlay = true,
    loop = true,
  } = props;

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      src={src}
      muted={muted}
      autoPlay={autoPlay}
      loop={loop}
      width={typeof width === "number" ? `${width}px` : width}
    />
  );
}
