import { useState } from 'react';
import { add } from './utils/stringCalculator';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    try {
      setError('');
      setResult(add(input));
    } catch (e) {
      setResult(null);
      setError(e.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>String Calculator</h1>
      <div style={{display:'flex'}}>
      <textarea value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleCalculate} style={{marginLeft:'1rem',background:'#e3e3e3'}}>Calculate</button>
      </div>
      {result !== null && <p>Result: {result}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
