

const data: HeroType[] = [
  {
    "name": "3-D Man",
    "alignment": "good",
    "intelligence": 50,
    "strength": 31,
    "speed": 43,
    "durability": 32,
    "power": 25,
    "combat": 52,
    "total": 233
  },
  {
    "name": "A-Bomb",
    "alignment": "good",
    "intelligence": 38,
    "strength": 100,
    "speed": 17,
    "durability": 80,
    "power": 17,
    "combat": 64,
    "total": 316
  },
  {
    "name": "Abe Sapien",
    "alignment": "good",
    "intelligence": 88,
    "strength": 14,
    "speed": 35,
    "durability": 42,
    "power": 35,
    "combat": 85,
    "total": 299
  },
]

export type HeroType = {
  name: string;
  alignment: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
  total: number;
};

export const fetchHero = (): Promise<HeroType> => {
  // shuffle the data
  const shuffledData = data.sort(() => Math.random() - 0.5);
  console.log(shuffledData);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(shuffledData[0]);
    }, 1000);
  });

};


