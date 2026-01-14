function PlayGround({ name, rollNo, batch, favLang }) {
  return (
    <>
  <section className="flex-row gap-6 justify-center">
    <div className="bg-white  w-64 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        Student Name: <span className="italic font-bold">{name}</span>
      </h2>

      <ul className="text-gray-600 space-y-1">
        <li>Roll No: {rollNo}</li>
        <li>Batch: {batch}</li>
        <li>Favorite Language: {favLang}</li>
      </ul>
    </div>
    </section>
    </>
  );
}

export default PlayGround;