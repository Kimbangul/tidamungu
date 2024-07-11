export interface IItemProps {
  /** 썸네일 이미지 */
  img: string;
  /** 상세페이지 링크 */
  link: string;
  /** 상품명 */
  title: string;
  /** 가격 */
  price: number;
  /** 별점 */
  rate: number;
  /** 리뷰 갯수 */
  reviewCnt: number;
  /** 좋아요 갯수 */
  like?: number;
  /** 할인 가격 */
  discount?: number;
  /** 브랜드 */
  brand?: string;
}

const Item = (props: IItemProps) => {
  const discountPercent = props.discount
    ? Number(((props.price - props.discount) / props.price) * 100).toFixed(0)
    : '0%';

  return (
    <li className='item'>
      <div className='item__thumb-container'>
        <a href={props.link}></a>
      </div>
      <div className='item__text-container'>
        <h4 className='item__brand'>{props.brand}</h4>
        <h3 className='item__title'>
          <a href={props.link}>{props.title}</a>
        </h3>
        {!props.discount ? (
          <p className='item__price'>{props.price}</p>
        ) : (
          <>
            <div className='item__discount-box'>
              <p className='item__discount-percent'>{discountPercent}%</p>
              <p className='item__discount-price'>{props.discount}</p>
            </div>
            <p className='item__price'>{props.price}</p>
          </>
        )}
      </div>
      <ul className='item__other-info'>
        <li className='item__other-rate'>
          <span className='bliend'>평점</span>
          <span className='item__other-cnt'>
            {props.rate} <span className='blind'>점</span>
          </span>
          <span className='item__other-cnt'>
            {`(${props.reviewCnt})`}
            <span className='blind'>건</span>
          </span>
        </li>
        {props.like && (
          <li className='item__other-rate'>
            <span className='blind'>좋아요</span>
            <span className='item__other-cnt'>
              ${props.like} <span className='blind'>개</span>
            </span>
          </li>
        )}
      </ul>
    </li>
  );
};

export default Item;