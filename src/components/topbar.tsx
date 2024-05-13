import { ClockIcon, MailIcon, PhoneIcon } from "lucide-react";

export function TopBar() {
  return (
    <div className="w-full bg-zinc-100 py-4">
      <div className="container">
        <div className="w-full flex justify-end items-center gap-8">
          <p className="flex items-center gap-2 text-xs lg:text-sm">
            <ClockIcon className="w-4 h-4 text-primary" />
            SEG À SEX: 07:00 - 19:00
          </p>
          <p className="flex items-center gap-2 text-xs md:text-sm">
            <ClockIcon className="w-4 h-4 text-primary" />
            SAB: 08:00 - 12:00
          </p>
        </div>
      </div>
    </div>
  );
}
