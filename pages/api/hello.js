export default function handler(req, res) {
  console.log("test");
  res.status(200).json({ text: "Hello" });
}
