import React from "react";

export const CardExperience = () => {
  return (
    <div className="p-8">
      <div className="shadow-xl rounded-lg">
        <div className="h-52 bg-gray-200 bg-cover bg-center rounded-t-lg flex items-center justify-center">
          <p className="text-white font-bold text-4xl">Example Card</p>
        </div>
        <div className="bg-white rounded-b-lg px-8">
          <div className="pt-8 pb-8">
            <h1 className="text-2xl font-bold text-gray-700">Link</h1>
            <p className="text-sm text-gray-600">Loren</p>
            <p className="mt-6 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a sem varius,
              fringilla sapien at, sollicitudin risus.
            </p>
            <div className="flex justify-around mt-8">
              <i className="material-icons">Link</i>
              <i className="material-icons">Link</i>
              <i className="material-icons">Link</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
