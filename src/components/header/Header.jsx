import './header.css'

export default function Header({money}) {
	return (
		<header>
			{/* <a className='header_link center'>menu</a> */}
			<p className='balance'>${money}</p>
			{/* <a className='header_link center'>work</a> */}
		</header>
	);
}