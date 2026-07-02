const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-background py-8 border-t border-gray-100 text-center">
      <p className="text-brand-text-light text-sm">
        &copy; {year} Vinola Refalina Hasibuan. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
