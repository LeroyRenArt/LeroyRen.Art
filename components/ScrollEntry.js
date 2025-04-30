
export default function ScrollEntry({ title, text, image }) {
  return (
    <section className="text-center py-16 px-4">
      <h2 className="text-2xl text-yellow-400 mb-4">{title}</h2>
      <p className="max-w-xl mx-auto text-gray-300">{text}</p>
      {image && <img src={image} alt={title} className="mx-auto mt-6 rounded-xl shadow-lg max-w-md" />}
    </section>
  );
}
