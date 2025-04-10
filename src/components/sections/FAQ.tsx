import { useState } from 'react';
import { Container } from '../shared/Container';

const faqData = [
  {
    question: 'כמה זמן זה לוקח?',
    answer: `
                תהליך החזר המס כולל מספר שלבים, כאשר לאחר שליחת כל המסמכים הרלוונטיים, מתחילה בדיקה פנימית שנעשית לרוב תוך מספר ימי עבודה.
                לאחר מכן, הבקשה מועברת לרשות המיסים, שם זמן הטיפול משתנה בהתאם לעומסים ומורכבות המקרה.
                בממוצע, מרגע ההגשה ועד קבלת ההחזר בפועל, התהליך אורך בין חודשיים לשישה חודשים.
                במקרים פשוטים יחסית, ניתן לקבל את ההחזר כבר לאחר מספר שבועות, אך חשוב להבין שמדובר בגורם ממשלתי ולכן ייתכנו עיכובים שאינם תלויים בנו.
      `,
  },
  {
    question: 'כמה זה עולה?',
    answer: `
                בדיקת הזכאות להחזר מס היא חינמית לחלוטין, ואינה דורשת כל התחייבות מראש.
                המשמעות היא שתוכל לבדוק אם מגיע לך החזר בלי לשלם אפילו שקל.
                רק אם תבחר להמשיך בתהליך מולנו, ובמקרה שבאמת יימצא שמגיע לך החזר – נגבה תשלום באחוזים מהסכום שהוחזר בפועל.
                כלומר, אם לא מגיע לך כלום – לא תשלם כלום.
                המודל מבוסס הצלחה בלבד, ולכן אין לך מה להפסיד.
                לעיתים קיימות גם הטבות או הנחות בתשלום, תלוי בקמפיין ובזמן ההצטרפות.
      `,
  },
  {
    question: 'מה צריך להכין?',
    answer: `
                כדי לבדוק את זכאותך להחזר מס, תצטרך להכין מספר מסמכים בסיסיים:
                צילום תעודת זהות (כולל הספח), טופסי 106 מכל מקומות העבודה שהיו לך במהלך השנים הרלוונטיות (עד 6 שנים אחורה),
                פרטים על מצב משפחתי כמו ילדים או שינוי סטטוס, ופרטי חשבון הבנק שאליו יועבר ההחזר – במידה ויאושר.
                גם אם חסרים לך חלק מהמסמכים, אל דאגה – אנחנו נוכל לסייע לך לאתר ולהשלים אותם מול הרשויות.
                את רוב התהליך ניתן לבצע אונליין, ללא צורך להגיע פיזית.
      `,
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-100 -mt-40" dir="rtl">
      <Container className="max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">שאלות נפוצות</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl shadow-sm">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 font-medium text-right text-gray-800"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600 leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
