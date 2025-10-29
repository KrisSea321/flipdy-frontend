import Hero from "../component/landingPage/hero/Hero";
import Services from "../component/landingPage/services/Services";
import GetStarted from "../component/landingPage/getStarted/GetStarted";
import Faq from "../component/landingPage/faq/Faq";

export default function Home() {
  return (
    <>

      <section id="home"><Hero /></section>
      <section id="how-it-works"><Services /></section>
      <section id="contact"><GetStarted /></section>
      <section id="faq"><Faq /></section>
    </>
  );
}
