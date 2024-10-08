import { Text as DecoText } from 'components/svg/menu';
import { menu } from 'data/menu';
import { useEffect, useRef } from 'react';

export interface IMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = (props: IMenuProps) => {
  const menuRef = useRef(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (props.isOpen) {
      const linkEl = listRef.current?.querySelector('a');
      if (!linkEl) return;
      linkEl.focus();
    }
  }, [props.isOpen]);

  return (
    <nav className={props.isOpen ? `menu--open` : `menu`} ref={menuRef}>
      <div className='menu__top'>
        <button
          className='menu-btn'
          type='button'
          onClick={() => props.setIsOpen(false)}
        >
          <span className='icon close'></span>
          <span className='blind'>메뉴 닫기</span>
        </button>
        <ul className='action-menu'>
          <li className='action-menu__item'>
            <a href='#'>
              <span className='icon search'></span>
              <span className='blind'>검색</span>
            </a>
          </li>
          <li className='action-menu__item'>
            <a href='#'>
              <span className='icon delivery'></span>
              <span className='blind'>주문조회</span>
            </a>
          </li>
          <li className='action-menu__item'>
            <a href='#'>
              <span className='icon cart'></span>
              <span className='blind'>장바구니</span>
            </a>
          </li>
          <li className='action-menu__item'>
            <a href='#'>
              <span className='icon login'></span>
              <span className='blind'>로그인</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='menu__inner'>
        <ul className='menu__list' ref={listRef}>
          {menu.map((el, first) => {
            return (
              <li className='menu__item' key={`all-${first}`}>
                <a href='#'>{el.title}</a>
                {el.sub && (
                  <>
                    <ul className='menu__sub'>
                      {el.sub.map((submenu, second) => (
                        <li
                          className='menu__sub-item'
                          key={`all-${first}-${second}`}
                        >
                          <a href='#'> {submenu.title}</a>
                          {submenu.sub && (
                            <ul className='menu__third'>
                              {submenu.sub.map((thirdmenu, third) => (
                                <li
                                  className='menu__third-item'
                                  key={`all-${first}-${second}-${third}`}
                                >
                                  <a href='#'>{thirdmenu.title}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <div className='menu__deco-text'>
          <DecoText />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
