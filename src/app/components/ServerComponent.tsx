const fetchApi = async (page: number) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const results = await response.json();

    const pageSize = 10; // Tamaño de la página
    const paginatedResults = results.slice(
      (page - 1) * pageSize,
      page * pageSize,
    );

    return { results: paginatedResults, total: results.length, error: false };
  } catch (error) {
    console.error(error);
    return { error: true };
  }
};

const ServerComponent = async ({ page }: { page: number }) => {
  const { error, results, total } = await fetchApi(page);

  if (error) {
    return <div>Ha ocurrido un error</div>;
  }

  const pageSize = 10;
  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Países del Mundo</h2>
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {results.map((country, index) => (
          <div
            key={`country-${country.name.common}-${index}`}
            className="rounded-lg border-2 border-solid border-slate-400 p-2 text-center"
          >
            <img
              alt={country.name.common}
              src={country.flags.svg}
              className="w-full rounded-lg"
            />
            {country.name.common}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        {page > 1 && <a href={`?page=${page - 1}`}>Atrás</a>}
        {page < totalPages && (
          <a className="ml-4" href={`?page=${page + 1}`}>
            Siguiente
          </a>
        )}
      </div>
    </div>
  );
};

export default ServerComponent;
