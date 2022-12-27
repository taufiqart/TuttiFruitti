<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as faker;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CommentTodo>
 */
class CommentTodoFactory extends Factory
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
            'todo_id' => $faker->numberBetween(1, 10),
            'user_id' => $faker->numberBetween(1, 10),
            'comment' => $faker->word(),
        ];
    }
}
