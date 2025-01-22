import './card.css'

const Card = ({nome, descricao, imgSrc, numFollowers, numFollowing}) => {
    return(
        <>
            <div className="card">
                <div className="imgBx">
                    <img src={imgSrc} alt={nome} />
                </div>
                <div className="content">
                    <div className="details">
                        <h2 className="nome">
                            {nome}
                        </h2>
                        <h2>
                            <span className="descricao">
                                {descricao}
                            </span>
                        </h2>

                        <div className="data">
                            <div className="section">
                            <h3 className="numFollowers">{numFollowers}</h3>
                            <h3 className="texto"><span>Followers</span></h3>
                            </div>
                            <div className="section">
                                <h3 className="numFollowing">{numFollowing}</h3>
                                <h3 className="texto"><span>Following</span></h3>
                            </div>
                        </div>
                        <div className="actionBtn">
                            <button>Follow</button>
                            <button>Message</button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default Card