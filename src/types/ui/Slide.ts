export interface Slide {
  id: number;
  image: string;
  title: string;
  content: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    image: "/1.jpg",
    title: "BİNLERCE ÜRÜN",
    content:
      "Her ihtiyaca hitap eden binlerce doğal ve taze ürün.\n" +
      "Bahçeden sofraya gelen en özel seçenekler.\n" +
      "Güvenli alışverişin ve kalite garantisinin adresi.\n" +
      "Doğanın kalbinde huzuru yeniden keşfedin.",
  },
  {
    id: 2,
    image: "/2.jpg",
    title: "ANINDA SEPETTE",
    content:
      "Zamandan tasarruf edin, kolayca alışveriş yapın.\n" +
      "Beğendiğiniz ürünler tek tıkla sepetinizde.\n" +
      "Hızlı, pratik ve zahmetsiz deneyim.\n" +
      "Modern yaşamın dinamizmiyle tanışın.",
  },
  {
    id: 3,
    image: "/3.jpg",
    title: "EN UYGUN FİYAT",
    content:
      "Kaliteden ödün vermeden hesaplı alışveriş.\n" +
      "Her bütçeye uygun fırsatlarla dolu bir dünya.\n" +
      "Sadece ihtiyaçlarınıza değil, cebinize de dost.\n" +
      "Dalgaların sesiyle güne merhaba deyin.",
  },
];

