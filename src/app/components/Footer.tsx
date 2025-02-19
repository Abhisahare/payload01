const Footer = () => {
    return (
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <div>
          <p className="font-bold">
            MyBlog © {new Date().getFullYear()} - All Rights Reserved
          </p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="#" className="link link-hover">
              Privacy Policy
            </a>
            <a href="#" className="link link-hover">
              Terms of Service
            </a>
            <a href="#" className="link link-hover">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  