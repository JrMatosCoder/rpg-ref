import React from "react";
import styles from "./jogadores.module.css";
import { Link, useParams } from "react-router-dom";
//imgs
import Ladino from "../../assets/img/ladino.jpeg";
import Monge from "../../assets/img/monge.jpeg";

const personagens = [
  {
    name: "Lion Star",
    path: "lion-star",
    classe: "Ladino",
    rise: "Aufaddale",
    personality: "Neutro/mau",
    history:
      "Eu nasci em um pequeno vilarejo, onde cresci e vivi minha vida inteira. Tive meus pais assassinados por serem criminosos conhecidos por todos os vilarejos, sendo deixado desamparado muito jovem para viver nas ruas. Aprendi a me virar sozinho, sem depender de ninguém, roubando para garantir minha sobrevivência. Logo cresci e decidi me tornar um assassino muito conhecido, temido e procurado pelas ruas da capital de Aufaddale. Tenho a fama de ser sorrateiro, sempre viajando muito para não ser pego pelas autoridades locais, vestindo-me de forma desconhecida. Todos aqueles que desejam meus serviços sempre me abordam de maneira diferente. Eu, como todo ser vivente, tenho meus defeitos. Sou orgulhoso demais e confio excessivamente em minhas habilidades.",
    img: Ladino,
  },
  {
    name: "Shay Cormac",
    path: "shay-cormac",
    classe: "Monge",
    rise: "Eslorford",
    personality: "neutro/bom",
    history:
      "Shay Cormac teve uma infância nada fácil. Órfão, ele vivia em uma pequena vila. No entanto, um dia ele foi acusado injustamente de um crime que não cometeu. Desiludido, ele decidiu deixar a vila para trás. Porém, o destino o levou a um eremitério, onde encontrou acolhimento. Passou sua juventude isolado nesse local, por longos dez anos. Durante esse tempo, Shay jurou a si mesmo que provaria sua inocência em relação ao crime injustamente atribuído a ele.",
    img: Monge,
  },
];

export const Jogadores = () => {
  return (
    <section className={"container " + styles.jogadores}>
      <h1>Personagens dos jogadores</h1>
      {personagens.map((item, index) => (
        <div key={index} className={styles.boxperson}>
          <img src={item.img} />
          <Link to={item.path}>{item.name}</Link>
        </div>
      ))}
    </section>
  );
};

export const Jogador = () => {
  const params = useParams();
  const Person = personagens.filter((item) => item.path == params.id);
  return (
    <section className={"container " + styles.jogador}>
      {Person.map((item, index) => (
        <div key={index} className={styles.boxjogador}>
          <h1>{item.name}</h1>
          <img src={item.img} />
          <h2></h2>
          <p>
            <strong>Classe: </strong>
            {item.classe}
          </p>
          <p>
            <strong>Nasceu: </strong>
            {item.rise}
          </p>
          <p>
            <strong>Personalidade: </strong>
            {item.personality}
          </p>
          <p>
            <strong>História: </strong>
            {item.history}
          </p>
        </div>
      ))}
    </section>
  );
};
