'use client';

import { Helmet } from 'react-helmet-async';

interface ClientHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function ClientHelmet({ 
  title, 
  description, 
  keywords 
}: ClientHelmetProps) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}
