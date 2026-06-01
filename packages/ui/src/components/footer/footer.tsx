import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { SITE_URLS } from "../../config/site-urls";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);


const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.46 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-white mt-auto">
      <footer className="bg-[#0e1b33] w-full rounded-t-[32px] md:rounded-t-[48px] px-6 md:px-12 lg:px-[80px] pt-16 md:pt-[80px] pb-8 text-white font-sans">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-[96px]">

            {/* Column 1: Brand & Socials */}
            <div className="flex flex-col gap-6 items-start">
              <div className="flex gap-2 items-center h-12">
                <img
                  src="/footerlogo.png"
                  alt="Castor Logo"
                  className="h-12 w-auto"
                />
              </div>
              <p className="font-normal text-[14px] leading-relaxed text-[#99a1af] max-w-xs">
                The unified digital front door for comprehensive healthcare services in Northern Illinois. Compassion, Quality, and Trust in every service we provide.
              </p>
              <nav aria-label="Social media links" className="flex gap-4 mt-2">
                <a
                  href="https://www.facebook.com/CastorCares"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="bg-[#6a6a67] rounded-full w-11 h-11 flex items-center justify-center hover:bg-[#20a9ad] transition-colors focus-visible:outline-2 focus-visible:outline-[#20a9ad] focus-visible:outline-offset-2"
                >
                  <FacebookIcon className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://x.com/castorhomecare"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                  className="bg-[#6a6a67] rounded-full w-11 h-11 flex items-center justify-center hover:bg-[#20a9ad] transition-colors focus-visible:outline-2 focus-visible:outline-[#20a9ad] focus-visible:outline-offset-2"
                >
                  <TwitterIcon className="w-5 h-5 text-white hover:fill-white" />
                </a>
                <a
                  href="https://www.instagram.com/castorhomenursing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="bg-[#6a6a67] rounded-full w-11 h-11 flex items-center justify-center hover:bg-[#20a9ad] transition-colors focus-visible:outline-2 focus-visible:outline-[#20a9ad] focus-visible:outline-offset-2"
                >
                  <InstagramIcon className="w-5 h-5 text-white" />
                </a>
              </nav>
            </div>

            {/* Column 2: Services */}
            <div className="flex flex-col gap-6 items-start">
              <h2 className="font-bold text-[18px] text-white font-['Inter']">Services</h2>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href={SITE_URLS.services} className="flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#20a9ad] group-hover:scale-125 transition-transform" aria-hidden="true" />
                    <span className="font-semibold text-[16px] text-[#d1d5dc] group-hover:text-white transition-colors">Get Care</span>
                  </Link>
                </li>
                <li>
                  <Link href={SITE_URLS.ecommerce} className="flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#20a9ad] group-hover:scale-125 transition-transform" aria-hidden="true" />
                    <span className="font-semibold text-[16px] text-[#d1d5dc] group-hover:text-white transition-colors">Medical Supplies</span>
                  </Link>
                </li>
                <li>
                  <Link href={SITE_URLS.transport} className="flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#20a9ad] group-hover:scale-125 transition-transform" aria-hidden="true" />
                    <span className="font-semibold text-[16px] text-[#d1d5dc] group-hover:text-white transition-colors">Transportation</span>
                  </Link>
                </li>
                <li>
                  <Link href={SITE_URLS.institute} className="flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#20a9ad] group-hover:scale-125 transition-transform" aria-hidden="true" />
                    <span className="font-semibold text-[16px] text-[#d1d5dc] group-hover:text-white transition-colors">Health Institute</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="flex flex-col gap-6 items-start">
              <h2 className="font-bold text-[18px] text-white font-['Inter']">Company</h2>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href={`${SITE_URLS.web}/careers`} className="font-semibold text-[16px] text-[#d1d5dc] hover:text-[#20a9ad] transition-colors focus-visible:outline-2 focus-visible:outline-[#20a9ad] focus-visible:outline-offset-2">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href={`${SITE_URLS.web}/privacy-policy`} className="font-semibold text-[16px] text-[#d1d5dc] hover:text-[#20a9ad] transition-colors focus-visible:outline-2 focus-visible:outline-[#20a9ad] focus-visible:outline-offset-2">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href={`${SITE_URLS.web}/terms-conditions`} className="font-semibold text-[16px] text-[#d1d5dc] hover:text-[#20a9ad] transition-colors focus-visible:outline-2 focus-visible:outline-[#20a9ad] focus-visible:outline-offset-2">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="flex flex-col gap-6 items-start">
              <h2 className="font-bold text-[18px] text-white font-['Inter']">Contact Us</h2>
              <div className="flex flex-col gap-6">

                <div className="flex gap-4 items-start">
                  <div className="bg-[#6a6a67] rounded-lg w-9 h-9 shrink-0 flex items-center justify-center mt-0.5" aria-hidden="true">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium text-[16px] text-[#99a1af] mb-1">Call Anytime</p>
                    <a href="tel:815-564-0977" className="font-semibold text-[18px] text-white hover:text-[#20a9ad] transition-colors focus-visible:outline-2 focus-visible:outline-[#20a9ad] focus-visible:outline-offset-2">
                      815-564-0977
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-[#6a6a67] rounded-lg w-9 h-9 shrink-0 flex items-center justify-center mt-0.5" aria-hidden="true">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium text-[16px] text-[#99a1af] mb-1">Email Us</p>
                    <a href="mailto:info@castorhealth.com" className="font-normal text-[14px] text-white hover:text-[#20a9ad] transition-colors focus-visible:outline-2 focus-visible:outline-[#20a9ad] focus-visible:outline-offset-2">
                      info@castorhealth.com
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#6a6a67] pt-6 flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
            <p className="font-normal text-[14px] md:text-[16px] text-[#99a1af]">
              © {currentYear} Castor Healthcare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
