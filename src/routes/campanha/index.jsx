import React from "react";
import styles from "./campanha.module.css";

const Campanha = () => {
  return (
    <section className={"container " + styles.campanha}>
      <h1>A Ascensão das Sombras</h1>
      <p>
        Nesta jornada épica de Dungeons & Dragons, vocês assumirão o papel de heróis escolhidos por uma antiga profecia
        para enfrentar um mal terrível que assola o reino de Eldoria. Este reino outrora pacífico foi tomado por uma
        sombra sinistra, trazendo caos e destruição. Os reis foram assassinados, e um governante tirânico chamado Lord
        Morvath agora governa com punho de ferro.
      </p>
      <p>
        Vocês, por um acaso do destino, foram escolhidos para serem os heróis que podem derrotar as trevas e trazer a
        paz de volta a Eldoria. A jornada será perigosa e desafiadora, mas vocês têm coragem e habilidades para
        enfrentar essa missão. Através de batalhas emocionantes, enigmas intrigantes e alianças improváveis, vocês devem
        reunir artefatos mágicos perdidos e encontrar aliados poderosos para confrontar Lord Morvath.
      </p>
      <p>
        Esta é uma campanha repleta de aventuras, reviravoltas e momentos épicos. Suas escolhas e ações moldarão o
        destino de Eldoria. Vocês estão prontos para enfrentar a escuridão, desvendar mistérios antigos e lutar pela
        justiça? Preparem-se para embarcar nesta jornada perigosa e se tornarem lendas.
      </p>
      <div className={styles.imagem}>
        <img
          src="https://static.wixstatic.com/media/371a13_4f585219728347d2bcc201c81bf5e8d5~mv2.png/v1/crop/x_0,y_137,w_800,h_463/fill/w_560,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/371a13_4f585219728347d2bcc201c81bf5e8d5~mv2.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Campanha;
