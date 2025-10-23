import { useState, useEffect } from 'react';
import axios from 'axios';

const Cureency = () => {
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the exchange rate from the API
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json'
        );
        const rate = response.data.inr;
        setExchangeRate(rate);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch exchange rate');
        setIsLoading(false);
        console.error("Error fetching data: ", err);
      }
    };
    fetchExchangeRate();
  }, []);

  // Update the converted amount whenever the amount or exchange rate changes
  useEffect(() => {
    if (exchangeRate) {
      setConvertedAmount(amount * exchangeRate);
    }
  }, [amount, exchangeRate]);

  // Handle user input
  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setAmount(value);
    }
  };

  if (isLoading) {
    return <div>Loading exchange rate...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={converterContainerStyle}>
      <h2 style={headingStyle}>USD to INR Converter</h2>
      <div style={inputGroupStyle}>
        <input 
          type="number" 
          value={amount}
          onChange={handleAmountChange}
          style={inputStyle}
        />
        <span style={currencyLabelStyle}>USD</span>
      </div>
      <h3 style={resultStyle}>
        {amount} USD is approximately {convertedAmount.toFixed(2)} INR
      </h3>
      <p style={rateInfoStyle}>(Current exchange rate: 1 USD = {exchangeRate.toFixed(2)} INR)</p>
    </div>
  );
};

export default Cureency;

// Basic styling
const converterContainerStyle = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  maxWidth: '400px',
  margin: '50px auto',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#f9f9f9',
};

const headingStyle = {
  color: '#333',
};

const inputGroupStyle = {
  margin: '20px 0',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  width: '150px',
  textAlign: 'right',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const currencyLabelStyle = {
  fontSize: '16px',
  marginLeft: '10px',
  fontWeight: 'bold',
};

const resultStyle = {
  fontSize: '24px',
  color: '#007BFF',
};

const rateInfoStyle = {
  fontSize: '14px',
  color: '#666',
};
