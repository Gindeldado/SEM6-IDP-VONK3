import { useEffect, useState } from 'react';
import Header from "../components/Header";
import { LeafletPolygonsMap } from '../components/PolygonsMap';
import { WaarnemingenList } from '../components/WaarnemingenList';
import { useWaarnemingen } from '../services/useWaarnemingen';
import { Buurt } from '../services/waarnemingenService';
import {
  FormatDate,
  PeriodeBereik,
  PeriodeKiezerComponent,
  staringEndDate
} from '../components/PeriodeKiezer';
import { BuurtStats, AantalWaarnemingen } from '../components/BuurtStats';
import { DisplayWaarnemingInfo } from '../components/WaarnemingInfo';

function WaarnemingenPortaal() {
  const [periode, setPeriode] = useState<PeriodeBereik>({
    startDate: FormatDate(new Date()),
    endDate: FormatDate(staringEndDate()),
  });
  const [buurtName, setBuurtName] = useState<string>("");

  const buurt: Buurt = {
    buurt: buurtName,
    startDate: new Date(periode.startDate),
    endDate: new Date(periode.endDate),
  };

  const [waarnemingId, setWaarnemingId] = useState<string>("");
  const { data = [] } = useWaarnemingen(buurt);

  useEffect(() => {
    setWaarnemingId("");
  }, [buurtName, periode.startDate, periode.endDate]);

  return (
    <>
      <Header />
      <div className="bg-white min-h-screen px-4 py-8 md:px-12 font-spartan">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Left column */}
          <div className="col-span-1 flex flex-col gap-2">
            {/* Informatie titel */}
            <div className="flex justify-between">
              <h3 className="text-xl font-bold text-[#5F7447] mb-2">Informatie</h3>
            </div>

            {/* Waarnemingen + Bekendste 010’er */}
            <div className="border border-zinc-300 p-0 rounded-lg overflow-hidden w-2/4">
              <div className="flex justify-center items-center p-6">
                <div className="text-center">
                  <p className="text-sm text-zinc-500 mb-1">Waarnemingen</p>
                  <AantalWaarnemingen data={data} />
                </div>
              </div>
            </div>

            {/* Statistieken Section */}
            <h3 className="text-xl font-bold text-[#5F7447] mb-2">Statistieken</h3>
            <BuurtStats data={data} />
            
            
            <h3 className="text-xl font-bold text-[#5F7447] mb-2">Waarneming Details</h3>
            <div className="border border-zinc-300 p-6 rounded-lg">
              <DisplayWaarnemingInfo data={data} id={waarnemingId}/>
            </div>
          </div>

          {/* Map Column */}
          <div className="col-span-2 flex flex-col">
            <h3 className="text-xl font-bold text-[#5F7447] mb-4">Kaart van Rotterdam</h3>

            {/* Kaartcontainer met vaste hoogte én padding */}
            <div className="border border-zinc-300 rounded-lg h-[490px] p-2">
              {/* Binnenin trek je 8px padding af, kaart vult nu netjes binnen de border */}
              <div className="relative h-full w-full rounded-md overflow-hidden">
                <LeafletPolygonsMap
                  setClickedBuurtPolygonName={setBuurtName}
                  clickedBuurtPolygonName={buurtName}
                  waarnemingenData={data}
                  setClickedWaarnemingId={setWaarnemingId}
                  clickedWaarnemingId={waarnemingId}
                />
              </div>
            </div>

            {/* Datumkiezer onder de kaart, met eigen border */}
            <div className="mt-4 relative z-20 border border-zinc-300 p-4 rounded-lg">
              <PeriodeKiezerComponent
                periodeBereik={periode}
                setPeriodeBereik={setPeriode}
              />
            </div>
            <h3 className="text-xl font-bold text-[#5F7447] mb-2">Recente Waarnemingen</h3>
            <div className="border border-zinc-300 p-6 rounded-lg">
              <WaarnemingenList
                allWaarnemingenData={data}
                setClickedWaarnemingId={setWaarnemingId}
                clickedWaarnemingId={waarnemingId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WaarnemingenPortaal;