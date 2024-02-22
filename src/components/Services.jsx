import '../assets/css/styles.css';

export default function Services() {
    return (
        <section className="text-4xl font-medium text-center mt-20">

            <h2 className='text-5xl'>Mis servicios</h2>

            <div className="servicios mt-20">
                <section className="servicio">
                    <h3 className='mb-6'>Diseño Web</h3>
                    <div className="iconos m-6">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-palette" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                                <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            </svg>
                        </p>
                    </div>
                    <p className='mb-8 font-normal px-2 text-2xl'>Creación interfaces atractivas, intuitivas y funcionales para sitios web. Con una correcta disposición de elementos en la página que sean visualmente atractiva.</p>
                </section>

                <section className="servicio">
                    <h3 className='mb-6'>Aplicaciones Web</h3>
                    <div className="iconos m-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-android" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 10l0 6" />
                            <path d="M20 10l0 6" />
                            <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
                            <path d="M8 3l1 2" />
                            <path d="M16 3l-1 2" />
                            <path d="M9 18l0 3" />
                            <path d="M15 18l0 3" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-apple" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" />
                            <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
                        </svg>
                    </div>
                    <p className='mb-8 font-normal px-2 text-2xl'>Tengo experiencia en el desarrollo de aplicaciones web que ofrecen funcionalidades avanzadas y una experiencia de usuario fluida.</p>
                </section>

                <section className="servicio">
                    <h3 className='mb-6'>E-Commerce</h3>
                    <div className="iconos m-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                            <path d="M3 10l18 0" />
                            <path d="M7 15l.01 0" />
                            <path d="M11 15l2 0" />
                        </svg>
                    </div>
                    <p className='mb-8 font-normal px-2 text-2xl'>Construcción de páginas de ecommerce robustas pero fáciles de usar que permiten a los clientes realizar compras de manera segura y conveniente.</p>
                </section>
            </div>{/* Servicios */}
    
        </section>
    )
}
