import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DEFAULT_SECONDS = 5;

const ErrorPage = () => {
  const navigate = useNavigate();

  const [seconds, setSeconds] = useState<number>(DEFAULT_SECONDS);

  useEffect(() => {
    if (!seconds) navigate('/');
    const timer = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [seconds, navigate]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>You will be redirected to localhost:3000 in {seconds}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
