import { Button } from '../shared/Button';
import { Container } from '../shared/Container';
import { Paragraph } from '../shared/Paragraph';
import { Icons } from './Icons';

export const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-36 bg-gray-100" dir="rtl">
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div
          className="relative flex flex-col items-center text-center lg:text-right lg:py-8 lg:items-start 
                               lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            יכול להיות שמגיע לך{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              כסף מהמדינה
            </span>
          </h1>
          <Paragraph className="mt-8">
            בדוק זכאותך להחזר מס בלחיצת כפתור- בלי התחייבות, בלי עלות
          </Paragraph>
          <Button className="min-w-max text-black mt-4">
            <span className=" relative z-[5]">בדיקת זכאות עכשיו</span>
          </Button>
        </div>
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl min-h-[400px]">
          <img
            src="https://refund-tax.co.il/wp-content/uploads/2022/04/%D7%94%D7%97%D7%96%D7%A8-%D7%9E%D7%A1-%D7%95%D7%A2%D7%93%D7%AA-%D7%94%D7%A9%D7%9E%D7%94.jpg"
            alt="Hero image"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
          />
        </div>
      </Container>
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div
          className="relative flex flex-col items-center text-center lg:text-right lg:py-8 lg:items-start 
                               lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <Paragraph className="mt-8">
            רוב השכירים בישראל זכאים להחזרי מס – אבל לא מודעים לזה. מדובר באלפי שקלים שיכולים לחזור
            אליך מהמדינה, בלי מאמץ ובלי בירוקרטיה מסובכת. באמצעות תהליך פשוט, דיגיטלי ומהיר, תוכל
            לבדוק את הזכאות שלך בלחיצת כפתור. הבדיקה לא עולה כסף ולא מחייבת – רק מרוויחים. אל תוותר
            על מה שמגיע לך!
          </Paragraph>
        </div>
      </Container>
      <Icons />
    </section>
  );
};
