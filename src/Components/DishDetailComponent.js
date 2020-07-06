import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    /*
    formatDate(date) {
        const option = { year: 'numeric', month: 'short', day: 'numeric' };
        const d = new Date(date)
        const newdate = d.toLocaleDateString("en-US", option)
        return newdate;
    }*/

    //another way for formatting date : {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}

function RenderComments({ comments }) {
    if (comments == null) {
        return (
            <div></div>
        )
    }
    else {
        const cmnts = comments.map((cmnt) => {
            return (
                <div key={cmnt.id}>
                    <p>{cmnt.comment}</p>
                    <p> -- {cmnt.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(cmnt.date)))}</p>
                </div>
            )
        })
        return (
            <div className="list-unstyled">
                <h4>Comments</h4>
                {cmnts}
            </div>
        )
    }
}

function RenderDish({ dish }) {
    if (dish != null)
        return (
            <React.Fragment>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={dish.comments} />
                </div>
            </React.Fragment>
        );
    else
        return (
            <div></div>
        );
}

const DishDetail = (props) => {
    return (
        <div className="row">
            <RenderDish dish={props.dish} />
        </div>
    );
}

export default DishDetail;