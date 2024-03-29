import Navbar from './components/Navbar/Navbar';
import './App.css';
import Herosection from './components/Herosection/Herosection';
import Section from './components/Introduction_section/Section';
import WhyChooseUsSection from './components/whychooseus/whychooseus';
import Gallery from './components/Areaofpractice_section/Gallery';
import OurTeam from './components/Team/Team';
import ClientComponent from './components/Clinet_Section/Client';
import FAQ from './components/FAQ/faq';
// import Faq from './components/f/f';
import CustomizedAccordions from './components/accordion/accordion';
import NewsletterSubscription from './components/NewsletterSubscription/NewsletterSubscription';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Herosection/>
      <Section/>
      <WhyChooseUsSection/>
      <Gallery/>
      <ClientComponent/>
      <OurTeam/> 
      <FAQ/>
      <NewsletterSubscription/>
      <Footer/>
    </div>
  );
}

export default App;

