import { useContext, useState } from "react";
import { RegionContext } from "../../../App";
import "../../../styles/Equipos.css";
import { AiFillCloseCircle } from "react-icons/ai";

const MayorSoccerLeague = () => {
  const { americaDelNorteTeams } = useContext(RegionContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedStadium, setSelectedStadium] = useState(null);

  const handleOpenModal = (equipo) => {
    setSelectedStadium(equipo.estadio);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedStadium(null);
    setShowModal(false);
  };

  return (
    <div className="equipos-container">
      <h1>MAYOR LEAGUE SOCCER</h1>
      <div className="equipos">
        {americaDelNorteTeams &&
        americaDelNorteTeams.mayorSoccerLeague &&
        americaDelNorteTeams.mayorSoccerLeague.equipos ? (
          americaDelNorteTeams.mayorSoccerLeague.equipos.map((equipo) => (
            <figure key={equipo.id}>
              <img src={equipo.logo} alt={equipo.nombre} />
              <figcaption>
                <p>{equipo.nombre}</p>
                <ul>
                  <li>PAIS: {equipo.pais}</li>
                  <li>FUNDACION: {equipo.fundacion}</li>
                  <li>LIGAS: {equipo.titulos_liga}</li>
                  <li>COPAS: {equipo.titulos_copas}</li>
                </ul>
                <button onClick={() => handleOpenModal(equipo)}>
                  Mostrar estadio
                </button>
              </figcaption>
            </figure>
          ))
        ) : (
          <p>Cargando equipos</p>
        )}
      </div>
      {showModal && selectedStadium && (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-header">
              <div className="close-btn-modal">
                <button onClick={handleCloseModal}>
                  <AiFillCloseCircle size={20} />
                </button>
              </div>
              <div className="name-modal">
                <h2>{selectedStadium.nombre}</h2>
              </div>
            </div>
            <div className="modal-image">
              <img src={selectedStadium.imagen} alt={selectedStadium.nombre} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MayorSoccerLeague;
