import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { url } = await req.json();
  if (!url) {
    return NextResponse.json({ error: 'URL tidak ditemukan' }, { status: 400 });
  }

  try {
    const res = await fetch(url, { redirect: 'follow' });
    return NextResponse.json({ finalUrl: res.url });
  } catch (e: unknown) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    }
    
    return NextResponse.json({ error: 'Gagal resolve (unknown error)' }, { status: 500 });
  }
}
