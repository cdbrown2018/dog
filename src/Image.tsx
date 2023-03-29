interface Props {
  imageUrl: string;
  altText?: string;
}

export default function Image({ imageUrl, altText = "an image" }: Props) {
  return <img src={imageUrl} className="img-thumbnail" alt={altText}></img>;
}
