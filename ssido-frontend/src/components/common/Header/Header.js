import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to="/">팔러와방</Link>
      </div>
      
      <div className={cx('login')}>
        로그인
      </div>
    </div>
    <div className={cx('hr')}>
     <hr/>
    </div>
  </header>
  
);


export default Header;