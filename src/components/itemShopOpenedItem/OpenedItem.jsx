import './openedItem.css';
import allObjects from '../../data/data'

export default function OpenedItem({ closeModal, itemId }) {

	const itemData = allObjects.items.get(itemId);

	return (
		<div className="modalBox center">
			<div className="modalBox__container">
				<div className="modalBox__close center" onClick={ closeModal }>x</div>
				{
					itemId != null &&
					<div className='modalBox__container__itemInfo'>
						<img className='modalBox__itemImg' src={`${itemData.img}`} alt="droped item img" />
						<div className='modalBox__container__itemInfo__box'>
							<h2 className='modalBox__container__itemInfo__name'>{ itemData.name }</h2>
							<p className='modalBox__container__itemInfo__price'>${ itemData.priceWhenSell }</p>
						</div>
					</div>
				}
				{
					itemId == null &&
					<div className='modalBox__container__nothing'>
						<h2 className='modalBox__container__nothing__headerText'>nothing</h2>
					</div>
				}
			</div>
		</div>
	)
}
