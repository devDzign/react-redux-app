import React, {Component} from 'react';
import {connect} from 'react-redux';
import {productFetch} from '../../stores/actions/actions'
import Loading from "../../components/loading/Loading";
import Product from "../../components/product/Product";


class ProductContainer extends Component {

    componentDidMount() {
        this.props.productFetch(this.props.match.params.id)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.productFetch(this.props.match.params.id)
        }
    }


    loadingRender = () => {

        const product = this.props.product;
        const isFetching = this.props.isFetching

        if (isFetching) {
            return (
                <Loading/>
            )
        } else if (product) {
            const renderProduct =
                <>
                    <Product product={product}/>

                </>

            return renderProduct
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
        ...state.rootProductReducer
    }
}

const mapDispatchToProps = {
    productFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

