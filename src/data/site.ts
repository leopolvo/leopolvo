export type Trip = {
  slug: string;
  title: string;
  places: string;
  date: string;
  photos: number;
};

export const trips: Trip[] = [
  { slug: "filipinas", title: "Filipinas", places: "El Nido, Palawan y sus islas", date: "Diciembre 2014 – Enero 2015", photos: 23 },
  { slug: "tailandia", title: "Tailandia", places: "Bangkok, Krabi y las islas del sur", date: "Diciembre 2013 – Enero 2014", photos: 19 },
  { slug: "argentina", title: "Patagonia e Isla de Pascua", places: "Perito Moreno, Ushuaia, Isla de Pascua", date: "Diciembre 2012", photos: 21 },
  { slug: "indonesia", title: "Singapur, Bali y Komodo", places: "Singapur, Bali, Nusa Lembongan, Komodo, Dubái", date: "Agosto 2012", photos: 22 },
  { slug: "tallin", title: "Tallin y Helsinki", places: "Estonia y Finlandia", date: "Octubre 2011", photos: 13 },
  { slug: "costa-rica", title: "Costa Rica", places: "Selva, volcanes y dos océanos", date: "2007", photos: 24 },
  { slug: "algarve", title: "El Algarve", places: "Costa sur de Portugal", date: "Escapada", photos: 13 },
];

export const pad = (n: number) => String(n).padStart(2, "0");
export const photoUrl = (slug: string, i: number) => `/media/${slug}/${pad(i)}.webp`;
export const thumbUrl = (slug: string, i: number) => `/media/${slug}/${pad(i)}-t.webp`;

export const videos = [
  ["img_0056", "Qué peste"], ["img_0214", "De mayor"], ["img_0232", "Nominación"],
  ["img_0299", "Camello"], ["img_0351", "A tope"], ["img_0454", "Pastel"],
  ["img_0458", "Bragas"], ["img_0482", "Máquinas"], ["img_0558", "4 chistes"],
  ["img_0559", "Gitano"], ["img_0562", "Burros"], ["img_0570", "Ritmo"],
  ["img_0602", "Cigüeña"], ["img_0607", "Pileta"], ["img_0614", "Trompazo"],
].map(([id, title]) => ({ id, title, src: `/media/videos/${id}.mp4`, poster: `/media/videos/${id}.jpg` }));

export const panoramas = [
  { title: "Cartagena de Indias", place: "Colombia", panoid: "cRKzq0Ta1HMAAAQYN3SSIQ" },
  { title: "Casa de Hobo", place: "Cartagena de Indias, Colombia", panoid: "G2ZXYtcm3zUAAAQZTmoHyQ" },
];

export const social = {
  youtube: "https://www.youtube.com/channel/UCyuzr-uNTks--hHQPsLBrUw",
  instagram: "https://instagram.com/leopolvo2/",
};
