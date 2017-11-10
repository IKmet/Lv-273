﻿import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import VirtualizedSelect from 'react-virtualized-select'
import ListSpecialties from './ListSpecialties'
import 'react-virtualized/styles.css'
import 'react-select/dist/react-select.css'
import 'isomorphic-fetch';


interface Specialties {
    directions: GeneralDirection[];
    selectValueDirection: { label: string, value: number };
    districts: District[];
    selectDistrict: { label: string, value: number };
    univers: Univer[];
}

interface GeneralDirection {
    name: string;
    id: number;
}

interface District {
    name: string;
    id: number;
}

interface Subject {
    id: number;
    name: string
}

interface Univer {
    name: string;
    university: string;
    address: string;
    district: string;
    site: string;
    subjects: Subject[];
}

export class ChooseSpecialtiesByDirection extends React.Component<RouteComponentProps<{}>, Specialties>
{
    constructor() {
        super();
        this.state = {
            directions: [],
            selectValueDirection: { value: 0, label: "Всі" },
            univers: [],
            districts: [],
            selectDistrict: { value: 0, label: "Всі" }
        }
    }

    componentDidMount() {
        this.fetchDataDirections();
        this.fetchAllDistricts();
    }

    fetchDataDirections() {
        fetch('api/choosespeciality/getdirection')
            .then(response => response.json() as Promise<GeneralDirection[]>)
            .then(data => {
                this.setState({ directions: data });
            });
    }

    fetchAllDistricts() {
        fetch('api/ChooseUniversity/ChoseSpecDistrictList')
            .then(response => response.json() as Promise<District[]>)
            .then(data => { this.setState({ districts: data }) })
    }


    submitFilter(selectValueSubmit, districtValueSubmit) {
        if (selectValueSubmit != null && selectValueSubmit != undefined && districtValueSubmit != undefined)
        {
            let directionAndDistrict = { Direction: selectValueSubmit.value, District: districtValueSubmit.value }

            fetch('api/Choosespeciality/byDirection', {
                method: 'POST',
                body: JSON.stringify(directionAndDistrict),
                headers: { 'Content-Type': 'application/json' }
            }).then(response => response.json() as Promise<Univer[]>)
                .then(data => { this.setState({ univers: data }) })
        }
        else {
            alert('Pick out direction or select district');
        }
    }


    render() {
        let myList = [{ label: " ", value: 0 }];
        myList.pop();
        for (let i = 0; i < this.state.directions.length; i++)
        {
            myList.push({ label: this.state.directions[i].name, value: this.state.directions[i].id })
        }

        let myListDisctict = [{ label: "Всі", value: 0 }];
        for (let i = 0; i < this.state.districts.length; i++)
        {
                myListDisctict.push({ label: this.state.districts[i].name, value: this.state.districts[i].id })
            }

        return <div className="col-md-offset-1  col-md-10  col-sm-10  col-xs-10 col-xs-offset-1 pagin">
            <div className="col-md-offset-1  col-md-10 col-sm-offset-1 col-sm-10  C col-xs-offset-1">

                <div className="col-md-offset-1  col-md-10 col-sm-offset-1 col-sm-10  C col-xs-offset-1">
                    <div className="navigate">
                        <div className="virtselect  col-md-4 col-sm-offset-1 col-sm-4  col-xs-8 col-xs-offset-2 pagin"><p>Галузі</p>
                            <VirtualizedSelect multi={false} options={myList} onChange={(value) => this.setState(
                                { selectValueDirection: value })
                            }
                                value={this.state.selectValueDirection}></VirtualizedSelect>
                        </div>
                        <div className="virtselect col-md-offset-1  col-md-3 col-sm-offset-1 col-sm-3  col-xs-8 col-xs-offset-2 pagin"><p>Області</p>
                            <VirtualizedSelect multi={false} options={myListDisctict} onChange={(selectDistricty) => this.setState(
                                { selectDistrict: selectDistricty })
                            }
                                value={this.state.selectDistrict} ></VirtualizedSelect>
                        </div>
                        <button className="col-md-offset-1  col-md-2 col-sm-offset-1 col-sm-2  col-xs-8 col-xs-offset-2 btn btn-primary"
                            onClick={ () => this.submitFilter(this.state.selectValueDirection, this.state.selectDistrict)}> Пошук</button>
                    </div>
                    <ListSpecialties univers={this.state.univers} />
                </div>

            </div>
        </div>
    
    }

}