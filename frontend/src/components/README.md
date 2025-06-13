# Components Informatie
Iedere component zijn functie en relatie wordt her uitgelegd.
## De hoofd componenten 
- PeriodeKiezer  
Locatie `PeriodeKiezerComponent` in `src/componets/PeriodeKiezer.tsx`  
Hiermee kan de gebruiker de tijdsperiode aanpassen.
- PolygonMap
Locatie `LeafletPolygonsMap` in `src/componets/PolygonMap.tsx`  
Dit is de map waarin de gebruiker buurten en waarnemingen kan selecteren. Ook zit de keuzelijst van buurten hierin.
- WaarnemingenList
Locatie `WaarnemingenList` in `src/componets/WaarnemingenList.tsx`  
Wanneer de gebruiker op een buurt klikt op de kaart of via de keuzelijst, worden de waarnemingen met WaarnemingenList getoond.
- WaarnemingenInfo
Locatie `DisplayWaarnemingenInfo` in `src/componets/WaarnemingenInfo.tsx`  
De geselecteerde waarnemingen informatie wordt met DisplayWaarnemingenInfo getoond.

## De "parent" component

De parent component is de component die alles samen brengt zodat de data op het juiste moment op de juiste plek is.  
Op dit moment is de parent component `WaarnemingenModulesPage` in `src/componets/WaarnemingenModulePage.tsx`.  
  
De parent is eigenaar van data die gedeeld word met de hoofd(child) components.  
```
const [periode, setPeriode] = useState<PeriodeBereik>({
    startDate:FormatDate( new Date()),
    endDate: FormatDate(staringEndDate()),
});
const [buurtName, setBuurtName] = useState<string>("");

const buurt: Buurt = {
    buurt: buurtName,
    startDate: new Date(periode.startDate),
    endDate: new Date(periode.endDate),
};

// Geselecteerde waarneming
const [waarnemingId, setWaarnemingId] = useState<string>("");

// Waarnemingen data van buurt + periode
const { data = []} = useWaarnemingen(buurt);

useEffect(() => {
    setWaarnemingId(""); 
}, [buurtName, periode.startDate, periode.endDate]);

```

## Alle components
 
[WIP]