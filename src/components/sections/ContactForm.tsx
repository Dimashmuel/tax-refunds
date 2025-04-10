import { Container } from '../shared/Container';
import { Button } from '../shared/Button';

export const ContactForm = () => {
  const yearOptions = () =>
    Array.from({ length: 6 }).map((_, index) => {
      const year = new Date().getFullYear() - index;
      return (
        <option key={year} value={year}>
          {year}
        </option>
      );
    });

  return (
    <section id="contactUs" className="py-16 bg-gray-100 -mt-40" dir="rtl">
      <Container className="flex flex-col lg:flex-row items-stretch min-h-[600px] gap-10">
        <div className="flex-1 w-full max-w-xl bg-white rounded-3xl shadow-xl p-6 sm:p-8 space-y-6  ">
          <h2 className="text-2xl font-bold text-gray-800 text-center">צור קשר</h2>
          {[
            { id: 'fullName', label: 'שם מלא', type: 'text' },
            { id: 'email', label: 'אימייל', type: 'email' },
            { id: 'phone', label: 'טלפון', type: 'tel' },
          ].map(({ id, label, type }) => (
            <div key={id}>
              <label htmlFor={id} className="block mb-1 font-medium text-gray-700">
                {label}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div>
              <label htmlFor="fromYear" className="block mb-1 font-medium text-gray-700">
                לבדיקת החזר משנה
              </label>
              <select
                id="fromYear"
                name="fromYear"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">בחר שנה</option>
                {yearOptions()}
              </select>
            </div>
            <div>
              <label htmlFor="toYear" className="block mb-1 font-medium text-gray-700">
                עד שנה
              </label>
              <select
                id="toYear"
                name="toYear"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">בחר שנה</option>
                {yearOptions()}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
              הודעה
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" name="terms" required className="accent-blue-600" />
            <label htmlFor="terms" className="text-sm text-gray-700">
              אני מאשר קבלת מידע ופרסום לפי תנאי השימוש
            </label>
          </div>
          <div className="text-center">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold hover:from-blue-600 hover:to-blue-700 transition-all shadow-md">
              הרשמה
            </Button>
          </div>
        </div>
        <div className="hidden lg:flex flex-1">
          <img
            src="https://www.ofs.co.il/wp-content/uploads/2024/02/ofs-2.png"
            alt="Contact image"
            className="w-full h-full object-cover rounded-2xl shadow-lg bg-green-200"
          />
        </div>
      </Container>
    </section>
  );
};
