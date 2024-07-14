import { Input, Textarea, Button } from '@nextui-org/react';
import {useTranslations} from 'next-intl';

const ContactForm = () => {

  const t = useTranslations("ContactMeForm");

  return (
    <section id='Contact Form'>
      <div className='container mx-auto flex flex-col gap-4 px-10 py-5 items-center'>
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <form className='flex flex-col gap-4  w-full'>
          <Input 
            fullWidth 
            label={t("name")} 
            placeholder="John Doe" 
            name="name" 
          />
          {/* <Spacer y={6} /> */}
          <Input 
            fullWidth 
            label={t("email")} 
            placeholder="JohnDoe@Company.com" 
            name="email" 
            type="email" 
          />
          <Textarea 
            fullWidth 
            label={t("message")} 
            placeholder="..." 
            name="message" 
          />
          <Button className='bg-primary-500 text-white font-bold' type="submit">{t("button")}</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
