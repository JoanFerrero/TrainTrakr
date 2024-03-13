import TrainHero from '../../../assets/1200x675_cmsv2_04451bf2-041e-5cc8-9331-93c0362b3244-7454006.webp';
import SearchForm from './SearchForm';
const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat lg:max-h-[25rem] sm:max-h-[25rem] max-h-[25rem]" style={{backgroundImage: `url(${TrainHero})`}}
      data-testid="hero-component"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#c9d1b3]"
      ></div>

      <div
        data-testid="search-form"
        className="relative mx-auto max-w-[50rem] px-4 sm:py-24 py-20 sm:px-6 sm:h-[25rem]  lg:h-[25rem] lg:items-center lg:px-8"
      >
        <SearchForm />
      </div>
    </div>
  );
}

export default Hero;