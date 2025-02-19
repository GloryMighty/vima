/*
 * Terms and Conditions Page
 * Route: /terms-and-conditions
 * Follows Next.js App Router conventions
 */
import IstiLayout from '@/layout/IstiLayout';

export default function TermsAndConditions() {
  return (
    <IstiLayout>
      <div className="container py-5">
        <h1 className="mb-4 text-center">Terms and Conditions of Use</h1>
        
        <section className="mb-5">
          <h2 className="mt-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the VIMA Web Solutions platform (the "Service"), 
            you agree to be bound by these Terms and Conditions. If you do not agree 
            with these terms, you should not use our Service.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="mt-4">2. Changes to Terms</h2>
          <p>
            VIMA Web Solutions reserves the right to modify these Terms at any time. 
            We will provide notice of any significant changes by posting the new Terms 
            on this page. Your continued use of the Service after changes constitutes 
            acceptance of the new Terms.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="mt-4">3. User Account and Responsibilities</h2>
          <ul>
            <li>You must provide accurate and complete information when creating an account.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You agree to accept responsibility for all activities that occur under your account.</li>
            <li>You must be at least 13 years old to use our Service.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="mt-4">4. Intellectual Property Rights</h2>
          <p>
            All content, features, and functionality are and will remain the exclusive 
            property of VIMA Web Solutions and its licensors. Our trademarks and trade 
            dress may not be used without prior written permission.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="mt-4">5. User Content and Conduct</h2>
          <p>
            By submitting content to our Service, you grant VIMA Web Solutions a 
            non-exclusive, worldwide, royalty-free license to use, reproduce, and 
            distribute such content.
          </p>
          <p>
            You agree not to:
            <ul>
              <li>Post content that is unlawful, harmful, threatening, or obscene</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
            </ul>
          </p>
        </section>

        <section className="mb-5">
          <h2 className="mt-4">6. Limitation of Liability</h2>
          <p>
            VIMA Web Solutions shall not be liable for any indirect, incidental, 
            special, consequential, or punitive damages arising out of or related 
            to the use of our Service.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="mt-4">7. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Service 
            immediately, without prior notice or liability, for any reason, including 
            if you breach these Terms.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="mt-4">8. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of the jurisdiction where 
            VIMA Web Solutions is headquartered, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="mt-4">9. Contact Information</h2>
          <p>
            For any questions about these Terms, please contact us at:
            <br />
            Email: legal@vima.solutions
            <br />
            Address: Silicon Valley, California, USA
          </p>
        </section>

        <p className="text-center mt-5">
          <strong>Last Updated: February 2025</strong>
        </p>
      </div>
    </IstiLayout>
  );
}
