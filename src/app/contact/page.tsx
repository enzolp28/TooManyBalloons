

export default function page() {
    return (
        <main className="p-20">
            <h1 className="text-4xl font-bold">Formulaire de contact</h1>
            <form action="" className=" flex flex-col gap-5 mt-10 w-1/2">
                <label htmlFor="nom prenom">Votre nom et prénom :</label>
                <input name="nom prenom" id="nom prenom" className="placeholder:text-gray-300 placeholder:italic mb-5 bg-gray-100 rounded-xl p-1.5 w-2xs focus:outline-none focus:ring focus:border-blue-300 resize-none" type="text" placeholder="Nom Prénom" />

                <label htmlFor="email">Votre email :</label>
                <input name="email" id="email" className="placeholder:text-gray-300 placeholder:italic mb-5 bg-gray-100 rounded-xl p-1.5 w-2xs focus:outline-none focus:ring focus:border-blue-300 resize-none" type="text" placeholder="Email" />

                <label htmlFor="message">Expliqez-nous votre projet :</label>
                <textarea name="message" id="message" className="w-full h-50 placeholder:text-gray-300 placeholder:italic mb-5 bg-gray-100 rounded-xl p-1.5 focus:outline-none focus:ring focus:border-blue-300 resize-y" placeholder="Expliqez-nous votre projet"></textarea>

                {/* w-full h-40 p-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 resize-y focus:outline-none focus:ring focus:border-blue-400 */}

                <button type="submit">Envoyer</button>
            </form>
        </main>
    )
}
