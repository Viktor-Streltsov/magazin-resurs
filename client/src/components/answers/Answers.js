import React from 'react'
import classes from "./answers.module.css"


function Answers() {
    return (
        <section className={`wrapper container`}>
            <div className={classes.head_answer}>
                <h2>Вопросы и Ответы</h2>
            </div>
            <ul className={classes.answers_nad_qash}>
                <li>
                    <h2>Что такое Code Basics?</h2>
                    <p>
                        Это полностью бесплатная платформа для изучения основ программирования с нуля. Code Basics был
                        создан разработчиками и сообществом Хекслет для того, чтобы любой желающий мог попробовать себя
                        в программировании и заложить правильный фундамент для новой профессии, основанный не на
                        запоминании специфики, а на понимании системы в целом.
                    </p>
                </li>
                <li>
                    <h2>А если что-то не получается?</h2>
                    <p>
                        Спрашивайте! В каждом уроке есть раздел «Обсуждение». Здесь можно задать вопрос, уточнить
                        условие задания, если оно кажется вам непонятным. Ответит наша поддержка или другие
                        пользователи. Обсуждения доступны для всех, вы тоже можете отвечать на вопросы и помогать другим
                        ученикам в освоении новой профессии.
                    </p>
                </li>
                <li>
                    <h2>Как начать обучение?</h2>
                    <p>
                        При выполнении практики также советуем внимательно читать вывод тестов – в нем содержится
                        информация о том, почему решение не проходит. А еще вы можете сравнить свой результат с готовым
                        решением. Впрочем, не советуем обращаться к нему до тех пор, пока успешно не выполните задание.
                        Помните – вы учитесь, а не повторяете.
                    </p>
                </li>
                <li>
                    <h2>Как проходит обучение?</h2>
                    <p>
                        Достаточно просто зарегистрироваться. Регистрация на платформе бесплатная, после регистрации вы
                        получите доступ ко всем курсам Code Basics. Выбирайте любой – и проходите.
                    </p>
                </li>
                <li>
                    <h2>Чему здесь можно научиться?</h2>
                    <p>
                        Code Learn – полностью автоматизированная онлайн платформа. Поэтому вы можете заниматься в любое
                        удобное время, когда захотите.Курсы программирования состоят из тематических блоков, в каждом
                        есть несколько уроков. Проходите уроки последовательно: сначала изучите теорию, потом выполните
                        практическое упражнение прямо в браузере – система проверит его автоматически.
                    </p>
                </li>
                <li>
                    <h2>Для кого курсы?</h2>
                    <p>
                        Курсы Code Learn подходят для всех, кто начинает изучать программирование с нуля. Возраст,
                        профессия – не имеют значения. На Code Basics занимаются взрослые и подростки, технари и чистые
                        гуманитарии.
                    </p>
                </li>
                <li>
                    <h2>Какие возможности есть для<br/> практикующих разработчиков?</h2>
                    <p>
                        Code Learn – проект с открытым исходным кодом. Участвовать в его развитии может любой
                        практикующий разработчик. Исходный код доступен на GitHub . Вы можете помочь в создании новых
                        курсов и уроков, улучшать существующие, исправлять неточности и опечатки, переводить курсы на
                        английский язык.
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default Answers