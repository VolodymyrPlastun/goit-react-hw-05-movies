import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from "./Container";
import { Toaster } from 'react-hot-toast';
import Loader from './Loader';

const Navigation = lazy(() => import("./Navigation" ));
const HomePage = lazy(() => import("./HomePage"));
const MovieDetailsPage = lazy(() => import("./MovieDetailsPage" ));
const MoviesPage = lazy(() => import("./MoviesPage" ));
const Cast = lazy(() => import("./Cast" ));
const Reviews = lazy(() => import("./Reviews"));

export default function App() {
  return (
    <>
      <Container> 
        <Suspense fallback={<Loader/>}>
<Navigation />
        <Routes>
            <Route path="/" element={<HomePage/>} />
          <Route path="/movies" element={<MoviesPage/>} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
          <Toaster position="top-right" />
          </Suspense>
          </Container>
      </>
  );
};

 