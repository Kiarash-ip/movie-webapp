import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Movies from "./components/Movies";
import MovieSlider from "./components/Globals/MovieSlider";
import { popularMovies, footballCategory, onlineMovies } from "./statics";
import SliderCartThin from "./components/Globals/SliderCartThin";
import SliderCartMedium from "./components/Globals/SliderCartMedium";
import BannerFilm from "./components/BannerFilm";
import BannerSerial from "./components/BannerSerial";
import SliderCartOnline from "./components/Globals/SliderCartOnline";
import Subscription from "./components/Subscription";
import Services from "./components/Services";
import Application from "./components/Application";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <Movies />
      <MovieSlider
        movies={popularMovies}
        title={"پرمخاطب"}
        CartComponent={SliderCartThin}
        cartWidth={210}
        spaceBetween={25}
      />
      <MovieSlider
        movies={footballCategory}
        title={"توپا باخ ورزشی"}
        CartComponent={SliderCartMedium}
        cartWidth={300}
        spaceBetween={25}
      />
      <BannerFilm order={3} />
      <MovieSlider
        movies={popularMovies}
        title={"تازه‌ها"}
        CartComponent={SliderCartThin}
        cartWidth={210}
        spaceBetween={25}
      />
      <BannerSerial />
      <MovieSlider
        movies={onlineMovies}
        title={"ترکی آپاراتچی"}
        CartComponent={SliderCartOnline}
        cartWidth={345}
        spaceBetween={40}
      />
      <BannerFilm order={1} style="mb-0" />
      <Subscription />
      <Services />
      <Application />
      <Footer />
    </main>
  );
}

export default App;
