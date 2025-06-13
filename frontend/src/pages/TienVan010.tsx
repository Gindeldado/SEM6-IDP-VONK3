// src/pages/TienVan010.tsx

import React from "react";
import Header from "../components/Header";

// Importeer de PNG's uit de map src/assets/TienVan010
import roosseMetselbij from "../assets/TienVan010/rose-metsebij.png";
import egelImg from "../assets/TienVan010/egel.png";
import zwanenbloemImg from "../assets/TienVan010/zwanenbloem.png";
import snoekImg from "../assets/TienVan010/snoek.png";
import zoeteKersImg from "../assets/TienVan010/zoete-kers.png";
import vosImg from "../assets/TienVan010/vos.png";
import zanglijsterImg from "../assets/TienVan010/zanglijster.png";
import steenbreekvarenImg from "../assets/TienVan010/steenbreekvaren.png";
import kleineVuurvlinderImg from "../assets/TienVan010/kleine-vuurvlinder.png";
import laatvliegerImg from "../assets/TienVan010/laatvlieger.png";

export default function TienVan010() {
  return (
    <div className="bg-white min-h-screen">
      {/* ───── HEADER ───── */}
      <Header />

      {/* ───── CONTENT ───── */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <h1 className="text-3xl font-bold text-[#5F7447] mb-2">
          Ontdek de 10 van 010: Natuur in de stad!
        </h1>
        <p className="text-sm text-gray-700 mb-8">
          Van stadsduif tot stadsflora: leer Rotterdam kennen via haar planten en dieren.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* ─── Kaart 1: Rosse metselbij ─── */}
          <div className="relative">
            <div className="flex bg-[#E5B65E] rounded-lg p-6 shadow-lg overflow-visible
                            transform transition-transform duration-300 hover:scale-105">
              <div className="w-1/2 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-white mb-1">
                  Rosse metselbij
                </h2>
                <span className="text-sm font-medium text-yellow-100 mb-4">
                  Insect
                </span>
                <p className="text-sm text-yellow-100">
                  Deze kleine bij werkt als een echte vakvrouw: ze metst zelf haar eitjes in
                  kleine holletjes zoals schelpen of gaatjes in hout. Ze is zeldzaam in de stad,
                  maar helpt door bestuiving van bloemen. Je kunt haar in de zomer vinden
                  tussen bloeiende planten in parken en tuinen.
                </p>
              </div>
              <div className="w-1/2"></div>
            </div>
            <img
              src={roosseMetselbij}
              alt="Rosse metselbij"
              className="absolute -top-6 right-6 w-1/2 h-auto object-cover rounded-lg shadow-xl
                         transform scale-70 origin-top-right"
            />
          </div>

          {/* ─── Kaart 2: Egel ─── */}
          <div className="relative">
            <div className="flex bg-[#694400] rounded-lg p-6 shadow-lg overflow-visible
                            transform transition-transform duration-300 hover:scale-105">
              <div className="w-1/2 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-white mb-1">Egel</h2>
                <span className="text-sm font-medium text-[#FFECC7] mb-4">
                  Zoogdier
                </span>
                <p className="text-sm text-[#FFECC7]">
                  Met zijn stekelige jasje is de egel een nachtdier dat je soms kunt
                  spotten in tuinen en groenstroken van de stad. Hij eet slakken, insecten en
                  zelfs jonge muizen – en is een belangrijke plaagbestrijder in de tuin. Laat
                  gerust een bladhoopje liggen als egeldoolplaats.
                </p>
              </div>
              <div className="w-1/2"></div>
            </div>
            <img
              src={egelImg}
              alt="Egel"
              className="absolute -top-6 right-6 w-1/2 h-auto object-cover rounded-lg shadow-xl
                         transform scale-70 origin-top-right"
            />
          </div>

          {/* ─── Kaart 3: Zwanenbloem ─── */}
          <div className="relative">
            <div className="flex bg-[#BE7B92] rounded-lg p-6 shadow-lg overflow-visible
                            transform transition-transform duration-300 hover:scale-105">
              <div className="w-1/2 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-white mb-1">
                  Zwanenbloem
                </h2>
                <span className="text-sm font-medium text-pink-100 mb-4">
                  Plant
                </span>
                <p className="text-sm text-pink-100">
                  Een sierlijke oeverplant met zachtroze bloemetjes, die vroeger veel
                  voorkwam in sloten en langs rivieren. In Rotterdam is de zwanenbloem nu
                  te vinden in moerassen en oevers bij water. Niet alleen mooi maar ook
                  belangrijk voor insecten en libellen.
                </p>
              </div>
              <div className="w-1/2"></div>
            </div>
            <img
              src={zwanenbloemImg}
              alt="Zwanenbloem"
              className="absolute -top-6 right-6 w-1/2 h-auto object-cover rounded-lg shadow-xl
                         transform scale-70 origin-top-right"
            />
          </div>

          {/* ─── Kaart 4: Snoek (Esox lucius) ─── */}
          <div className="relative">
            <div className="flex bg-[#4B756A] rounded-lg p-6 shadow-lg overflow-visible
                            transform transition-transform duration-300 hover:scale-105">
              <div className="w-1/2 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-white mb-1">
                  Snoek (Esox lucius)
                </h2>
                <span className="text-sm font-medium text-teal-100 mb-4">
                  Vis
                </span>
                <p className="text-sm text-teal-100">
                  Deze roofvis is de koning van de sloot. Met zijn scherpe tanden en
                  gestroomlijnd lijf jaagt hij op waterdieren. De snoek houdt van helder water
                  met onderwaterplanten en is een teken dat de waterkwaliteit in Rotterdam goed
                  is.
                </p>
              </div>
              <div className="w-1/2"></div>
            </div>
            <img
              src={snoekImg}
              alt="Snoek"
              className="absolute -top-6 right-6 w-1/2 h-auto object-cover rounded-lg shadow-xl
                         transform scale-70 origin-top-right"
            />
          </div>

          {/* ─── Kaart 5: Zoete kers ─── */}
          <div className="relative">
            <div className="flex bg-[#1E813F] rounded-lg p-6 shadow-lg overflow-visible
                            transform transition-transform duration-300 hover:scale-105">
              <div className="w-1/2 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-white mb-1">
                  Zoete kers
                </h2>
                <span className="text-sm font-medium text-green-100 mb-4">
                  Plant
                </span>
                <p className="text-sm text-green-100">
                  Deze boom is vooral in het voorjaar spectaculair, met zijn uitbundige
                  bloesem waar bijen en hommels op afkomen. In de stad dragen de zoete kersen
                  bij aan biodiversiteit: de bloesem is geliefd bij insecten en de vruchten door
                  vogels en zoogdieren.
                </p>
              </div>
              <div className="w-1/2"></div>
            </div>
            <img
              src={zoeteKersImg}
              alt="Zoete kers"
              className="absolute -top-6 right-6 w-1/2 h-auto object-cover rounded-lg shadow-xl
                         transform scale-70 origin-top-right"
            />
          </div>

          {/* ─── Kaart 6: Vos ─── */}
          <div className="relative">
            <div className="flex bg-[#DF7D34] rounded-lg p-6 shadow-lg overflow-visible
                            transform transition-transform duration-300 hover:scale-105">
              <div className="w-1/2 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-white mb-1">Vos</h2>
                <span className="text-sm font-medium text-orange-100 mb-4">
                  Dier
                </span>
                <p className="text-sm text-orange-100">
                  De vos voelt zich prima thuis in en rond Rotterdam. Hij is sluw, schuw en
                  nachtdier. Toch kun je hem soms overdag op zoek naar voedsel in parken en
                  plantsoenen zien. Hij jaagt op muizen, vogels en insecten en draagt bij aan
                  een gebalanceerd ecosysteem.
                </p>
              </div>
              <div className="w-1/2"></div>
            </div>
            <img
              src={vosImg}
              alt="Vos"
              className="absolute -top-6 right-6 w-1/2 h-auto object-cover rounded-lg shadow-xl
                         transform scale-70 origin-top-right"
            />
          </div>

          {/* ─── Kaart 7: Zanglijster ─── */}
          <div className="relative">
            <div className="flex bg-[#675146] rounded-lg p-6 shadow-lg overflow-visible
                            transform transition-transform duration-300 hover:scale-105">
              <div className="w-1/2 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-white mb-1">Zanglijster</h2>
                <span className="text-sm font-medium text-[#FFECC7] mb-4">
                  Vogel
                </span>
                <p className="text-sm text-[#FFECC7]">
                  De zanglijster is een ware stadszanger, vooral in de vroege ochtend. Hij zingt
                  zijn melodieuze lied terwijl hij op zoek gaat naar insecten en wormen. In parken
                  en tuinen laat hij zijn karakteristieke roep horen, en is een teken dat de stad
                  genoeg groene plekken heeft.
                </p>
              </div>
              <div className="w-1/2"></div>
            </div>
            <img
              src={zanglijsterImg}
              alt="Zanglijster"
              className="absolute -top-6 right-6 w-1/2 h-auto object-cover rounded-lg shadow-xl
                         transform scale-70 origin-top-right"
            />
          </div>

          {/* ─── Kaart 8: Steenbreekvaren ─── */}
          <div className="relative">
            <div className="flex bg-[#7A933D] rounded-lg p-6 shadow-lg overflow-visible
                            transform transition-transform duration-300 hover:scale-105">
              <div className="w-1/2 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-white mb-1">
                  Steenbreekvaren
                </h2>
                <span className="text-sm font-medium text-lime-100 mb-4">Plant</span>
                <p className="text-sm text-lime-100">
                  Deze bijzondere varen groeit op onverwachte plekken – op muren, kademuren of
                  oude stoeptegels. Een overlever die je soms in de Rotterdamse stadsmuren ziet.
                  De steenbreekvaren toont hoe de natuur zich een weg baant, zelfs in de versteende
                  stad.
                </p>
              </div>
              <div className="w-1/2"></div>
            </div>
            <img
              src={steenbreekvarenImg}
              alt="Steenbreekvaren"
              className="absolute -top-6 right-6 w-1/2 h-auto object-cover rounded-lg shadow-xl
                         transform scale-70 origin-top-right"
            />
          </div>

          {/* ─── Kaart 9: Kleine vuurvlinder ─── */}
          <div className="relative">
            <div className="flex bg-[#BF5F1F] rounded-lg p-6 shadow-lg overflow-visible
                            transform transition-transform duration-300 hover:scale-105">
              <div className="w-1/2 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-white mb-1">
                  Kleine vuurvlinder
                </h2>
                <span className="text-sm font-medium text-red-200 mb-4">
                  Insect
                </span>
                <p className="text-sm text-red-200">
                  Een vlinder met vurige vleugels die graag in zonnige, bloemrijke plekken vliegt.
                  Denk aan stadsparken, bermen en zonnige tuintjes. De kleine vuurvlinder is een
                  belangrijke bestuiver en een teken dat het leefgebied van insecten gezond is in
                  Rotterdam.
                </p>
              </div>
              <div className="w-1/2"></div>
            </div>
            <img
              src={kleineVuurvlinderImg}
              alt="Kleine vuurvlinder"
              className="absolute -top-6 right-6 w-1/2 h-auto object-cover rounded-lg shadow-xl
                         transform scale-70 origin-top-right"
            />
          </div>

          {/* ─── Kaart 10: Laatvlieger ─── */}
          <div className="relative">
            <div className="flex bg-[#A0785D] rounded-lg p-6 shadow-lg overflow-visible
                            transform transition-transform duration-300 hover:scale-105">
              <div className="w-1/2 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-white mb-1">
                  Laatvlieger
                </h2>
                <span className="text-sm font-medium text-[#FFECC7] mb-4">
                  Vleermuis
                </span>
                <p className="text-sm text-[#FFECC7]">
                  Een van de grotere vleermuizen van Nederland, die je soms in oude fabrieken
                  of met zonsondergang langs kan zien vliegen. Laatvliegers jagen op nachtvlinders
                  en insecten, en houden daarmee hun populaties in toom. Ze zijn een teken dat
                  er genoeg insecten zijn om te overleven.
                </p>
              </div>
              <div className="w-1/2"></div>
            </div>
            <img
              src={laatvliegerImg}
              alt="Laatvlieger"
              className="absolute -top-6 right-6 w-1/2 h-auto object-cover rounded-lg shadow-xl
                         transform scale-70 origin-top-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
