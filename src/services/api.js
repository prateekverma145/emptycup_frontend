
export async function fetchDesigners() {
  const res = await fetch(import.meta.env.VITE_API_URL);
  // console.log(import.meta.env.VITE_API_URL);
  return res.json();
}