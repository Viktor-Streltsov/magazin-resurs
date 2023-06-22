import React, {useState} from 'react'
import classes from "./addingCourses.module.css"
import {addProductApi} from "../../axios/productApi"
import {useDispatch} from "react-redux"

const textRegExp = /^.{2,500}$/

function AddingCourses() {
    const dispatch = useDispatch()
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const submitAddCourses = async (e) => {
        e.preventDefault()
        if (!textRegExp.test(title)) {
            return alert("Название курса должен содержать не менее 2 символов")
        }
        if (!textRegExp.test(description)) {
            return alert("Описание курса должен содержать не менее 2 символов")
        }
        if (!image) {
            return alert("добавьте фотографию")
        }
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('img', image)
        setImage('')
        setTitle('')
        setDescription('')
        dispatch(addProductApi(formData))
    }

    return (
        <section className={classes.adding_courses}>
            <div>
                <form className={classes.cont_dob_curs} onSubmit={submitAddCourses}>
                    <label htmlFor="dob-cr" className={classes.lab}>Добавление курсов</label>
                    <input
                        id="dob-cr"
                        className={classes.text}
                        type="text"
                        name="addCourse"
                        placeholder="Название товара"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <label htmlFor="dob-des" className={classes.lab}>Описание товара</label>
                    <input
                        id="dob-des"
                        className={classes.text}
                        type="text"
                        name="description"
                        placeholder="Описание курса"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <label htmlFor="img">{!image ? "Добавить фото" : "Фото добавлено"}</label>
                    <input
                        type="file"
                        name="photo"
                        id="img"
                        accept="/image/*, .png, .jpg, .gif, .web"
                        onChange={e => setImage(e.target.files[0])}
                    />
                    <div className={classes.btns}>
                        <button className={classes.btn_dob_curs}
                                type="submit"
                        >
                            Загрузить
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default AddingCourses