import fetch from "node-fetch";

async function testSave() {
  try {
    const res = await fetch("http://localhost:3000/api/saveToDrive", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: "Teste de flyer automatizado",
        fileName: "flyer-teste.txt"
      })
    });

    const data = await res.json();
    console.log("Resultado do teste:", data);
  } catch (err) {
    console.error("Erro ao testar saveToDrive:", err);
  }
}

testSave();