import FotoPerfil from '../../images/profilePic.jpg';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';
import { useTranslation } from 'react-i18next'

const BarraLateral = () => {
    const [t] = useTranslation('common');

	return (
		<div className="grid grid-cols-1 h-full justify-between items-center text-center py-[1rem] space-y-2">
			<img
				src={FotoPerfil}
				alt="avatar"
				className=" mx-auto rounded-full lg:w-3/5 sm:w-2/5"
			/>
			<div>
				<h3 className="text-[1.5rem] font-semibold">Matías Pericás</h3>
				<p className="text-[1.2rem]">{t('barraLateral.titleDescription')}</p>
				{/* <p className="text-[1.2rem]">Full Stack Developer</p> */}
			</div>

			<div className="flex justify-around w-9/12 mx-auto text-black">
				<a href="https://wa.me/34747425308">
					<IoLogoWhatsapp className="text-Primario w-[2rem] h-[2rem] cursor-pointer hover:scale-110 hover:text-Secundario" />
				</a>
				<a href="https://www.linkedin.com/in/matias-pericàs-701676244/">
					<AiFillLinkedin className="text-Primario w-[2rem] h-[2rem] cursor-pointer hover:scale-110 hover:text-Secundario" />
				</a>
				<a href="https://github.com/ElMatiP03">
					<AiFillGithub className="text-Primario w-[2rem] h-[2rem] cursor-pointer hover:scale-110 hover:text-Secundario" />{' '}
				</a>
			</div>

			<div
				className="py-4 bg-Fondo2 text-[1rem]"
				style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
			>
				<div className="flex items-center justify-center">
					<GoLocation className="mr-2" /> <span>Malaga, España</span>
				</div>
				<p className="mt-2 "> matiperi03@gmail.com </p>
				<p className="mt-2"> +34 747425308 </p>
			</div>
			<div className="">
				<button
					className="w-2/3 px-4 py-2 mb-4 text-[1.2rem] rounded-full cursor-pointer bg-gradient-to-r from-Primario to-Secundario hover:scale-105 focus:outline-none"
					onClick={() => window.open('mailto:matiperi03@gmail.com')}
				>
					{t('barraLateral.contact')}
				</button>
				<br></br>
				<a
					className="w-2/3 px-4 py-2 text-[1.2rem] cursor-pointer underline underline-offset-4 decoration-2 hover:text-Secundario  "
					href="https://calendly.com/matiaspericas03/30min"
				>
					{t('barraLateral.calendly')}
				</a>
				<br></br>
				<br></br>
				<a
					className="w-2/3 px-4 py-2 text-[1.2rem] cursor-pointer underline underline-offset-4 decoration-2 hover:text-Secundario  "
					href="https://drive.google.com/uc?export=download&id=1J42U8L-XSGrQsca-Oh7GEDT4Wwv7zP1i"
					download="Resume-SergioDemarco.pdf"
				>
					{t('barraLateral.download')}
				</a>
			</div>
		</div>
	);
};

export default BarraLateral;
