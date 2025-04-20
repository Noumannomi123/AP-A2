import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Directors() {
  const { data, error } = useSWR('/movies.json', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const directors = data.directors;

  return (
    <div>
      <h1>Directors</h1>
      <ul>
        {directors.map((director) => (
          <li key={director.id}>
            <h2>{director.name}</h2>
            <p>{director.biography}</p>
          </li>
        ))}
      </ul>
    </div>
  );
} 