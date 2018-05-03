-- tables
-- Table: Carts
CREATE TABLE Carts (
    user_id int NOT NULL,
    product_id int NOT NULL,
    quantity int NOT NULL,    
    size varchar(5) NULL,
    CONSTRAINT Carts_pk PRIMARY KEY (user_id,product_id)
);

-- Table: Categories
CREATE TABLE Categories (
    category_id int NOT NULL,
    name varchar(20) NOT NULL,
    description varchar(50) NULL,
    CONSTRAINT Categories_pk PRIMARY KEY (category_id)
);

-- Table: OrderDetails
CREATE TABLE OrderDetails (
    order_id int NOT NULL,
    product_id int NOT NULL,
    quantity int NOT NULL,    
    size varchar(5) NOT NULL,
    CONSTRAINT OrderDetails_pk PRIMARY KEY (order_id,product_id)
);

-- Table: Orders
CREATE TABLE Orders (
    order_id int NOT NULL,
    user_id int NOT NULL,
    seller_id int NULL,
    date date NOT NULL,
    CONSTRAINT Orders_pk PRIMARY KEY (order_id)
);

-- Table: Products
CREATE TABLE Products (
    product_id int NOT NULL AUTO_INCREMENT,
    category_id int NOT NULL,
    name varchar(30) NOT NULL,
    photo varchar(255) NULL,
    video varchar(255) NULL,
    price decimal(8,2) NOT NULL,
    color varchar(255) NULL,
    age varchar(255) NULL,
    CONSTRAINT Products_pk PRIMARY KEY (product_id)
);

-- Table: Sellers
CREATE TABLE Sellers (
    seller_id int NOT NULL,
    name varchar(30) NOT NULL,
    CONSTRAINT Sellers_pk PRIMARY KEY (seller_id)
);

-- Table: Users
CREATE TABLE Users (
    user_id int NOT NULL,
    email varchar(30) NOT NULL,
    password varchar(20) NOT NULL,
    name varchar(20) NOT NULL,
    last_name varchar(20) NOT NULL,
    gender varchar(1) NOT NULL,
    height int NULL,
    weight int NULL,
    address varchar(100) NULL,
    rol varchar(10) NOT NULL,
    CONSTRAINT Users_pk PRIMARY KEY (user_id)
);

-- foreign keys
-- Reference: Cart_Products (table: Carts)
ALTER TABLE Carts ADD CONSTRAINT Cart_Products FOREIGN KEY Cart_Products (product_id)
    REFERENCES Products (product_id);

-- Reference: Cart_User (table: Carts)
ALTER TABLE Carts ADD CONSTRAINT Cart_User FOREIGN KEY Cart_User (user_id)
    REFERENCES Users (user_id);

-- Reference: OrderDetails_Orders (table: OrderDetails)
ALTER TABLE OrderDetails ADD CONSTRAINT OrderDetails_Orders FOREIGN KEY OrderDetails_Orders (order_id)
    REFERENCES Orders (order_id);

-- Reference: OrderDetails_Products (table: OrderDetails)
ALTER TABLE OrderDetails ADD CONSTRAINT OrderDetails_Products FOREIGN KEY OrderDetails_Products (product_id)
    REFERENCES Products (product_id);

-- Reference: Orders_Sellers (table: Orders)
ALTER TABLE Orders ADD CONSTRAINT Orders_Sellers FOREIGN KEY Orders_Sellers (seller_id)
    REFERENCES Sellers (seller_id);

-- Reference: Orders_User (table: Orders)
ALTER TABLE Orders ADD CONSTRAINT Orders_User FOREIGN KEY Orders_User (user_id)
    REFERENCES Users (user_id);

-- Reference: Products_Categories (table: Products)
ALTER TABLE Products ADD CONSTRAINT Products_Categories FOREIGN KEY Products_Categories (caregory_id)
    REFERENCES Categories (category_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE;

-- End of file.

