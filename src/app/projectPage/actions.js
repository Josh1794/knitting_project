'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '../../../utils/supabase/server';

export async function addRowCount(project) {
  const supabase = createClient();
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const { data, error } = await supabase
    .from('Projects')
    .update({ rowsCompleted: project[0].rowsCompleted + 1 })
    .eq('id', project[0].id)
    .select();

  if (error) {
    console.log(error);
    redirect('/error');
  }

  revalidatePath('/project', 'layout');
}

export async function minusRowCount(project) {
  const supabase = createClient();
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const { data, error } = await supabase
    .from('Projects')
    .update({ rowsCompleted: project[0].rowsCompleted - 1 })
    .eq('id', project[0].id)
    .select();

  if (error) {
    console.log(error);
    redirect('/error');
  }

  revalidatePath('/project', 'layout');
}
