import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.753906 20.377C0.753906 15.1727 2.82132 10.1815 6.50135 6.50144C10.1814 2.82142 15.1726 0.753998 20.3769 0.753998C25.5813 0.753998 30.5724 2.82142 34.2525 6.50144C37.9325 10.1815 39.9999 15.1727 39.9999 20.377C39.9999 25.5813 37.9325 30.5725 34.2525 34.2526C30.5724 37.9326 25.5813 40 20.3769 40C15.1726 40 10.1814 37.9326 6.50135 34.2526C2.82132 30.5725 0.753906 25.5813 0.753906 20.377ZM20.3769 3.56871C15.9191 3.56871 11.6438 5.33958 8.49165 8.49174C5.33949 11.6439 3.56862 15.9192 3.56862 20.377C3.56862 24.8348 5.33949 29.1101 8.49165 32.2623C11.6438 35.4144 15.9191 37.1853 20.3769 37.1853C24.8347 37.1853 29.11 35.4144 32.2622 32.2623C35.4143 29.1101 37.1852 24.8348 37.1852 20.377C37.1852 15.9192 35.4143 11.6439 32.2622 8.49174C29.11 5.33958 24.8347 3.56871 20.3769 3.56871ZM27.3515 13.4054C27.6292 13.6832 27.7852 14.0599 27.7852 14.4528C27.7852 14.8456 27.6292 15.2223 27.3515 15.5001L22.4716 20.377L27.3515 25.2539C27.6296 25.532 27.7859 25.9093 27.7859 26.3027C27.7859 26.6961 27.6296 27.0734 27.3515 27.3516C27.0733 27.6297 26.696 27.786 26.3026 27.786C25.9092 27.786 25.5319 27.6297 25.2538 27.3516L20.3769 22.4717L15.5 27.3516C15.3623 27.4893 15.1988 27.5986 15.0188 27.6731C14.8389 27.7476 14.646 27.786 14.4512 27.786C14.2564 27.786 14.0635 27.7476 13.8836 27.6731C13.7036 27.5986 13.5401 27.4893 13.4023 27.3516C13.2646 27.2138 13.1553 27.0503 13.0808 26.8703C13.0063 26.6904 12.9679 26.4975 12.9679 26.3027C12.9679 26.1079 13.0063 25.915 13.0808 25.7351C13.1553 25.5551 13.2646 25.3916 13.4023 25.2539L18.2822 20.377L13.4023 15.5001C13.1242 15.222 12.9679 14.8447 12.9679 14.4513C12.9679 14.0579 13.1242 13.6806 13.4023 13.4024C13.6805 13.1243 14.0578 12.968 14.4512 12.968C14.8446 12.968 15.2219 13.1243 15.5 13.4024L20.3769 18.2823L25.2538 13.4024C25.3914 13.2645 25.5549 13.155 25.7348 13.0803C25.9148 13.0057 26.1078 12.9672 26.3026 12.9672C26.4975 12.9672 26.6904 13.0057 26.8704 13.0803C27.0504 13.155 27.2139 13.2674 27.3515 13.4054Z"
            fill="#170F49"
          />
        </svg>

        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
