import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ModernContact() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl mb-8">Let's Plan Your Journey</h2>
            <p className="text-lg text-muted-foreground mb-12 font-light">
              Ready to add a touch of magic to your next event? We'd love to hear from you. Whether you have questions about our services or are ready to book, we're here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#F0D9BC] flex items-center justify-center text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-1">Email Us</h4>
                  <p className="text-muted-foreground">lacrossewagonhitch@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#F0D9BC] flex items-center justify-center text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-1">Call Us</h4>
                  <p className="text-muted-foreground">(253) 261-3466</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#F0D9BC] flex items-center justify-center text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-1">Our Location</h4>
                  <p className="text-muted-foreground">Buckley, Washington</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F0D9BC] p-8 md:p-12">
            <h3 className="text-2xl mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-widest opacity-70">Name</label>
                  <input type="text" className="w-full bg-white/50 border-b border-black/10 py-3 px-4 focus:bg-white focus:border-accent outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-widest opacity-70">Email</label>
                  <input type="email" className="w-full bg-white/50 border-b border-black/10 py-3 px-4 focus:bg-white focus:border-accent outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-widest opacity-70">Event Date (Optional)</label>
                <input type="date" className="w-full bg-white/50 border-b border-black/10 py-3 px-4 focus:bg-white focus:border-accent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-widest opacity-70">Message</label>
                <textarea rows={4} className="w-full bg-white/50 border-b border-black/10 py-3 px-4 focus:bg-white focus:border-accent outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="button-primary w-full flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
