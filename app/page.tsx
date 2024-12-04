"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
      category: "Disain",
    },
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
      <div className="font-sans w-full h-full m-0 bg-[#f5e9e2] p-4 md:p-8 box-border flex flex-col min-h-screen">
        <div className="container mx-auto px-4 flex flex-col flex-grow">
          <header className="flex flex-col md:flex-row justify-between items-left mb-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User Profile"
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Tere tulemast!</h2>
                <p className="text-lg text-gray-600">Tarmo Sepp</p>
              </div>
            </div>
            <div className="flex items-center w-full md:w-auto">
              {isSearchOpen && (
                  <input
                      type="text"
                      placeholder="Otsi käepikendust"
                      className="flex-1 p-2 rounded border border-gray-300 shadow-sm"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                  />
              )}
              <button
                  className="ml-2 bg-none border-none"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <img src="https://img.icons8.com/ios-filled/50/000000/search.png" alt="Search" className="w-6 h-6"/>
              </button>
            </div>
            <button
                className="md:hidden ml-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img src="https://img.icons8.com/ios-filled/50/000000/menu.png" alt="Menu" className="w-6 h-6"/>
            </button>
          </header>

          <nav
              className={`flex flex-col md:flex-row justify-around bg-white p-4 rounded-lg shadow-md ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
            <button className="text-2xl text-gray-800">Avasta</button>
            <button className="text-2xl text-gray-800">Hakka müüjaks</button>
            <button className="text-2xl text-gray-800">Logi sisse</button>
            <button className="text-2xl text-gray-800">Liitu</button>
          </nav>

          <main className="flex-1 mt-8">
            <section className="flex-1 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kategooriad</h3>
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
                    onClick={() => handleCategoryClick("Video")}
                >
                  Video
                </div>
                <div
                    className="p-4 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => handleCategoryClick("Konsultant")}
                >
                  Konsultant
                </div>
                <div
                    className="p-4 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => handleCategoryClick("Kirjutamine")}
                >
                  Kirjutamine
                </div>
                <div
                    className="p-4 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => handleCategoryClick("Äri")}
                >
                  Äri
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