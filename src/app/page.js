import styles from './page.module.css';
import LandingPage from './landingPage';
import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  console.log(data);
  if (error || !data?.user) {
    redirect('/login');
  }
  return (
    <div className={styles.main}>
      <LandingPage />
    </div>
  );
}
