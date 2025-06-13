import Header from "../components/Header";

/**
 * "Over ons" pagina is de landings pagina
 * @returns 
 */
export default function HomePage() {
    return (
        <div className="bg-white min-h-screen">
            <Header />

            <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12 space-y-16">
                <div>
                    <h1 className="text-3xl font-bold text-[#5F7447] mb-2">
                        Het groene knooppunt
                    </h1>
                    <p>
                        De webapplicatie is ontwikkeld om gebruikers meer inzicht te geven in de biodiversiteit van Rotterdam. <br />
                        Door data uit verschillende bronnen samen te brengen en te vertalen naar een toegankelijke en visuele applicatie, <br />
                        willen we natuurliefhebbers een beter overzicht en dieper inzicht bieden in de biodiversiteit van hun leefomgeving. <br />
                        <br />
                        De focus ligt op waarnemingen in Rotterdam van de  <a href="/10van010" className="text-[#5F7447]"><strong>"10 van 010"</strong></a> <br />
                        tien diersoorten die door de gemeente Rotterdam zijn geselecteerd als indicatoren voor de staat van de biodiversiteit. <br />
                        Deze soorten zijn gekozen omdat ze representatief zijn voor de gezondheid van het stedelijke ecosysteem. <br />
                        Klik bovenin de navigatiebalk op "10 van 010" om meer te lezen over deze soorten. <br />
                        <br />
                        De webapplicatie bestaat uit meerdere onderdelen: <br />
                    </p>
                    <ul>
                        <li>
                            <strong><a href="/waarnemingen-portaal"className="text-[#5F7447] ">Waarnemingenportaal</a>: </strong>
                            Bekijk hier waarnemingen van de 10 van 010-soorten per buurt en tijdsperiode.
                        </li>
                        <li>
                            <strong><a href="/10van010"className="text-[#5F7447] ">10 van 10</a>: </strong>
                            Leer hoe je de 10 van 010-soorten herkent en waar je ze kunt vinden.
                        </li>
                        <li>
                            <strong><a href="/dashboard"className="text-[#5F7447] ">Dashboard</a>: </strong>
                            Ontdek statistieken per soort voor meer inzicht in trends en ontwikkelingen.
                        </li>
                        <li>
                            <strong><a href="/biodiversiteit-tips" className="text-[#5F7447] ">Biodiversiteitstips</a>: </strong>
                            Algemene tips om zelf bij te dragen aan een betere biodiversiteit in jouw omgeving.
                        </li>
                    </ul>
                        <br />
                        <br />
                    <p>
                        <strong>Bronnen van waarnemingsdata:</strong>
                        <a href="https://waarneming.nl" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 underline font-semibold hover:text-blue-800 transition-colors">
                            Waarneming.nl
                        </a>, Stichting Observation International en lokale partners.
                    </p>
                </div>
            </div>
        </div>
    )
}