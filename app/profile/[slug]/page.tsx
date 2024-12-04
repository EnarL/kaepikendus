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
    expertIn: string;
    skills: string[];
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
                    bio: "Kogenud sotsiaalmeedia turundaja, kes armastab luua kaasahaaravat sisu.",
                    location: "Tallinn, Eesti",
                    contact: "katrin@example.com",
                    expertIn: "Sotsiaalmeedia turundus",
                    skills: ["Sisu loomine", "SEO", "Analüütika"],
                },
                "mihkelpeet": {
                    role: "Personaaltreener",
                    rating: "⭐ 4.4 (37 arvustust)",
                    image: "https://randomuser.me/api/portraits/men/2.jpg",
                    bio: "Sertifitseeritud personaaltreener, kes aitab klientidel saavutada oma fitnessi eesmärke.",
                    location: "Tartu, Eesti",
                    contact: "mihkel@example.com",
                    expertIn: "Personaaltreening",
                    skills: ["Jõutreening", "Toitumine", "Kardio"],
                },
                "maritamm": {
                    role: "Graafiline disainer",
                    rating: "⭐ 4.8 (45 arvustust)",
                    image: "https://randomuser.me/api/portraits/women/2.jpg",
                    bio: "Loominguline graafiline disainer, kellel on oskus visuaalseks jutustamiseks.",
                    location: "Pärnu, Eesti",
                    contact: "mari@example.com",
                    expertIn: "Graafiline disain",
                    skills: ["Logo disain", "Brändi identiteet", "Illustratsioon"],
                },
                "jaanuskask": {
                    role: "Veebiarendaja",
                    rating: "⭐ 4.7 (52 arvustust)",
                    image: "https://randomuser.me/api/portraits/men/3.jpg",
                    bio: "Oskuslik veebiarendaja, kes on spetsialiseerunud kaasaegsetele veebitehnoloogiatele.",
                    location: "Narva, Eesti",
                    contact: "jaanus@example.com",
                    expertIn: "Veebiarendus",
                    skills: ["JavaScript", "React", "Node.js"],
                },
                "kadrikask": {
                    role: "Konsultant",
                    rating: "⭐ 4.7 (52 arvustust)",
                    image: "https://randomuser.me/api/portraits/women/3.jpg",
                    bio: "Kogenud konsultant, kes pakub nõustamisteenuseid erinevates valdkondades.",
                    location: "Tallinn, Eesti",
                    contact: "kadri@example.com",
                    expertIn: "Nõustamine",
                    skills: ["Strateegiline planeerimine", "Projektijuhtimine", "Kliendisuhted"],
                },
                "madismets": {
                    role: "Kirjutaja",
                    rating: "⭐ 4.7 (18 arvustust)",
                    image: "https://randomuser.me/api/portraits/men/4.jpg",
                    bio: "Kogenud kirjutaja, kes on spetsialiseerunud sisuloomele ja toimetamisele.",
                    location: "Tartu, Eesti",
                    contact: "madis@example.com",
                    expertIn: "Kirjutamine",
                    skills: ["Sisuloome", "Toimetamine", "Korrektuur"],
                },
                "tiiutiitus": {
                    role: "Tõlkimine",
                    rating: "⭐ 4.7 (52 arvustust)",
                    image: "https://randomuser.me/api/portraits/women/6.jpg",
                    bio: "Professionaalne tõlkija, kes pakub kvaliteetseid tõlketeenuseid.",
                    location: "Pärnu, Eesti",
                    contact: "tiiu@example.com",
                    expertIn: "Tõlketöö",
                    skills: ["Tõlkimine", "Keeletoimetamine", "Lokaliseerimine"],
                },
                "paulmaasikas": {
                    role: "Tõlkimine",
                    rating: "⭐ 4.7 (52 arvustust)",
                    image: "https://randomuser.me/api/portraits/men/6.jpg",
                    bio: "Kogenud tõlkija, kes on spetsialiseerunud turundustekstide tõlkimisele.",
                    location: "Narva, Eesti",
                    contact: "paul@example.com",
                    expertIn: "Turundus",
                    skills: ["Tõlkimine", "Turundus", "Sisuloome"],
                },
            };

            setProfile(profiles[slug]);
        }
    }, [slug]);

    if (!profile) {
        return <div>Profiili ei leitud</div>;
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
            <main className="flex flex-col md:flex-row">
                <div className="flex-1">
                    <p className="text-md text-gray-600 mb-4">{profile.bio}</p>
                    <p className="text-md text-gray-600 mb-4">Asukoht: {profile.location}</p>
                    <p className="text-md text-gray-600 mb-4">Ekspert: {profile.expertIn}</p>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Minust</h3>
                    <p className="text-md text-gray-600 mb-4">{profile.bio}</p>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Oskused</h3>
                    <ul className="list-disc list-inside text-md text-gray-600 mb-4">
                        {profile.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/3 md:ml-8 bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Võta ühendust</h3>
                    <p className="text-md text-gray-600 mb-4">Email: {profile.contact}</p>
                    <button className="bg-[#F1EFE7] text-black p-2 rounded-lg hover:bg-gray-200">
                        Broneeri konsultatsioon
                    </button>
                </div>
            </main>
            <footer className="mt-auto pt-4 border-t border-gray-300">
                <p className="text-center text-sm text-gray-600">© 2023 Käepikendus. Kõik õigused kaitstud.</p>
            </footer>
        </div>
    );
};

export default Profile;