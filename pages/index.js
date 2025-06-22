
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>SwiftStamp Notary Services</title>
        <meta name="description" content="Mobile & Remote Notarization Across Ontario" />
      </Head>

      <header className="bg-blue-900 text-white py-12 text-center shadow-md">
        <h1 className="text-5xl font-extrabold">SwiftStamp Notary Services</h1>
        <p className="mt-4 text-xl font-light">Sealing Trust, One Signature at a Time</p>
        <a href="#contact" className="mt-6 inline-block bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded hover:bg-yellow-300">Book Now</a>
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
