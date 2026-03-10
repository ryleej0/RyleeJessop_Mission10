import { useState, useEffect } from 'react';
import { Bowler } from '../types/Bowler';

function BowlerTable() {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:5287/api/bowler')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch bowler data');
        return res.json();
      })
      .then((data) => {
        setBowlers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading bowlers...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ overflowX: 'auto', padding: '0 1rem' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          margin: '0 auto',
          maxWidth: '1100px',
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: '#2c3e50',
              color: '#fff',
              textAlign: 'left',
            }}
          >
            <th style={{ padding: '12px 16px' }}>Name</th>
            <th style={{ padding: '12px 16px' }}>Team</th>
            <th style={{ padding: '12px 16px' }}>Address</th>
            <th style={{ padding: '12px 16px' }}>City</th>
            <th style={{ padding: '12px 16px' }}>State</th>
            <th style={{ padding: '12px 16px' }}>Zip</th>
            <th style={{ padding: '12px 16px' }}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr
              key={b.bowlerID}
              style={{ borderBottom: '1px solid #ddd' }}
            >
              <td style={{ padding: '10px 16px' }}>
                {b.bowlerFirstName}
                {b.bowlerMiddleInit ? ` ${b.bowlerMiddleInit}.` : ''}{' '}
                {b.bowlerLastName}
              </td>
              <td style={{ padding: '10px 16px' }}>{b.teamName}</td>
              <td style={{ padding: '10px 16px' }}>{b.bowlerAddress}</td>
              <td style={{ padding: '10px 16px' }}>{b.bowlerCity}</td>
              <td style={{ padding: '10px 16px' }}>{b.bowlerState}</td>
              <td style={{ padding: '10px 16px' }}>{b.bowlerZip}</td>
              <td style={{ padding: '10px 16px' }}>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BowlerTable;
