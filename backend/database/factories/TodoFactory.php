<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as faker;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Todo>
 */
class TodoFactory extends Factory
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
            'name' => $faker->name(),
            'description' => $faker->paragraph(),
            'start_date' => $faker->date(),
            'due_date' => $faker->date(),
            'estimate' => $faker->time(),
            'category_todo_id' => $faker->numberBetween(1, 10),
        ];
    }
}
