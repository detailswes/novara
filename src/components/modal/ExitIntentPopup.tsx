"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ExitIntent from "@/utils/ExitIntent";
import { useEffect, useState, useRef } from "react";


export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if the user has already dismissed the popup
    const hasDismissedPopup = localStorage.getItem("exitIntentDismissed");

    if (hasDismissedPopup) {
      // If dismissed, don't show the popup
      return;
    }

    // For desktop with mouse movement
    const removeExitIntent = ExitIntent({
      threshold: 10,
      eventThrottle: 100,
      onExitIntent: () => {
        setIsOpen(true);
      },
    });

    // For mobile: trigger popup after 15-20 seconds of inactivity
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      if (localStorage.getItem("exitIntentDismissed")) {
        return;
      }
      const resetInactivityTimer = () => {
        // Clear existing timer
        if (inactivityTimerRef.current) {
          clearTimeout(inactivityTimerRef.current);
        }

        // Set new timer
        inactivityTimerRef.current = setTimeout(() => {
          setIsOpen(true);
        }, 15000); // 15 seconds
      };

      // Add event listeners for mobile interactions
      const events = ["touchstart", "touchmove", "touchend", "click", "scroll"];
      events.forEach((event) =>
        window.addEventListener(event, resetInactivityTimer)
      );

      // Initial timer setup
      resetInactivityTimer();

      // Cleanup function
      return () => {
        events.forEach((event) =>
          window.removeEventListener(event, resetInactivityTimer)
        );
        if (inactivityTimerRef.current) {
          clearTimeout(inactivityTimerRef.current);
        }
        removeExitIntent();
      };
    }

    // Cleanup for desktop
    return () => {
      removeExitIntent();
    };
  }, []);

  const handleDismiss = () => {
    // Mark the popup as dismissed in localStorage
    localStorage.setItem("exitIntentDismissed", "true");
    setIsOpen(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90%] sm:max-w-[666px] bg-[#F7F7FB] !rounded-[20px]">
          <div className="w-full sm:max-w-[566px] mx-auto">
            <h2 className="text-center font-Frank font-normal text-[#1F1168] text-4xl md:text-5xl md:leading-[71px] pt-10">
              Wait! Don't leave without taking the first step toward recovery.
            </h2>

            <p className="text-center text-text my-5 md:my-[35px]">
              Talk to an expert now or complete your assessment
            </p>

            <div className="flex justify-between md:justify-center gap-[10px] flex-col md:flex-row pb-10">
              <div>
                <a href="/assesment/">
                  <div className="h-12 md:h-[64px] relative flex justify-center md:justify-start py-1 md:py-2 px-3 md:px-3 rounded-full bg-btn-gradient text-white overflow-hidden transition-all duration-300 ease-in-out items-center gap-1 md:gap-3 group">
                    {/* Background Slide Effect */}
                    <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></div>

                    {/* Content */}
                    <div className="relative flex items-center gap-1 md:gap-3 z-10">
                      {/* Icon */}
                      <svg
                        width="15"
                        height="13"
                        viewBox="0 0 15 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.9844 0.251435C12.7548 0.12382 12.5023 0.0426881 12.2413 0.0126721C11.9803 -0.0173438 11.716 0.00434439 11.4634 0.0764982C11.2108 0.148652 10.9749 0.269858 10.7692 0.433193C10.5635 0.596528 10.3919 0.798793 10.2644 1.02843L6.55137 7.71043L4.42637 5.58543C4.24188 5.39441 4.02119 5.24205 3.77718 5.13723C3.53317 5.03241 3.27073 4.97724 3.00517 4.97493C2.73961 4.97263 2.47625 5.02323 2.23046 5.12379C1.98467 5.22435 1.76136 5.37286 1.57358 5.56064C1.38579 5.74843 1.23729 5.97173 1.13673 6.21753C1.03616 6.46332 0.985561 6.72668 0.987868 6.99224C0.990176 7.2578 1.04535 7.52024 1.15017 7.76424C1.25498 8.00825 1.40735 8.22894 1.59837 8.41343L5.59837 12.4134C5.97637 12.7924 6.48637 13.0004 7.01237 13.0004L7.28937 12.9804C7.59592 12.9376 7.88833 12.8241 8.14359 12.649C8.39885 12.4739 8.60998 12.242 8.76037 11.9714L13.7604 2.97143C13.888 2.74189 13.9692 2.48944 13.9993 2.22851C14.0294 1.96759 14.0078 1.70329 13.9357 1.45071C13.8637 1.19813 13.7426 0.962223 13.5793 0.75645C13.4161 0.550677 13.2139 0.379072 12.9844 0.251435Z"
                          fill="#F7F7FB"
                        />
                      </svg>

                      <p className="text-sm font-medium md:font-semibold leading-6 uppercase">
                        Complete Your Assessment
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div>
                <a href="tel:(855)-871-53321">
                  <div className="relative flex justify-center md:justify-start py-1 md:py-3.5 px-3 md:px-6 rounded-full bg-btn-gradient text-white overflow-hidden transition-all duration-300 ease-in-out items-center gap-1 md:gap-3 group">
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
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
