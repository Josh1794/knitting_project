'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '../../../utils/supabase/server';

export async function getProjects() {
  const supabase = createClient();
  const { data, err } = await supabase.auth.getUser();

  console.log(data?.user.id);
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const payload = {
    id: data.user.id,
  };
  // const { error } = await supabase.auth.signInWithPassword(datas);

  // if (error) {
  //   console.log(error);
  //   redirect('/error');
  // }

  // revalidatePath('/', 'layout');
  // redirect('/');
}
