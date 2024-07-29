import { login, signup } from './actions';
import { createClient } from '../../../utils/supabase/server';
import { redirect } from 'next/navigation';
import styles from './login.module.css';

export default async function LoginPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  // if (error || data?.user) {
  //   redirect('/');
  // }
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
              color: 'black',
              padding: '5px',
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
              color: 'black',
              padding: '5px',
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
          <button className={styles.loginButtons} formAction={login}>
            Log in
          </button>
          <button className={styles.loginButtons} formAction={signup}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
