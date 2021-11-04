import React, {useEffect, useRef, useState} from 'react';
import {Header} from "./components/header/Header";
import './RootStyles.sass'
import {mdiCartMinus} from '@mdi/js';
import Icon from '@mdi/react'
import {MainPage} from "./components/pages/main/MainPage";
import {Footer} from "./components/footer/Footer";
import {useSelector} from "react-redux";
import {RootState} from "./redux";
import {Basket} from "./components/basket/Basket";
import {HeaderMobile} from "./components/header/HeaderMobile";
import {BasketPanelMobile} from "./components/basket/BasketPanelMobile";
import {useIsMobile} from "./hooks";
import {Route, Switch} from "react-router";
import {Product} from "./components/pages/product/Product";
import {routes} from "./routes";
import {ImageModal} from "./components/imageModal/ImageModal";
import {ProductList} from "./components/pages/product/ProductList";
import {NewsListPage} from "./components/pages/news/NewsListPage";
import {NewsPage} from "./components/pages/news/NewsPage";
import {ProductModal} from "./components/pages/product/ProductModal";
import {Order} from "./components/pages/order/Order";
import {LeadersPage} from "./components/pages/static/Leaders";
import {Placement} from "./components/pages/static/Placement";

function App() {
    const [showBasket, setShowBasket] = useState(false);
    const orders = useSelector((state: RootState) => state.BasketReducer);
    const showImage = useSelector((state:RootState) => state.ImageModalReducer.isOpen);
    const {isMobile} = useIsMobile();
    const showProductModal = useSelector((state:RootState)=> state.ProductModalReducer.isOpen);
    return (
        <div className="App">
            {showImage &&
            <ImageModal/>
            }
            {showProductModal &&
                <ProductModal/>
            }
            {showBasket &&
            <Basket orders={orders} setCloseModal={setShowBasket}/>
            }

            {isMobile ?
                <HeaderMobile/>
                :
                <Header/>
            }

            {!isMobile &&
            <div className={'iconWrapper'} onClick={() => setShowBasket(true)}>
                {!!orders.length &&
                <span className={'ordersAmount'}>
                {orders.length}
                 </span>
                }
                <Icon path={mdiCartMinus}
                      title="Корзина"
                      size={2}
                      horizontal
                      className={'basket_icon'}
                />
            </div>
            }
            <div className={'pages'}>
               <Switch>
                   <Route path={routes.root} exact component={MainPage}/>
                   <Route path={`${routes.products}/:id`}  component={Product}/>
                   <Route path={routes.products}  component={ProductList}/>
                   <Route path={`${routes.news}/:id`} component={NewsPage}/>
                   <Route path={routes.news} component={NewsListPage}/>
                   <Route path={routes.order} component={Order}/>
                   <Route path={routes.leaders} component={LeadersPage}/>
                   <Route path={routes.placement} component={Placement}/>
               </Switch>
            </div>
            <Footer/>
            {isMobile && !showBasket &&
            <BasketPanelMobile ordersLength={orders.length} setShowBasket={setShowBasket}/>
            }
        </div>
    );
}

export default App;
