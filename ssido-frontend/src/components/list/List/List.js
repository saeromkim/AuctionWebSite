import React from 'react';

import styles from './List.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Item = () => {
	var data='C:/Users/yeonggi/Desktop/SsidoWebProject-master/ssido-frontend/sample.jpg';
	return(
		<div className={cx('item')}>
			<div className={cx('image', {data})}>
			</div>
			<div className={cx('product')}>
				<div className={cx('product-name')}>제품명
				</div>
				<div className={cx('product-info')}>
					거래유형
					<br/>
					거래위치
					<br/>
					제품상태
					<br/>
					거래 기준 금액
				</div>
			</div>
			<div className={cx('room-info')}>
				<img src='what'/>5 2018.11.27 4:07
			</div>
			<div className={cx('current-price')}>
				4,060 원
			</div>
			<div className={cx('join')}>
				참여하기
			</div>
		</div>
	)
};

const List = () => (
	<div><h2>경매 중인 거래방</h2>
		<div className={cx('auction')}>
			<div className={cx('sall')}>
				<div className={cx('sall-title')}>
					팔 사람 구해용
				</div>
				<div className={cx('sall-option')}>
					<div className={cx('o1')}>인기순</div>
					<div className={cx('o2')}>최신순</div>
					<div className={cx('o3')}>내가 만든 방</div>
				</div>
				<div className={cx('items')}>
					<Item/>
					<Item/>
					<Item/>
				</div>
			</div>

			<div className={cx('buy')}>
				<div className={cx('buy-title')}>
					살 사람 구해용
				</div>
				<div className={cx('buy-option')}>
					<div className={cx('o1')}>인기순</div>
					<div className={cx('o2')}>최신순</div>
					<div className={cx('o3')}>내가 만든 방</div>
				</div>
				<div className={cx('items')}>
					<Item/>
					<Item/>
					<Item/>
				</div>
			</div>
		</div>
	</div>
);


export default List;