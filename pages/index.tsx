import { GetServerSideProps } from 'next';
import { FormEvent, useState } from 'react';
import { parseCookies } from 'nookies';
import { useAuth } from '../contexts/AuthContext';
import { withSSRGuest } from '../utils/withSSRGuest';

export default function Home(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  async function handleSubmit(e: FormEvent): Promise<void> {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    await signIn(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}

export const getServerSideProps = withSSRGuest(async ctx => {
  return {
    props: {},
  };
});
