import bestellungAnimation from "../assets/BestellungAnimation.json";
import Lottie from "lottie-react";

export default function HomePage() {
  return (
    <div>
      <Lottie animationData={bestellungAnimation} loop={true} />
      <p>{JSON.stringify(bestellungAnimation)}</p>
    </div>
  );
}
