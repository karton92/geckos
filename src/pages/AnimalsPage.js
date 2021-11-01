import React from "react";
import { Link } from "react-router-dom";
import Animal from "../components/Animal";
import gek1 from "../images/gek1.jpg";
import gek2 from "../images/gek2.jpg";
import gek3 from "../images/gek3.jpg";

const animals = [
  {
    id: 0,
    img: gek1,
    name: "Gekon orzęsiony (Correlophus ciliatus)",
    text: "Gekon orzęsiony to endemiczny gatunek jaszczurki z rodzaju Correlophus występujący wyłącznie na Nowej Kaledonii. Do 2012 należał do rodzaju Rhacodactylus, ale wówczas został (razem z C. sarasinorum) przeniesiony do rodzaju Correlophus. Gatunek ten uznawany był za wymarły, aż do 1994 roku, kiedy został odkryty na Île des Pins (małej wyspie leżącej na południe od Grande Terre, głównej wyspy Nowej Kaledonii). Złapane osobniki okazały się niewymagające w hodowli. W USA gatunek ten jest popularny w hodowli amatorskiej. Najbardziej wyróżniającą się cechą tego gekona są wyrostki skórne, znajdujące się nad oczami oraz na grzbiecie, od których gekon wziął swoją nazwę. Ciało jest masywne a jego głowa jest spłaszczona i kształtem przypomina klin. Jak wszystkie gekony (oprócz podrodziny Eublepharinae) nie posiadają powiek, więc do czyszczenia oczu, używają swojego długiego języka. Gekony orzęsione mają dobrze rozwinięte poduszki palców, oraz sprawne pazury. Spodnie części palców, oraz końcówka ogona wyłożone są lamelami, które są zbudowane z milionów szczecinek, zwanych setae, które umożliwiają im przywieranie do chropowatych powierzchni, a nawet do wspinania się na gładkich powierzchniach np. szkle. Ich ogon jest stosunkowo długi, a jego końcówka jest lekko spłaszczona i kształtem przypomina wiosło. W naturze większość widywanych gekonów nie posiada ogona, gdyż w przeciwieństwie do większości jaszczurek, temu gatunkowi ogon nie odrasta.",
  },
  {
    id: 1,
    img: gek2,
    name: "Gekon olbrzymi (Rhacodactylus leachianus)",
    text: "Większość gekonów to jaszczurki niewielkie i zapewne dlatego te z nich, które imponują wielkością zawsze robią wrażenie na terrarystach. Nic więc dziwnego, że uznawany za największy gatunek gekona Rhacodactylus leachianus mało kogo pozostawia obojętnym. Nazwane potocznie zgodnie ze swą najbardziej rzucającą się w oczy cechą gekonami olbrzymimi, jaszczurki te są krępe, o nieproporcjonalnie wielkich łapach i krótkim ogonie. Ich skóra w różnych odcieniach zieleni i szarości, często usiana białymi, czarnymi, różowymi lub żółtymi znaczeniami sprawia wrażenie jakby było jej zbyt wiele. Oczy są stosunkowo niewielkie i pozbawione ruchomych powiek. Palce wyposażone w przylgi i pazurki, a także chwytny ogon umożliwiają zwierzęciu sprawne przemieszczanie się wśród gałęzi drzew. Wielkość łap jest najprawdopodobniej związana z wagą zwierzęcia ? większa powierzchnia przylg zwiększa siłę z jaką gekon przytrzymuje się powierzchni, na której przebywa. System ten jest na tyle skuteczny, że dorosłe gekony olbrzymie są w stanie odpoczywać na szybie, mimo, że po gładkich powierzchniach nie poruszają się tak sprawnie jak np. gekony orzęsione. Mimo nieco kontrowersyjnej urody (a może właśnie dzięki niej) gekony olbrzymie mają swoich zagorzałych zwolenników, w tym hodowców koncentrujących się na tym gatunku i poszerzającym swoje kolekcje o kolejne odmiany lokalne. Większość miłośników gekonów z dawnego rodzaju Rhacodactylus prędzej czy później zaczyna marzyć o staniu się właścicielem gekona tego gatunku. Jest coś wyjątkowego w obcowaniu z tym budzącym szacunek zwierzęciem, w możliwości codziennej obserwacji jego poczynań w terrarium i nasłuchiwaniu wydawanych przez niego dźwięków.",
  },
  {
    id: 2,
    img: gek3,
    name: "Gekon płaczący (Lepidodactylus lugubris)",
    text: "Jeden z najmniejszych występujących gekonów. Bardzo drobna budowa ciała. Ogon walcowaty, stanowi połowę całkowitej długości ciała. Głowa spłaszczona, kształtu trójkąta. Oczy żółte z pionową źrenicą, bez powiek. Po bokach głowy biegną ciemniejsze paski. Na grzbiecie i ogonie posiada charakterystyczny, ciemny wzór o kształcie zygzakowatych linii. Palce wyposażone w przylgi (lamelle) zakończone pazurkami. Gekon jest płochliwy i nieufny w stosunku do ludzi. W naturze prowadzi stadny tryb życia (w terrarium najlepiej trzymać co najmniej 4 osobniki). Podczas hodowli po czasie są w stanie przyzwyczaić się do opiekuna. Mają bardzo drobną budowę ciała, więc branie go na rękę nie jest rozsądne. Potrafią bardzo szybko biegać i dość daleko skakać, przez co schwytanie może być kłopotliwe.",
  },
];

const AnimalsPage = ({ match }) => {
  return (
    <>
      <h1>Informacje o gatunku</h1>
      <Animal
        id={match.params.id}
        name={animals[match.params.id].name}
        img={animals[match.params.id].img}
        text={animals[match.params.id].text}
      />
      <Link to="/animals">Powrót do listy gatunków</Link>
    </>
  );
};

export default AnimalsPage;
