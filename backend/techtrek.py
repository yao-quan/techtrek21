import datetime
from flask import Flask
from flask_restful import Resource, Api, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)  # Wrap the app in an api
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

db.create_all()


class ExpenseModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, nullable=False)
    category_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    amount = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    created_by = db.Column(db.String(100), nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)
    updated_by = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f"Expense('{self.id}')"


expense_put_args = reqparse.RequestParser()
expense_put_args.add_argument('id', type=int, help='Expense Id', required=True)
expense_put_args.add_argument('project_id', type=int, help='Project Id', required=True)
expense_put_args.add_argument('category_id', type=int, help='Category Id', required=True)
expense_put_args.add_argument('name', type=str, help='Expense Name', required=True)
expense_put_args.add_argument('description', type=str, help='Expense Description', required=True)
expense_put_args.add_argument('amount', type=int, help='Expense Amount', required=True)
expense_put_args.add_argument('created_at', type=str, required=True)
    # lambda x: datetime.strptime(x, '%Y-%m-%dT%H:%M:%S.%f'), help='Expense create date', required=True)
expense_put_args.add_argument('created_by', type=str, help='Expense created by', required=True)
expense_put_args.add_argument('updated_at', type=str)
    # lambda x: datetime.strptime(x, '%Y-%m-%dT%H:%M:%S.%f'), help='Expense update date')
expense_put_args.add_argument('updated_by', type=str, help='Expense updated by')

resource_fields={
    'id': fields.Integer,
    'project_id': fields.Integer,
    'category_id': fields.Integer,
    'name': fields.String,
    'description': fields.String,
    'amount': fields.Integer,
    'created_at': fields.String,
    'created_by': fields.String,
    'updated_at': fields.String,
    'updated_by': fields.String
}


class Expense(Resource):

    @marshal_with(resource_fields)
    def get(self, id):
        result=ExpenseModel.query.filter_by(id=id).first()
        return result

    @marshal_with(resource_fields)
    def put(self):
        args=expense_put_args.parse_args()
        #result=ExpenseModel.query.filter_by(id=expense_id).first()
        #if result:
        #    abort(409, message="Project exists.")

        exp=ExpenseModel(
            id=args['id'],
            project_id=args['project_id'],
            category_id=args['category_id'],
            name=args['name'],
            description=args['description'],
            amount=args['amount'],
            created_at=args['created_at'],
            created_by=args['created_by'],
            updated_at=args['updated_at'],
            updated_by=args['updated_by']
        )

        db.session.add(exp)
        db.session.commit()
        return exp, 201  # Created

    def patch(self, id):
        args=expense_put_args.parse_args()
        row=ExpenseModel.query.get(id)

        row.project_id=args['project_id']
        row.category_id=args['category_id']
        row.name=args['name']
        row.description=args['description']
        row.amount=args['amount']
        row.created_at=args['created_at']
        row.created_by=args['created_by']
        row.updated_at=args['updated_at']
        row.updated_by=args['updated_by']

        db.session.commit()
        return row, 202  # Accepted

    def delete(self, id):
        db.session.delete(id)
        return '', 204  # Deleted


api.add_resource(Expense, '/expense/<int:id>')

if __name__ == '__main__':
    app.run(debug=True)
