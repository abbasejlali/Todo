import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Components Template
import Todo from "@/Components/Template/Todo";

export default function Home({ dataMain }) {
  return <Todo dataMain={dataMain} />;
}

export async function getServerSideProps() {
  const res = await fetch("https://hr-todo.sahda.ir/");
  const data = await res.json();
  return {
    props: { dataMain: data },
  };
}
