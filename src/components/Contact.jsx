export default function Contact() {
  const copyEmail = async () => {
    await navigator.clipboard.writeText("eldrich.salonga@gmail.com");
    alert("Email copied!");
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-10 text-white">
      <h3 className="text-lg text-blue-400 font-semibold tracking-widest uppercase text-center mb-6">
        Contact
      </h3>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Let’s Work Together
          </h2>

          <div className="space-y-4">
            <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-5">
              <p className="text-gray-400 text-sm mb-1">Email</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <p className="font-semibold break-all">
                  eldrich.salonga@gmail.com
                </p>

                <button
                  onClick={copyEmail}
                  className="bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded-full text-sm font-semibold"
                >
                  Copy Email
                </button>
              </div>
            </div>

            <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-5">
              <p className="text-gray-400 text-sm mb-1">Location</p>
              <p className="font-semibold">Batangas, Philippines</p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://github.com/imeldrich"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1e293b] border border-slate-700 hover:bg-slate-700 transition-colors px-6 py-3 rounded-full font-semibold"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/eldrich-salonga-3602aa342"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1e293b] border border-slate-700 hover:bg-slate-700 transition-colors px-6 py-3 rounded-full font-semibold"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#1e293b] border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-xl">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 transition-colors rounded-xl py-4 font-semibold text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
