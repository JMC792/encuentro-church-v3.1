import { Fragment } from "react";

//Components
import Header from "@components/headers/Header1.js";
import Form3 from "@components/forms/Form3.js";
import FAQ from "@components/FAQ/FAQ1";

//Locales
import layout from "public/locales/english/layout.json";
import contact from "public/locales/english/contact.json";
import Header1 from "@components/headers/Header1";

export const metadata = {
  title: "Contact Us",
  description: [contact.metadata.description],
}


export default async function Page() {

  return (
    <Fragment>
      <Header
        image = {"https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"}
        title = {"Get in Touch"}
        text = {"Looking for a faith community to call home? Reach out to Encuentro Church today. Whether you have questions, need prayer, or want to get involved, our team is here to welcome and support you. Contact us to take the next step in your spiritual journey"}
      />
      <FAQ/>
      <Form3/>
    </Fragment>
  );
}
