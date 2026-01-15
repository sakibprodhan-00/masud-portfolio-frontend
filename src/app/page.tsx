import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkedWith from "@/components/WorkedWith";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { 
  GlobalSettings, 
  Project, 
  Service, 
  WorkedWith as WorkedWithType,
  Testimonial 
} from "@/types/strapi";

async function getSettings(): Promise<GlobalSettings | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/global-setting?populate=*`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Settings Data:', json.data);
    return json.data || null;
  } catch (error) {
    console.error('Failed to fetch settings:', error);
    return null;
  }
}

async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*&sort=order:asc`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Projects Data:', json.data);
    return json.data || [];
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
}

async function getServices(): Promise<Service[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services?populate=*&sort=order:asc`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Services Data:', json.data);
    return json.data || [];
  } catch (error) {
    console.error('Failed to fetch services:', error);
    return [];
  }
}

async function getWorkedWith(): Promise<WorkedWithType[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/workedwiths?populate=*&sort=order:asc`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('WorkedWith Data:', json.data);
    return json.data || [];
  } catch (error) {
    console.error('Failed to fetch worked with:', error);
    return [];
  }
}

async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/testimonials?populate=*&sort=order:asc`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Testimonials Data:', json.data);
    return json.data || [];
  } catch (error) {
    console.error('Failed to fetch testimonials:', error);
    return [];
  }
}

export default async function Home() {
  const settings = await getSettings();
  const projects = await getProjects();
  const services = await getServices();
  const workedWith = await getWorkedWith();
  const testimonials = await getTestimonials();
  
  return (
    <>
      <Navbar settings={settings} />
      <Hero settings={settings} />
      <WorkedWith settings={settings} workedWith={workedWith} />
      {settings?.showProjects && <Projects settings={settings} projects={projects} />}
      <About settings={settings} />
      {settings?.showServices && <Services settings={settings} services={services} />}
      {settings?.showTestimonials && <Testimonials settings={settings} testimonials={testimonials} />}
      <Contact settings={settings} />
      <Footer settings={settings} />
    </>
  );
}