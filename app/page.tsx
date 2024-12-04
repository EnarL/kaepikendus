"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  const profiles = [
    {
      name: "Katrin Kuusk",
      role: "Sotsiaalmeedia turundaja",
      rating: "⭐ 4.9 (83 arvustust)",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      category: "Turundus",
    },
    {
      name: "Mihkel Peet",
      role: "Personaaltreener",
      rating: "⭐ 4.4 (37 arvustust)",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      category: "Konsultant",
    },
    {
      name: "Mari Tamm",
      role: "Graafiline disainer",
      rating: "⭐ 4.8 (45 arvustust)",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      category: "Disain",
    },
    {
      name: "Jaanus Kask",
      role: "Veebiarendaja",
      rating: "⭐ 4.7 (52 arvustust)",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      category: "Programmeerimine",
    },
    {
      name: "Kadri Kask",
      role: "Konsultant",
      rating: "⭐ 4.7 (52 arvustust)",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      category: "Nõustamine"},
    {
        name: "Madis Mets",
        role: "Kirjutaja",
        rating: "⭐ 4.7 (18 arvustust)",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        category: "Kirjutamine",
    },
    {
      name: "Tiiu Tiitus",
      role: "Tõlkimine",
      rating: "⭐ 4.7 (52 arvustust)",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      category: "Tõlketöö",

    },
    {
      name: "Paul Maasikas",
      role: "Tõlkimine",
      rating: "⭐ 4.7 (52 arvustust)",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      category: "Turundus",

    }


  ];

  const filteredProfiles = profiles.filter(profile =>
      profile.name.toLowerCase().includes(searchInput.toLowerCase()) &&
      (selectedCategory ? profile.category === selectedCategory : true)
  );

  const slugify = (name: string) =>
      name.toLowerCase()
          .replace(/\s+/g, '') // Remove spaces
          .replace(/[^\w-]+/g, ''); // Remove special characters

  const handleProfileClick = (name: string) => {
    router.push(`/profile/${slugify(name)}`);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
      <div className="font-poppins w-full h-full m-0 bg-[#f5e9e2] p-4 md:p-8 box-border flex flex-col min-h-screen">
        <div className="container mx-auto px-4 flex flex-col flex-grow  ">
          <div className="flex justify-center items-center bg-[#F1EFE7]">
            <header className="flex flex-col md:flex-row justify-between items-left mb-8 max-w-full">
              <div className="w-full"> {/* Added this div for the background color */}
                <div className="flex justify-center items-center">
                  <img src="logo.png" alt="Käepikendus" className="w-full h-full"/>
                </div>
              </div>
            </header>
          </div>
          <div className="bg-[#cfbdb2] p-4 rounded-lg mb-4">
            <div className="flex items-center w-full md:w-auto">
              {isSearchOpen && (
                  <input
                      type="text"
                      placeholder="Otsi käepikendust"
                      className="flex-1 p-4 rounded border border-gray-300 shadow-sm"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                  />
              )}
              <button
                  className="ml-2 bg-none border-none"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <img src="https://img.icons8.com/ios-filled/50/000000/search.png" alt="Search" className="w-10 h-10"/>
              </button>
            </div>
          </div>
          <main className="flex-1 mt-8">
            <section className="flex-1 mb-8">
              <div className='flex columns-2'>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kategooriad</h3>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-right ml-auto">Vaata kõiki</h3>

              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <div
                    className="p-4 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => handleCategoryClick("Disain")}
                >
                  Disain
                </div>
                <div
                    className="p-4 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => handleCategoryClick("Turundus")}
                >
                  Turundus
                </div>
                <div
                    className="p-4 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => handleCategoryClick("Programmeerimine")}
                >
                  IT
                </div>
                <div
                    className="p-4 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => handleCategoryClick("Nõustamine")}
                >
                  Nõustamine
                </div>
                <div
                    className="p-4 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => handleCategoryClick("Kirjutamine")}
                >
                  Kirjutamine
                </div>
                <div
                    className="p-4 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => handleCategoryClick("Tõlketöö")}
                >
                  Tõlketöö
                </div>
              </div>
            </section>

            <section className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hiljuti vaadatud</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProfiles.map((profile, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => handleProfileClick(profile.name)}
                    >
                      <img
                          src={profile.image}
                          alt={profile.name}
                          className="w-16 h-16 rounded-full object-cover shadow-lg"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">{profile.name}</h4>
                        <p className="text-lg text-gray-600">{profile.role}</p>
                        <p className="text-sm text-gray-500">{profile.rating}</p>
                      </div>
                    </div>
                ))}
              </div>
            </section>
          </main>
          <img className="rounded-lg mt-10 mb-10 hidden md:block" src="/reklaam.png" alt="Reklaam"/>
          <footer className="mt-auto pt-4 border-t border-gray-300 hidden md:block">
            <p className="text-center text-sm text-gray-600">© 2024 Käepikendus. All rights reserved.</p>
          </footer>
        </div>
      </div>
  );
};

export default Home;