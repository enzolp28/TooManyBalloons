import Image from "next/image";
export default function Home() {
  return (
    <main className="  px-20 mt-30 ">
      <div className="flex justify-between gap-10">
        <section className="w-1/3 flex gap-20 justify-center flex-col " >
          <h1 className="text-5xl font-bold text-red-500">TooManyBalloons</h1>
          <p >Chez [Nom de ton entreprise], nous mettons notre créativité et notre savoir-faire au service de vos plus beaux moments. Que ce soit pour un anniversaire, une réception, les fêtes de Noël, ou toute autre occasion spéciale, nous vous accompagnons pour créer une ambiance unique, chaleureuse et inoubliable.
            Chaque événement est une histoire, et notre mission est de la sublimer grâce à des services personnalisés et adaptés à vos envies. Vous avez une idée ? Nous la transformons en réalité. Vous cherchez l’inspiration ? Nous sommes là pour vous guider.
            Faites de chaque moment une célébration à votre image.</p>
        </section>
        <div className="w-1/3 flex justify-center items-center ">
          <div className="h-60 border border-gray-300"></div>
        </div>
        <section className="w-1/3 flex justify-center">
          <Image src='/images/green-balloons.png' width={400} height={500} alt={'Logo'} className="rounded-3xl" />
          {/* <TransitionImage /> */}
        </section>
      </div>
      <section className="mt-40 flex flex-col gap-20 ">
        <h2 className="text-4xl font-bold text-center">Nos Créations</h2>
        <div className="h-80 border bg-gray-400 border-gray-300 rounded"></div>
      </section>
    </main>
  );
}
