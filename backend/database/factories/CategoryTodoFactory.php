<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as faker;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CategoryTodo>
 */
class CategoryTodoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $faker = faker::create();
        return [
            'name' => Arr::random(['ToDos','Doing', 'Done']),
            'type' => Arr::random(['1','2', '3']),
            'project_id' => $faker->numberBetween(1, 10),
        ];
    }
}
