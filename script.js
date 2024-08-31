// Script to handle form submissions and dynamic content updates

document.addEventListener('DOMContentLoaded', () => {
    // Product Management: Handle form submission for adding a product
    const productForm = document.getElementById('product-form');
    const productTable = document.getElementById('product-table').getElementsByTagName('tbody')[0];

    if (productForm) {
        productForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Collect form data
            const productName = document.getElementById('product-name').value;
            const productCategory = document.getElementById('product-category').value;
            const productPrice = document.getElementById('product-price').value;
            const productStock = document.getElementById('product-stock').value;

            // Create a new row and add it to the product table
            const newRow = productTable.insertRow();

            newRow.innerHTML = `
                <td>${productName}</td>
                <td>${productCategory}</td>
                <td>${productPrice}</td>
                <td>${productStock}</td>
                <td>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </td>
            `;

            // Clear the form
            productForm.reset();
        });
    }

    // Category Management: Handle form submission for adding a category
    const categoryForm = document.getElementById('category-form');
    const categoryList = document.getElementById('category-list');

    if (categoryForm) {
        categoryForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Collect form data
            const categoryName = document.getElementById('category-name').value;

            // Create a new list item and add it to the category list
            const newCategory = document.createElement('li');
            newCategory.textContent = categoryName;

            categoryList.appendChild(newCategory);

            // Clear the form
            categoryForm.reset();
        });
    }

    // Reports: Handle form submission for generating reports
    const reportForm = document.getElementById('report-form');
    const reportOutput = document.getElementById('report-output');

    if (reportForm) {
        reportForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Collect form data
            const reportType = document.getElementById('report-type').value;
            const reportDate = document.getElementById('report-date').value;

            // Generate a mock report (for demonstration purposes)
            reportOutput.innerHTML = `
                <h2>${reportType} Report for ${reportDate}</h2>
                <p>This is a mock report generated for the selected type and date.</p>
            `;
        });
    }

    // Handle dynamic table row actions (Edit/Delete)
    productTable.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-btn')) {
            // Edit button clicked
            const row = event.target.closest('tr');
            const cells = row.getElementsByTagName('td');

            // Fill form with existing data for editing (as an example)
            document.getElementById('product-name').value = cells[0].textContent;
            document.getElementById('product-category').value = cells[1].textContent;
            document.getElementById('product-price').value = cells[2].textContent;
            document.getElementById('product-stock').value = cells[3].textContent;

            // Optionally, delete the row after editing (user should submit the form again)
            row.remove();
        } else if (event.target.classList.contains('delete-btn')) {
            // Delete button clicked
            const row = event.target.closest('tr');
            row.remove();
        }
    });
});
