import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from 'components/common/Header';
<<<<<<< HEAD
import Menu from 'components/common/menu/Menu';
import Footer from 'components/common/Footer';
=======
>>>>>>> first commit

const cx=classNames.bind(styles);

const PageTemplate = ({children}) => {
    return (
        <div className={cx('page-template')}>
            <Header/>
<<<<<<< HEAD
            <Menu/>
            <main>
                {children}
            </main>
            <Footer/>
=======
			<main>
				{children}
			</main>
>>>>>>> first commit
        </div>
    );
};

export default PageTemplate;