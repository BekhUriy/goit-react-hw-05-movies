// App.jsx
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Home = lazy(() => import('./home/home'));
const Movies = lazy(() => import('./movies/movies'));
const MovieDetails = lazy(() => import('./movieDetails/movieDetails'));
const Cast = lazy(() => import('./cast/cast'));
const Reviews = lazy(() => import('./reviews/reviews'));

const App = () => {
  return (
    <Router>
      <Header>
        <h1>Movies App</h1>
        <Nav>
          <Link to="/goit-react-hw-05-movies">Home</Link>
          <Link to="/goit-react-hw-05-movies/movies">Movies</Link>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          <Routes>
            <Route path="/goit-react-hw-05-movies" element={<Home />} />
            <Route
              path="/goit-react-hw-05-movies/movies"
              element={<Movies />}
            />
            <Route
              path="/goit-react-hw-05-movies/:movieId"
              element={<MovieDetails />}
            >
              {/* Додайте маршрути для Cast та Reviews */}
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route
              path="*"
              element={<Navigate to="/goit-react-hw-05-movies" />}
            />
          </Routes>
        </Container>
      </Suspense>
    </Router>
  );
};

export default App;
