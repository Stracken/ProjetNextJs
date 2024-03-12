const Table = ({ username, ratio, i}) =>{
    return(
        <table>
            <caption>
                LeaderBoard
            </caption>
            <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">% Win</th>
                    <th scope="col">Nombre d'essai</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{username}</th>
                    <td>{ratio}</td>
                    <td>{i}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;