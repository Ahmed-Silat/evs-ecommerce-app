import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

function RenderStars({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    //     console.log(`Rating: ${rating}, Star: ${i}`);
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-warning" />);
//       console.log(`Rating: ${rating}, Star: ${i} (full)`);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-warning" />);
//       console.log(`Rating: ${rating}, Star: ${i} (half)`);
    } else {
      stars.push(<FaRegStar key={i} className="text-warning" />);
//       console.log(`Rating: ${rating}, Star: ${i} (empty)`);
    }
  }

  return stars;
}
export default RenderStars;
