import Image from "next/image";


export default function Home() {
  return (
    <main className="flex justify-between  px-20 mt-36 gap-10 ">
      <section className="w-1/3 flex justify-around flex-col " >
        <h1 className="text-4xl font-bold text-red-500">TooManyBalloons</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sapiente fugit aliquam qui neque necessitatibus quos amet corporis voluptatibus nemo atque fugiat molestias esse ipsum, suscipit a consequuntur nostrum in maxime voluptatem. Nam ducimus quis commodi earum. Voluptatibus nihil tenetur numquam quas deleniti culpa, in itaque. Labore hic incidunt ut!</p>
      </section>
      <div className="w-1/3 flex justify-center items-center ">
        <div className="h-60 border border-gray-300"></div>
      </div>
      <section className="w-1/3 flex justify-center">
        <Image src='/images/green-balloons.png' width={400} height={500} alt={'Logo'} className="rounded-3xl" />
        {/* <TransitionImage /> */}
      </section>
    </main>
  );
}
