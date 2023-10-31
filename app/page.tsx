import { Fragment } from "react";
import { BackgroundImage } from "./BackgroundImage";
import { Column } from "./Column";

const Navbar = () => {
  return (
    <nav className="bg-opacity-0 fixed w-full z-10">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-black">
            <img
              className="h-20"
              src="/digital-deyar-web-logo-2.svg"
              alt="Logo"
            />
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#"
                  className="text-black font-semibold hover:text-gray-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black font-semibold hover:text-gray-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black font-semibold hover:text-gray-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black font-semibold hover:text-gray-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black font-semibold hover:text-gray-300"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black font-semibold hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden px-28">
      <BackgroundImage />
      <div className="absolute inset-0 flex items-center justify-between ">
        <Column />
        <Column isLeft={false} />
      </div>
    </div>
  );
};

interface BackgroundImageProps {
  className?: string;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  className,
}) => {
  return (
    <div
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${className}`}
      style={{ backgroundImage: "url(/digital-deyar-hero-bg.svg)" }}
    />
  );
};

interface ColumnProps {
  isLeft?: boolean;
}

export const Column: React.FC<ColumnProps> = ({ isLeft = true }) => {
  return (
    <div className={`w-1/2 ${isLeft ? "pl-28" : "pr-28"}`}>
      {isLeft ? <HeroContent /> : <HeroImage />}
    </div>
  );
};

export const HeroContent: React.FC = () => {
  return (
    <div className="text-black">
      <img
        className="object-cover"
        src="/digital-deyar-welcome.svg"
        alt="Hero Image"
      />
      <p className="my-3">
        A leading performance-driven digital marketing agency and 100 %
        practical oriented training centre.
      </p>
    </div>
  );
};

export const HeroImage: React.FC = () => {
  return (
    <img
      className="object-cover"
      src="/digital-deyar-hero-img.svg"
      alt="Hero Image"
    />
  );
};

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
    </Fragment>
  );
};

export default Home;
