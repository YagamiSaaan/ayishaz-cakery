import { MessageCircle, Phone } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col gap-3">
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[var(--shadow-gold)] hover:scale-110 transition" aria-label="Chat on WhatsApp">
        <MessageCircle className="w-5 h-5" />
      </a>
      <a href={`tel:${PHONE_TEL}`} className="w-14 h-14 rounded-full bg-[var(--gold)] text-[var(--espresso)] flex items-center justify-center shadow-[var(--shadow-gold)] hover:scale-110 transition" aria-label="Call Ayishaz Cakery">
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
