import React, { useContext } from "react";
import { RegionContext } from "../App";
import "./TeamsTable.css";

function formatCamelCaseString(camelCaseString) {
  return camelCaseString
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

const TeamsTableNorthAmerica = ({ ligaProps }) => {
  const { americaDelNorteTeams } = useContext(RegionContext);
  const formattedLigaProps = formatCamelCaseString(ligaProps);

  return (
    <div className="table-container">
      <h3>{formattedLigaProps}</h3>
      <table>
        <thead>
          <tr>
            <th>Equipo</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PE</th>
            <th>PP</th>
            <th>GF</th>
            <th>GC</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {americaDelNorteTeams &&
            americaDelNorteTeams[ligaProps] &&
            americaDelNorteTeams[ligaProps].equipos.map((equipo) => (
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
