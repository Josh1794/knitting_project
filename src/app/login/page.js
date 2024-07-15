import { login, signup } from './actions';
import { createClient } from '../../../utils/supabase/server';
import { redirect } from 'next/navigation';
import styles from '../page.module.css';

export default async function LoginPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || data?.user) {
    redirect('/');
  }
  return (
    <div className={styles.loginFormWrapper}>
      <h2>Login/Sign Up</h2>

      <form>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            name='email'
            type='email'
            required
            style={{
              borderWidth: '0px',
              backgroundColor: 'whitesmoke',
              borderRadius: '4px',
              height: '30px',
              width: '200px',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            width: '300px',
          }}
        >
          <label htmlFor='password'>Password:</label>
          <input
            id='password'
            name='password'
            type='password'
            required
            style={{
              borderWidth: '0px',
              backgroundColor: 'whitesmoke',
              borderRadius: '4px',
              height: '30px',
              width: '200px',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          <button
            style={{
              width: '49%',
              borderWidth: '0px',
              backgroundColor: 'whitesmoke',
              borderRadius: '4px',
              color: 'black',
              height: '30px',
            }}
            formAction={login}
          >
            Log in
          </button>
          <button
            style={{
              width: '49%',
              borderWidth: '0px',
              backgroundColor: 'whitesmoke',
              borderRadius: '4px',
              color: 'black',
              height: '30px',
            }}
            formAction={signup}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
