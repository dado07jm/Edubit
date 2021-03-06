import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showOk } from '../../../../reducers/msgboxReducer';
import { saveUserCourse } from '../../../../reducers/coursesReducer';


export const CursoAvanzado_5 = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const courseData = {
        id: "4",
        name: "Criptomonedas 101 - Nivel Avanzado",
        route: "cursoAvanzado",
        steps: 5
    };


    const handleApproveCourse = async (e) => {
        e.preventDefault();
        await dispatch(saveUserCourse(courseData, 5, true, false))
        dispatch(showOk("Fin de Curso", "¡Felicidades! Has aprobado Criptomonedas 101 - Avanzado"));
        history.push("/landingpage")
    }

    return (
        <div className="cursosContenido__container">
            <div className="cursosContenido__container_title">
                <h1>Criptomonedas 101 - Avanzado</h1>
            </div>
            <div class="cursosContenido__container_progressbar">
                <ul class="cursosContenido__progressbar">
                    <li class="active">Introducción</li>
                    <li class="active">¿Cuáles son las estrategias de trading para distintos perfiles de inversión?</li>
                    <li class="active">Acciones vs Criptomonedas</li>
                    <li class="active">¿Cuáles son algunas técnicas para la compra/venta?</li>
                    <li class="active">Evaluación</li>
                </ul>
            </div>
            <div className="cursosContenido__container_item">
                <div className="cursosContenido__text_item">
                    <h2 className="cursosContenido__title_item f2">Evaluación</h2>
                    <br />
                    <div className="cursosContenido__container_evaluacion">
                        <div className="cursosContenido__container_evaluacion_pregunta">
                            <p>¿Cuales de las siguientes son estragias de trading pasivas?</p>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p1-1" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p1-1">Day trading</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p1-2" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p1-2">Swing trading</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p1-3" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p1-3">Inversión en índices</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p1-3" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p1-3">Todas las anteriores</label>
                            </div>
                        </div>
                        <div className="cursosContenido__container_evaluacion_pregunta">
                            <p>Lo mas conveniente es tener una cartera de inversión solo con criptomonedas o solo con acciones, nunca ambas</p>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p2-1" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p2-1">Verdadero</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p2-2" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p2-2">Falso</label>
                            </div>
                        </div>
                        <div className="cursosContenido__container_evaluacion_pregunta">
                            <p>Las inversiones en criptomonedas se pueden realizar:</p>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p3-1" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p3-1">A largo plazo</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p3-2" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p1-2">A corto plazo</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p3-3" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p3-3">Ambas</label>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion" style={{ marginLeft: "150px" }}>
                        <Link to="/landingpage/cursos/cursoAvanzado/4">
                            <button className="cursos__button_navegacion">
                                Anterior
                            </button>
                        </Link>
                        <button className="cursos__button_navegacion" onClick={(e) => handleApproveCourse(e)}>
                            Finalizar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
