import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Privacy Policy — Imperial Garden',
  description: 'Privacy Policy for Imperial Garden banquet hall website.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-muted">Last updated: December 2024</p>

            <section>
              <h2 className="text-xl font-bold mb-4">Information We Collect</h2>
              <p className="text-muted leading-relaxed">
                When you visit our website or submit an enquiry, we collect information you provide such as your name, phone number, email address, event details, and any additional information you share. We may also collect technical information like your IP address and browser type.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-muted leading-relaxed">
                We use your information to respond to your enquiries, provide quotes, confirm bookings, and communicate about your event. We may also use your contact information to send promotional offers about our services, which you can opt out of at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Information Sharing</h2>
              <p className="text-muted leading-relaxed">
                We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, such as payment processors or event coordinators, under strict confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Data Security</h2>
              <p className="text-muted leading-relaxed">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Your Rights</h2>
              <p className="text-muted leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, please contact us using the information below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:info@imperialgarden.in" className="text-accent hover:underline">
                  info@imperialgarden.in
                </a>{' '}
                or call us at{' '}
                <a href="tel:+919876543210" className="text-accent hover:underline">
                  +91 98765 43210
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
