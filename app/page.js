"use client";

import { useEffect, useState } from "react";

import Showcase from "../components/custom/Showcase";

const HomePage = () => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      fetch("/api/artists")
        .then((res) => res.json())
        .then((data) => {
          setArtists(data.artists);
          setIsLoading(false);
        });
    } catch (error) {
      setError(error);
    }
  }, []);
  //console.log({ artists });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading artists</p>;

  return (
    <main>
      <Showcase items={artists} />
    </main>
  );
};

export default HomePage;
