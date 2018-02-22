<div className="buttons">
                        <ul>
                            {this.state.countryNames.map((name, index) =>
                                <li key={index}><button>{name}</button></li>)}
                        </ul>
                    </div>