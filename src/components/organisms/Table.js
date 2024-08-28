const Table = ({ headers, rows }) => {
  return (
    <div className="table-container">
      <table className="w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm dark:border-slate-500 dark:bg-slate-800">
        <thead className="bg-slate-50 dark:bg-slate-700">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border border-slate-300 p-4 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border border-slate-300 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
