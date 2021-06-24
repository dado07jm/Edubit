import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showOk } from '../../../../reducers/msgboxReducer';
import { saveUserCourse } from '../../../../reducers/coursesReducer';


export const CursoAvanzado_4 = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const courseData = {
        id: "4",
        name: "Criptomonedas 101 - Nivel Avanzado",
        route: "cursoAvanzado",
        steps: 4
    };


    const handleApproveCourse = async (e) => {
        e.preventDefault();
        await dispatch(saveUserCourse(courseData, 4, true, false))
        dispatch(showOk("Fin de Curso", "¡Felicidades! Has aprobado el Criptomonedas 101 - Avanzado"));
        history.push("/landingpage")
    }

    return (
        <div className="cursosContenido__container">
            <div className="cursosContenido__container_title">
                <h1>Criptomonedas 101 - Avanzado</h1>
            </div>
            <div class="cursosContenido__container_progressbar">
                <ul class="cursosContenido__progressbar">
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
                            <p>Pregunta 1:</p>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p1-1" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p1-1">Opción 1</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p1-2" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p1-2">Opción 2</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p1-3" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p1-3">Opción 3</label>
                            </div>
                        </div>
                        <div className="cursosContenido__container_evaluacion_pregunta">
                            <p>Pregunta 2:</p>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p2-1" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p2-1">Opción 1</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p2-2" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p2-2">Opción 2</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p2-3" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p2-3">Opción 3</label>
                            </div>
                        </div>
                        <div className="cursosContenido__container_evaluacion_pregunta">
                            <p>Pregunta 3:</p>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p3-1" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p3-1">Opción 1</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p3-2" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p1-2">Opción 2</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p3-3" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p3-3">Opción 3</label>
                            </div>
                        </div>
                        <div className="cursosContenido__container_evaluacion_pregunta">
                            <p>Pregunta 4:</p>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p4-1" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p4-1">Opción 1</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p4-2" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p4-2">Opción 2</label>
                            </div>
                            <div className="cursosContenido__container_evaluacion_opcion ">
                                <input className="cursosContenido__evaluacion_opcion_item" type="radio" id="p4-3" />
                                <label className="cursosContenido__evaluacion_opcion_item" for="p4-3">Opción 3</label>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="cursosContenido__container_navegacion">
                        <Link to="/landingpage/cursos/cursoAvanzado/3">
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
