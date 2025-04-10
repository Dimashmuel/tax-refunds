import { Container } from '../shared/Container';
import customers from '../../assets/customers.svg';
import process from '../../assets/process.svg';
import money from '../../assets/money.svg';
import Accountant from '../../assets/Accountant.svg';

export const Icons = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex justify-center align-center">
        <div
          className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg 
                        border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
                        grid grid-cols-2 md:grid-cols-4"
        >
          <div className="flex flex-col items-center justify-center text-center px-5 h-full">
            <p className="mt-2 text-heading-3">נסיון עם אלפי לקוחות</p>
            <a>
              <img src={customers} alt="TaxRefunds Logo" className="w-20 h-20" />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-5 h-full">
            <p className="mt-2 text-heading-3">תהליך מכוון לחלוטין</p>
            <a>
              <img src={process} alt="TaxRefunds Logo" className="w-20 h-20" />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-5 h-full">
            <p className="mt-2 text-heading-3">החזר ממוצע של 11,800 ש"ח</p>
            <a>
              <img src={money} alt="TaxRefunds Logo" className="w-20 h-20" />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-5 h-full">
            <p className="mt-2 text-heading-3">שירות מקצועי ע"י רואי חשבון</p>
            <a>
              <img src={Accountant} alt="TaxRefunds Logo" className="w-20 h-20" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
