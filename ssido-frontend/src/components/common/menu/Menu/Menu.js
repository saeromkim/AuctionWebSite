import React from 'react';
import styles from './Menu.scss';
import classNames from 'classnames/bind';
import 'semantic-ui-css/semantic.min.css';

const cx = classNames.bind(styles);

const Menu = () => {
  return(
    <div className={cx('menu')}>
      <div className={cx('category')}>
        <div className={cx('item')}>대학생</div>
        <div className={cx('item')}>패션/뷰티</div>
        <div className={cx('item')}>문서/자료</div>
        <div className={cx('item')}>도서</div>
        <div className={cx('item')}>문구/완구</div>
        <div className={cx('item')}>가전/생활</div>
        <div className={cx('item')}>디지털</div>
        <div className={cx('item')}>스포츠</div>
        <div className={cx('item')}>기타</div>
      </div>
      <div className={cx('hr')}>
        <hr/>
      </div>
    </div>
  )
};


export default Menu;