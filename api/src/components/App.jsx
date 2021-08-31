import React, { useState, useEffect } from 'react';

const App = () => {

    const [film, setFilm] = useState(false);
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState(false);
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://ghibliapi.herokuapp.com/films');
            const allFilms = await res.json();
            setFilms(allFilms);
        })();
    }, [film]);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://ghibliapi.herokuapp.com/people');
            const allPerson = await res.json();
            setPersons(allPerson);
            console.log('done');
        })();
    }, [people]);

    if(!film && !people) {
        return (
            <>
                <button onClick={e => setFilm(true)}>Load Films</button>
                <button onClick={e => setPeople(true)}>Load People</button>
            </>
        );
    }


    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                {
                    film ? films.map(film => {
                        return(
                            <div className="col-md-6" key={`film-${film.id}`}>
                                <div className="card m-2">
                                    <div className="card-body">
                                        <h5 className="card-title">{film.title}</h5>
                                        <p className="card-text">{film.description}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{film.director}</li>
                                        <li className="list-group-item">{film.producer}</li>
                                        <li className="list-group-item">{film.release_date}</li>
                                    </ul>
                                </div>
                            </div>);
                    }) : persons.map(person => {
                        return(
                            <div className="col-md-6" key={`film-${person.id}`}>
                                <div className="card m-2">
                                    <div className="card-body">
                                        <h5 className="card-title">{person.name}</h5>
                                        <p className="card-text">{person.gender}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{person.age}</li>
                                        <li className="list-group-item">{person.eye_color}</li>
                                        <li className="list-group-item">{person.hair_color}</li>
                                    </ul>
                                </div>
                            </div>);
                    })
                }
            </div>
        </div>
    );
};

export default App;