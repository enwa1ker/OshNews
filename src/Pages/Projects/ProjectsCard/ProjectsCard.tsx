import React, { FC, useState, useEffect } from 'react';
import s from './ProjectsCard.module.scss';
import img from '../../../assets/Projects_img/laptop.png';
import tick from '../../../assets/Projects_img/Frame.png';
import b1 from '../../../assets/Projects_img/tiny1.png';
import b2 from '../../../assets/Projects_img/tiny2.png';
import b3 from '../../../assets/Projects_img/tiny3.png';
import b4 from '../../../assets/Projects_img/tiny4.png';
import Aos from 'aos'
import 'aos/dist/aos.css'

interface ProjectsCardProps {}

const ProjectsCard: FC<ProjectsCardProps> = () => {
    const [isYouthCardVisible, setIsYouthCardVisible] = useState(false);
    const [isTrustCardVisible, setIsTrustCardVisible] = useState(false);
    const toggleYouthCard = () => {
        setIsYouthCardVisible(!isYouthCardVisible);
    };

    const toggleTrustCard = () => {
        setIsTrustCardVisible(!isTrustCardVisible);
    };

    useEffect(() =>{
        Aos.init({  
            duration: 650
        })
    }, [])


    return (
        <div className={s.ProjectsBox}>
            <div className={s.ProjectsContent}>
                <div className={s.projectsColumn}>
                    <div className={s.projectsTitle}>
                        <h1 className={s.title}>{"Проект «Youth United for the Future» (YOU)"}</h1>
                        <i className={`${s.closeBtn} ${isYouthCardVisible ? s.visible : ''}`} onClick={toggleYouthCard}>
                            {isYouthCardVisible ? 'Свернуть' : 'Подробнее...'} <img src={tick} alt="#" />
                        </i>
                    </div>
                    <div className={s.topCard}>
                        <div className={s.topLeft}>
                            <img className={s.projectsLaptop} src={img} alt="#" />
                        </div>
                        <div className={s.topRight}>
                        <div className={s.topTitle}>
                            <h1 className={s.title}>{"Проект «Youth United for the Future» (YOU)"}</h1>
                            <i className={`${s.closeBtn} ${isYouthCardVisible ? s.visible : ''}`} onClick={toggleYouthCard}>
                                {isYouthCardVisible ? 'Свернуть' : 'Подробнее...'} <img src={tick} alt="#" />
                            </i>
                        </div>
                            <p className={s.paragraf}>
                            Способствует сокращению разрыва между молодым и старшим поколениями 
                            в обществе и созданию более сплоченного сообщества, в котором молодые люди услышаны.
                            </p>
                            <h2 className={s.subtitle}>В чем особенность и уникальность проекта:</h2>
                            <p className={s.paragraf}>
                            Особенность проекта в его подходе/методике направленном на личностное развитие
                             и улучшение коммуникационных навыков, которые помогут бенефициару обучение 
                             не только в самопознании и личностном развитии, но и в построении позитивных
                              взаимоотношений/диалога с окружающими и способствуют приобретению мягких навыков.
                                <i className={s.openBtn} onClick={toggleYouthCard}>
                                    {isYouthCardVisible ? '' : 'Подробнее...'}
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${s.bottomCard} ${isYouthCardVisible ? s.visible : ''}`}>
                    <div className={s.bottomFirst}>
                        <div className={s.bottomLeft}>
                            <p className={s.paragraf}>
                            Проект предлагает использование метода, где участники получат новые знания 
                            с помощью экспериментальной педагогики миростроительства, построенного на эмпирическом подходе, 
                            т.е.  обучение через опыт помогает понять и переосмыслить содержание целостным образом:
                             Вы не только увидите или услышите, но и прочувствуете, обдумаете и примените знания на практике. 
                             Побуждение молодежи и взрослых к переосмыслениюспособов коммуникации, чувству и практике нового опыта привело
                              к изменениям на индивидуальном уровне - и мы надеемся, что это будет способствовать изменениям на социально-политическом уровне,
                               так как обученные несут послание и знания для своего окружения и за их пределами.
                            </p>
                            <p className={s.paragraf}>
                            Проект в 2018-2019 годы реализовывался, основываясь на методике эмпирической педагогики, 
                            которая была выпущена в виде пособия для тренеров «Настраивайся», на английском: “Tune in”. 
                            Данная методика стала основой для обучения бенефициаров проекта. За указанные годы, 
                            методика показала свою эффективность в построении диалога между поколениями, в связи
                             с чем было принято решение в адаптировании и продвижении модуля «работа с молодыми»  
                             для школьной аудитории (9-11 классов) в 2020 году
                            </p>
                        </div>
                        <div className={s.bottomRight}>
                                    <div className={s.leftImg}>
                                        <div className={s.bottomImg} data-aos="fade-down-right" >
                                            <img className={s.b1} src={b1} alt="b1" />
                                        </div>
                                        <div className={s.bottomImg} data-aos="fade-up-right">
                                            <img className={s.b2} src={b2} alt="b2" />
                                        </div>
                                    </div>
                                    <div className={s.rightImg}>
                                        <div className={s.bottomImg} data-aos="fade-down-left">
                                            <img className={s.b3}  src={b3} alt="b3" />
                                        </div>
                                        <div className={s.bottomImg} data-aos="fade-up-left">
                                            <img className={s.b4} src={b4} alt="b4" />
                                        </div>
                                    </div>
                        </div>
                    </div>
                    <div className={s.bottomSecond}>
                        <p className={s.paragraf}>
                        В 2021-2022 годы разработаны апрабированы, утверждены и рекомендованы Ученым советом КАО 
                        к применению в общеобразовательных школах 2 методических руководства для учителей по проведению:
                        </p>

                        <p className={s.paragraf}>
                        ✓ Уроков самопознания и личностного развития для учащихся старших классов, которые направлены 
                        на развитие мягких навыков, индивидуальную и командную работу, целеполагание, профориентацию и пр.;
                        </p>
                        <p className={s.paragraf}>
                        ✓ Уроки для родителей по основам наставничества, выстраиванию доверительных отношений с ребенком и эффективным коммуникациям.  
                        </p>
                        <p className={s.paragraf}>
                        ОО “Youth of Osh” на основе эмпирической педагогики разработан методический Курс «Самопознание и личностное развитие» для обучения школьной молодежи,
                         апробирован и опубликован на кыргызском, русском и узбекском языках.  
                        </p>

                        <h2 className={s.subtitle}>Цель курса</h2>
                        <p className={s.paragraf}>– Cамопознание Участника и его развитие как личности, способствование формированию его взглядов, мировоззрения, способностей, 
                        а также обеспечение стабильности в обществе путем налаживания связей между поколениями. <br />
                        Курс «Самопознание и личностное развитие» разработан в рамках проекта «СЕН/ТЫ/YOU» направленный для обучения учеников классными руководителями. 
                         Курс нацелен на повышение саморазвития молодежи/учеников и улучшение педагогической практики классных руководителей в работе с молодежью. Также курс 
                        в долгосрочной перспективе помогает способствованию сокращения разрыва между младшим и старшим поколениями в обществе и созданию более сплоченного сообщества, где молодежь услышана.</p>

                        <p className={s.paragraf}>Курс призван помочь педагогам, классным руководителям, социальным педагогам и педагогам-психологам повысить качество осуществляемой ими работы в рамках классных часов 
                        и воспитательной работы, где методика помогает педагогам развить чувство эмпатиипо отношению ученикам для которых поводят курс, что помогает выстраивать учителю с учеником более доверительные отношения 
                        и способствует гармоничному становлению подростка посредством развития следующих ключевых компетенций:</p>

                        <p className={s.paragraf}>✓ познание себя и определение своей жизненной позиции;</p>

                        <p className={s.paragraf}>✓ конструктивно решать разные вопросы;</p>

                        <p className={s.paragraf}>✓ уметь коммуницировать с другими людьми.</p>

                        <h2 className={s.subtitle}>На уроках курса по «Самопознанию и личностному развитию подростков»</h2>

                        <p className={s.paragraf}>Ведется откровенный диалог с учителем, в социально-ролевых играх и упражнениях исследуется мир человеческих взаимоотношений,
                            происходит обмен жизненными наблюдениями, развиваются практические навыки общения, умение выступать перед аудиторией, выстраивать коммуникативные навыки.</p>

                        <p className={s.paragraf}>Курс призван помочь педагогам, классным руководителям, социальным педагогам и педагогам-психологам повысить качество осуществляемой ими работы
                            в рамках классных часов и воспитательной работы, где методика помогает педагогам развить чувство эмпатиипо отношению ученикам для которых поводят курс,
                            что помогает выстраивать учителю с учеником более доверительные отношения и способствует гармоничному становлению подростка посредством развития следующих ключевых компетенций:</p>

                        <p className={s.paragraf}>Большинство упражнений построены таким образом, где требуется вовлечение каждого учащегося, что создает условие для всех без исключения принимать участие в процесс обсуждения и коммуникаций.</p>

                        <h2 className={s.subtitle}>Результаты проекта YOU в цифрах</h2>

                    </div>
                </div>
            </div>

            <div className={s.ProjectsContent}>
                <div className={s.projectsColumn}>
                    <div className={s.projectsTitle}>
                        <h1 className={s.title}>{"TRUST"}</h1>
                        <i className={`${s.closeBtn} ${isTrustCardVisible ? s.visible : ''}`} onClick={toggleTrustCard}>
                            {isTrustCardVisible ? 'Свернуть' : 'Подробнее...'} <img src={tick} alt="#" />
                        </i>
                    </div>
                    <div className={s.topCard}>
                        <div className={s.topLeft}>
                            <img className={s.projectsLaptop} src={img} alt="#" />
                        </div>
                        <div className={s.topRight}>
                        <div className={s.topTitle}>
                            <h1 className={s.title}>{"TRUST"}</h1>
                            <i className={`${s.closeBtn} ${isTrustCardVisible ? s.visible : ''}`} onClick={toggleTrustCard}>
                                {isTrustCardVisible ? 'Свернуть' : 'Подробнее...'} <img src={tick} alt="#" />
                            </i>
                        </div>
                            <p className={s.paragraf}>
                                «Совместные усилия - путь к устойчивому развитию в Центральной Азии» – это трансграничный проект,
                                реализуемый при поддержке Европейского Союза и Федерального министерства экономического сотрудничества
                                и развития Германии в Ферганской долине.
                            </p>
                            <h2 className={s.subtitle}>Цель проекта:</h2>
                            <p className={s.paragraf}>
                                Укрепление устойчивого мира в приграничных районах Ферганской долины путем содействия распространению культуры мира.
                                <i className={s.openBtn} onClick={toggleTrustCard}>
                                    {isTrustCardVisible ? '' : 'Подробнее...'}
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${s.bottomCard} ${isTrustCardVisible ? s.visible : ''}`}>
                    <div className={s.bottomFirst}>
                        <div className={s.bottomLeft}>
                            <h2 className={s.subtitle}>Задачи:</h2>
                            <p className={s.paragraf}>
                                • Укрепление оперативного и институционального потенциала субъектов гражданского общества (ОГО)
                                в Ферганской долине для эффективного предотвращения конфликтов и насилия;
                            </p>

                            <p className={s.paragraf}>
                                • Предоставление трансграничным сообществам возможности поддерживать мирное сосуществование,
                                содействие трансграничному доверию и повышение устойчивости к насильственной и радикальной риторике.
                            </p>

                            <p className={s.paragraf}>
                                • Укрепление трансграничного мирного диалога путем продвижения культуры мира
                                и повышения осведомленности посредством работы с общественностью.
                            </p>
                            <p className={s.paragraf}>
                                Этот проект представляет собой трансграничную инициативу, осуществляемую совместно с партнерами (со-заявителями) на территории Кыргызстана, Узбекистана и Таджикистана.
                            </p>
                        </div>
                        <div className={s.bottomRight}>
                                    <div className={s.leftImg}>
                                        <div className={s.bottomImg} data-aos="fade-down-right" >
                                            <img className={s.b1} src={b1} alt="b1" />
                                        </div>
                                        <div className={s.bottomImg} data-aos="fade-up-right">
                                            <img className={s.b2} src={b2} alt="b2" />
                                        </div>
                                    </div>
                                    <div className={s.rightImg}>
                                        <div className={s.bottomImg} data-aos="fade-down-left">
                                            <img className={s.b3}  src={b3} alt="b3" />
                                        </div>
                                        <div className={s.bottomImg} data-aos="fade-up-left">
                                            <img className={s.b4} src={b4} alt="b4" />
                                        </div>
                                    </div>
                        </div>
                    </div>
                    <div className={s.bottomSecond}>

                        <h2 className={s.subtitle}>Целевые локации:</h2>
                        <p className={s.paragraf}>
                            1. Город Ош, Ошская область, Кыргызстан
                        </p>

                        <p className={s.paragraf}>
                            2. Баткенский район, Баткенская область, Кыргызстан
                        </p>
                        <p className={s.paragraf}>
                            3. Исфаринский район, Согская область, Таджикистан
                        </p>

                        <p className={s.paragraf}>
                            4. Канибадамский район, Согская область, Таджикистан
                        </p>

                        <p className={s.paragraf}>
                            5. Бешарыкский район, Ферганская область, Узбекистан
                        </p>

                        <p className={s.paragraf}>
                            6. Кувасайский район, Ферганская область, Узбекистан
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;
