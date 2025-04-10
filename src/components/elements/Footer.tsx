import { Container } from '../shared/Container';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 text-right text-gray-700" dir="rtl">
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        <div>
          <h4 className="font-bold text-lg mb-3 text-gray-800">פרטי התקשרות</h4>
          <ul className="space-y-2 text-sm">
            <li>
              טלפון:{' '}
              <a href="tel:0501234567" className="hover:text-blue-600">
                050-1234567
              </a>
            </li>
            <li>
              אימייל:{' '}
              <a href="mailto:info@example.com" className="hover:text-blue-600">
                info@example.com
              </a>
            </li>
            <li>שעות פעילות: ימים א׳–ה׳, 09:00–17:00</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-3 text-gray-800">קישורים שימושיים</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/privacy-policy" className="hover:text-blue-600">
                מדיניות פרטיות
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-blue-600">
                תנאי שימוש
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h4 className="font-bold text-lg text-gray-800">התחברו אלינו</h4>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/example"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow transition text-sm"
            >
              <FaWhatsapp className="w-5 h-5" />
              וואטסאפ
            </a>
            <a
              href="https://facebook.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow transition text-sm"
            >
              <FaFacebookF className="w-5 h-5" />
              פייסבוק
            </a>
            <a
              href="https://instagram.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow transition text-sm"
            >
              <FaInstagram className="w-5 h-5" />
              אינסטגרם
            </a>
          </div>
        </div>
      </Container>
      <div className="text-center text-xs text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} כל הזכויות שמורות | אתר לדוגמה
      </div>
    </footer>
  );
};
