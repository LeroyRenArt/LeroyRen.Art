
import ScrollEntry from './ScrollEntry';

const scrolls = [
  {
    title: 'Radiance Becoming',
    text: 'Permission to shine, to glow, to spiral in truth.',
    image: '/radiance.jpg'
  },
  {
    title: 'Mara Gawala',
    text: 'Truth Carriers of the Dawn. Grief meets grace.',
    image: '/maragawala.jpg'
  },
  {
    title: 'Aluma Walk',
    text: 'Walking in the unknown with soft power and trust.',
    image: '/aluma.jpg'
  }
];

export default function ScrollList() {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-2xl text-yellow-400 mb-8">Scroll Archive</h2>
      {scrolls.map((scroll, index) => (
        <ScrollEntry
          key={index}
          title={scroll.title}
          text={scroll.text}
          image={scroll.image}
        />
      ))}
    </section>
  );
}
