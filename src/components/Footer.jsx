const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer>
      <div className="border-t-2 border-slate-800 p-6 text-center text-gray-500 text-sm">
        © {year} Eldrich Salonga. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
