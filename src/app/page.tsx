import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import WhyReWallet from "./components/WhyReWallet";
import AboutUs from "./components/AboutUs";
import HowDoesItWork from "./components/HowDoesItWork";
import Testimonials from "./components/Testimonials";
import ReWalletBlog from "./components/ReWalletBlog";

export default function Home() {
  return (
    <div>
      <Hero />
      <SocialProof />
      <WhyReWallet />
      <AboutUs />
      <HowDoesItWork />
      <Testimonials />
      <ReWalletBlog/>
    </div>
  );
}
