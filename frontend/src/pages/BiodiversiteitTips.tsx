// src/pages/BiodiversiteitTips.tsx

import React from "react";
import Header from "../components/Header";

// Importeer de afbeeldingen voor de tips
import bloemenwijde from "../assets/BiodiversiteitTips/biodiversiteit.png";
import icon1 from "../assets/BiodiversiteitTips/1.png";
import icon2 from "../assets/BiodiversiteitTips/2.png";
import icon3 from "../assets/BiodiversiteitTips/3.png";
import icon4 from "../assets/BiodiversiteitTips/4.png";
import icon5 from "../assets/BiodiversiteitTips/5.png";
import icon6 from "../assets/BiodiversiteitTips/6.png";

export default function BiodiversiteitTips() {
  return (
    <div className="bg-white min-h-screen">
      {/* ───── HEADER ───── */}
      <Header />

      {/* ───── Hoofdcontainer ───── */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12 space-y-16">
        {/* ───── Titel & Inleiding ───── */}
        <div>
          <h1 className="text-3xl font-bold text-[#5F7447] mb-2">
            Hoe draag ik bij aan de biodiversiteit?
          </h1>
          
        </div>

        {/* ───── Groene Info‐box met overlappende Afbeelding ───── */}
        <div className="relative">
          {/* De groene box */}
          <div className="bg-[#5F7447] rounded-lg p-8 lg:p-12 text-white overflow-visible">
            <h2 className="text-2xl font-semibold mb-4">Biodiversiteit</h2>
            <p className="text-sm leading-relaxed">
              Biodiversiteit is de basis van al het leven op aarde, inclusief ons eigen bestaan.  
              Planten, dieren, schimmels en micro-organismen <br /> vormen samen een complex web waarin alles  
              met elkaar verbonden is. Als er soorten verdwijnen, raakt dat het hele ecosysteem. <br /> 
              En dat heeft ook directe gevolgen voor de mens.
            </p>
          </div>

          {/* De afbeelding die naar boven uitsteekt */}
          <img
            src={bloemenwijde}
            alt="Bloemenweide"
            className="absolute -top-16 right-0 w-1/2 max-w-sm rounded-lg shadow-xl object-cover"
          />
        </div>

        {/* ───── Tips‐grid (6 tips) ───── */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Tip #1 */}
            <div className="flex flex-col items-center text-center px-4">
              <img
                src={icon1}
                alt="Icon Tip 1"
                className="w-50 h-50 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-[#5F7447] mb-2">
                01 Tegel eruit, plant erin
              </h3>
              <p className="text-sm text-gray-700">
                Vervang tegels in je tuin, balkon of geveltuin door planten.  
                Elke groene vierkante meter helpt bijen, vlinders en andere insecten  
                om voedsel en schuilplek te vinden.
              </p>
            </div>

            {/* Tip #2 */}
            <div className="flex flex-col items-center text-center px-4">
              <img
                src={icon2}
                alt="Icon Tip 2"
                className="w-50 h-50 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-[#5F7447] mb-2">
                02 Maak plek voor dieren
              </h3>
              <p className="text-sm text-gray-700">
                Hang een bijenhotel op, leg een takkenril aan of laat een hoekje van je tuin  
                wat rommelig voor egels, vogels en insecten. Kleine schuilplekken maken een groot verschil.
              </p>
            </div>

            {/* Tip #3 */}
            <div className="flex flex-col items-center text-center px-4">
              <img
                src={icon3}
                alt="Icon Tip 3"
                className="w-50 h-50 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-[#5F7447] mb-2">
                03 Leer en deel je kennis
              </h3>
              <p className="text-sm text-gray-700">
                Volg een natuurexcursie, lees over stadsnatuur of deel inspirerende tips  
                op social media. Hoe meer mensen bewust zijn, hoe groter de impact.
              </p>
            </div>

            {/* Tip #4 */}
            <div className="flex flex-col items-center text-center px-4">
              <img
                src={icon4}
                alt="Icon Tip 4"
                className="w-50 h-50 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-[#5F7447] mb-2">
                04 Zet een regenton neer
              </h3>
              <p className="text-sm text-gray-700">
                Door regenwater op te vangen bespaar je kraanwater en help je de natuur  
                in droge periodes. Planten zijn dol op zacht regenwater.
              </p>
            </div>

            {/* Tip #5 */}
            <div className="flex flex-col items-center text-center px-4">
              <img
                src={icon5}
                alt="Icon Tip 5"
                className="w-50 h-50 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-[#5F7447] mb-2">
                05 Laat bladeren liggen
              </h3>
              <p className="text-sm text-gray-700">
                Laat wat bladeren liggen op de grond. Ze zijn voedsel en schuilplek  
                voor insecten en beschermen de bodem.
              </p>
            </div>

            {/* Tip #6 */}
            <div className="flex flex-col items-center text-center px-4">
              <img
                src={icon6}
                alt="Icon Tip 6"
                className="w-50 h-50 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-[#5F7447] mb-2">
                06 Stimuleer buurtgroen
              </h3>
              <p className="text-sm text-gray-700">
                Start of steun een buurtmoestuin, gevelgroen‐project of groen initiatief.  
                Samen vergroenen maakt meer impact én versterkt de band in de wijk.
              </p>
            </div>
          </div>
        </div>

        {/* ───── Bio – Forum sectie ───── */}
        <div className="bg-[#5F7447] rounded-lg py-8">
          <h2 className="text-center text-xl font-semibold text-white mb-6">Bio – Forum</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {/* ─── Post 1 ─── */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium text-[#5F7447]">Mister Hedgehog</span>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </div>
              <img
                src="/assets/TienVan010/forum‐beeld1.jpg"
                alt="Post afbeelding"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  Hoe trek ik meer vogels naar mijn tuin?
                </h3>
              </div>
            </div>

            {/* ─── Post 2 ─── */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium text-[#5F7447]">Mister Hedgehog</span>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </div>
              <img
                src="/assets/TienVan010/forum‐beeld2.jpg"
                alt="Post afbeelding"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  Wat zijn makkelijke stappen om mijn balkon biodiverser te maken?
                </h3>
              </div>
            </div>

            {/* ─── Post 3 ─── */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium text-[#5F7447]">Mister Hedgehog</span>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </div>
              <img
                src="/assets/TienVan010/forum‐beeld1.jpg"
                alt="Post afbeelding"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  Hoe trek ik meer vogels naar mijn tuin?
                </h3>
              </div>
            </div>

            {/* ─── Post 4 ─── */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium text-[#5F7447]">Mister Hedgehog</span>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </div>
              <img
                src="/assets/TienVan010/forum‐beeld2.jpg"
                alt="Post afbeelding"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  Hoe betrek ik mijn buren bij het vergroenen van onze straat?
                </h3>
              </div>
            </div>

            {/* ─── Post 5 ─── */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium text-[#5F7447]">Mister Hedgehog</span>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </div>
              <img
                src="/assets/TienVan010/forum‐beeld1.jpg"
                alt="Post afbeelding"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  Hoe trek ik meer vogels naar mijn tuin?
                </h3>
              </div>
            </div>

            {/* ─── Post 6 ─── */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium text-[#5F7447]">Mister Hedgehog</span>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </div>
              <img
                src="/assets/TienVan010/forum‐beeld2.jpg"
                alt="Post afbeelding"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  Hoe trek ik meer vogels naar mijn tuin?
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* ───── Dubbele Biodiversiteit‐info onderaan ───── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kaart A */}
          <div className="relative">
            <div className="bg-[#5F7447] rounded-lg p-6 text-white overflow-visible">
              <h3 className="text-xl font-semibold mb-2">Biodiversiteit</h3>
              <p className="text-sm leading-relaxed">
                Biodiversiteit is de basis van al het leven op aarde, inclusief ons eigen bestaan.  
                Planten, dieren, schimmels en micro‐organismen vormen samen een complex web waarin alles met  
                elkaar verbonden is. Als er soorten verdwijnen, raakt dat het hele ecosysteem. En dat heeft  
                ook directe gevolgen voor de mens.
              </p>
            </div>
            <img
              src="/assets/TienVan010/biodiversiteit-landschap.jpg"
              alt="Bloemenweide"
              className="absolute -top-10 right-0 w-2/5 max-w-xs rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Kaart B */}
          <div className="relative">
            <div className="bg-[#5F7447] rounded-lg p-6 text-white overflow-visible">
              <h3 className="text-xl font-semibold mb-2">Biodiversiteit</h3>
              <p className="text-sm leading-relaxed">
                Biodiversiteit is de basis van al het leven op aarde, inclusief ons eigen bestaan.  
                Planten, dieren, schimmels en micro‐organismen vormen samen een complex web waarin alles met  
                elkaar verbonden is. Als er soorten verdwijnen, raakt dat het hele ecosysteem. En dat heeft  
                ook directe gevolgen voor de mens.
              </p>
            </div>
            <img
              src="/assets/TienVan010/biodiversiteit-landschap.jpg"
              alt="Bloemenweide"
              className="absolute -top-10 right-0 w-2/5 max-w-xs rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
