import Image from "next/image";
import startImg from "../../public/star.svg";

export function StarRating({ rating }) {
  const stars = new Array(rating).fill(0);

  return (
    <>
      {stars.map((star, index) => (
        <Image key={index} src={startImg} width={15} height={15} alt="star" />
      ))}
    </>
  );
}
