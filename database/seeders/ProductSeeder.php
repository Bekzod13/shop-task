<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'category_id' => 1,
            'title' => fake()->name,
            'description' => fake()->sentence(15),
            'price' => fake()->randomNumber(3),
            'discount' => fake()->randomNumber(2),
            'count' => fake()->randomNumber(4),
            'image' => 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        ]);
        Product::create([
            'category_id' => 2,
            'title' => fake()->name,
            'description' => fake()->sentence(15),
            'price' => fake()->randomNumber(3),
            'discount' => fake()->randomNumber(2),
            'count' => fake()->randomNumber(4),
            'image' => 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        ]);
    }
}
