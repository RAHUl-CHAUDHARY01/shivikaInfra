import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight,
  X,
  Save,
  Image as ImageIcon
} from 'lucide-react';

// Sample product data - in a real app, this would come from your API
const sampleProducts = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    description: 'High-quality cotton t-shirt with a comfortable fit and durable fabric that lasts through multiple washes. Perfect for everyday casual wear.',
    price: 29.99,
    category: 'Clothing',
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'FashionBrand',
    material: '100% Cotton',
    inventory: 150,
    image: '/api/placeholder/100/100',
    created: '2025-01-15',
    updated: '2025-03-10'
  },
  {
    id: '2',
    name: 'Wireless Bluetooth Headphones',
    description: 'Noise-cancelling wireless headphones with 20-hour battery life and premium sound quality. Features comfortable ear cups and adjustable headband.',
    price: 129.99,
    category: 'Electronics',
    sizes: ['One Size'],
    brand: 'AudioTech',
    material: 'Plastic, Metal, Leather',
    inventory: 75,
    image: '/api/placeholder/100/100',
    created: '2025-02-01',
    updated: '2025-03-05'
  },
  {
    id: '3',
    name: 'Leather Wallet',
    description: 'Genuine leather wallet with multiple card slots, ID window, and bill compartment. Slim design fits comfortably in pocket.',
    price: 49.99,
    category: 'Accessories',
    sizes: ['One Size'],
    brand: 'LeatherCraft',
    material: 'Genuine Leather',
    inventory: 200,
    image: '/api/placeholder/100/100',
    created: '2025-01-20',
    updated: '2025-03-15'
  },
  {
    id: '4',
    name: 'Stainless Steel Water Bottle',
    description: 'Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof design with easy-carry handle.',
    price: 34.99,
    category: 'Home',
    sizes: ['500ml', '750ml', '1L'],
    brand: 'EcoWare',
    material: 'Stainless Steel',
    inventory: 120,
    image: '/api/placeholder/100/100',
    created: '2025-02-10',
    updated: '2025-03-01'
  },
  {
    id: '5',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper. Durable outsole provides excellent traction on various surfaces.',
    price: 89.99,
    category: 'Footwear',
    sizes: ['7', '8', '9', '10', '11', '12'],
    brand: 'SportStep',
    material: 'Synthetic Mesh, Rubber',
    inventory: 85,
    image: '/api/placeholder/100/100',
    created: '2025-01-25',
    updated: '2025-03-12'
  }
];

// Sample categories for dropdown
const categories = [
  'All Categories',
  'Clothing',
  'Electronics',
  'Accessories',
  'Home',
  'Footwear',
  'Beauty',
  'Books',
  'Sports',
  'Toys'
];

const ProductsPage = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  
  // Filtered products based on search and category
  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All Categories' || product.category === selectedCategory)
    );
  });
  
  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // Edit product handler
  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setIsEditModalOpen(true);
  };
  
  // Delete product handler
  const handleDeleteProduct = (productId) => {
    // In a real app, you would call your API to delete the product
    // Then update your local state once the API confirms deletion
    setProducts(products.filter(product => product.id !== productId));
  };
  
  // Add new product handler
  const handleAddProduct = (newProduct) => {
    // In a real app, you would call your API to add the product
    // Then update your local state once the API confirms addition
    const newProductWithId = {
      ...newProduct,
      id: (products.length + 1).toString(),
      created: new Date().toISOString().split('T')[0],
      updated: new Date().toISOString().split('T')[0],
      image: '/api/placeholder/100/100'
    };
    setProducts([...products, newProductWithId]);
    setIsAddModalOpen(false);
  };
  
  // Update product handler
  const handleUpdateProduct = (updatedProduct) => {
    // In a real app, you would call your API to update the product
    // Then update your local state once the API confirms update
    setProducts(products.map(product => 
      product.id === updatedProduct.id ? 
        {...updatedProduct, updated: new Date().toISOString().split('T')[0]} : 
        product
    ));
    setIsEditModalOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products Management</h1>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
          onClick={() => setIsAddModalOpen(true)}
        >
          <Plus size={18} className="mr-2" />
          Add Product
        </button>
      </div>
      
      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border rounded w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <select
              className="pl-10 pr-8 py-2 border rounded appearance-none bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Products Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Inventory
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentProducts.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">
                      {product.description.substring(0, 100)}...
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Brand: {product.brand} | Sizes: {product.sizes.join(', ')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.inventory} units
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                      onClick={() => handleEditProduct(product)}
                    >
                      <Edit size={18} />
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastProduct >= filteredProducts.length}
              className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                indexOfLastProduct >= filteredProducts.length ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{indexOfFirstProduct + 1}</span> to{' '}
                <span className="font-medium">
                  {Math.min(indexOfLastProduct, filteredProducts.length)}
                </span>{' '}
                of <span className="font-medium">{filteredProducts.length}</span> products
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === 1 ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <ChevronLeft size={18} />
                </button>
                {/* Dynamic page numbers would go here */}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={indexOfLastProduct >= filteredProducts.length}
                  className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                    indexOfLastProduct >= filteredProducts.length ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <ChevronRight size={18} />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add Product Modal */}
      {isAddModalOpen && (
        <ProductModal
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddProduct}
          title="Add New Product"
        />
      )}
      
      {/* Edit Product Modal */}
      {isEditModalOpen && currentProduct && (
        <ProductModal
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleUpdateProduct}
          title="Edit Product"
          product={currentProduct}
        />
      )}
    </div>
  );
};

// Product Modal Component for Add/Edit
const ProductModal = ({ onClose, onSave, title, product = null }) => {
  const [formData, setFormData] = useState(
    product || {
      name: '',
      description: '',
      price: '',
      category: '',
      sizes: [],
      brand: '',
      material: '',
      inventory: ''
    }
  );
  
  const [errors, setErrors] = useState({});
  
  // Convert sizes array to string for form input
  const [sizesString, setSizesString] = useState(
    product ? product.sizes.join(', ') : ''
  );
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle sizes input change
  const handleSizesChange = (e) => {
    setSizesString(e.target.value);
  };
  
  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Product name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.price || isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Valid price is required';
    }
    if (!formData.category.trim()) newErrors.category = 'Category is required';
    if (!sizesString.trim()) newErrors.sizes = 'At least one size is required';
    if (!formData.brand.trim()) newErrors.brand = 'Brand is required';
    if (!formData.material.trim()) newErrors.material = 'Material is required';
    if (!formData.inventory || isNaN(formData.inventory) || parseInt(formData.inventory) < 0) {
      newErrors.inventory = 'Valid inventory is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Convert sizesString to array
      const processedFormData = {
        ...formData,
        price: parseFloat(formData.price),
        inventory: parseInt(formData.inventory),
        sizes: sizesString.split(',').map(size => size.trim())
      };
      
      onSave(processedFormData);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              
              {/* Product Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Detailed Description*
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                ></textarea>
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
              </div>
              
              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price ($)*
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.price ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.price && (
                  <p className="mt-1 text-sm text-red-600">{errors.price}</p>
                )}
              </div>
              
              {/* Inventory */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Inventory*
                </label>
                <input
                  type="number"
                  name="inventory"
                  value={formData.inventory}
                  onChange={handleChange}
                  min="0"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.inventory ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.inventory && (
                  <p className="mt-1 text-sm text-red-600">{errors.inventory}</p>
                )}
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category*
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md bg-white ${
                    errors.category ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a category</option>
                  {categories.slice(1).map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                )}
              </div>
              
              {/* Sizes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Available Sizes* (comma separated)
                </label>
                <input
                  type="text"
                  value={sizesString}
                  onChange={handleSizesChange}
                  placeholder="S, M, L, XL"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.sizes ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.sizes && (
                  <p className="mt-1 text-sm text-red-600">{errors.sizes}</p>
                )}
              </div>
              
              {/* Brand */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brand*
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.brand ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.brand && (
                  <p className="mt-1 text-sm text-red-600">{errors.brand}</p>
                )}
              </div>
              
              {/* Material */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Material*
                </label>
                <input
                  type="text"
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.material ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.material && (
                  <p className="mt-1 text-sm text-red-600">{errors.material}</p>
                )}
              </div>
              
              {/* Product Image Upload (placeholder) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Image
                </label>
                <div className="border border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                  <ImageIcon size={48} className="text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">
                    Drag and drop an image here, or click to browse
                  </p>
                  <button
                    type="button"
                    className="mt-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Upload Image
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Actions */}
          <div className="mt-8 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 flex items-center"
            >
              <Save size={18} className="mr-2" />
              {product ? 'Update Product' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductsPage;