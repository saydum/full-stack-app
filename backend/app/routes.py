from fastapi import APIRouter, HTTPException, Path
from fastapi import Depends
from config import SessionLocal
from sqlalchemy.orm import Session
from schemas import EmployeeSchema, Request, RequestEmployee
from fastapi.responses import JSONResponse

import crud

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/employees")
async def all(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    _employees = crud.get_employees(db, skip, limit)
    
    return {
        "status": "Ok",
        "code": "200",
        "message": "Success fetch all data",
        "result": _employees
    }


@router.get("/employees/{id}")
async def get(
    id: int,
    db: Session = Depends(get_db)
):
    _employee = crud.get_employee_by_id(db, id)
    
    return {
        "status": "Ok",
        "code": "200",
        "message": "Success fetch get by id",
        "result": _employee
    }


@router.post("/employees")
async def create(
    request: RequestEmployee,
    db: Session = Depends(get_db)
):
    crud.create_employee(db, employee=request.parametr)
    
    return {
        "status": "Ok",
        "code": "200",
        "message": "Employee created successfully"
    }


@router.patch("/employees/{id}")
async def update(
    id: int,
    request: RequestEmployee,
    db: Session = Depends(get_db)
):
    _employee = crud.update_employee_by_id(
        db,
        employee_id=id,
        name=request.parametr.name,
        salary=request.parametr.salary
    )
    
    return {
        "status": "Ok",
        "code": "200",
        "message": "Success update data",
        "result": _employee
    }


@router.delete("/employees/{id}")
async def delete(
    id: int,
    db: Session = Depends(get_db)
):
    crud.remove_employee_by_id(db, employee_id=id)
    
    return {
        "status": "Ok",
        "code": "200",
        "message": "Employee deleted successfully"
    }
