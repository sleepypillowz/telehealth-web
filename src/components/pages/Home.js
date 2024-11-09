import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>

<section class="relative bg-custom-bg px-6 py-20 sm:px-12 md:px-24">
  <div class="absolute inset-0 bg-cover bg-center" ></div>
  <div class="container relative mx-auto text-center">
    <h1 class="mb-4 text-5xl font-bold leading-tight">Caring for Your Health, Every Step of the Way</h1>
    <p class="mb-8 text-lg opacity-90">A world-class healthcare facility dedicated to providing personalized care for all your needs.</p>
    <Link to="/services" className="btn" >Services</Link>
    <Link to="/about" className="btn" >About</Link>
  </div>
</section>


    </>
  );
}

export default Hero;