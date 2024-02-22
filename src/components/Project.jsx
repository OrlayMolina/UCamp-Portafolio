import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Project({ project }) {

    const { name, image, url } = project;

    return (
        <div className="border p-3 mx-4 shadow bg-white">
            <img 
                src={image}
                alt={`imagen ${name}`} 
                className="w-full"
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{name}</h3>
                {/* Suponiendo que precio esté definido en otro lugar */}
                {/* <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p> */}
            </div>

            {/* Cambiamos el botón por un enlace */}
            <div className='bg-cyan-700 hover:bg-cyan-500 rounded-lg text-center py-1'>
                <Link target="_blank" rel="noopener noreferrer" className="text-white uppercase text-2xl" to={url}>Ver Detalles</Link>
            </div>
        </div>
    )
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
};
