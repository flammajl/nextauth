import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../services/api';

export default function Dashboard(): JSX.Element {
  const { user } = useAuth();
  useEffect(() => {
    api.get('/me').then(response => console.log(response.data));
  }, []);
  return <h1>Dashboard: {user?.email}</h1>;
}
