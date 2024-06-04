const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10">
      <div className="container mx-auto grid grid-cols-5 gap-6">
        <div className="space-y-2">
          <h4 className="text-lg font-bold">ABOUT ME</h4>
          <ul className="space-y-1">
            <li><a href="#about-me" className="hover:underline">About me</a></li>
            <li><a href="#specialists" className="hover:underline">My specialists</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-bold">BUY</h4>
          <ul className="space-y-1">
            <li><a href="#real-estate-alert" className="hover:underline">Real estate alert</a></li>
            <li><a href="#become-owner" className="hover:underline">Become an owner</a></li>
          </ul>
          <h4 className="text-lg font-bold mt-4">SELL</h4>
          <ul className="space-y-1">
            <li><a href="#property-assessment" className="hover:underline">Property assessment</a></li>
            <li><a href="#selling-property" className="hover:underline">Selling your property</a></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-bold">PROPERTIES</h4>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-bold">JOURNAL</h4>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-bold">CONTACT ME</h4>
          <address className="not-italic space-y-1">
            <p>1290 rue Bernard Ouest<br />
              Office 100<br />
              Montréal, QC, H2V 1V9</p>
            <a href="mailto:info@mblaise.com" className="block hover:underline">info@mblaise.com</a>
            <a href="tel:+15142712131" className="block hover:underline">514 271-2131 (off.)</a>
            <a href="tel:+15149933557" className="block hover:underline">514 993-3357 (cell)</a>
          </address>
        </div>
        <div className="col-span-5 flex justify-center mt-6">
          <div className="text-center">
            <img src="remax-logo.png" alt="RE/MAX du Cartier" className="mx-auto mb-2" />
            <p className="text-gray-700">Agence immobilière</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;