import React from "react";

// data
const vehicleData = [
  {
    userId: 1,
    UserName: "U-0356",
    ZoneName: "Zone A",
    WardName: "Ward 1",
    CapturingDate: "2024-09-28",
    CapturingProperties: "Property details here",
  },
  {
    userId: 2,
    UserName: "U-2321",
    ZoneName: "Zone B",
    WardName: "Ward 2",
    CapturingDate: "2024-09-27",
    CapturingProperties: "Property details here",
  },
  {
    userId: 3,
    UserName: "U-73128",
    ZoneName: "Zone C",
    WardName: "Ward 3",
    CapturingDate: "2024-09-26",
    CapturingProperties: "Property details here",
  },
  {
    userId: 4,
    UserName: "U-2358",
    ZoneName: "Zone D",
    WardName: "Ward 4",
    CapturingDate: "2024-09-25",
    CapturingProperties: "Property details here",
  },
  {
    userId: 5,
    UserName: "U-2360",
    ZoneName: "Zone E",
    WardName: "Ward 5",
    CapturingDate: "2024-09-24",
    CapturingProperties: "Property details here",
  },
];

const DataTable = () => {
  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-center">
      <thead>
        <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">User ID</th>
          <th className="py-3 px-6">User Name</th>
          <th className="py-3 px-6">Zone Name</th>
          <th className="py-3 px-6">Ward Name</th>
          <th className="py-3 px-6">Capturing Date</th>
          <th className="py-3 px-6">Capturing Properties</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {vehicleData.map((vehicle, index) => (
          <tr
            key={vehicle.userId}
            className="border-b border-gray-200 hover:bg-gray-100"
          >
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{vehicle.userId}</td>
            <td className="py-3 px-6">{vehicle.UserName}</td>
            <td className="py-3 px-6">{vehicle.ZoneName}</td>
            <td className="py-3 px-6">{vehicle.WardName}</td>
            <td className="py-3 px-6">{vehicle.CapturingDate}</td>
            <td className="py-3 px-6">{vehicle.CapturingProperties}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
