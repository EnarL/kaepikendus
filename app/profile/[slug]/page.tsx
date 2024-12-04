"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type ProfileType = {
    role: string;
    rating: string;
    image: string;
    bio: string;
    location: string;
    contact: string;
};

const Profile: React.FC = () => {
    const params = useParams();
    const slug = params.slug as string;
    const [profile, setProfile] = useState<ProfileType | null>(null);

    useEffect(() => {
        if (slug) {
            const profiles: { [key: string]: ProfileType } = {
                "katrinkuusk": {
                    role: "Sotsiaalmeedia turundaja",
                    rating: "⭐ 4.9 (83 arvustust)",
                    image: "https://randomuser.me/api/portraits/women/1.jpg",
                    bio: "Experienced social media marketer with a passion for creating engaging content.",
                    location: "Tallinn, Estonia",
                    contact: "katrin@example.com",
                },
                "mihkelpeet": {
                    role: "Personaaltreener",
                    rating: "⭐ 4.4 (37 arvustust)",
                    image: "https://randomuser.me/api/portraits/men/2.jpg",
                    bio: "Certified personal trainer dedicated to helping clients achieve their fitness goals.",
                    location: "Tartu, Estonia",
                    contact: "mihkel@example.com",
                },
                "maritamm": {
                    role: "Graafiline disainer",
                    rating: "⭐ 4.8 (45 arvustust)",
                    image: "https://randomuser.me/api/portraits/women/2.jpg",
                    bio: "Creative graphic designer with a knack for visual storytelling.",
                    location: "Pärnu, Estonia",
                    contact: "mari@example.com",
                },
                "jaanuskask": {
                    role: "Veebiarendaja",
                    rating: "⭐ 4.7 (52 arvustust)",
                    image: "https://randomuser.me/api/portraits/men/3.jpg",
                    bio: "Skilled web developer with expertise in modern web technologies.",
                    location: "Narva, Estonia",
                    contact: "jaanus@example.com",
                },
            };

            setProfile(profiles[slug]);
        }
    }, [slug]);

    if (!profile) {
        return <div>Profile not found</div>;
    }

    return (
        <div className="font-sans w-full h-full m-0 bg-[#f5e9e2] p-4 md:p-8 box-border flex flex-col">
            <header className="flex flex-col md:flex-row justify-between items-left mb-8">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <img
                        src={profile.image}
                        alt={slug}
                        className="w-16 h-16 rounded-full object-cover shadow-lg"
                    />
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{slug}</h2>
                        <p className="text-lg text-gray-600">{profile.role}</p>
                        <p className="text-md text-gray-600">{profile.rating}</p>
                    </div>
                </div>
            </header>
            <main>
                <p className="text-md text-gray-600 mb-4">{profile.bio}</p>
                <p className="text-md text-gray-600 mb-4">Location: {profile.location}</p>
                <p className="text-md text-gray-600">Contact: {profile.contact}</p>
            </main>

            <footer className="mt-auto pt-4 border-t border-gray-300">
                <p className="text-center text-sm text-gray-600">© 2023 Käepikendus. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Profile;