import { NextPage, GetStaticProps } from "next";
import {
  CharacterInterface,
  InfoInterface,
  FetchCharacterInterface,
} from "../../interface";
import Image from "next/image";
import Link from "next/link";

interface SSGHomeProps {
  players: CharacterInterface[];
  info: InfoInterface;
}

export const getStaticProps: GetStaticProps = async () => {
  const data: FetchCharacterInterface = await fetch(
    "https://rickandmortyapi.com/api/character"
  ).then((res) => res.json());

  return {
    props: {
      players: data.results,
      info: data.info,
    },
  };
};

const SSGHome: NextPage<SSGHomeProps> = ({ players, info }) => {
  return (
    <div>
      <h1>Home</h1>
      <h5>{info.count}</h5>
      {players.map((i) => (
        <Link href={`/ssg/${i.id}`} key={i.id}>
          <a>
            <p>{i.name}</p>
            <Image src={i.image} alt="profile" width={200} height={150} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default SSGHome;
