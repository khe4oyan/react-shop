import './header.css'
import { useSelector } from 'react-redux';

export default function Header() {
  const money = useSelector(state => state.money.money);

	return (
		<header>
			<p className='balance'>${money}</p>
		</header>
	);
}