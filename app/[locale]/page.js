"use client";
import About from "app/About";
import { Home1Banner } from "@/app/Banner";
import Blog from "@/app/Blog";
import Experiance from "app/Prices";
import Portfolio from "app/Portfolio";
import Testomonial from "app/Testemonial";
import IstiLayout from "@/layout/IstiLayout";
import { useTranslations } from 'next-intl';
import ClientHelmet from '@/components/ClientHelmet';

const page = () => {
  const t = useTranslations('HomePage');

  return (
    <IstiLayout homepage>
      <ClientHelmet 
        title={`${t('meta_title')} | Vima Web Solutions`}
        description={t('meta_description')}
        keywords={t('meta_keywords')}
      />
      <Home1Banner />
      <About />
      <Portfolio />
      <Testomonial />
      <Blog />
      <Experiance />
    </IstiLayout>
  );
};
export default page;
