import styles from './page.module.css';
import LandingPage from './home/page';
import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function HandlingPage({ params, searchParams }) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  return (
    <div>
      <LandingPage user={data} searchParams={searchParams} />
    </div>
  );
}
