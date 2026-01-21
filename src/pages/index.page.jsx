/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import About from '@src/pages/components/about/Index';
import Quote from '@src/pages/components/quote/Index';
import Projects from '@src/pages/components/projects/Index';
import Clients from '@src/pages/components/clients/Index';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'BrewWeb - Web & App Development Agency',
  description: 'BrewWeb is a web and app development agency in Kolkata, building production-ready applications, landing pages, and AI-backed tools for startups and businesses.',
  keywords: [
    'BrewWeb',
    'Web Development Agency',
    'App Development',
    'Kolkata',
    'Web Applications',
    'Landing Pages',
    'Dashboards',
    'AI Integration',
    'Full Stack Development',
    'Avra Paul',
    'Nomesh Singh',
    'Startup Development',
    'Business Web Solutions',
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'Modern Web Development',
    'Production Ready Apps',
    'Web Agency India',
  ],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <Home />
      <About />
      <Clients />
      <Quote />
      <Projects />
    </>
  );
}

export default Page;
