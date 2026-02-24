import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export default async function Navbar() {
    const session = await getServerSession(authOptions);
    return (
        <header style={{ borderBottom: '1px solid #e5e7eb' }}>
            <nav style={{ maxWidth: 980, margin: '0 auto', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href='/' style={{ fontWeight: 800, fontSize: 20 }}> LYOST </Link>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <Link href='/challenges'>Challenges</Link>
                    <Link href='/leaderboard'>Classement</Link>
                    {session ? (
                        <> 
                            <Link href='/profile'>{session.user?.name}</Link>
                            <Link href='/api/auth/signout' style={{ border: '1px solid #111827', padding: '8px 12px', borderRadius: 6 }}> Déconnexion </Link>
                        </>
                    ) : (
                        <> 
                            <Link href='/login'>Connexion</Link>
                            <Link href='/register' style={{ border: '1px solid #111827', background: '#111827', color: 'white', padding: '8px 12px', borderRadius: 6 }}> Inscription </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}