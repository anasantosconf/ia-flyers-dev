"use client";
import { useState } from "react";

export default function FlyerPreview({ prompt }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateFlyer = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generateFlyer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setImage(data.imageUrl);
    } catch (err) {
      console.error(err);
      alert("Erro ao gerar o flyer");
    }
    setLoading(false);
  };

  return (
    <div>
      <button onClick={generateFlyer} disabled={loading}>
        {loading ? "Gerando..." : "Gerar Flyer"}
      </button>
      {image && (
        <div style={{ marginTop: "20px" }}>
          <img src={image} alt="Pré-visualização do flyer" width={400} />
        </div>
      )}
    </div>
  );
}