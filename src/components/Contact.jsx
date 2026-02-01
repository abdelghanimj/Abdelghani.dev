export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-r from-gray-800 to-black text-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-gray-300 mb-10">
          Vous avez une opportunité, un stage ou un projet à proposer ?  
          Je suis disponible et ouvert à toute collaboration.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a 
            href="mailto:moujnibaabdelghani@gmail.com" 
            className="bg-gray-700 hover:bg-blue-500 transition text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center gap-2"
          >
            📧 Email
          </a>
          <a 
            href="https://github.com/abdelghanimj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-green-500 transition text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center gap-2"
          >
            💻 GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/abdelghani-moujniba-9a6597312/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-blue-600 transition text-white py-3 px-6 rounded-full shadow-lg flex items-center justify-center gap-2"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
