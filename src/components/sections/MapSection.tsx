"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Map as MapIcon } from "lucide-react";

export default function MapSection() {
    const [isActivated, setIsActivated] = useState(false);
    const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const BUCKLEY_LOCATION = "Buckley, WA";
    const BUCKLEY_COORDS = { lat: 47.1632, lng: -122.0251 };

    const activateMap = () => {
        setIsActivated(true);
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (err) => {
                    console.error("Error getting location:", err);
                    setError("Location access denied. You can still view our location on the map.");
                }
            );
        } else {
            setError("Geolocation is not supported by your browser.");
        }
    };

    const getDirectionsUrl = () => {
        if (userLocation) {
            return `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${encodeURIComponent(BUCKLEY_LOCATION)}`;
        }
        return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUCKLEY_LOCATION)}`;
    };

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Visit Us</span>
                    <h2 className="text-4xl md:text-5xl mb-6">Our Location</h2>
                    <p className="text-muted-foreground font-light">
                        We are based in the heart of Buckley, Washington, serving the surrounding areas with the finest horse-drawn experiences.
                    </p>
                </div>

                <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-muted h-[500px] border border-border">
                    {!isActivated ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F0D9BC]/40 backdrop-blur-sm z-10 p-6 text-center">
                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-accent mb-6 shadow-lg animate-pulse">
                                <MapIcon size={40} />
                            </div>
                            <h3 className="text-2xl font-serif mb-4">Interactive Experience</h3>
                            <p className="max-w-md mb-8 text-muted-foreground font-light">
                                Enable location services to see how close you are to our stables and get personalized directions.
                            </p>
                            <button
                                onClick={activateMap}
                                className="button-primary flex items-center gap-2 px-10"
                            >
                                <MapPin size={18} />
                                Activate Interactive Map
                            </button>
                        </div>
                    ) : (
                        <div className="w-full h-full animate-fade-in">
                            <iframe
                                title="Google Maps Location"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA2GCDrBjpoFb6pJxrF-RRhpczA7oYRlQs&q=${encodeURIComponent(BUCKLEY_LOCATION)}`}
                            />

                            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-white/50 z-20">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
                                        <Navigation size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Ready to travel?</p>
                                        <p className="text-xs text-muted-foreground">Get exact directions from your current spot.</p>
                                    </div>
                                </div>
                                <a
                                    href={getDirectionsUrl()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button-primary text-xs py-2 px-6 flex items-center gap-2 whitespace-nowrap"
                                >
                                    <Navigation size={14} />
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    )}

                    {error && (
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-xs font-medium z-30 shadow-sm border border-red-200">
                            {error}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
