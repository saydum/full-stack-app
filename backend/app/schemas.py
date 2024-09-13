from typing import List, Optional, Generic, TypeVar
from pydantic import BaseModel, Field
from pydantic.generics import GenericModel

T = TypeVar('T')


class EmployeeSchema(BaseModel):
    id: Optional[int] = None
    name: Optional[str] = None
    salary: Optional[float] = None

    class Config:
        orm_mode = True


class Request(GenericModel, Generic[T]):
    parametr: Optional[T] = Field(...)


class RequestEmployee(BaseModel):
    parametr: EmployeeSchema = Field(...)


class Response(GenericModel, Generic[T]):
    code: str
    status: str
    message: str
    result: Optional[T]
