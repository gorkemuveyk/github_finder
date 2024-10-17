import React from "react";

const UserText = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 justify-between sm:justify-around md:justify-start">
      <div className="w-32 h-32">
        <img
          src="https://placehold.co/200x200"
          className="w-full h-full rounded-2xl"
        />
      </div>
      <div className="w-full md:w-8/12">
        <h2 className="text-2xl font-bold">Adı Soyadı</h2>
        <span className="text-xs italic font-semibold">@kullaniciadi</span>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi
          nostrum maiores, magnam iusto praesentium laboriosam atque adipisci
          cum? Vel recusandae
        </p>
      </div>
    </div>
  );
};

export default UserText;
