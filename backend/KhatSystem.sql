use Master
go

Create Database KhataSystem
go

use KhataSystem
go

Create Table Customer(
    CustomerNo int IDENTITY(1,1) PRIMARY KEY,
    [Name] VARCHAR(50),
    Phone char(11),
    [Address] VARCHAR(MAX),
    Reference VARCHAR(50),
    [Type] varchar(50),
    Amount FLOAT DEFAULT(0),
    TotalAmount Float DEFAULT(0)
)

--1
Go
Create Procedure AddCustomer
@Name varchar(50),
@Phone char(11),
@Address varchar(Max),
@Reference varchar(50),
@Type varchar(50)
as begin

if @Type in('Customer','Firm')
begin
Insert into Customer([Name],Phone,[Address],Reference,[Type])
values(@Name,@Phone,@Address,@Reference,@Type);
end

else
begin
print('Insertion failed due to wrong type');
end

end

EXEC AddCustomer 'Arham Zeeshan','03324434300','Lahore, Punjab','Khawaja','Customer';
Select * from Customer;

--2
Go
Create PROCEDURE DisplayCustomer
as begin
Select * from Customer;
end

exec DisplayCustomer;

--3
GO
Create PROCEDURE DisplayCustomerbyID
@id int
as BEGIN

Select * from Customer
where CustomerNo = @id;

END

exec DisplayCustomerbyID 1;