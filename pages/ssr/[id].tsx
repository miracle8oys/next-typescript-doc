import { NextPage, GetServerSideProps } from "next";
import { CharacterInterface } from "../../interface";
import { useRouter } from "next/router";
import Image from "next/image";

interface DetailProps {
  players: CharacterInterface;
  query: any;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data: CharacterInterface = await fetch(
    `https://rickandmortyapi.com/api/character/${context.params?.id}`
  ).then((res) => res.json());

  return {
    props: {
      players: data,
      query: context.query,
    },
  };
};

const Detail: NextPage<DetailProps> = ({ players, query }) => {
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

export default Detail;
