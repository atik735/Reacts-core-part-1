import "./App.css";
export default function Team({team}) {
    
    return(
        <div className="singer">
            <h3>Football Team</h3>
            <ul>
                <li>Team Name:{team.TeamName} <br /> venue: {team.Stadium}</li>
            </ul>
        </div>
    )
}