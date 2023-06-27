import React from "react";
import styles from "./deuses.module.css";

const deusesmal = [
  {
    name: "Asmodeus",
    description:
      "Ele é o Senhor dos Nove Infernos e o deus dos diabos. Asmodeus é uma entidade astuta, manipuladora e extremamente poderosa. Ele é conhecido por fazer pactos e cobrar almas em troca de poder.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbC9te6GMlUUuFuK2DAbzY0dHxoZyNI8DaM7CXfOrTS9P5PZU_JQWEIhGEF0nb6kBQVC4&usqp=CAU",
  },
  {
    name: "Orcus",
    description:
      "Considerado o Príncipe dos Mortos-Vivos, Orcus é um deus demônio que governa o reino dos não-mortos. Ele é uma figura temida e associada à morte, ao terror e à destruição.",
    img: "https://i.pinimg.com/236x/78/82/af/7882afc1edd0381e64887d9a0a0071e6.jpg",
  },
];

const deusesbem = [
  {
    name: "Pelor",
    description:
      "Conhecido como o Senhor Brilhante, Pelor é um deus da luz, do sol e da cura. Ele representa a bondade, a compaixão e a proteção. Pelor é reverenciado por aqueles que buscam ajuda, cura e orientação.",
    img: "https://i.pinimg.com/originals/6d/af/79/6daf79988e272a87764c96e0e3775aee.jpg",
  },
  {
    name: "Moradin",
    description:
      "Moradin é o deus dos anões e dos artesãos. Ele é um patrono das forjas, da guerra justa e da sabedoria. Moradin valoriza a honra, a lealdade e a excelência em todas as formas de trabalho.",
    img: "https://i.pinimg.com/originals/e3/a3/ad/e3a3addfe711c551cb68f8758e7233db.jpg",
  },
];

const Deuses = () => {
  return (
    <section className={"container " + styles.deuses}>
      <h1>Deuses do mal</h1>
      {deusesmal.map((item, index) => (
        <div className={styles.boxdeus} key={index}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <img src={item.img} alt={item.name} />
        </div>
      ))}
      <h1>Deuses do bem</h1>
      {deusesbem.map((item, index) => (
        <div className={styles.boxdeus} key={index}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <img src={item.img} alt={item.name} />
        </div>
      ))}
    </section>
  );
};

export default Deuses;
