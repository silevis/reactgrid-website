import React from "react";
export const Info = ({ children }) => {
    return (
        <div class="card mb-3">
            <div class="card-body card-coin">
                <div class="row">
                    <div className="col-auto align-items-center d-flex">
                        <i className="tim-icons icon-bulb-63"
                            style={{ color: 'gold', fontSize: '2.5em' }} />
                    </div>
                    <div className="col align-items-center d-flex text-light">
                        <span>{children}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}