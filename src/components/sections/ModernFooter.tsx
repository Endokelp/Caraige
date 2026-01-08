import React from "react";
import Link from "next/link";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function ModernFooter() {
  return (
    <footer className="bg-[#F0D9BC] pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex flex-col mb-6">
              <span className="font-serif text-3xl font-semibold tracking-tight leading-none text-black">
                LaCrosse
              </span>
              <span className="text-xs uppercase tracking-[0.3em] font-light mt-1 text-black">
                Wagon Hitch
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8">
              Bringing the timeless charm of horse-drawn travel to Buckley, Washington and beyond. Specializing in weddings, special events, and scenic tours.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1GCDThWXAp/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:lacrossewagonhitch@gmail.com"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-accent">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-accent">About Us</Link></li>
              <li><Link href="/wagons" className="text-muted-foreground hover:text-accent">Our Fleet</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin size={20} className="text-accent shrink-0" />
                <span>Buckley, Washington</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={20} className="text-accent shrink-0" />
                <span>(253) 261-3466</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={20} className="text-accent shrink-0" />
                <span>lacrossewagonhitch@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-[#CCBCA4] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} LaCrosse Wagon Hitch. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-accent uppercase tracking-widest">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-accent uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
