'use client';

import { useEffect, useState } from 'react';

const ClientComponent = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setError('');

        const response = await fetch('https://restcountries.com/v3.1/all');
        const result = await response.json();

        setCountries(result);
      } catch (error) {
        setError('Ha ocurrido un error al traer los países');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchApi().catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Países del Mundo</h2>
      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {countries.map((country, index) => (
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
    </div>
  );
};

export default ClientComponent;
