import React, {Component} from 'react';
import {connect} from 'react-redux';
import {productsListFetch} from '../../stores/actions/actions'

import './products.css';
import Pagination from "../../components/paginator/Pagination";

class ProductsContainer extends Component {

    state = {
        currentPage: 1,
        itemsPerPage:3
    }

    componentDidMount() {
        this.props.productsListFetch(this.state.itemsPerPage, this.state.currentPage)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

            if (this.state.currentPage !== prevState.currentPage) {
                this.props.productsListFetch(this.state.itemsPerPage, this.state.currentPage)
            }
    }

    handlePageChange = (page) => {
        this.setState(
            {
                ...this.state,
                currentPage: page
            }
        )
    }


    loadingRender = () => {

        const products = this.props.products;
        const isFetching = this.props.isFetching

        if (isFetching) {
            return (
                <>
                    <div className="col-4"></div>
                    <div className="col-4 align-content-center">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-grow text-danger" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-grow text-info" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-grow text-light" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-grow text-dark" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>


                </>

            )
        }else if(products) {
            const productsCards = products.map(product => {
                return <div className={"col-4"} key={product.id} >

                    <div className="card border-primary mb-3 flex-fill card-header-app" >
                        <div className="card-header">{product.title.substr(0, 30)}... - {product.id}</div>
                        <div className="card-body">

                            <p className="card-text">
                                {product.content.substr(0, 200) } ...
                            </p>
                        </div>
                        <div className="card-footer">
                            <a href="#detail" className="btn btn-block btn-outline-dark">Detail</a>
                        </div>
                    </div>
                </div>

            })

            const renderWithPaginator = <>
                {productsCards}
                <div className="col-12 justify-content-md-center">
                    <Pagination
                        currentPage={this.state.currentPage}
                        itemsPerPage={this.state.itemsPerPage}
                        length={this.props.totalItems}
                        onPageChanged={this.handlePageChange}
                    />
                </div>

            </>

            return renderWithPaginator

        }

        return <div className="col-12">no items</div>;

    }

    render() {

        return (
            <div className="row">
                {this.loadingRender()}
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        ...state.rootListProductsReducer
    }
}

const mapDispatchToProps = {
    productsListFetch
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(ProductsContainer);

