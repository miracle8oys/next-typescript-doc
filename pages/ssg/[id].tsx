import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { CharacterInterface, FetchCharacterInterface } from "../../interface";
import { useRouter } from "next/router";
import Image from "next/image";

interface SSGDetailProps {
  players: CharacterInterface;
  query: any;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: FetchCharacterInterface = await fetch(
    `https://rickandmortyapi.com/api/character`
  ).then((res) => res.json());

  return {
    paths: data.results.map((i) => ({
      params: {
        id: JSON.stringify(i.id),
      },
    })),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data: CharacterInterface = await fetch(
    `https://rickandmortyapi.com/api/character/${context.params?.id}`
  ).then((res) => res.json());

  return {
    props: {
      players: data,
      query: context.params,
    },
  };
};

const SSGDetail: NextPage<SSGDetailProps> = ({ players, query }) => {
  const router = useRouter();

  console.log("QUERY: ", query);

  return (
    <div>
      <p onClick={() => router.back()}>back</p>
      <h1>{players.name}</h1>
      <Image src={players.image} width={500} height={300} alt={players.name} />
      <p>{players.status}</p>
    </div>
  );
};

export default SSGDetail;
