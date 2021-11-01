import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 0,
    title: "Neischnocolus iquitos – nowy gatunek ptasznika!",
    author: "Kaderka, 2020",
    text: "Do odkrycia nowego 10-tego gatunku doszło w październiku 2017 roku w okolicy miejscowości Iquitos (rejon Loreto w północnym Peru). Podczas badań odkryto jednego dorosłego samca, który został zakonserwowany w etanolu oraz jedną niedojrzałą samicę. Samica została odchowana, dojrzała płciowo w 2019 roku, wtedy została także zakonserwowana w etanolu i zdeponowana do muzeum historii naturalnej w Lima (Peru).",
  },
  {
    id: 1,
    title:
      "Floryda chce zakazać hodowli legwanów zielonych i teju (Salvator i Tupinambis)",
    author: "Krzysztof Lis",
    text: "Władze Florydy debatują nad wprowadzeniem zakazu hodowli legwanów zielonych (Iguana iguana) oraz teju z rodzajów Salvator i Tupinambis. Wielu terrarystów zamieszkujących Florydę spodziewało się takiego zakazu. Zarówno legwany, jak i teju są gatunkiem inwazyjnym, a liczba osobników, które zadomowiła się na Florydzie jest coraz większa. Zaproponowana przez władze ustawa SB 1414 miałaby zakazać hodowli tych gatunków w stanie Floryda z nielicznymi wyjątkami dla placówek naukowych i hodowli w celach edukacyjnych. Oczywiście zakaz hodowli niektórych gatunków na Florydzie to nic nowego.",
  },
  {
    id: 2,
    title:
      "Nie żyje dr Norman Platnick – Wybitny arachnolog i twórca The World Spider Catalog",
    author: "Krzysztof Lis",
    text: "Z przykrością informujemy o śmierci wybitnego arachnologa jakim był dr Norman Platnick. Poinformował o tym jego syn na Facebooku. Śmierć była następstwem wypadku, który miał miejsce 9 dni temu. 30 marca w wyniku udaru lewej części mózgu dr Norman Platnick spadł ze schodów. Z licznymi obrażeniami czaszki trafił on do szpitala. W szpitalu odzyskał przytomność, lecz nie był w stanie mówić, czy nawet mrugnąć oczami w odpowiedzi na zapytanie lekarzy. Zmarł dzisiaj w wieku 68 lat.",
  },
];

const StartPage = () => {
  const artList = articles.map((art) => <Article key={art.id} {...art} />);

  return <div>{artList}</div>;
};

export default StartPage;
