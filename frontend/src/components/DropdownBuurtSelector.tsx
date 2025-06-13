type BuurtSelectorProps = {
    selectedBuurt: string;
    onSelectBuurt: (value: string) => void;
    buurten: string[];
};

/**
 * Component die alle buurten toont in een dropdownmenu en selecteerbaar maakt.
 *
 * @param selectedBuurt De momenteel geselecteerde buurt.
 * @param onSelectBuurt Callbackfunctie die wordt aangeroepen bij selectie van een buurt.
 * @param buurten Een lijst met buurt-namen om weer te geven in het dropdownmenu.
 * @returns JSX-element met een selectievak voor buurten.
 */
export function DropdownBuurtSelector({ selectedBuurt, onSelectBuurt, buurten }: BuurtSelectorProps) {
  return (
    <div className="mb-2">
      <label className="text-sm font-medium text-gray-700 mr-2">Selecteer buurt:</label>
      <select
        className="border rounded px-2 py-1 text-sm"
        value={selectedBuurt}
        onChange={(e) => onSelectBuurt(e.target.value)}
      >
        <option value="">-- Kies een buurt --</option>
        {buurten.map((naam, idx) => (
          <option key={idx} value={naam}>
            {naam}
          </option>
        ))}
      </select>
    </div>
  );}