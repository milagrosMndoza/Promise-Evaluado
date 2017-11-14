import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export const PlanetList = ({name, dens}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Density {dens}</p>
        </div>
    );
}