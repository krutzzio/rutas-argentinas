import { useForm } from "react-hook-form"
import { useContext } from "react"
import "./Alta.css"
import Context from "../Context/Context"

export function Alta() {

    const { zonas } = useContext(Context)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const recuperarDatos = (datos) => {
        console.table(datos)

        const API_EXCURSIONES = 'http://localhost:3000/api/excursiones'

        const objetoDatos = {
            idzona: datos.idzona,
            nombre: datos.nombre,
            imagen: datos.imagen[0].name,
            situacion: datos.situacion,
            servicio: datos.servicio,
            precio: datos.precio
        }

        const parametros = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objetoDatos),
            mode: 'cors'
        }

        const peticion = fetch(API_EXCURSIONES, parametros)
        peticion
            .then((resp) => resp.json())
            .then((mesage) => {
                if (mesage.error) {
                    alert("ALGO SALIO MAL")
                } else {
                    alert("ALTA COMPLETADA")
                }
            })
            .catch((error) => alert(error))
    }


    return (
        <>
            <form encType='multipart/form-data' onSubmit={handleSubmit(recuperarDatos)}>
                <h2>Alta de excursión</h2>
                <div className="mb-3">
                    <select className="form-select" {...register('idzona', { required: true })}>
                        <option defaultValue value=''>Selecciona zona</option>
                        {
                            zonas.map((zona, i) =>
                                <option key={i} value={zona.idzona}>{zona.descripcion}</option>
                            )
                        }
                    </select>
                </div>
                {errors.idzona?.type === 'required' &&
                    <div className='errores'>Zona excursión obligatoria</div>
                }
                <div className="mb-3">
                    <label className="form-label">Nombre excursión</label>
                    <input type="text" className="form-control" {...register('nombre', { required: true })} />
                </div>
                {errors.nombre?.type === 'required' &&
                    <div className='errores'>Zona excursión obligatoria</div>
                }
                <div className="mb-3">
                    <label className="form-label">Imagen</label>
                    <input type="file" className="form-control" {...register('imagen', { required: true })} />
                </div>
                {errors.imagen?.type === 'required' &&
                    <div className='errores'>Zona excursión obligatoria</div>
                }
                <div className="mb-3">
                    <label className="form-label">Situación</label>
                    <textarea className="form-control" rows="3" {...register('situacion', { required: true })}></textarea>
                </div>
                {errors.situacion?.type === 'required' &&
                    <div className='errores'>Zona excursión obligatoria</div>
                }
                <div className="mb-3">
                    <label className="form-label">Servicio</label>
                    <textarea className="form-control" rows="3" {...register('servicio', { required: true })}></textarea>
                </div>
                {errors.servicio?.type === 'required' &&
                    <div className='errores'>Zona excursión obligatoria</div>
                }
                <div className="mb-3">
                    <label className="form-label">Precio excursión</label>
                    <input type="number" className="form-control" {...register('precio', { required: true })} />
                </div>
                {errors.precio?.type === 'required' &&
                    <div className='errores'>Zona excursión obligatoria</div>
                }
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Alta de excursión</button>
                </div>
            </form>
        </>
    )
}