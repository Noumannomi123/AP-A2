export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/movies.json');
  const data = await res.json();
  const genres = data.genres;

  return {
    props: { genres },
  };
}

export default function Genres({ genres }) {
  return (
    <div>
      <h1>Genres</h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
} 