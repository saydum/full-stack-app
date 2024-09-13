from sqlalchemy.orm import Session
from models import Employee
from schemas import EmployeeSchema


def get_employees(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Employee).offset(skip).limit(limit).all()


def get_employee_by_id(db: Session, employee_id):
    return db.query(Employee).filter(Employee.id == employee_id).one()


def create_employee(db: Session, employee: EmployeeSchema):
    _employee = Employee(
        name = employee.name,
        salary = employee.salary
    )
    db.add(_employee)
    db.commit()
    db.refresh(_employee)
    return _employee


def update_employee_by_id(db: Session, employee_id: int, name: str, salary: float):
    _employee = get_employee_by_id(db = db, employee_id = employee_id)

    _employee.name = name
    _employee.salary = salary

    db.commit()
    db.refresh(_employee)
    return _employee


def remove_employee_by_id(db: Session, employee_id: int):
    _employee = get_employee_by_id(db = db, employee_id = employee_id)
    db.delete(_employee)
    db.commit()

