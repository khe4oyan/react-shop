import './innerCase.css';
import allObjects from '../../data/data';

export default function InnerCase({closeModal, caseId}) {
	const list = new Map();
	const items = allObjects.items.forEach((item, ind) => {
		list.set(ind, item.img);
	});
	
	const innerCase = allObjects.cases.get(caseId).innerItems;
	const domElem = [];

	for (let i = 0; i < innerCase.length; ++i) {
		domElem.push(
			<div key={`key-${i}`} className='inner-case__box__item'>
				<img 	className='inner-case__box__item__img' 
					src={`https://raw.githubusercontent.com/khe4oyan/shop/gh-pages/items/${list.get(innerCase[i][0])}.png`} 
					alt="item img" />
			</div>
		);
	}

	return(
		<div className="inner-case modalBox center">
			<div className='inner-case__box'>
				{domElem}
				<button onClick={closeModal} className='modalBox__close center'>x</button>
			</div>
		</div>
	);
}