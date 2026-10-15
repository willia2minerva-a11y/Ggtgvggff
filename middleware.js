// middleware.js — حماية CSRF: يرفض طلبات الكتابة القادمة من موقع آخر
import { NextResponse } from 'next/server';

export function middleware(req) {
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) return NextResponse.next();
  const origin = req.headers.get('origin');
  if (origin) {
    const host = req.headers.get('x-forwarded-host') || req.headers.get('host');
    let ok = false;
    try { ok = new URL(origin).host === host; } catch {}
    if (!ok) return NextResponse.json({ error: 'مصدر غير مسموح' }, { status: 403 });
  }
  return NextResponse.next();
}

export const config = { matcher: '/api/:path*' };
