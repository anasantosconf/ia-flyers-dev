import { google } from "googleapis";

// Função para salvar arquivo no Drive
export async function saveFileToDrive({ content, fileName, folderId }) {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/drive"]
  );

  const drive = google.drive({ version: "v3", auth });

  const response = await drive.files.create({
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
    requestBody: {
      name: fileName,
      parents: [folderId],
    },
    media: {
      mimeType: "text/plain",
      body: content,
    },
  });

  return response.data;
}

// Função de exemplo para pegar logos do Drive (mais tarde podemos aprimorar)
export async function getLogoFromDrive(folderId, logoName) {
  const auth = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/drive.readonly"]
  );

  const drive = google.drive({ version: "v3", auth });

  const res = await drive.files.list({
    q: `'${folderId}' in parents and name='${logoName}'`,
    fields: "files(id, name, mimeType)",
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
  });

  return res.data.files[0] || null;
}