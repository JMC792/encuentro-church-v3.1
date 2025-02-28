// These styles apply to every route in the application
import Footer from '@components/footer/Footer';
import Navbar from '@components/headers/Navbar';
import layout from '/public/locales/english/layout.json';

// Data
import footer from '/public/locales/english/footer.json';

import '@styles/globals.css'
import { Inter } from "next/font/google"
import logo from "public/icons/logo.svg"
import call from "public/icons/call2.svg"
import email from "public/icons/email.svg"

export const metadata = {
  title: {
    //template: "%s | " + [layout.title],
    default: 'Encuentro Church',
  },
  description: "We are a multi-cultural and multi-lingual christian church located in Charlotte, North Carolina",
  appliationName: "Encuentro Church",
  creator: "Mauricio Chavez",
  publisher: "Mauricio Chavez",
};

const inter =Inter({subsets:['latin']})

export default function RootLayout({children}){
  
  const layout = {
    title: "Valentin Law",
    description: "Valentin Law LLC, based in Atlanta, GA, specializes in immigration law. We offer expert guidance on visas, green cards, and citizenship with a personal touch. Navigate your immigration journey with confidence.",
    applicationName: "Vapor X Crawlspaces",
    creator: "Jesus Chavez",
    publisher: "Jesus Chavez",
    number: "(980)-392-7215",
    email: "info@queencitywebsolutions.com",
    address: "7568 Ruben Linker Rd NW",
    city: "Concord, NC 28027",
    sitemap: {
        home: "home",
        about: "about",
        link3: "portfolio",
        blog: "blog",
        contact: "contact",
        service: "service"
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar
          link1 = {layout.sitemap.home} //Home
          link2 = {layout.sitemap.about} //About
          link3 = {layout.sitemap.link3} //Portfolio
          link4 = {layout.sitemap.contact} //Contact
          link5 = {layout.sitemap.service} //Service
          // link6 = {layout.sitemap.blog} //Blog
          phoneNumber = {layout.number}
          logo = {logo}
        />
          {children}
        <Footer/>
      </body>
    </html>
  );
}
