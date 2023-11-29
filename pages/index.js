import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Components Template
import Todo from "@/Components/Template/Todo";

export default function Home() {
  return <Todo />;
}
