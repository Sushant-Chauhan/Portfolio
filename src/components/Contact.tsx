import { motion } from 'framer-motion';
import { Mail, Phone, Globe } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-xl text-indigo-400 mb-2">Get in touch</h4>
          <h1 className="text-4xl font-bold text-white">Contact</h1>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  What's your good name?
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-300">
                  What's your web address?
                </label>
                <input
                  type="url"
                  id="website"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-indigo-400" />
                <a href="mailto:sushantchauhan941@gmail.com" className="text-white hover:text-indigo-400">
                  sushantchauhan941@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-indigo-400" />
                <a href="tel:+918377897610" className="text-white hover:text-indigo-400">
                  +91 8377897610
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Globe className="w-6 h-6 text-indigo-400" />
                <span className="text-white">Available for remote work worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-4">
            <span className="font-mono">&lt;/&gt;</span> with ❤️ by Sushant Chauhan 😎
          </p>
          <div className="text-gray-400">
            No. of Visitors: <span id="visitor-count">Loading...</span>
          </div>
        </div>
      </div>
    </section>
  );
}