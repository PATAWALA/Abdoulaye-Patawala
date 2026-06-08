import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const oldPath = searchParams.get('path')
  
  if (!oldPath) {
    return NextResponse.json({ error: 'Path required' }, { status: 400 })
  }
  
  const supabase = await createServerSupabase()
  
  const { data: redirect } = await supabase
    .from('redirects')
    .select('new_path')
    .eq('old_path', oldPath)
    .single()
  
  if (redirect) {
    return NextResponse.json({ redirect: redirect.new_path })
  }
  
  return NextResponse.json({ redirect: null }, { status: 404 })
}