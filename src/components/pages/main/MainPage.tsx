import * as React from 'react'
import styles from './MainPageStyles.module.sass'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Button, ButtonColor, ButtonSize} from "../../button/Button";
import {ArticlePromo} from "../../article/ArticlePromo";
import {takeLeft} from 'fp-ts/lib/Array';
import {MapWithMarker} from "./MapWithMarker";
import {ProductSlide} from "../../slides/ProductSlide";
import {Input, Textarea} from "../../input/Input";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux";
import {useEffect} from "react";
import {ProductActions} from "../../../redux/product/actions";
import {NewsActions} from "../../../redux/news/actions";
import {useHistory} from "react-router";
import {routes} from "../../../routes";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    className: "slider slideWidth",
    responsive: [
        {
            breakpoint: 1500,
            dots: true,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
            }
        },
    ]
};

export const MainPage = () =>{
    const dispatch = useDispatch();
    const articles = useSelector((state: RootState) => state.NewsReducer.list);
    const slides = useSelector((state: RootState) => state.ProductReducer.productList);
    const history = useHistory();

    useEffect(()=>{
        dispatch(ProductActions.getList.request(undefined));
        dispatch(NewsActions.getList.request())
    },[dispatch])
    return(
        <div className={styles.main_page}>
            <div className={styles.main_page_content_wrapper}>
                <div className={styles.mainPage_title}>
                    <div className={styles.main_page_title_text}>
                        Рогачевское областное потребительское общество
                    </div>
                    <div className={styles.main_page_title_description}>
                        Работа нашего филиала охватывает такие сферы экономики, как :
                    </div>
                    <div>
                        <ul>
                            <li>
                                Торговлю
                            </li>
                            <li>
                                Общественное питание
                            </li>
                            <li>
                                Промышленность
                            </li>
                            <li>
                                Заготовительную и внешнеэкономическую деятельность
                            </li>
                            <li>
                                Транспорт
                            </li>
                            <li>
                                Услуги и строительство
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.stocks}>
                    <div className={styles.stockTitle}>Акции и новинки</div>
                    {slides.length>0 &&
                    <Slider {...settings}>
                        {slides.map(slide=>
                            <ProductSlide {...slide}/>
                        )}
                    </Slider>
                    }
                    <Button onClick={()=>history.push(routes.products)} content={'Все товары'} alignSelf={'center'}/>
                </div>
                <div className={styles.articleBlock}>
                    <div className={styles.articleTitle}>
                        Новости
                    </div>
                    <div className={styles.articles}>
                        {takeLeft(15)(articles).map(article=>
                            <ArticlePromo {...article} key={article.id}/>
                        )}
                    </div>
                    <div className={styles.readmore}>
                        <Button onClick={()=>console.log('todo')} content={'Читать другие'}/>
                    </div>
                </div>
            </div>
            <div className={styles.map}>
                <MapWithMarker containerElement={<div style={{ height: `400px` }} />}
                               mapElement={<div style={{ height: `100%` }} />}
                               googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                               loadingElement={<div style={{ height: `100%` }} />}
                />

            </div>
            <form className={styles.feedBack}>
                <h2 className={styles.feedBackTitle}>
                    Оставьте своё мнение или предложение и мы вам перезвоним
                </h2>
                <Input onChange={()=>console.log('name')} value={''} placeholder={'Введите ваше имя'} required={true}/>
                <Input onChange={()=>console.log('phone')} value={''} placeholder={'Номер телефона'} required={false}/>
                <Textarea onChange={() => console.log('desciprtion')} value={''} placeholder={'Опишите проблему'} required={true}/>
                <Button onClick={()=>console.log('submit')} content={'Отправить сообщение'} type={'submit'} color={ButtonColor.GOLD} size={ButtonSize.DEFAULT}/>
            </form>
        </div>
    )
}