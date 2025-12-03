function Card({
  title,
  desc,
  bttnText,
  cardColor = "bg-gray-100",
  bttnColor = "bg-black hover:bg-gray-700",
}) {
  return (
    <div className={`p-6 ${cardColor} rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{desc}</p>
      <a
        href="jobs.html"
        className={`inline-block px-4 py-2 text-white rounded-lg ${bttnColor} `}
      >
        {bttnText}
      </a>
    </div>
  );
}

export default Card;
