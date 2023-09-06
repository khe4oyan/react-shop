import './location.css';
import { useState } from "react";
import { addMoney } from '../../../store/slices/moneySlice';
import { useDispatch } from 'react-redux';

export default function Location({ data, busy, setBusy }) {
	const dispatch = useDispatch();
	const [timer, setTimer] = useState(data.timer);
	const [isActive, setIsActive] = useState(false);
	
	const lootingButton = () => {
		if(busy == true) { return; }
		setIsActive(true);
		setBusy(true);
		const intervalId = setInterval(() => {
			setTimer(prevTimer => {
				const newTimer = prevTimer - 1;
				if (newTimer < 0) {
					// give money
					const [min, max] = data.money;
					dispatch(addMoney(min + Math.floor(Math.random() * (max - min))));
					clearInterval(intervalId);
					setBusy(false);
					setIsActive(false);
					return data.timer;
				}
				return newTimer;
			});
		}, 1000);
	}

	return (
		<div className="location">
			<div className="location__info">
				<h2 className="location__info__name">{ data.name }</h2>
				<p className="location__info__money">{ `Minimum profit: $${data.money[0]}` }</p>
				<p className={`location__info__timer ${isActive && 'location__info__timerActive'}`}>{ `${timer}s` }</p>
			</div>
			<div className="location__buttons">
				<button onClick={lootingButton} className="location__button lootButton event_button">loot</button>
				{/* <button onClick={() => {}} className="location__button infoButton event_button">info</button> */}
			</div>
		</div>
	)
}