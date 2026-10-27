import { useState } from 'react';
import DashboardPageHeader from '../shared/components/DashboardPageHeader';

const AdminMenu = () => {
  // Form State for adding a new dish
  const [dishName, setDishName] = useState('');
  const [price, setPrice] = useState('');
  const [ingredients, setIngredients] = useState('');

  // Initial dishes list matching the screenshot
  const [dishes, setDishes] = useState([
    {
      id: 1,
      name: 'Pad Thai with Tofu',
      ingredients: 'Rice noodles, Tofu, Peanuts, Spring onion',
      price: 150,
      status: 'Available',
    },
    {
      id: 2,
      name: 'Grilled Halloumi Salad',
      ingredients: 'Halloumi, Spinach, Cucumber, Cranberries',
      price: 99,
      status: 'Available',
    },
  ]);

  // Handle Add Dish
  const handleAddDish = (e) => {
    e.preventDefault();
    if (!dishName.trim() || !price) return;

    const newDish = {
      id: Date.now(),
      name: dishName,
      ingredients: ingredients,
      price: Number(price),
      status: 'Available',
    };

    setDishes([...dishes, newDish]);
    setDishName('');
    setPrice('');
    setIngredients('');
  };

  // Toggle Hide / Unhide Dish Status
  const toggleHideDish = (id) => {
    setDishes(prev =>
      prev.map(dish => {
        if (dish.id === id) {
          return {
            ...dish,
            status: dish.status === 'Available' ? 'Hidden' : 'Available',
          };
        }
        return dish;
      })
    );
  };

  // Handle Delete Dish
  const handleDeleteDish = (id) => {
    setDishes(prev => prev.filter(dish => dish.id !== id));
  };

  return (
    <div className="space-y-8 pb-10">
      
      <DashboardPageHeader
        title="Menu"
        subtitle="Menu management"
        description="Add dishes, change prices, hide what is sold out."
      />

      {/* Add Dish Form Card */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm max-w-4xl">
        <form onSubmit={handleAddDish} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Dish Name Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Dish name
              </label>
              <input
                type="text"
                value={dishName}
                onChange={(e) => setDishName(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] text-[#1A1A1A]"
              />
            </div>

            {/* Price Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Price (₹)
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                min="0"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] text-[#1A1A1A]"
              />
            </div>
          </div>

          {/* Ingredients Input */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Ingredients
            </label>
            <input
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] text-[#1A1A1A]"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#c29f2f] text-white text-sm font-medium rounded-lg transition-colors shadow-sm mt-2"
            >
              Add dish
            </button>
          </div>
        </form>
      </div>

      {/* Dishes List Section */}
      <div className="space-y-4 max-w-4xl">
        <h3 className="text-xl font-semibold text-[#1A1A1A]">Dishes</h3>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                  <th className="py-3 px-6">Dish</th>
                  <th className="py-3 px-6">Price</th>
                  <th className="py-3 px-6">Status</th>
                  <th className="py-3 px-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {dishes.length > 0 ? (
                  dishes.map((dish) => (
                    <tr key={dish.id} className="hover:bg-gray-50/50 transition-colors">
                      
                      {/* Dish Info */}
                      <td className="py-4 px-6">
                        <div className="font-semibold text-[#1A1A1A]">{dish.name}</div>
                        <div className="text-xs text-gray-400">{dish.ingredients}</div>
                      </td>

                      {/* Price */}
                      <td className="py-4 px-6 font-medium text-[#1A1A1A]">
                        ₹{dish.price}
                      </td>

                      {/* Status Badge */}
                      <td className="py-4 px-6">
                        {dish.status === 'Available' ? (
                          <span className="px-3 py-1 text-xs font-medium rounded-full border border-emerald-300 text-emerald-600 bg-emerald-50/50">
                            Available
                          </span>
                        ) : (
                          <span className="px-3 py-1 text-xs font-medium rounded-full border border-gray-300 text-gray-500 bg-gray-50">
                            Hidden
                          </span>
                        )}
                      </td>

                      {/* Action Buttons */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => alert(`Edit ${dish.name}`)}
                            className="px-3 py-1 border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-medium rounded transition-colors"
                          >
                            Edit
                          </button>
                          
                          <button 
                            onClick={() => toggleHideDish(dish.id)}
                            className="px-3 py-1 border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-medium rounded transition-colors"
                          >
                            {dish.status === 'Available' ? 'Hide' : 'Unhide'}
                          </button>

                          <button 
                            onClick={() => handleDeleteDish(dish.id)}
                            className="px-3 py-1 border border-red-300 text-red-600 hover:bg-red-50 text-xs font-medium rounded transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-8 text-center text-gray-400 text-sm">
                      No dishes added yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminMenu;