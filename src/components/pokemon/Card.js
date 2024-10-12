import React from 'react';

const typeToStyle = {
    Normal: "bg-gray-200 text-gray-800",
    Grass: "bg-green-200 text-green-800",
    Electric: "bg-yellow-200 text-yellow-800",
    Flying: "bg-purple-200 text-purple-800",
    Fire: "bg-red-200 text-red-800",
    Water: "bg-blue-200 text-blue-800",
    Bug: "bg-lime-200 text-lime-800",
    Fairy: "bg-pink-200 text-pink-800",
    Fighting: "bg-red-300 text-red-800",
    Psychic: "bg-pink-300 text-pink-800",
    Rock: "bg-yellow-300 text-yellow-800",
    Ghost: "bg-indigo-200 text-indigo-800",
    Ice: "bg-cyan-200 text-cyan-800",
    Dragon: "bg-blue-300 text-blue-800",
    Dark: "bg-gray-600 text-gray-200",
    Steel: "bg-gray-300 text-gray-800",
    Poison: "bg-purple-300 text-purple-800",
    Ground: "bg-brown-200 text-brown-800",
    // Thêm các kiểu nếu cần
};

const PokemonCard = ({ name, type, imgSrc, onClick }) => (
    <div onClick={onClick} className="bg-white p-4 rounded-lg shadow-md text-center relative cursor-pointer">
        <img src={imgSrc} alt={name} className="mx-auto mb-2" />
        <h3 className="text-lg font-bold">{name}</h3>
        <div className="flex flex-wrap justify-center absolute top-2 right-2">
            {Array.isArray(type) && type.map((t, index) => (
                <div key={index} className={`px-2 py-1 rounded-lg ${typeToStyle[t] || "bg-gray-200 text-gray-800"} mr-1`}>
                    {t}
                </div>
            ))}
        </div>
    </div>
);

export default PokemonCard;