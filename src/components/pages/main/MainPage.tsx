import * as React from 'react'
import {useEffect, useState} from 'react'
import styles from './MainPageStyles.module.sass'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Button, ButtonColor, ButtonSize} from "../../button/Button";
import {NewsPromo} from "../news/NewsPromo";
import {takeLeft} from 'fp-ts/lib/Array';
import {MapWithMarker} from "./MapWithMarker";
import {ProductSlide} from "../../slides/ProductSlide";
import {Input, Textarea} from "../../input/Input";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux";
import {ProductActions} from "../../../redux/product/actions";
import {NewsActions} from "../../../redux/news/actions";
import {useHistory} from "react-router";
import {routes} from "../../../routes";
import {ProductModalAction} from "../../../redux/modal";
import {useSetState} from "react-use";
import {config, url} from "../../../apiConfig";
import { Link } from 'react-router-dom';

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

export const MainPage = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state: RootState) => state.NewsReducer.list);
    const slides = useSelector((state: RootState) => state.ProductReducer.productList);
    const history = useHistory();
    const [feedbackData, setFeedbackData] = useSetState({username: '', phoneNumber: '', text: '', status: false})
    const [feedbackMessage, setFeedbackMessage] = useState<{ context: string, message: string }>()
    const [links,setLinks] = useState<{id:number, title: string,description: string}[]>([]);

    const getLinks = async () => {
        await fetch(url(`${config.endpoints.navlinks}`)).then(res=>{
           return res.json()
        }).then((data: any)=> setLinks(data))
    }

    useEffect(()=>{
       getLinks();
    },[])

    console.log(feedbackData);
    const submit =  async () => {
        try {
            await fetch(url(`${config.endpoints.feedback}`), {
                body: JSON.stringify(feedbackData),
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                }
            }).then(res=>{
                res.status === 201 && setFeedbackMessage({context: 'success', message: 'Ваше сообщение было успешно отправлено!'})
                }
            )
        }
        catch (e) {
            console.error(e,'e')
            setFeedbackMessage({context: 'error', message: 'Произошла ошибка при отправке сообщения'})
        }
    }
    useEffect(() => {
        dispatch(ProductActions.getList.request(undefined));
        dispatch(NewsActions.getList.request())
    }, [dispatch])
    return (
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
                            {links.map(link=>
                                <li>
                                    <Link to={`${routes.navlinks}/${link.id}`}>
                                        {link.title}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className={styles.stocks}>
                    <div className={styles.stockTitle}>Акции и новинки</div>
                    {slides?.length > 0 &&
                    <Slider {...settings}>
                        {slides.map(slide =>
                            <ProductSlide {...slide} key={slide.id}/>
                        )}
                    </Slider>
                    }
                    <Button onClick={() => history.push(routes.products)} content={'Все товары'} alignSelf={'center'}/>
                </div>
                <div className={styles.providers}>
                    <div>
                        Хотите предложить свои товары нам?
                    </div>
                    <Button onClick={() => dispatch(ProductModalAction({isOpen: true}))} content={'Вам сюда!'}
                            color={ButtonColor.GOLD_BG} size={ButtonSize.DEFAULT}/>
                </div>
                <div className={styles.articleBlock}>
                    <div className={styles.articleTitle}>
                        Новости
                    </div>
                    <div className={styles.articles}>
                        {takeLeft(5)(articles).map(article =>
                            <NewsPromo {...article} key={article.id}/>
                        )}
                    </div>
                    <div className={styles.readmore}>
                        <Button onClick={() => history.push(routes.news)} content={'Читать другие'}/>
                    </div>
                </div>
            </div>
            <div className={styles.map}>
                <MapWithMarker containerElement={<div style={{height: `400px`}}/>}
                               mapElement={<div style={{height: `100%`}}/>}
                               googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                               loadingElement={<div style={{height: `100%`}}/>}
                />

            </div>
            <div className={styles.feedBack}>
                <h2 className={styles.feedBackTitle}>
                    Оставьте своё мнение или предложение и мы вам перезвоним
                </h2>
                <Input onChange={(value) => setFeedbackData({username: value})}
                       value={feedbackData.username}
                       color={'white'}
                       placeholder={'Введите ваше имя'} required={true}/>
                <Input onChange={(value) => setFeedbackData({phoneNumber: value})}
                       value={feedbackData.phoneNumber}
                       color={'white'}
                       placeholder={'Номер телефона'} required={false}/>
                <Textarea onChange={(value) => setFeedbackData({text: value})}
                          value={feedbackData.text}
                          color={'white'}
                          placeholder={'Опишите проблему'} required={true}/>
                <Button onClick={() => submit()}
                        type={"button"}
                        content={!feedbackMessage ? 'Отправить сообщение' : feedbackMessage.message}
                        color={!feedbackMessage? ButtonColor.GOLD_BG : feedbackMessage.context === 'success' ? ButtonColor.GREEN_BG : ButtonColor.ERROR_BG}
                        size={ButtonSize.DEFAULT}/>
            </div>
        </div>
    )
}