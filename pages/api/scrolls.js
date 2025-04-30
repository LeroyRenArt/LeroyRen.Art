
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { title, text, image } = req.body;
    console.log('New Scroll Received:', { title, text, image });
    res.status(200).json({ message: 'Scroll received', data: { title, text, image } });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
