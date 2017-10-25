import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <section className="main-container">
                <div className="title">
                    <div className="logo1"></div>
                    <p className="caption">Educational Program Advisor</p>
                </div>
                <div className="main-block">
                    <h2 className="text-center second-title">����� ��� ������� ����� � EPA</h2>
                    <div className="text-description">
                        <p> �� �� ���� ��� ����� ���� � �����������?  EPA � ������ ��� ��������. ���, �� ��� �������: </p>
                        <p>1) ������ ���� �� ������������.</p>
                        <p>2) ������� ���������� �� �������.</p>
                        <p>3) ĳ���! </p>
                    </div>
                </div>
                <h2 className="text-center second-title">���-5 �����������</h2>
                <section className="univer-in-row">
                    <div className="uni-padding">
                        <img className="img-univer" src="http://kpi.ua/files/kpi_0.png" />
                        <p className="text-center text-univer">�������� ����������� �������� ���� ����� ѳ���������</p>
                    </div>
                    <div className="uni-padding">
                        <img className="img-univer" src="http://vstup.univ.kiev.ua/assets/img/knu.jpg" />
                        <p className="text-center text-univer">�������� ������������ ���������� ���� ������ ��������</p>
                    </div>
                    <div className="uni-padding">
                        <img className="img-univer img-round" src="http://210years.karazin.ua/images/logo-u.png" />
                        <p className="text-center text-univer">	���������� ������������ ���������� ���� �.�. �������</p>
                    </div>
                    <div className="uni-padding">
                        <img className="img-univer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Kpi.jpg/200px-Kpi.jpg" />
                        <p className="text-center text-univer">������������ �������� ���������� "���������� ����������� ��������"</p>
                    </div>
                    <div className="uni-padding">
                        <img className="img-univer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nulp_logo_ukr.jpg/280px-Nulp_logo_ukr.jpg" />
                        <p className="text-center text-univer">������������ ���������� "�������� ���������"</p>
                    </div>
                </section>
            </section>
        </div>
    }
}
