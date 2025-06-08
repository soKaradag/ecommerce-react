export async function fetchProfilePhoto(userId: string): Promise<string> {
  const res = await fetch(`http://localhost:8080/api/profile-photo/${userId}`);
  if (!res.ok) throw new Error("Fotoğraf alınamadı");
  return res.text();
}

export async function uploadProfilePhoto(formData: FormData, token: string | null): Promise<void> {
  await fetch("http://localhost:8080/api/profile-photo/upload", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
}
