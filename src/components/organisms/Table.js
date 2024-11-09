// Table.js
const Table = ({ headers, rows }) => {
  return (
    <div className="px-24 py-2">
      <table className="w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border border-slate-300 p-4 text-left font-semibold text-slate-900">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border border-slate-300 p-4 text-slate-500">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
