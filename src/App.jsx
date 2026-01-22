import { lazy, Suspense } from "react";

import "./App.css";
import FirstPage from "./components/FirstPage";
const Achievements = lazy(() => import("./components/Achievements"));
const Map = lazy(() => import("./components/Map"));
const Video = lazy(() => import("./components/Video"));
const BestUniversity = lazy(() => import("./components/BestUniversity"));

import Feedback from "./components/Feedback";

const SummerCuresFreeLesson = lazy(() =>
  import("./components/SummerCuresFreeLesson")
);
const PriceSummer = lazy(() => import("./components/PriceSummer"));
const PriceSummerNew = lazy(() => import("./components/PriceSummerNew"));

const AboutSummer = lazy(() => import("./components/AboutSummer"));

const SliderTeacher = lazy(() => import("./components/SliderTeacher.jsx"));
const FreeLesson = lazy(() => import("./components/FreeLesson"));
const Services = lazy(() => import("./components/Services"));

const FAQ = lazy(() => import("./components/FAQ"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <FirstPage />
      <Suspense
        fallback={
          <div className="bg-img bod flex justify-center items-center">
            <div className="containerr">
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
            </div>
          </div>
        }
      >
        <FreeLesson />
      </Suspense>
      {/*   <Suspense
        fallback={
          <div className="bg-img bod flex justify-center items-center">
            <div className="containerr">
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
            </div>
          </div>
        }
      >
        <SummerCuresFreeLesson />
      </Suspense>{" "}
      <Suspense
        fallback={
          <div className="bg-img bod flex justify-center items-center">
            <div className="containerr">
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
            </div>
          </div>
        }
      >
        <AboutSummer />
      </Suspense>
      <Suspense
        fallback={
          <div className="bg-img bod flex justify-center items-center">
            <div className="containerr">
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
            </div>
          </div>
        }
      >
        <PriceSummerNew />
      </Suspense> */}
      <Suspense
        fallback={
          <div className="bg-img bod flex justify-center items-center">
            <div className="containerr">
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
            </div>
          </div>
        }
      >
        <Services />
      </Suspense>
      <Suspense
        fallback={
          <div className="bg-img bod flex justify-center items-center">
            <div className="containerr">
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
            </div>
          </div>
        }
      >
        <Achievements />
      </Suspense>
      <Suspense
        fallback={
          <div className="bg-img bod flex justify-center items-center">
            <div className="containerr">
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
            </div>
          </div>
        }
      >
        <SliderTeacher />
      </Suspense>
      <Suspense
        fallback={
          <div className="bg-img bod flex justify-center items-center">
            <div className="containerr">
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
            </div>
          </div>
        }
      >
        <Video />
      </Suspense>
      <Suspense
        fallback={
          <div className="bg-img bod flex justify-center items-center">
            <div className="containerr">
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
            </div>
          </div>
        }
      >
        <BestUniversity />
      </Suspense>
      <Suspense
        fallback={
          <div className="bg-img bod flex justify-center items-center">
            <div className="containerr">
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
            </div>
          </div>
        }
      >
        <Feedback />
      </Suspense>
      <Suspense
        fallback={
          <div className="bg-img bod flex justify-center items-center">
            <div className="containerr">
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
            </div>
          </div>
        }
      >
        <FAQ />
      </Suspense>
      <Suspense
        fallback={
          <div className="bg-img bod flex justify-center items-center">
            <div className="containerr">
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
            </div>
          </div>
        }
      >
        <Suspense
          fallback={
            <div className="bg-img bod flex justify-center items-center">
              <div className="containerr">
                <div className="blockk" />
                <div className="blockk" />
                <div className="blockk" />
                <div className="blockk" />
                <div className="blockk" />
                <div className="blockk" />
                <div className="blockk" />
                <div className="blockk" />
                <div className="blockk" />
                <div className="blockk" />
                <div className="blockk" />
                <div className="blockk" />
                <div className="blockk" />
                <div className="blockk" />
                <div className="blockk" />
                <div className="blockk" />
              </div>
            </div>
          }
        >
          <Map />
        </Suspense>
      </Suspense>
      <Suspense
        fallback={
          <div className="bg-img bod flex justify-center items-center">
            <div className="containerr">
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
              <div className="blockk" />
            </div>
          </div>
        }
      >
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
