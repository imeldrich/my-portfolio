import { toast } from "react-toastify";

export default function Contact() {
  
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("eldrichsalonga2026@gmail.com");
      toast.success("Email copied!");
    } catch {
      toast.error("Failed to copy email.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-10 text-white">
      <h3 className="text-lg text-blue-400 font-semibold tracking-widest uppercase text-center mb-10">
        Contact
      </h3>

      <div className="max-w-5xl mx-auto">
        <div className="bg-[#1e293b] border border-slate-700 rounded-3xl p-8 sm:p-12 shadow-xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Let's Work Together
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-300 leading-relaxed">
            I'm currently looking for opportunities in{" "}
            <span className="text-white font-semibold">
              IT Support, Technical Support, or Junior Software Development
            </span>
            . I'm always open to learning, collaborating, and contributing to
            meaningful projects.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:eldrichsalonga2026@gmail.com"
              className="bg-blue-600 hover:bg-blue-500 transition-colors px-6 py-3 rounded-full font-semibold"
            >
              Email Me
            </a>

            <button
              onClick={copyEmail}
              className="border border-slate-600 hover:bg-slate-700 transition-colors px-6 py-3 rounded-full font-semibold"
            >
              Copy Email
            </button>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            <div className="bg-[#0f172a] border border-slate-700 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">Location</p>
              <p className="font-semibold mt-2">Batangas, Philippines</p>
            </div>

            <div className="bg-[#0f172a] border border-slate-700 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">Email</p>
              <p className="font-semibold mt-2 break-all">
                eldrichsalonga2026@gmail.com
              </p>
            </div>

            <div className="bg-[#0f172a] border border-slate-700 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">Available For</p>
              <p className="font-semibold mt-2">IT & Development Roles</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://github.com/imeldrich"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f172a] border border-slate-700 hover:bg-slate-700 transition-colors px-6 py-3 rounded-full font-semibold"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/eldrich-salonga"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f172a] border border-slate-700 hover:bg-slate-700 transition-colors px-6 py-3 rounded-full font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
