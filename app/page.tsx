import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/authOptions";
import ProductCard from "./components/ProductCard";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      <h1 className="font-poppins">
        Hello {session && <span>{session.user!.name}</span>}
      </h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import ProductCard from "./components/ProductCard";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";

// import logo from "@/public/images/logo.png";
// import { Metadata } from "next";
// // import HeavyComponent from "./components/HeavyComponent";
// import dynamic from "next/dynamic";
// import { useState } from "react";
// // import _ from "lodash";

// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

// export default function Home() {
//   const [isVisible, setVisible] = useState(false);

//   return (
//     <main className="relative h-screen">
//       <h1 className="font-poppins">Hello World</h1>
//       <button
//         onClick={async () => {
//           const _ = (await (import("lodash"))).default;
//           const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
//           const sorted = _.orderBy(users, ["name"]);
//           console.log(sorted);
//         }}
//       >
//         Show
//       </button>
//     </main>
//   );
// }

// // export async function generateMetadata(): Promise<Metadata> {
// //   const product = await fetch("");

// //   return {
// //     title: "product.title",
// //     description: "....",
// //   };
// // }
