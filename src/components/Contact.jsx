const Contact = () => {
    return <section id="contacts" className="max-w-4xl mx-auto p-6 sm:p-10">

  <h2 className="text-3xl font-bold text-center mb-6">
    Contact Me
  </h2>

  <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-8 flex flex-col items-center gap-6">

    <p className="text-gray-300 text-center max-w-lg">
      I’m currently open to internships, freelance projects,
      and collaboration opportunities.
    </p>

    <a
      href="mailto:youremail@gmail.com"
      className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-lg font-semibold"
    >
      Send Email
    </a>

    <div className="flex gap-6 text-gray-300">
      <a href="#">GitHub</a>
      <a href="#">LinkedIn</a>
    </div>

  </div>
</section>
}

export default Contact