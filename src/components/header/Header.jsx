import './header.css'

export default function Header({money}) {
	return (
		<header>
			<p className='balance'>${money}</p>
		</header>
	);
}