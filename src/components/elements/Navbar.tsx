import { Container } from '../shared/Container';
import logo from '../../assets/icon.svg';
import { NavItem } from '../shared/NavItem';

const navItems = [
  { href: '#contactUs', text: 'יצירת קשר' },
  { href: '#faq', text: 'שאלות נפוצות' },
];

export const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-green-200 shadow-md ">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img src={logo} alt="TaxRefunds Logo" className="w-15 h-15" />
            </a>
          </div>
          <div
            className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center
                                absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent
                                border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden "
          >
            <ul
              className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 
                                       pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3
                                       text-lg text-heading-2 w-full lg:justify-center lg:items-center bg-green-200"
            >
              {navItems.map((item, key) => (
                <NavItem href={item.href} text={item.text} key={key} />
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};
