
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <Head>
        <title>SwiftStamp Notary Services</title>
        <meta name="description" content="Mobile & Remote Notarization Across Ontario" />
      </Head>
      <header className="max-w-5xl mx-auto text-center py-10">
        <h1 className="text-5xl font-bold">SwiftStamp Notary Services</h1>
        <p className="mt-4 text-lg text-gray-600">Mobile & Remote Notarization Across Ontario</p>
        <a href="#contact" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg">Book Appointment</a>
      </header>

      <section className="max-w-5xl mx-auto py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Affidavits', 'Statutory Declarations', 'Consent to Travel', 'Power of Attorney', 'Wills & Estates', 'Business Agreements'].map(service => (
            <div key={service} className="border p-4 text-center shadow-sm rounded-lg">
              <p className="font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form action="https://formspree.io/f/xwkgbdpd" method="POST" className="grid gap-4 max-w-xl mx-auto">
            <input className="p-3 border rounded" type="text" name="name" placeholder="Your Name" required />
            <input className="p-3 border rounded" type="email" name="email" placeholder="Your Email" required />
            <textarea className="p-3 border rounded" name="message" rows="4" placeholder="Message" required></textarea>
            <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} SwiftStamp Notary Services. All rights reserved.
      </footer>
    </div>
  );
}
