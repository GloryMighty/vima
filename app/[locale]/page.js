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
import Head from 'next/head';

const page = () => {
  const t = useTranslations('HomePage');

  return (
    <IstiLayout homepage className="overflow-hidden">
      <ClientHelmet 
        title={`${t('meta_title')} | Vima Web Solutions`}
        description={t('meta_description')}
        keywords={t('meta_keywords')}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="SehANDDhj3LTVodEsYzH4X4CN6LMUH_q_KvNrMaZA9o" />
        <meta name="google-site-verification" content="google-search-console-verification-token" />
      </Head>
      <Home1Banner />
      <Portfolio />
      <Testomonial />
      <Experiance />
      <Blog />
    </IstiLayout>
  );
};
export default page;
