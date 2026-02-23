import Link from 'next/link';
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white font-bold mb-4">À Propos</h3>
                        <p className="text-sm">LYOST est une plateforme de programmation compétitive conçue pour améliorer vos compétences en codage.</p>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4">Liens</h3>
                        <ul className="text-sm space-y-2">
                            <li><Link href="/challenges">Défis</Link></li>
                            <li><Link href="/leaderboard">Classement</Link></li>
                            <li><Link href="/discuss">Discussions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4">Ressources</h3>
                        <ul className="text-sm space-y-2">
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/docs">Documentation</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4">Contact</h3>
                        <ul className="text-sm space-y-2">
                            <li>Email: contact@lyost.com</li>
                            <li>Twitter: @LYOST</li>
                            <li>GitHub: /LYOST</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                    <p>&copy; 2026 LYOST. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}