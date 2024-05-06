const data = [
  { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, text: "Phasellus semper scelerisque leo at tempus." },
  { id: 3, text: "Duis aliquet sollicitudin neque," },
];

export default function App() {
  return (
    <div className="container">
      {data.map((item, index) => (
        <div key={index}>{item.text}</div>
      ))}
    </div>
  );
}
