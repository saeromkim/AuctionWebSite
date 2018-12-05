import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to="/">팔러와방</Link>
      </div>
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="검색어를 입력하세요"/>
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
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