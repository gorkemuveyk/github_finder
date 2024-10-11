import React from "react";

const UserInfo = () => {
  return (
    <div className="bg-white w-full rounded-2xl p-6">
      <div className="flex justify-between">
        <div className="w-48 h-48">
          <img
            src="https://placehold.co/200x200"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">Adı Soyadı</h2>
          <span className="text-xs italic font-semibold">@kullaniciadi</span>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi
            nostrum maiores, magnam iusto praesentium laboriosam atque adipisci
            cum? Vel recusandae
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
