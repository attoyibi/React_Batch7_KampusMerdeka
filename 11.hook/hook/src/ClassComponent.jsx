import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: {
                name: 'default',
                age: '',
                grade: '',
            },
        };
        console.log('Constructor: Komponen sedang dibuat');
    }
    //didUpdate
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    //didmount
    componentDidMount() {
        console.log("componentDidMount");
    }
    // Metode untuk memperbarui data siswa (simulasi)
    updateStudentData = () => {
        this.setState({
            student: {
                name: 'Ahmad', // Mengubah nama
                age: 21,       // Mengubah usia
                grade: 'B',    // Mengubah nilai
            },
        });
    };

    render() {
        console.log('setelah render');
        const { age, grade } = this.state.student;
        return (
            <div>ClassComponent
                <h1>Detail Peserta Didik</h1>
                <p>Nama: {this.state.student.name}</p>
                <p>Usia: {age}</p>
                <p>Nilai: {grade}</p>
                <button onClick={this.updateStudentData}>Perbarui Data Siswa</button>
            </div>
        )
    }
}
