import React from 'react';
import styles from './Menu.scss';
import classNames from 'classnames/bind';
import 'semantic-ui-css/semantic.min.css';

const cx = classNames.bind(styles);

const Menu = () => {
  return(
    <div className={cx('menu')}>
      <div className={cx('category')}>
          <table>
            <tr className={cx('item')}>
              <th>대학생</th>
              <th>패션/뷰티</th>
              <th>문서/자료</th>
              <th>도서</th>
              <th>문구/완구</th>
              <th>가전/생활</th>
              <th>디지털</th>
              <th>스포츠</th>
              <th>기타</th>
            </tr>
          </table>
        </div>
      <div className={cx('hr')}>
        <hr/>
      </div>
    </div>
    
  )
};


export default Menu;