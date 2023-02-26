import { useState, useEffect } from 'react';

import styles from './style.module.scss';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const IMG_URL = 'https://pokemon.wingzero.tw/assets/pokemon/';
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};
const main_types = Object.keys(colors);

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    let data = [];
    for (let i = 1; i <= 150; i++) {
      const res = await fetch(API_URL + i);
      const { name, id, types } = await res.json();
      let poke_types = types.map((type) => type.type.name);
      let type = main_types.find((type) => poke_types.indexOf(type) > -1);
      data.push({
        name: name[0].toUpperCase() + name.slice(1),
        orgId: id,
        id: id.toString().padStart(3, '0'),
        type: type,
        color: colors[type],
      });
    }
    setPokemons(data);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className={styles.Pokedex}>
      <div className={styles['poke-container']}>
        {pokemons.map(({ id, name, type, color }) => (
          <div key={id} className={styles.pokemon} style={{ backgroundColor: color }}>
            <div className={styles['img-container']}>
              <img src={IMG_URL + id + '.png'} alt="" />
            </div>
            <div className={styles.info}>
              <span className={styles.number}>#{id}</span>
              <h3 className={styles.name}>{name}</h3>
              <small className={styles.type}>
                Type: <span>{type}</span>
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
