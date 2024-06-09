import { useSpring, a } from 'react-spring';
import { ImDatabase as SQL } from 'react-icons/im';

import {
	SiCss3,
	SiXstate,
	SiJson,
	SiHtml5,
	SiReact,
	SiDotnet,
	SiSpeedtest,
	SiGit,
	SiPhotobucket
} from 'react-icons/si';
import {
	FaPhotoVideo
} from 'react-icons/fa';

import { useTranslation } from 'react-i18next'

const Resumen = () => {
	const animation1 = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: 1000 },
	});
	const [t] = useTranslation('common');
	const skills = [
		{
			nombre: '.NET',
			logo: SiDotnet,
			nivel: '70%',
		},
		{
			nombre: '.NET Core',
			logo: SiDotnet,
			nivel: '70%',
		},
		{
			nombre: 'ReactJS',
			logo: SiReact,
			nivel: '65%',
		},
		{
			nombre: 'HTML',
			logo: SiHtml5,
			nivel: '85%',
		},
		{
			nombre: 'CSS',
			logo: SiCss3,
			nivel: '75%',
		},
		{
			nombre: 'Unit testing',
			logo: SiSpeedtest,
			nivel: '45%',
		},
		{
			nombre: 'SQL',
			logo: SQL,
			nivel: '40%',
		},
		{
			nombre: 'Git/GitHub',
			logo: SiGit,
			nivel: '90%',
		},
		{
			nombre: 'XML',
			logo: SiXstate,
			nivel: '100%',
		},
		{
			nombre: 'XSD',
			logo: SiXstate,
			nivel: '90%',
		},
		{
			nombre: 'DTD',
			logo: SiXstate,
			nivel: '90%',
		},
		{
			nombre: 'JSON',
			logo: SiJson,
			nivel: '90%',
		},
		{
			nombre: 'Photoshop',
			logo: SiPhotobucket,
			nivel: '80%',
		},
		{
			nombre: 'video maker',
			logo: FaPhotoVideo,
			nivel: '90%',
		}
		
	];

	return (
		<div className="h-full bg-Fondo3 p-12  gap-12">
			<div className=" bg-Fondo2 rounded-xl row-span-1 text-center flex flex-col justify-center" style={{padding:"1rem 3rem 1rem 3rem", marginBottom:"2rem"}}>
			{}
				<p>{t("summary")}</p>
			</div>

			<a.div style={animation1} className="grid grid-cols-2 gap-y-2 row-span-2">
				{skills.map((data) => {
					return (
						<div className="flex justify-center items-center text-[1.2rem] text-Primario">
							<data.logo />
							<div className="bg-Fondo2 w-1/2 rounded-[2rem] ml-2 text-center relative overflow-hidden">
								<div className="w-full top-0 absolute h-full ">
									<p className="text-[1rem] p-[2px] font-semibold text-white">
										{data.nombre}{' '}
									</p>
								</div>
								<div
									className={`bg-gradient-to-r from-Primario to-Secundario h-full top-0 rounded-[2rem] text-transparent`}
									style={{
										width: data.nivel,
									}}
								>
									-{' '}
								</div>
							</div>
						</div>
					);
				})}
			</a.div>
		</div>
	);
};

export default Resumen;
