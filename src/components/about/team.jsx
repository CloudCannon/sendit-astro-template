export default function AboutTeam({ block, dataBinding }) {
    return (
        <div className="team" data-cms-bind={dataBinding}>
            <div className="container">
                <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                    <div className="section-header">
                    <h2>{block.title}</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                    {block.team_members.map((member, i) => (
                        <div className="col-lg-3 col-md-6"  key={i}>
                            <div className="team-member">
                            <div className="team-member-thumb rounded-box">
                                <img src={member.image} alt={member.image_alt} loading="lazy" />
                            </div>
                            <div className="team-member-details">
                                <h3>{member.name}</h3>
                                <p>{member.designation}</p>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
