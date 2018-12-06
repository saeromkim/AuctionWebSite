import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import 'semantic-ui-css/semantic.min.css';
=======
>>>>>>> first commit

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to="/">팔러와방</Link>
      </div>
<<<<<<< HEAD
      <div className={cx('search')}>
       <div className={cx('def')}>
        대학생 중심 중고 경매 마켓
       </div>
        <div class="ui fluid action input">
          <input type="text" placeholder="검색어를 입력하세요"/>
          <div class="ui pink button"><i class="ui search icon"></i></div>
        </div>
      </div>
      <div className={cx('icons')}>
        <i class="ui pink bell icon"></i>
        <i class="ui pink user icon"></i>
=======
      
      <div className={cx('login')}>
        로그인
>>>>>>> first commit
      </div>
    </div>
    <div className={cx('hr')}>
     <hr/>
    </div>
  </header>
<<<<<<< HEAD
=======
  
>>>>>>> first commit
);


export default Header;