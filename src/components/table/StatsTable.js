import React from 'react';

const StatsTable = () => (
    <div className="mt-4">
        <p><strong>Stats:</strong></p>
        <table className="stats-table w-full border-collapse">
            <thead>
                <tr>
                    <th className="border p-2 bg-gray-200">HP</th>
                    <th className="border p-2 bg-gray-200">Attack</th>
                    <th className="border p-2 bg-gray-200">Defense</th>
                    <th className="border p-2 bg-gray-200">Special Attack</th>
                    <th className="border p-2 bg-gray-200">Special Defense</th>
                    <th className="border p-2 bg-gray-200">Speed</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border p-2">45</td>
                    <td className="border p-2">49</td>
                    <td className="border p-2">49</td>
                    <td className="border p-2">65</td>
                    <td className="border p-2">65</td>
                    <td className="border p-2">45</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default StatsTable;