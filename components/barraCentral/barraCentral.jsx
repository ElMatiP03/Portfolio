import React from 'react';
import Resumen from './pages/resumen/resumen';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'

const BarraCentral = () => {
	const [t, i18n] = useTranslation('common');
	const [pagina, setPagina] = useState('Resumen');

	const activarPagina = (id) => {
		setPagina(id);
	};

	const paginas = {
		resumen: 'Resumen'
	};

	return (
		<div className="h-full">
			<nav className="flex justify-around items center lg:h-1/6 sm:h-[10%] bg-Fondo2 text-[1.2rem] uppercase">
				<button
					id="Resumen"
					className={
						pagina === paginas.resumen
							? 'font-semibold underline underline-offset-4 decoration-Primario decoration-4 uppercase'
							: 'hover:text-Primario uppercase'
					}
					onClick={() => activarPagina(paginas.resumen)}
				>
					{t('barraCental.summary')}
				</button>
				
				{}
			</nav>
			<div className="lg:h-5/6 sm:h-[90%] bg-Fondo3">
				{pagina === 'Resumen' ? <Resumen /> : ''}
				
			</div>
		</div>
	);
};

export default BarraCentral;
