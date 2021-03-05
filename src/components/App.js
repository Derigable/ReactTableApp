import React, { Component } from 'react';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import {initialData} from '../tableData';

// задаем свойства колонкам в таблице
const columns = [
    {
        dataField: 'name',
        text: 'Name',
        sort: true
    }, 
    {
        dataField: 'surname',
        text: 'Surname',
        sort: true
    }, 
    {
        dataField: 'patronymic',
        text: 'Patronymic',
        sort: true
    }
];

// задаем свойства пагинации
const options = {
    page: 1,
    sizePerPage: 50,
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    hideSizePerPage: true
};

const { SearchBar } = Search;

class App extends Component {
    render() {
        return (
            <div className="App">
                <p></p>
                {/* Подключаем компонент <ToolkitProvider /> чтобы использовать фильтрацию и передаем ему необходимые свойства*/}
                <ToolkitProvider 
                    keyField="id"
                    data={ initialData }
                    columns={ columns }
                    search
                >
                    {
                        props => (
                            <div>
                                {/* Подключаем фильтрацию */}
                                <SearchBar placeholder={'filter'} { ...props.searchProps } />  
                                {/* Подключаем таблицу */}                             
                                <BootstrapTable striped keyField='id' data={ initialData } columns={ columns } pagination={ paginationFactory(options) } { ...props.baseProps } />
                            </div> 
                        )             
                    }
                </ToolkitProvider>
            </div>
        );
    }
}

export default App;
