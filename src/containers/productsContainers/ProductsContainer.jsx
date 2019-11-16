import React, {Component} from 'react';
import {connect} from 'react-redux';
import {productsListFetch} from '../../stores/actions/actions'

import Pagination from "../../components/paginator/Pagination";
import Loading from "../../components/loading/Loading";
import ProductCard from "../../components/product/ProductCard";

class ProductsContainer extends Component {

    state = {
        currentPage: 1,
        itemsPerPage: 3
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
                <Loading/>
            )
        } else if (products) {
            const productsCards = products.map(product => {
                return <ProductCard product={product} key={product.id}/>

            })

            const renderWithPaginator =
                <>
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

