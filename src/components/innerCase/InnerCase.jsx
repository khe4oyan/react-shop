import './innerCase.css';
import allObjects from '../../data/data';

export default function InnerCase({ closeModal, caseId }) {
	const list = new Map();
	allObjects.items.forEach((item, ind) => {
		list.set(ind, item.img);
	});

	const innerCase = allObjects.cases.get(caseId).innerItems;
	const domElems = [];

	for (let i = 0; i < innerCase.length; ++i) {
		domElems.push( <InnerElem  key={`key-${i}2`} img={list.get(innerCase[i][0])}/> );
	}

	return (
		<div className="inner-case modalBox center">
			<div className='inner-case__box'>
				<div className='inner-case__box_box'>
					{ domElems }
				</div>
				<button onClick={closeModal} className='modalBox__close center'>x</button>
			</div>
		</div>
	);
}

function InnerElem({ img }) {
	return (
		<div className='inner-case__box__item'>
			<img
				className='inner-case__box__item__img'
				src={`${img}`}
				alt="item img" />
		</div>
	);
}