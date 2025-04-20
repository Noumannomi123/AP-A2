import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/movies.json');
  const data = await res.json();
  const paths = data.movies.map((movie) => ({
    params: { id: movie.id },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const res = await fetch('http://localhost:3000/movies.json');
  const data = await res.json();
  const movie = data.movies.find((movie) => movie.id === params.id);

  if (!movie) {
    return { notFound: true };
  }

  const director = data.directors.find((director) => director.id === movie.directorId);

  return {
    props: { director },
    revalidate: 10, // ISR with revalidation every 10 seconds
  };
}

export default function DirectorDetails({ director }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{director.name}</h1>
      <p>{director.biography}</p>
    </div>
  );
} 