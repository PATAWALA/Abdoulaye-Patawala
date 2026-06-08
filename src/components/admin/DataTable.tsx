'use client';

import React from 'react';

interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}

function DataTable<T extends { id: number | string }>({ columns, data, onEdit, onDelete }: DataTableProps<T>) {
  return (
    <div className="bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-700">
              {columns.map((col) => (
                <th key={col.key} className="text-left text-xs text-gray-500 uppercase tracking-wider px-6 py-4">
                  {col.header}
                </th>
              ))}
              {(onEdit || onDelete) && <th className="w-24 px-6 py-4"></th>}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b border-dark-700/50 hover:bg-dark-700/30 transition-colors">
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4 text-sm text-gray-300">
                    {col.render ? col.render(item) : String((item as Record<string, unknown>)[col.key] ?? '')}
                  </td>
                ))}
                {(onEdit || onDelete) && (
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {onEdit && (
                        <button onClick={() => onEdit(item)} className="text-gray-400 hover:text-gold-400 transition-colors">
                          ✏️
                        </button>
                      )}
                      {onDelete && (
                        <button onClick={() => onDelete(item)} className="text-gray-400 hover:text-red-400 transition-colors">
                          🗑️
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={columns.length + (onEdit || onDelete ? 1 : 0)} className="px-6 py-12 text-center text-gray-600">
                  Aucune donnée pour le moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;