/*
 * Privacy Policy Page
 * Route: /privacy-policy
 * Follows Next.js App Router conventions
 */
import IstiLayout from '@/layout/IstiLayout';

export default function PrivacyPolicy() {
  return (
    <IstiLayout>
      <div className="container py-5">
        <h1 className="mb-4">Privacy Policy</h1>
        <div className="content">
          <p>
            At VIMA Web Solutions, we are committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your personal information.
          </p>
          <h2 className="mt-4">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when you 
            create an account, use our services, or communicate with us.
          </p>
          <h2 className="mt-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, 
            to communicate with you, and to comply with legal obligations.
          </p>
          <h2 className="mt-4">3. Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect 
            your personal information against unauthorized or unlawful processing.
          </p>
        </div>
      </div>
    </IstiLayout>
  );
}
