export const queris = {
    getAllProducts: 
    "SELECT * FROM Products",
    addNewProduct: 
    "INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)",
    getProductById:
    "SELECT * FROM Products WHERE id = @id",
    deleteProductById:
    "DELETE FROM Products WHERE id = @id",
    getTotalProducts:
    "SELECT COUNT(*) FROM Products",
    updateProductById:
    "UPDATE Products SET name = @name, description = @description, quantity = @quantity WHERE id = @id",
};
