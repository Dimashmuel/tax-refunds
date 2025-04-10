import { Layout } from './components/Layouts';
import { ContactForm } from './components/sections/ContactForm';
import { FAQ } from './components/sections/FAQ';
import { Hero } from './components/sections/Hero';

function App() {
  return (
    <Layout title="TaxRefunds">
      <Hero />
      <ContactForm />
      <FAQ />
    </Layout>
  );
}

export default App;
