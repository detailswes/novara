import { Button } from "../ui/button";
import Logo from "@/assets/images/Logo.svg";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About us", href: "#" },
  { name: "Programs", href: "#" },
  { name: "Treatments", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Enquiry", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Contact us", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isClient, setIsClient] = useState(false); // To track if it's client-side

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // This will run only on the client
    setIsClient(true);

    if (isClient) {
      const handleScroll = () => {
        if (headerRef.current) {
          const headerHeight = headerRef.current.offsetHeight;
          setIsSticky(window.scrollY > headerHeight);
        }
      };

      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains(target) &&
          buttonRef.current &&
          !buttonRef.current.contains(target)
        ) {
          setOpen(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      if (open) document.addEventListener("mousedown", handleClickOutside);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [open, isClient]);

  useEffect(() => {
    // Get the current pathname, but only after the component has mounted
    if (isClient) {
      const currentPath = window.location.pathname;
      setActiveLink(currentPath);
    }
  }, [isClient]);

  return (
    <header
      ref={headerRef}
      className={`bg-transparent px-4 z-50 ${
        isSticky
          ? "fixed top-0 left-0 right-0 shadow-md transition-all duration-300 bg-white"
          : "relative"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-[14px]">
        {/* Left: Logo */}
        <a href="/" className="flex items-center">
          <img src={Logo.src} alt="Logo" className="w-24 md:w-[107px]" />
        </a>

        {/* Right: Help Icon & Text */}
        <div className="ml-auto">
          <a href="tel:(855)-871-53321">
            <div className="relative flex py-1 md:py-2 px-3 md:px-6 rounded-full bg-btn-gradient text-white overflow-hidden transition-all duration-300 ease-in-out items-center gap-1 md:gap-3 group">
              {/* Background Slide Effect */}
              <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></div>

              {/* Content */}
              <div className="relative flex items-center gap-1 md:gap-3 z-10">
                {/* Icon */}
                <svg
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                >
                  <path
                    d="M6.8786 1.55176C7.43615 1.55176 9.66637 6.166 9.66637 6.67869C9.66637 7.70408 7.9937 8.72946 7.43615 9.75485C6.8786 10.7802 7.9937 11.8056 9.10881 12.831C9.5437 13.2309 11.339 14.8818 12.4541 14.3691C13.5692 13.8564 14.6844 12.3183 15.7995 12.3183C16.357 12.3183 21.375 14.3691 21.375 14.8818C21.375 16.9326 19.7023 18.4706 18.0297 18.9833C16.357 19.496 15.2419 19.496 13.0117 18.9833C10.7815 18.4706 9.10881 17.9579 6.32104 15.3945C3.53327 12.831 2.97572 11.2929 2.41817 9.24216C1.86061 7.19138 1.86061 6.166 2.41817 4.62792C2.97572 3.08984 4.64838 1.55176 6.8786 1.55176Z"
                    stroke="currentColor"
                    strokeWidth="2.23022"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M13.5692 5.69421C14.3052 6.01208 14.9743 6.44275 15.5318 6.96569C16.0782 7.46813 16.5354 8.07311 16.87 8.72936"
                    stroke="currentColor"
                    strokeWidth="2.23022"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M14.6843 1.80798C16.2566 2.18738 17.6617 2.93591 18.7768 3.9613C19.8807 4.98668 20.6948 6.26842 21.0962 7.70396"
                    stroke="currentColor"
                    strokeWidth="2.23022"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>

                {/* Text */}
                <div className="transition-all duration-300 ease-in-out">
                  <p className="text-xs md:text-sm font-bold">
                  Free Confidential Helpline
                  </p>
                  <p className="text-xs md:text-xs font-medium md:font-semibold leading-6">
                    (855)-871-53321
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
