import React, { useState, useEffect } from 'react';

interface CountdownProps {
  date: string;
}

const Countdown: React.FC<CountdownProps> = ({ date }) => {
  const [countdown, setCountdown] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date(date).getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setCountdown('Pengerjaan Selesai');
        setIsLoading(false);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let formattedCountdown = '';

        if (days > 0) {
          formattedCountdown = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
        } else {
          formattedCountdown = `${hours} Jam ${minutes} Menit ${seconds} Detik`;
        }

        setCountdown(formattedCountdown);
        setIsLoading(false);
      }
    };

    calculateCountdown();
    const intervalId = setInterval(calculateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  if (isLoading) {
    return <code>Memuat...</code>; 
  }

  return <code style={{ fontSize: 12, background: '#4f4f4f', padding: 6, borderRadius: 6 }}>{countdown}</code>;
};

export default Countdown;