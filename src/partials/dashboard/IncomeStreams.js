import React from 'react';

export default function IncomeStreams() {
  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Income Streams</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Source</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Locations</div>
                </th>
                {/* <th className="p-2">
                  <div className="font-semibold text-center">Traffic avg</div>
                </th> */}
                {/* <th className="p-2">
                  <div className="font-semibold text-center">Conversion</div>
                </th> */}
                <th className="p-2">
                  <div className="font-semibold text-center">Est Income Rate</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Total</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Invest</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                      <circle fill="#24292E" cx="18" cy="18" r="18" />
                      <path d="M18 10.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V24c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" fill="#FFF" />
                    </svg>
                    <div className="text-gray-800">Lemonade Stand</div>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center">1</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">7</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-light-blue-500">47</div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center">41</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center text-green-500">$19k</div>
                </td>
                <td className="p-2 content-end">
                  <button className="ml-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded w-70">
                    $40
                  </button>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                      <circle fill="#24292E" cx="18" cy="18" r="18" />
                      <path d="M18 10.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V24c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" fill="#FFF" />
                    </svg>
                    <div className="text-gray-800">Banana Stand</div>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center">1</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">2</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-light-blue-500">29</div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center">18</div>
                </td> */}

                <td className="p-2">
                  <div className="text-center text-green-500">$180k</div>
                </td>
                <td className="p-2">
                  <button className="ml-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded w-70">
                    $4.3k
                  </button>
                </td>
              </tr>

              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                      <circle fill="#24292E" cx="18" cy="18" r="18" />
                      <path d="M18 10.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V24c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" fill="#FFF" />
                    </svg>
                    <div className="text-gray-800">Anthropoligie</div>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center">1</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">0</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-light-blue-500">0</div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center">4</div>
                </td> */}

                <td className="p-2">
                  <div className="text-center text-green-500">0</div>
                </td>
                <td className="p-2">
                  <button className="ml-5 bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-2 rounded cursor-not-allowed disabled:opacity-50 w-70">
                    $2mm
                  </button>
                </td>
              </tr>

              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                      <circle fill="#24292E" cx="18" cy="18" r="18" />
                      <path d="M18 10.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V24c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" fill="#FFF" />
                    </svg>
                    <div className="text-gray-800">ISP</div>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center">1</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">0</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-light-blue-500">0</div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center">4</div>
                </td> */}

                <td className="p-2">
                  <div className="text-center text-green-500">0</div>
                </td>
                <td className="p-2">
                  <button className="ml-5 bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-2 rounded cursor-not-allowed disabled:opacity-50 w-70">
                    $10mm
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}
