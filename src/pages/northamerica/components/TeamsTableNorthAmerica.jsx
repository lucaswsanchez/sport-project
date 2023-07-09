import React, { useContext } from "react";
import { RegionContext } from "../../../App";
import "../../../styles/TeamsTable.css";

function formatCamelCaseString(camelCaseString) {
  return camelCaseString
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

const TeamsTableNorthAmerica = ({ ligaProps }) => {
  const { northAmericaTeams } = useContext(RegionContext);
  const formattedLigaProps = formatCamelCaseString(ligaProps);

  return (
    <div className="table-container">
      <h3>{formattedLigaProps}</h3>
      <table>
        <thead>
          <tr>
            <th>Teams</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {northAmericaTeams &&
            northAmericaTeams[ligaProps] &&
            northAmericaTeams[ligaProps].equipos.map((equipo) => (
              <tr key={equipo.id}>
                <td className="team-name">
                  <img src={equipo.logo} alt={equipo.nombre} />
                  <div className="none">{equipo.nombre}</div>
                </td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamsTableNorthAmerica;
