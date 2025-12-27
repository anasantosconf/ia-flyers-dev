import FlyerPreview from "./components/FlyerPreview";

export default function Home() {
  const prompt = "Crie um flyer de consórcio moderno e corporativo..."; // Aqui você coloca o prompt que quiser

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Assistente de Flyers</h1>
      <FlyerPreview prompt={prompt} />
    </main>
  );
}