// File: pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>SwiftStamp Notary Services</title>
        <meta name="description" content="Mobile & Remote Notarization Across Ontario" />
      </Head>

      <header className="bg-blue-900 text-white py-12 text-center shadow-md">
        <div className="flex flex-col items-center">
          <Image src="/logo.png" alt="SwiftStamp Logo" width={120} height={120} />
          <h1 className="text-5xl font-extrabold mt-4">SwiftStamp Notary Services</h1>
          <p className="mt-2 text-xl font-light">Sealing Trust, One Signature at a Time</p>
          <a href="#contact" className="mt-6 inline-block bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded hover:bg-yellow-300">Book Now</a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Notary Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Affidavits", "Statutory Declarations", "Consent to Travel", "Power of Attorney", "Wills & Estates", "Business Agreements"].map(service => (
            <div key={service} className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition">
              <p className="text-lg font-medium text-center text-blue-900">{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Pricing</h2>
        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
          {[{service: 'In-Person Notarization', price: '$45/document'}, {service: 'Remote Notarization', price: '$40/document'}, {service: 'Certified Copies', price: '$25/copy'}, {service: 'Travel Fee (GTA)', price: '$15–$35'}, {service: 'After-Hours Surcharge', price: '+$10'}, {service: 'Weekend Rate', price: 'No extra fee'}].map((item, index) => (
            <div key={index} className="border border-blue-200 p-5 rounded-lg bg-white shadow">
              <h3 className="text-lg font-semibold text-blue-900">{item.service}</h3>
              <p className="text-gray-700 mt-1">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">What Our Clients Say</h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          {["SwiftStamp was a lifesaver! Fast and professional service after hours.", "Kareena made the process super easy and stress-free.", "I loved the remote option — so convenient from my home.", "Super responsive, efficient, and trustworthy notary services!"]
            .map((testimonial, index) => (
              <blockquote key={index} className="bg-white border-l-4 border-yellow-400 p-4 shadow rounded">
                <p className="italic">“{testimonial}”</p>
              </blockquote>
            ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16" id="contact">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Contact Us</h2>
          <form action="https://formspree.io/f/xwkgbdpd" method="POST" className="grid gap-4">
            <input className="p-3 border border-gray-300 rounded w-full" type="text" name="name" placeholder="Your Name" required />
            <input className="p-3 border border-gray-300 rounded w-full" type="email" name="email" placeholder="Your Email" required />
            <textarea className="p-3 border border-gray-300 rounded w-full" name="message" rows="4" placeholder="Your Message" required></textarea>
            <button type="submit" className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="bg-blue-900 text-white text-center text-sm py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} SwiftStamp Notary Services</p>
        <p className="text-yellow-400 mt-1">Mobile & Remote | Serving All of Ontario</p>
      </footer>
    </div>
  );
}

