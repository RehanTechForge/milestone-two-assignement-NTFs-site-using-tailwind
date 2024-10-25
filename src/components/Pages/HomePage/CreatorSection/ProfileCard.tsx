const ProfileCards = () => {
  const profiles = [
    {
      id: 1,
      name: "Keepitreal",
      totalSales: "34.53 ETH",
      image: "/images/creator/a1.png", // Replace with actual image path or URL
    },
    {
      id: 2,
      name: "DigiLab",
      totalSales: "34.53 ETH",
      image: "/images/creator/a2.png",
    },
    {
      id: 3,
      name: "GravityOne",
      totalSales: "34.53 ETH",
      image: "/images/creator/a3.png",
    },
    {
      id: 4,
      name: "Juanie",
      totalSales: "34.53 ETH",
      image: "/images/creator/a4.png",
    },
    {
      id: 5,
      name: "BlueWhale",
      totalSales: "34.53 ETH",
      image: "/images/creator/a5.png",
    },
    {
      id: 6,
      name: "Mr Fox",
      totalSales: "34.53 ETH",
      image: "/images/creator/a6.png",
    },
    {
      id: 7,
      name: "Shroomie",
      totalSales: "34.53 ETH",
      image: "/images/creator/a7.png",
    },
    {
      id: 8,
      name: "Robotica",
      totalSales: "34.53 ETH",
      image: "/images/creator/a8.png",
    },
    {
      id: 5,
      name: "BlueWhale",
      totalSales: "34.53 ETH",
      image: "/images/creator/a9.png",
    },
    {
      id: 6,
      name: "Mr Fox",
      totalSales: "34.53 ETH",
      image: "/images/creator/a10.png",
    },
    {
      id: 7,
      name: "Shroomie",
      totalSales: "34.53 ETH",
      image: "/images/creator/a14.png",
    },
    {
      id: 7,
      name: "Robotica",
      totalSales: "34.53 ETH",
      image: "/images/creator/a15.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 px-5 sm:px-20 sm:grid-cols-4 lg:grid-cols-4 gap-6 p-6 text-white">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="bg-backgroundSecondary p-4 rounded-lg shadow-lg"
        >
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-700"
              />
              <div className="absolute top-0 right-0 bg-background text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                {profile.id}
              </div>
            </div>
            <h3 className="mt-4 text-lg font-bold">{profile.name}</h3>
            <p className="text-sm text-textColor">
              <span className="text-captionText">Total Sales:</span>{" "}
              {profile.totalSales}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCards;
