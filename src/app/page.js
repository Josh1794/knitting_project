import styles from './page.module.css';
import SignInPage from './signInPage';
import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }
  return (
    <div className={styles.main}>
      <div>
        <h1>Knitting Row Counter</h1>
      </div>
      <SignInPage />
    </div>
  );
}
