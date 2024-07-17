'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '../../../utils/supabase/server';

export async function addProject(formData) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  console.log(formData);
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const payload = {
    name: formData.get('name'),
    description: formData.get('description'),
    rowsCompleted: formData.get('rowsCompleted'),
    totalRows: formData.get('totalRows'),
    owner: data.user.id,
  };

  const { error } = await supabase.from('Projects').insert(payload);

  if (error) {
    console.log(error);
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
