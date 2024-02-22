import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <h1 className="text-4xl font-bold font-serif text-center py-7">
                Orlay Andrés Molina Gómez {''}
                <span className="font-normal">Freelancer</span>
            </h1>

            <div className="bg-cyan-600 w-full">
                <nav className="flex flex-col md:flex-row justify-between gap-6 px-12">
                    <Link to="/" className="text-3xl  text-white hover:bg-amber-400 hover:text-black px-4 py-2 font-medium">Inicio</Link>
                    <Link to="/" className="text-3xl  text-white hover:bg-amber-400 hover:text-black px-4 py-2 font-medium" >Sobre mí</Link>
                    <Link to="/" className="text-3xl  text-white hover:bg-amber-400 hover:text-black px-4 py-2 font-medium">Proyectos</Link>
                    <Link to="/" className="text-3xl  text-white hover:bg-amber-400 hover:text-black px-4 py-2 font-medium">Contacto</Link>
                </nav>
            </div>
        </header>
    )
}
