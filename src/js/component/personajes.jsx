import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Personajes = ({ name, gender, hair_color, eye_color, id }) => {

    const { store, actions } = useContext(Context)

    const isFavorite = (favoriteName) => {
        if (store.favoritesList.includes(favoriteName)) {
            return true
        }
        return false
    }


    return (
        <div className="text-center m-2">
            <div className="row">
                <div className="col-3">
                    <div className="card bg-black text-secondary border border-info" style={{ width: "18rem", flex: "none", margin: "10px" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                            className="card-img-top"
                            alt={name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name: {name}</h5>
                            <p className="card-text">Gender: {gender}</p>
                            <p className="card-text">Hair Color: {hair_color}</p>
                            <p className="card-text">Eyes Color: {eye_color}</p>
                            <div className="d-flex  justify-content-between">
                                <Link to={`/personajes-details/${id}`}>
                                    <button className="btn btn-outline-primary float-start">
                                        Learn more!
                                    </button>
                                </Link>
                                <button type="button" onClick={() => actions.agregarFavoritesList(name)} className="btn btn-primary">
                                    <i className={isFavorite(name) ? "fa fa-heart text-danger" : "fa fa-heart"}></i>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};